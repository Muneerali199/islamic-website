import { Container, Box } from '@mui/material';
import { useMemo } from 'react';
import Background from './Background';
import Basmala from './Basmala';
import HeaderTitle from './HeaderTitle';
import BlurBackground from '../../BlurBackground';
import { useThemeContext } from '../../../contexts/ThemeContext';

export default function HomeHeader() {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    }), []);
    return (
        <Box component='header'
            sx={outerStyle}>
            <Background />
            <BlurBackground backgroundColor={theme.colors.primary.main} />
            <Container maxWidth="lg" sx={{ zIndex: 1 }}>
                <Basmala />
                <HeaderTitle />
            </Container>
        </Box>
    )
}
