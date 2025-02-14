import Fab from '@mui/material/Fab';
import { Box } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useMatch } from 'react-router-dom';
import { PagePathes } from '../../types';

export default function ScrollToTopButton() {
    const { theme } = useThemeContext();
    const [showButton, setShowButton] = useState(false);
    const isQuranPageOpened = useMatch<any, PagePathes>("/quran");

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    const farFromBottom = useMemo(() => (
        isQuranPageOpened ? '6rem' : '2rem'
    ), [isQuranPageOpened]);
    const outerStyle = useMemo(() => ({
        position: 'fixed',
        bottom: showButton ? farFromBottom : '-4rem',
        transition: theme.transition,
        right: '2rem',
        zIndex: 100,
    }), [showButton, farFromBottom, theme.transition]);
    const symbolContainerStyle = useMemo(() => ({
        color: theme.colors.primary.contrastText,
        backgroundColor: theme.colors.primary.main,
        '&:hover': {
            backgroundColor: theme.colors.primary.dark,
        }
    }), [theme.colors.primary]);
    const symbolStyle = useMemo(() => ({
        fontSize: '3rem',
    }), []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            onClick={scrollToTop}
            sx={outerStyle}>
            <Fab
                aria-label="add"
                sx={symbolContainerStyle}>
                <ArrowCircleUpRoundedIcon sx={symbolStyle} />
            </Fab>
        </Box>
    )
}
