import { Box, Container } from "@mui/material";
import { memo, useCallback, useMemo } from "react";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { DateObject } from "../types";
import HijriCalendarForm from "../HijriCalendarForm";
import { useNavigate } from "react-router-dom";

function HijriCalendarByDateBody() {
    const navigate = useNavigate();
    const onDateFormChange = useCallback((dateObject: DateObject) => {
        navigate(`/hijri-calendar/${formatNavigationDate(dateObject)}`);
    }, [navigate]);

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
                <HijriCalendarForm
                    title='اختر يوماً لعرض مواعيد الصلاة'
                    additionalHandler={onDateFormChange} />
            </Container>
        </Box>
    )
}

function formatNavigationDate(dateObject: DateObject) {
    const { day, month, year } = {
        day: dateObject.day.toString().padStart(2, '0'),
        month: dateObject.month.toString().padStart(2, '0'),
        year: dateObject.year.toString().padStart(2, '0'),
    }
    return `${day}-${month}-${year}`;
}
export default memo(HijriCalendarByDateBody)
