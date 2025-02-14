import NotFoundSVG from "./SVGs/NotFound";
import { useThemeContext } from "../contexts/ThemeContext";
import ContainerWrap from "./ContainerWrap";

function NotFound() {
    const { theme } = useThemeContext();
    const imageStyle = {
        width: '95%',
        height: '500px',
    }
    return (
        <NotFoundSVG
            style={imageStyle}
            mainColor={theme.colors.primary.main} />
    )
}

export default ContainerWrap(NotFound, {})