import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
import { useThemeContext } from '../../../../contexts/ThemeContext';
import { HijriCardData } from './types';
import { useMemo } from 'react';

type Props = {
    readonly date: HijriCardData,
}

export default function DateCard({ date }: Props) {
    const navigate = useNavigate();
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        position: 'relative',
        overflow: 'visible',
        height: '165px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: theme.transition,
        border: `1px solid #eee`,
        '&:hover': {
            border: `1px solid ${theme.colors.primary.main}`,
            '> *:nth-child(2n + 1)': {
                backgroundColor: theme.colors.primary.main,
                color: theme.colors.primary.contrastText,
            }
        }
    }), [theme.colors.primary, theme.transition]);
    const numbericHijriDateStyle = useMemo(() => ({
        color: theme.colors.primary.fullDark,
    }), [theme.colors.primary]);
    const fullHijriDateStyle = useMemo(() => ({
        color: theme.colors.primary.main,
        pt: 1,
    }), [theme.colors.primary]);
    const gregorianDateStyle = useMemo(() => ({
        position: 'absolute',
        top: '-16px',
        right: 0,
        left: 0,
        backgroundColor: theme.colors.primary.fullLight,
        color: theme.colors.primary.fullDark,
        width: '80%',
        margin: '0 auto',
        fontSize: '1.2rem',
        filter: theme.dropShadow,
    }), [theme]);
    const navigateButtonStyle = useMemo(() => ({
        backgroundColor: theme.colors.primary.fullLight,
        color: theme.colors.primary.fullDark,
        '&:hover': {
            backgroundColor: `${theme.colors.primary.light} !important`,
        }
    }), [theme.colors.primary]);

    return (
        <Card sx={outerStyle}>
            <Typography
                sx={gregorianDateStyle}>
                {date.gregorian.date}
            </Typography>

            <CardContent>
                <Typography variant="h5" component="div" sx={fullHijriDateStyle}>
                    {date.hijri.weekday.ar} {date.hijri.month.ar} {date.hijri.year}
                </Typography>
                <Typography sx={numbericHijriDateStyle}>
                    {date.hijri.date}
                </Typography>
            </CardContent>

            <Button
                fullWidth
                variant="contained"
                onClick={() => (navigate(`./${date.gregorian.date}`))}
                sx={navigateButtonStyle}>
                {'عرض أوقات الصلاة'}
            </Button>
        </Card>
    )
}
