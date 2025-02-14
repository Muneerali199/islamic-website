import { PopoverOrigin, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom'
import { nanoid } from 'nanoid';
import pages from '../../../../data/navbarPages'
import { MobileLinksProps } from './types';
import { useMemo } from 'react';

type Props = Pick<MobileLinksProps, 'anchorElNav' | 'handleCloseNavMenu'>;

export default function NavMenu({ anchorElNav, handleCloseNavMenu }: Props) {
    const menuStyle = useMemo(() => ({
        display: { xs: 'block', md: 'none' },
    }), []);
    const menuOrigin: Record<string, PopoverOrigin> = useMemo(() => ({
        anchor: {
            vertical: 'bottom',
            horizontal: 'left',
        },
        transform: {
            vertical: 'top',
            horizontal: 'left',
        }
    }), []);

    return (
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={menuOrigin.anchor}
            keepMounted
            transformOrigin={menuOrigin.transform}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={menuStyle}>
            {pages.map((page) => {
                return (
                    <NavMenuButton
                        key={nanoid()}
                        page={page}
                        handleCloseNavMenu={handleCloseNavMenu} />
                )
            })}
        </Menu>
    )
}

type NavMenuButtonProps = Pick<MobileLinksProps, 'handleCloseNavMenu'> & {
    page: typeof pages[number];
};

function NavMenuButton({ page, handleCloseNavMenu }: NavMenuButtonProps) {
    return (
        <NavLink
            to={page.href}
            key={nanoid()}>
            <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ width: '100%' }}>
                    {page.name}
                </Typography>
            </MenuItem>
        </NavLink>
    )
}
