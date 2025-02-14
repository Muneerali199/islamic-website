import { useMemo, memo, CSSProperties } from 'react';
import { Box, Breakpoint, Container } from '@mui/material';
import VolumeSlider from './VolumeSlider';
import TimeSlider from './TimeSlider';
import TimeCounter from './TimeCounter';
import AudioPlaying from './AudioPlaying';
import { useThemeContext } from '../../../../contexts/ThemeContext';

type Props = {
    readonly containerMaxWidth: Breakpoint;
    readonly handlePlayPause: () => void;
    readonly handleStop: () => void;
    readonly isAudioPlaying: boolean;
    readonly currentTime: number;
    readonly duration: number;
    readonly handleTimeChange: (event: any) => void;
    readonly volume: number;
    readonly setVolume: React.Dispatch<React.SetStateAction<number>>;
    readonly style?: CSSProperties;
};

function AudioPlayer({
    containerMaxWidth,
    handlePlayPause,
    handleStop,
    isAudioPlaying,
    currentTime,
    duration,
    handleTimeChange,
    volume,
    setVolume,
    style
}: Props) {
    const { theme } = useThemeContext();

    const commonColor = useMemo(() => {
        return theme.colors.quranPlayer.contrastText;
    }, [theme.colors.quranPlayer]);
    const outerStyle = useMemo(() => ({
        backgroundColor: theme.colors.quranPlayer.main,
        pb: 2,
        filter: 'drop-shadow(0px -2px 8px #170f052e)',
        overflowX: 'clip',
        zIndex: 1000,
        width: '100%',
        height: '50px',
        ...style,
    }), [theme.colors.quranPlayer, style]);
    const containerStyle = useMemo(() => ({
        display: 'flex',
        justifyContent: 'space-between',
        pt: 2,
        gap: '5px',
        '& > *': {
            mr: 2,
        },
    }), []);

    return (
        <Box sx={outerStyle}>
            <Container maxWidth={containerMaxWidth} sx={containerStyle}>
                <AudioPlaying
                    handlePlayPause={handlePlayPause}
                    handleStop={handleStop}
                    isAudioPlaying={isAudioPlaying}
                    commonColor={commonColor} />
                <VolumeSlider
                    volume={volume}
                    setVolume={setVolume}
                    commonColor={commonColor} />
                <TimeSlider
                    currentTime={currentTime}
                    duration={duration}
                    handleTimeChange={handleTimeChange}
                    commonColor={commonColor} />
                <TimeCounter
                    currentTime={currentTime}
                    duration={duration}
                    commonColor={commonColor} />
            </Container>
        </Box>
    );
}

export default memo(AudioPlayer);