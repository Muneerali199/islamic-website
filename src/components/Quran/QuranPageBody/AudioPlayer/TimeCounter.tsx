import { memo, useMemo } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { formatTime } from './util';

type Props = {
    readonly currentTime: number;
    readonly duration: number;
    readonly commonColor: string;
}

function TimeCounter({ currentTime, duration, commonColor }: Props) {
    const outerStyle = useMemo(() => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: commonColor,
        justifySelf: 'flex-start',
    }), [commonColor]);

    return (
        <Box sx={outerStyle}>
            <Divider orientation="vertical" flexItem />
            <Typography variant='body1'>
                {formatTime(currentTime)}
            </Typography>
            <Typography variant='body1'>
                {' / '}
            </Typography>
            <Typography variant='body1'>
                {formatTime(duration)}
            </Typography>
        </Box>
    )
}

export default memo(TimeCounter);