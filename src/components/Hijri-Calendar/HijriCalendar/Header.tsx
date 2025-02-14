import { Typography } from '@mui/material'
import React from 'react'
import { useThemeContext } from '../../../contexts/ThemeContext';

export default function Header() {
    const { theme } = useThemeContext();
    const textStyle = {
        fontWeight: 'bold',
        color: theme.colors.primary.main,
    }

    return (
        <Typography variant="h5" sx={textStyle}>
            {'اختر شهراً لعرض التقويم الهجري'}
        </Typography>
    )
}
