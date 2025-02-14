import { Paper } from "@mui/material";
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useCallback, useMemo } from "react";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { DateObject } from "./types";
import { Dayjs } from "dayjs";
import { DateView } from "@mui/x-date-pickers";

type Props = {
    readonly additionalHandler: React.Dispatch<React.SetStateAction<DateObject>> | ((date: DateObject) => void),
    readonly views?: readonly DateView[],
    readonly openTo?: DateView,
}

export default function Calendar({
    additionalHandler,
    views = ["day", "month", "year"],
    openTo = "day" }: Props
) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        py: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '400px',
        m: 'auto',
    }), []);
    const dataCaledarStyle = useMemo(() => ({
        '& .Mui-selected': {
            backgroundColor: `${theme.colors.primary.main} !important`,
            color: `${theme.colors.primary.contrastText} !important`,
        },
        '& .Mui-selected:hover': {
            backgroundColor: `${theme.colors.primary.dark} !important`,
        },
        '& .Mui-selected:focus': {
            backgroundColor: `${theme.colors.primary.main} !important`,
        },
    }), [theme.colors.primary]);
    const onDateChangeHandler = useCallback((date: Dayjs | null) => {
        if (date) {
            const dateObject = {
                day: date.date(),
                month: date.month() + 1,
                year: date.year()
            }
            additionalHandler(dateObject);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [additionalHandler]);

    return (
        <Paper sx={outerStyle}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    sx={dataCaledarStyle}
                    views={views}
                    openTo={openTo}
                    onChange={onDateChangeHandler}
                />
            </LocalizationProvider>
        </Paper>
    )
}
