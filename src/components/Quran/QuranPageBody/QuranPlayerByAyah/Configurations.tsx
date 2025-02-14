import SettingsIcon from '@mui/icons-material/Settings';
import { useThemeContext } from '../../../../contexts/ThemeContext';
import { ToggleDrawer } from './QuranPlayerHeader/types';

type Props = {
    readonly toggleDrawer: ToggleDrawer
}

export default function Configurations({ toggleDrawer }: Props) {
    const { theme } = useThemeContext();
    const iconStyle = {
        color: theme.colors.quranPlayer.contrastText,
        cursor: 'pointer',
    };

    return (
        <SettingsIcon
            fontSize='large'
            onClick={() => toggleDrawer(true)}
            sx={iconStyle} />
    )
}
