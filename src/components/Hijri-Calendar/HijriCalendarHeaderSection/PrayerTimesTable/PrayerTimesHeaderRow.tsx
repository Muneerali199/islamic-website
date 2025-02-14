import { Box, Chip, Typography } from '@mui/material'
import { useThemeContext } from '../../../../contexts/ThemeContext';

type Props = {
    readonly timezone: string,
}

export default function PrayerTimesHeaderRow({ timezone }: Props) {
    const { theme } = useThemeContext();

    return (
        <Box component='header' sx={{
            width: '100%',
            color: 'primary.main',
            display: 'flex',
            justifyContent: 'space-between',
            p: 1,
            px: 2,
        }}>
            <Typography
                variant="h6"
                style={{
                    color: theme.colors.primary.main
                }}
            >
                {'الوقت'}
            </Typography>
            <Chip sx={{ fontSize: '1rem' }} label={timezone} style={{
                color: theme.colors.primary.contrastText,
                backgroundColor: theme.colors.primary.main
            }} />
            <Typography
                variant="h6"
                style={{
                    color: theme.colors.primary.main
                }}
            >
                {'الصلاة'}
            </Typography>
        </Box>
    )
}
