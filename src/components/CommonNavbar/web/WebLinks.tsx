import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';
import pages from '../../../data/navbarPages'
import { memo, useMemo } from 'react';

type Props = {
    readonly handleCloseNavMenu: () => void;
}

function WebLinks({ handleCloseNavMenu }: Props) {
    const outerStyle = useMemo(() => ({
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
    }), []);
    const buttonStyle = useMemo(() => ({
        my: 2,
        color: 'white',
        display: 'flex',
    }), []);

    return (
        <Box sx={outerStyle}>
            {pages.map((page) => {
                return (
                    <NavLink to={page.href} key={nanoid()}>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={buttonStyle}>
                            {page.name}
                        </Button>
                    </NavLink>
                )
            })}
        </Box>
    )
}

export default memo(WebLinks);
