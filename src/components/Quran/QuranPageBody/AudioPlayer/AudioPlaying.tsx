import { Box, Divider } from '@mui/material'
import StopButton from './StopButton'
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';

type Props = {
    readonly handlePlayPause: () => void;
    readonly handleStop: () => void;
    readonly commonColor: string;
    readonly isAudioPlaying: boolean;
}

export default function AudioPlaying({
    handlePlayPause,
    handleStop,
    isAudioPlaying,
    commonColor
}: Props) {
    const outerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    }
    const iconStyle = {
        color: commonColor,
        cursor: 'pointer',
    }

    return (
        <Box sx={outerStyle}>
            {isAudioPlaying ?
                <PauseCircleFilledRoundedIcon
                    fontSize='large'
                    onClick={handlePlayPause}
                    sx={iconStyle} />
                : <PlayCircleFilledWhiteRoundedIcon
                    fontSize='large'
                    onClick={handlePlayPause}
                    sx={iconStyle} />}
            <Divider orientation="vertical" flexItem />
            <StopButton
                handleStop={handleStop}
                commonColor={commonColor} />
            <Divider orientation="vertical" flexItem />
        </Box>
    )
}
