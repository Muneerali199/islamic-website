import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { MobileLinksProps } from './types';

type Props = Pick<MobileLinksProps, 'handleOpenNavMenu'>;

export default function NavIcon({ handleOpenNavMenu }: Props) {
    return (
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit">
            <MenuIcon />
        </IconButton>
    )
}
