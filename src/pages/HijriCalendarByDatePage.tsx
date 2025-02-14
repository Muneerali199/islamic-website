import HijriCalendarHeaderSection from '../components/Hijri-Calendar/HijriCalendarHeaderSection'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import HijriCalendarByDateBody from '../components/Hijri-Calendar/HijriCalendarByDateBody';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { currentDate } from '../components/Hijri-Calendar/util';
import ContainerWrap from '../components/ContainerWrap';
import CalendarSVG from '../components/SVGs/Calendar';

type DateObject = {
    day: number;
    month: number;
    year: number;
}

function HijriCalendarByDatePage() {
    const { date } = useParams();
    const [dateObject, setDateObject] = useState<DateObject>(currentDate);

    useEffect(() => {
        setDateObject(parseDateParam(date));
    }, [date, setDateObject]);

    return (
        <>
            <Helmet>
                <title>{'مواعيد الصلاة'}</title>
            </Helmet>
            {dateObject && (
                <Box>
                    <HijriCalendarHeaderSection pageDate={dateObject} />
                    {dateObject && <HijriCalendarByDateBody />}
                </Box>
            )}
        </>
    )
}

function parseDateParam(date: string | undefined) {
    if (date === undefined) {
        return currentDate;
    }
    if (!date.match(/^\d{2}-\d{2}-\d{4}$/)) {
        return currentDate;
    } else {
        const day = Number(date.split('-')[0]);
        const month = Number(date.split('-')[1]);
        const year = Number(date.split('-')[2]);
        if (day < 1 || day > 30 || month < 1 || month > 12 || year < 1) {
            return currentDate;
        }
        return ({
            day,
            month,
            year
        });
    }
}

export default ContainerWrap(HijriCalendarByDatePage, {
    HeaderSVG: CalendarSVG
})