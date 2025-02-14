import { Box } from '@mui/material'
import HijriCalendarCards from './HijriCalendarCards'
import { useState } from 'react'
import { DateObject } from '../types'
import HijriCalendarForm from '../HijriCalendarForm'

export default function HijriCalendarBody() {
    const [dateObject, setDateObject] = useState<DateObject>({
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear()
    })

    return (
        <Box component='main'>
            <HijriCalendarForm
                title='اختر شهراً لعرض التقويم الهجري'
                additionalHandler={setDateObject}
                views={["month", "year"]}
                openTo="month" />
            <HijriCalendarCards date={dateObject} />
        </Box>
    )
}
