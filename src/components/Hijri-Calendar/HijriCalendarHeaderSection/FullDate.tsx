import React, { useMemo } from 'react'
import { Box, Typography } from '@mui/material';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { GregorianDate, HijriDate } from '../types';

type Props = {
    readonly hijriDate: HijriDate,
    readonly gregorianDate: GregorianDate,
}

export default function FullDate({ hijriDate, gregorianDate }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        textAlign: 'center',
        mb: 2,
    }), []);
    const hijriDateStyle = useMemo(() => ({
        mb: 2,
        color: theme.colors.primary.main,
    }), [theme.colors.primary]);

    return (
        <Box sx={outerStyle}>
            <Typography
                variant="h3"
                sx={hijriDateStyle}>
                {hijriDate.day} {hijriDate.month} {hijriDate.year}
            </Typography>
            <Typography
                variant="h4">
                {hijriDate.dateInNumbers} / {gregorianDate.dateInNumbers}
            </Typography>
        </Box>
    )
}
