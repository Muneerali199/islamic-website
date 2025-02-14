import { Box } from "@mui/material";
import { memo, useMemo } from "react";
import { DateObject } from "../../../types";
import { HijriCalendarHeaderDivider } from "./HijriCalendarHeaderDivider";
import Content from "./Content";

type Props = {
    readonly date: DateObject,
}

function MonthDate({ date }: Props) {
    const outerStyle = useMemo(() => ({
        display: 'flex',
        alignItems: 'center',
        py: 2,
    }), []);

    return (
        <Box sx={outerStyle}>
            <HijriCalendarHeaderDivider />
            <Content date={date} />
            <HijriCalendarHeaderDivider />
        </Box>
    )
}

export default memo(MonthDate)