import { useState, useEffect, useRef, useCallback, useMemo, memo, CSSProperties } from 'react';
import { nextActiveAyah, setAudioPlaying, toggleAudioPlaying } from '../../../../../reducers/actions/quranPlayerByAyahsActions';
import recitations from '../../../../../data/recitations-ayahs';
import { Breakpoint } from '@mui/material';
import { useQuranPlayerContext } from '../../../../../contexts/QuranPlayerContext';
import AudioPlayer from '../../AudioPlayer';

type Props = {
    readonly containerMaxWidth: Breakpoint;
};

function QuranPlayerFooter({ containerMaxWidth }: Props) {
    const { quranPlayerState: {
        byAyahs: quranPlayerState
    }, dispatchQuranPlayerState } = useQuranPlayerContext();

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [audioSrc, setAudioSrc] = useState<string>('');
    const audioRef = useRef<any>(null);

    const handleLoadedMetadata = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        setDuration(audio.duration);
        audio.play();
        dispatchQuranPlayerState(setAudioPlaying(true));
    }, [dispatchQuranPlayerState]);

    const handleTimeUpdate = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        setCurrentTime(audio.currentTime);
    }, []);

    const handleEnded = useCallback(() => {
        dispatchQuranPlayerState(nextActiveAyah());
    }, [dispatchQuranPlayerState]);

    const handlePlayPause = useCallback(() => {
        if (audioSrc === null) return;
        const audio = audioRef.current;
        if (!audio) return;
        if (!audio.src) {
            return;
        }
        if (quranPlayerState.isAudioPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        dispatchQuranPlayerState(toggleAudioPlaying());
    }, [quranPlayerState.isAudioPlaying, dispatchQuranPlayerState, audioSrc]);

    const handleStop = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.pause();
        audio.currentTime = 0;
        dispatchQuranPlayerState(setAudioPlaying(false));
    }, [dispatchQuranPlayerState]);

    const handleTimeChange = useCallback((event: any) => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.currentTime = event.target.value;
        setCurrentTime(audio.currentTime);
    }, []);

    useEffect(() => {
        if (!quranPlayerState.activeAyah) return;
        recitations[quranPlayerState.recitation].getAyahAudioURL(quranPlayerState.activeAyah).then((url) => {
            setAudioSrc(url);
        });
    }, [quranPlayerState.activeAyah, quranPlayerState.recitation]);

    useEffect(() => {
        audioRef.current = new Audio();
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
    }, [handleLoadedMetadata, handleTimeUpdate, handleEnded]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.src = audioSrc;
        audio.load();
    }, [audioSrc]);

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
            isAudioPlaying={quranPlayerState.isAudioPlaying}
            setVolume={setVolume} />
    );
}

export default memo(QuranPlayerFooter);