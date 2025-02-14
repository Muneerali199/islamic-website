import BasmalaSVG from '../../../../../SVGs/Basmala'
import { useThemeContext } from '../../../../../../contexts/ThemeContext';
import { Box } from '@mui/material';

export default function Basmala() {
    const { theme } = useThemeContext();
    const imageStyle = {
        width: '250px',
        height: 'auto',
        display: 'block',
        mx: 'auto',
        my: '1rem',
    }
    return (
        <Box sx={imageStyle}>
            <BasmalaSVG color={theme.colors.quranPlayer.dark} />
        </Box>
    )
}
