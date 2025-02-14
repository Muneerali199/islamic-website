import { Box, Container } from "@mui/material";
import { memo, useMemo } from "react";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { DateObject } from "../HijriCalendarForm/types";
import Header from "./Header";
import Calendar from "./Calendar";

type Props = {
    readonly setDateObject: React.Dispatch<React.SetStateAction<DateObject>>
}

function HijriCalendar({ setDateObject }: Props) {
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
                <Header />
                <Calendar setDateObject={setDateObject} />
            </Container>
        </Box>
    )
}

export default memo(HijriCalendar)
