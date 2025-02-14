import { memo, useCallback, useMemo } from 'react';
import { Box, Slider } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

type Props = {
    readonly volume: number;
    readonly setVolume: (volume: number) => void;
    readonly commonColor: string;
}

function VolumeSlider({ volume, setVolume, commonColor }: Props) {
    const outerStyle = useMemo(() => ({
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        color: commonColor,
        width: '150px',
    }), [commonColor]);
    const iconStyle = useMemo(() => ({
        cursor: 'pointer',
    }), []);
    const sliderStyle = useMemo(() => ({
        color: commonColor,
        '& .MuiSlider-thumb': {
            boxShadow: '0px 0px 8px 0px #170f052e',
        }
    }), [commonColor]);
    const volumeMuteHandler = useCallback(() => {
        setVolume(0);
    }, [setVolume]);
    const volumeChangeHandler = useCallback((event: any) => {
        setVolume(event.target.value);
    }, [setVolume]);

    return (
        <Box sx={outerStyle}>
            {isMuted(volume)
                ? (<VolumeOffIcon
                    sx={iconStyle} />)
                : (<VolumeUpIcon
                    sx={iconStyle}
                    onClick={volumeMuteHandler} />
                )}
            <Slider
                aria-label="Temperature"
                defaultValue={0.5}
                min={0}
                max={1}
                step={0.1}
                sx={sliderStyle}
                value={volume}
                onChange={volumeChangeHandler} />
        </Box>
    )
}

function isMuted(volume: number) {
    return volume === 0;
}

export default memo(VolumeSlider);