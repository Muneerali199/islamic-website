import { Box } from '@mui/material'
import React, { useMemo } from 'react'
import YoungMuslimWithQuranSVG from '../SVGs/YoungMuslimWithQuran';
import { useThemeContext } from '../../contexts/ThemeContext';

type Props = {
    readonly Component: typeof YoungMuslimWithQuranSVG
}

export default function SVGComponent({ Component }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        filter: theme.dropShadow,
        height: {
            xs: '240px',
            md: '300px',
        },
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }), [theme.dropShadow]);
    const componentStyle = useMemo(() => ({
        height: '100%'
    }), []);

    return (
        <Box sx={outerStyle}>
            <Component
                style={componentStyle}
                mainColor={theme.colors.primary.main} />
        </Box>
    )
}
