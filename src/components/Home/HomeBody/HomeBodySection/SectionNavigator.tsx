import Button from '@mui/material/Button';
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { useThemeContext } from '../../../../contexts/ThemeContext';
import homeContent from '../../../../data/home';

type Props = Readonly<Pick<typeof homeContent.sections[number], 'targetURL' | 'buttonText'>>;

export default function SectionNavigator({ targetURL, buttonText }: Props) {
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
        <Link to={targetURL} style={linkStyle}>
            <Button
                endIcon={<KeyboardDoubleArrowLeftRoundedIcon sx={{ mr: 2 }} />}
                size="large"
                sx={buttonStyle}
                variant="contained">{buttonText}</Button>
        </Link>
    )
}
