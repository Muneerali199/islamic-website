import { Button } from '@mui/material'
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../../../contexts/ThemeContext';
import { useMemo } from 'react';

export default function CalendarNavigator() {
    const { theme } = useThemeContext();
    const linkStyle = useMemo(() => ({
        width: 'fit-content',
    }), []);
    const buttonStyle = useMemo(() => ({
        fontSize: '1.2rem',
        color: theme.colors.primary.contrastText,
        backgroundColor: theme.colors.primary.main,
        '&:hover': {
            backgroundColor: theme.colors.primary.dark,
        }
    }), [theme.colors.primary]);

    return (
        <Link
            to='/hijri-calendar'
            style={linkStyle} >
            <Button
                endIcon={<ButtonEndIcon />}
                size="large"
                sx={buttonStyle}
                variant="contained">
                {'التقويم الهجري'}
            </Button>
        </Link >
    )
}

function ButtonEndIcon() {
    return <KeyboardDoubleArrowLeftRoundedIcon sx={{ mr: 2 }} />
}