import BasmalaSVG from '../../SVGs/Basmala'
import { useThemeContext } from '../../../contexts/ThemeContext';

export default function Basmala() {
    const { theme } = useThemeContext();

    const imageStyle = {
        height: 'auto',
        maxWidth: '100%',
        display: 'block',
        width: '500px',
        margin: 'auto',
    }
    return (
        <BasmalaSVG
            color={theme.colors.primary.contrastText}
            style={imageStyle}
        />
    )
}
