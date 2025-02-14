import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useThemeContext } from '../contexts/ThemeContext';

export default function Loading() {
    const { theme } = useThemeContext();

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 4,
        }}>
            <CircularProgress style={{
                color: theme.colors.primary.main
            }} />
        </Box>
    )
}
