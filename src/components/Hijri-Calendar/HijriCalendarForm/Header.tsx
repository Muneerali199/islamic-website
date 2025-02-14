import { Typography } from '@mui/material'
import React from 'react'
import { useThemeContext } from '../../../contexts/ThemeContext';

type Props = {
    readonly title: string,
}

export default function Header({ title }: Props) {
    const { theme } = useThemeContext();
    const textStyle = {
        fontWeight: 'bold',
        color: theme.colors.primary.main,
    }

    return (
        <Typography variant="h5" sx={textStyle}>
            {title}
        </Typography>
    )
}
