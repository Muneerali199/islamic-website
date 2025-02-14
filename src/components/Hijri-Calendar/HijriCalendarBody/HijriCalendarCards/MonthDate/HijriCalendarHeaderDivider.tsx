import { useThemeContext } from '../../../../../contexts/ThemeContext';
import { Box } from '@mui/material';

export function HijriCalendarHeaderDivider() {
    const { theme } = useThemeContext();
    const dividerStyle = {
        height: '2px',
        backgroundColor: theme.colors.primary.main,
    }

    return (
        <Box
            flexGrow={1}
            sx={dividerStyle} />
    )
}