import { Box, Container } from "@mui/material";
import { memo, useMemo } from "react";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { DateObject } from "../types";
import Header from "./Header";
import Calendar from "./Calendar";
import { DateView } from "@mui/x-date-pickers";

type Props = {
    readonly additionalHandler: React.Dispatch<React.SetStateAction<DateObject>> | ((date: DateObject) => void),
    readonly views?: readonly DateView[],
    readonly openTo?: DateView,
    readonly title: string,
}

function HijriCalendar({
    additionalHandler,
    title,
    views = ["day", "month", "year"],
    openTo = "day" }: Props
) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        backgroundColor: theme.colors.primary.fullLight,
    }), [theme.colors.primary]);
    const containerStyle = useMemo(() => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
        py: 2,
    }), []);

    return (
        <Box sx={outerStyle}>
            <Container maxWidth="lg" sx={containerStyle}>
                <Header title={title} />
                <Calendar additionalHandler={additionalHandler} views={views} openTo={openTo} />
            </Container>
        </Box>
    )
}

export default memo(HijriCalendar)
