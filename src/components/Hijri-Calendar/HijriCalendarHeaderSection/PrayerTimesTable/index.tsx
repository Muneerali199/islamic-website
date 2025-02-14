import { Box, Container } from '@mui/material'
import { useMemo } from 'react'
import PrayerTimesHeaderRow from './PrayerTimesHeaderRow';
import { useThemeContext } from '../../../../contexts/ThemeContext';
import { PrayerTimes } from '../../types';
import PrayerTimesRows from './PrayerTimesRows';

type Props = {
    readonly timezone: string,
    readonly prayerTimes: PrayerTimes,
}

export default function PrayerTimesTable({ timezone, prayerTimes }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        border: '2px solid',
        borderColor: 'quranPlayer.main',
        borderRadius: '20px',
        gap: 1,
        pb: 3,
        pt: 1,
        backgroundColor: theme.colors.primary.contrastText,
    }), [theme.colors.primary]);

    return (
        <Box>
            <Container maxWidth="sm" sx={outerStyle}>
                <PrayerTimesHeaderRow timezone={timezone} />
                <PrayerTimesRows prayerTimes={prayerTimes} />
            </Container>
        </Box>
    )
}
