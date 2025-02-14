import HijriCalendarHeaderSection from '../components/Hijri-Calendar/HijriCalendarHeaderSection'
import HijriCalendarBody from '../components/Hijri-Calendar/HijriCalendarBody'
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import ContainerWrap from '../components/ContainerWrap';
import CalendarSVG from '../components/SVGs/Calendar';

function HijriCalendarPage() {
    return (
        <>
            <Helmet>
                <title>{'التقويم الهجري'}</title>
            </Helmet>
            <Box sx={{
                mb: 4
            }}>
                <HijriCalendarHeaderSection />
                <HijriCalendarBody />
            </Box>
        </>
    )
}

export default ContainerWrap(HijriCalendarPage, {
    HeaderSVG: CalendarSVG
})
