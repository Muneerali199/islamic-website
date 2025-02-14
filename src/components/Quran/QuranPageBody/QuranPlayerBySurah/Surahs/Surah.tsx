import { CSSProperties, useCallback, useMemo } from "react";
import { useThemeContext } from "../../../../../contexts/ThemeContext";
import surahs from "../../../../../data/surahs";
import { useQuranPlayerContext } from "../../../../../contexts/QuranPlayerContext";
import { setSurahNumber } from "../../../../../reducers/QuranPlayerReducer";
import { Box } from "@mui/material";

type Props = {
    readonly surah: typeof surahs[0];
}

export default function Surah({ surah }: Props) {
    const { theme } = useThemeContext();
    const { quranPlayerState: {
        bySurahs: quranPlayerState
    }, dispatchQuranPlayerState } = useQuranPlayerContext();

    const surahContainerStyle = useCallback((surahNumber: number) => ({
        border: `1px solid ${theme.colors.primary.fullDark}`,
        padding: '18px 18px 2px',
        margin: '25px 10px 10px',
        borderRadius: '10px',
        textAlign: 'center',
        fontSize: '1.2rem',
        cursor: 'pointer',
        position: 'relative',
        transition: theme.transition,
        backgroundColor: quranPlayerState.surahNumber === surahNumber ? theme.colors.primary.main : theme.colors.primary.fullLight,
        color: quranPlayerState.surahNumber === surahNumber ? theme.colors.primary.contrastText : theme.colors.primary.fullDark,
        '&:hover': {
            backgroundColor: theme.colors.primary.main,
            color: theme.colors.primary.contrastText,
        }
    }), [theme.colors.primary, quranPlayerState.surahNumber, theme.transition]);
    const surahNumberStyle = useMemo((): CSSProperties => ({
        border: '1px solid black',
        width: '30px',
        height: '30px',
        padding: '6px',
        borderRadius: '50%',
        position: 'absolute',
        top: '-18px',
        right: 'calc(50% - 18px)',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "inherit",
        filter: theme.dropShadow,
    }), [theme.dropShadow]);

    const onClickHandler = useCallback((surahNumber: number) => {
        dispatchQuranPlayerState(setSurahNumber(surahNumber));
    }, [dispatchQuranPlayerState]);
    const handleOnKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>, surahNumber: number) => {
        if (e.key === 'Enter') {
            onClickHandler(surahNumber);
        }
    }, [onClickHandler]);

    return (
        <Box
            tabIndex={0}
            onClick={() => onClickHandler(surah.number)}
            onKeyDown={(e) => handleOnKeyDown(e, surah.number)}
            sx={surahContainerStyle(surah.number)}>
            <p style={surahNumberStyle}>{surah.number}</p>
            <p>{`${surah.arabicName}`}</p>
            <p>{`عدد الآيات: ${surah.numberOfAyahs}`}</p>
            <p>{`صفحة: ${surah.page}`}</p>
        </Box>
    )
}
