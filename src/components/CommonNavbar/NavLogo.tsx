import { Box, SxProps, Theme } from '@mui/material'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useThemeContext } from '../../contexts/ThemeContext';
import LogoSVG from '../SVGs/Logo';

type Props = {
    readonly sx: SxProps<Theme>,
    readonly imageWidth: number,
}

export default function NavLogo({ sx, imageWidth }: Props) {
    const { theme } = useThemeContext();

    const imageStyle = useMemo(() => ({
        width: imageWidth,
        filter: theme.dropShadow,
    }), [imageWidth, theme.dropShadow])

    return (
        <Link to="/">
            <Box
                ml={2}
                sx={sx}>
                <LogoSVG
                    style={imageStyle}
                    mainColor={theme.colors.primary.main} />
            </Box>
        </Link>
    )
}
