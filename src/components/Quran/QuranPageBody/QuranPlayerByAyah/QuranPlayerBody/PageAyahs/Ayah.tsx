import { useCallback, useMemo } from 'react'
import { setActiveAyah } from '../../../../../../reducers/QuranPlayerReducer';
import { Typography } from '@mui/material';
import AyahNumber from './AyahNumber';
import { useThemeContext } from '../../../../../../contexts/ThemeContext';
import { useQuranPlayerContext } from '../../../../../../contexts/QuranPlayerContext';

type Props = {
    readonly text: string;
    readonly ayahNumber: number | null;
    readonly ayahNumberInSurah: number;
}

function Ayah({ text, ayahNumber, ayahNumberInSurah }: Props) {
    const { theme } = useThemeContext();
    const { quranPlayerState: {
        byAyahs: quranPlayerState
    }, dispatchQuranPlayerState } = useQuranPlayerContext();

    const handleClick = useCallback(() => {
        if (!ayahNumber) return;
        dispatchQuranPlayerState(setActiveAyah(ayahNumber));
    }, [dispatchQuranPlayerState, ayahNumber]);

    const isActive = useMemo(() => {
        return quranPlayerState.activeAyah === ayahNumber;
    }, [quranPlayerState.activeAyah, ayahNumber]);

    const textStyle = useMemo(() => ({
        fontWeight: '400',
        py: 1,
        px: 2,
        display: 'inline',
        textAlign: 'justify',
        padding: '15px 5px 15px 0',
        lineHeight: '61px',
        '&:hover': {
            backgroundColor: theme.colors.quranPlayer.light,
            color: `${theme.colors.quranPlayer.dark} !important`,
            cursor: 'pointer',
            '*': {
                color: `${theme.colors.quranPlayer.dark} !important`,
                fill: `${theme.colors.quranPlayer.dark} !important`,
            }
        },
        backgroundColor: isActive ? theme.colors.primary.main : 'transparent',
        color: isActive ? theme.colors.quranPlayer.contrastText : theme.colors.quranPlayer.dark,
    }), [theme.colors, isActive]);

    return (
        <Typography variant='h6' sx={textStyle}
            // ayahNumber can be null because the tafsir section uses this component and we don't want to trigger any event in this tafsir section
            onClick={ayahNumber ? handleClick : undefined}>
            {text}
            <AyahNumber isActived={isActive} number={ayahNumberInSurah} />
        </Typography>
    )
}

export default Ayah