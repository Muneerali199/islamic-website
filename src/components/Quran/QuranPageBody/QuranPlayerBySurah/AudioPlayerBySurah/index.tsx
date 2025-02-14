import { useState, useEffect, useRef, useCallback, memo, useMemo, CSSProperties } from 'react';
import { Breakpoint } from '@mui/material';
import AudioPlayer from '../../AudioPlayer';
import { useQuranPlayerContext } from '../../../../../contexts/QuranPlayerContext';
import { nextSurah } from '../../../../../reducers/QuranPlayerReducer';

type Props = {
    readonly containerMaxWidth: Breakpoint;
    readonly src: string | undefined;
};

function AudioPlayerBySurah({ containerMaxWidth, src }: Props) {
    const { dispatchQuranPlayerState } = useQuranPlayerContext();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const audioRef = useRef<any>(null);

    const handleLoadedMetadata = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        setDuration(audio.duration);
    }, []);

    const handleTimeUpdate = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        setCurrentTime(audio.currentTime);
    }, []);

    const handlePlayPause = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        if (!src) {
            return;
        }
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        setIsUserInteracting(true);
    }, [src]);

    const handleStop = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.pause();
        audio.currentTime = 0;
    }, []);

    const handleTimeChange = useCallback((event: any) => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.currentTime = event.target.value;
        setCurrentTime(audio.currentTime);
    }, []);

    const handleEnded = useCallback(() => {
        dispatchQuranPlayerState(nextSurah());
    }, [dispatchQuranPlayerState]);

    useEffect(() => {
        audioRef.current = new Audio(src);
        const audio = audioRef.current;
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleEnded);
            audio.pause();
        };
    }, [handleLoadedMetadata, handleTimeUpdate, handleEnded, src]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.src = src;
        audio.load();
        if (isUserInteracting) {
            audio.play();
        }
    }, [isUserInteracting, src]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = volume;
    }, [volume]);

    const audioPlayerStyle = useMemo((): CSSProperties => ({
        position: 'fixed',
        bottom: 0,
        left: 0,
    }), []);

    return (
        <AudioPlayer
            style={audioPlayerStyle}
            containerMaxWidth={containerMaxWidth}
            handlePlayPause={handlePlayPause}
            handleStop={handleStop}
            currentTime={currentTime}
            duration={duration}
            handleTimeChange={handleTimeChange}
            volume={volume}
            setVolume={setVolume}
            isAudioPlaying={!audioRef.current?.paused}
        />
    );
}

export default memo(AudioPlayerBySurah);