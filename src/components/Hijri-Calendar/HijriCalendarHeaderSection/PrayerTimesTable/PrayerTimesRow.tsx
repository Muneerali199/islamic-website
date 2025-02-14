import { Box, Typography } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useThemeContext } from '../../../../contexts/ThemeContext';
import { useMemo } from 'react';

type Props = {
    readonly prayerName: string,
    readonly prayerTime: string,
}

export default function PrayerTimesRow({ prayerName, prayerTime }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        width: '100%',
        color: 'quranPlayer.main',
        display: 'flex',
        justifyContent: 'space-between',
        border: 'inherit',
        borderRadius: 'inherit',
        backgroundColor: theme.colors.primary.contrastText,
        py: 1,
        '&:hover': {
            backgroundColor: theme.colors.primary.main,
            color: theme.colors.primary.contrastText,
        }
    }), [theme.colors.primary]);
    const prayerTimeNameIconStyle = useMemo(() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        gap: 1,
    }), []);

    return (
        <Box sx={outerStyle}>
            <Typography variant="h6" sx={{ px: 2 }}>
                {prayerTime}
            </Typography>
            <Box sx={prayerTimeNameIconStyle}>
                <Typography variant="h6">
                    {prayerName}
                </Typography>
                <AccessTimeIcon />
            </Box>
        </Box>
    )
}
