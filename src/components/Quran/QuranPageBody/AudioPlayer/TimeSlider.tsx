import { memo, useMemo } from 'react';
import { Box, Slider } from '@mui/material';
import { useThemeContext } from '../../../../contexts/ThemeContext';

type Props = {
    readonly currentTime: number;
    readonly duration: number;
    readonly handleTimeChange: (event: any) => void;
    readonly commonColor: string;
}

function TimeSlider({ currentTime, duration, handleTimeChange, commonColor }: Props) {
    const { theme } = useThemeContext();

    const outerStyle = useMemo(() => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: '-17px',
        m: 0,
    }), []);
    const sliderStyle = useMemo(() => ({
        color: commonColor,
        filter: theme.dropShadow,
        padding: '0px !important',
        '& .MuiSlider-thumb': {
            boxShadow: '0px 0px 8px 0px #170f052e',
        }
    }), [commonColor, theme.dropShadow]);

    return (
        <Box flexGrow={1} sx={outerStyle}>
            <Slider
                aria-label="Temperature"
                defaultValue={0}
                min={0}
                max={duration}
                value={currentTime}
                step={0.1}
                sx={sliderStyle}
                onChange={handleTimeChange}
            />
        </Box>
    )
}

export default memo(TimeSlider);
