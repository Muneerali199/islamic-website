import { Box } from '@mui/material'
import React from 'react'
import { useThemeContext } from '../../contexts/ThemeContext';

export default function HorizontalLine() {
    const { theme } = useThemeContext();

    return (
        <Box sx={{
            width: '100%',
            height: '2px',
            backgroundColor: theme.colors.primary.main,
            borderRadius: '50%',
            margin: '20px 0',
            flex: 1
        }} />
    )
}
