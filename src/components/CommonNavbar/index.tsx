import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useCallback, useMemo, useState } from 'react';
import WebLogo from './web/WebLogo';
import MobileLogo from './mobile/MobileLogo';
import MobileLinks from './mobile/MobileLinks';
import WebLinks from './web/WebLinks';
import ScrollToTopButton from './ScrollToTopButton';
import { useThemeContext } from '../../contexts/ThemeContext';

export default function CommonNavbar() {
    const { theme } = useThemeContext();
    const [anchorElNav, setAnchorElNav] = useState<Element | null>(null);
    const outerStyle = useMemo(() => ({
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary.main,
    }), [theme.colors.primary]);
    const handleOpenNavMenu = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorElNav(event.currentTarget);
    }, []);
    const handleCloseNavMenu = useCallback(() => {
        setAnchorElNav(null);
    }, []);

    return (
        <AppBar
            position="fixed"
            className='navbar'
            style={outerStyle}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ScrollToTopButton />
                    <WebLogo />
                    <MobileLogo />
                    <MobileLinks
                        anchorElNav={anchorElNav}
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu} />
                    <WebLinks handleCloseNavMenu={handleCloseNavMenu} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
