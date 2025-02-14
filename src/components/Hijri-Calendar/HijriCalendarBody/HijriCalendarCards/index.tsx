import DateCards from './DateCards'
import MonthDate from './MonthDate'
import { Box, Container } from '@mui/material'
import { getHijriMonthDays } from '../../../../apis'
import { useFetch, isError, isLoading, isSuccess } from '../../../../custom-hooks'
import SpinnerLoading from '../../../SpinnerLoading'
import ErrorAlert from '../../../ErrorAlert'
import { DateObject } from '../../types'

type Props = {
    readonly date: DateObject,
}

export default function HijriCalendar({ date }: Props) {
    const { data, status } = useFetch<any>({
        url: getHijriMonthDays({
            month: date.month,
            year: date.year
        })
    }, [date]);

    return (
        <Box component='main'>
            <Container maxWidth="lg">
                {isLoading(status) && <SpinnerLoading />}
                {isError(status) && <ErrorAlert />}
                {isSuccess(status) && data && (
                    <>
                        <MonthDate date={date} />
                        <DateCards data={data.data} />
                    </>
                )}
            </Container>
        </Box>
    )
}
