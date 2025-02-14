import { memo, useMemo } from 'react';
import { MobileLinksProps } from './types';
import NavIcon from './NavIcon';
import NavMenu from './NavMenu';
import { Box } from '@mui/material';

function MobileLinks({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }: MobileLinksProps) {
    const outerStyle = useMemo(() => ({
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'flex-end'
    }), []);

    return (
        <Box sx={outerStyle}>
            <NavIcon handleOpenNavMenu={handleOpenNavMenu} />
            <NavMenu anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} />
        </Box>
    )
}

export default memo(MobileLinks);
