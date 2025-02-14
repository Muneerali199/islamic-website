import { useMemo } from 'react'
import { useThemeContext } from '../../contexts/ThemeContext';
import { Box, Container } from '@mui/material';
import YoungMuslimWithQuranSVG from '../SVGs/YoungMuslimWithQuran';
import HorizontalLine from './HorizontalLine';

type Props = {
    readonly HeaderSVG: typeof YoungMuslimWithQuranSVG
}

export default function Header({ HeaderSVG }: Props) {
    const { theme } = useThemeContext();

    const containerStyle = useMemo(() => ({
        pb: 4,
        display: 'flex',
        alignItems: 'center',
        gap: 3,
    }), []);

    const imageStyle = useMemo(() => ({
        filter: theme.dropShadow,
        height: '180px',
        width: 'auto',
        display: 'block',
        margin: 'auto',
    }), [theme.dropShadow]);

    return (
        <Box>
            <Container maxWidth="xl" sx={containerStyle}>
                <HorizontalLine />
                <HeaderSVG
                    style={imageStyle}
                    mainColor={theme.colors.primary.main} />
                <HorizontalLine />
            </Container>
        </Box>
    )
}
