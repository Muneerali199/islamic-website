import { nanoid } from 'nanoid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { memo, useCallback, useMemo } from 'react';
import { useThemeContext } from '../../../../../../../contexts/ThemeContext';
import { setCurrentPage, setCurrentSurahNumber } from '../../../../../../../reducers/actions/quranPlayerByAyahsActions';
import { useQuranPlayerContext } from '../../../../../../../contexts/QuranPlayerContext';
import quranSurahs from '../../../../../../../data/surahs'

type Props = {
    readonly itemNumber: number,
    readonly surah: typeof quranSurahs[number]
}

function QuranSurahItem({ itemNumber, surah }: Props) {
    const { theme } = useThemeContext();
    const { quranPlayerState: {
        byAyahs: quranPlayerState
    }, dispatchQuranPlayerState } = useQuranPlayerContext();

    const handleSurahChange = useCallback((surahIndex: number) => {
        const page = quranSurahs[surahIndex].page;
        dispatchQuranPlayerState(setCurrentSurahNumber(surahIndex + 1));
        dispatchQuranPlayerState(setCurrentPage(page));
    }, [dispatchQuranPlayerState]);
    const onClickHandler = useCallback(() => {
        handleSurahChange(itemNumber - 1);
    }, [handleSurahChange, itemNumber]);

    const isActive = useMemo(() =>
        (quranPlayerState.currentSurahNumber === itemNumber),
        [quranPlayerState.currentSurahNumber, itemNumber]);

    const outerStyle = useMemo(() => ({
        pl: 4,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: isActive ? theme.colors.primary.main : 'transparent',
        color: isActive ? theme.colors.primary.contrastText : theme.colors.primary.fullDark,
        '&:hover': {
            backgroundColor: theme.colors.primary.fullLight,
            color: theme.colors.primary.fullDark,
        },
    }), [theme.colors.primary, isActive]);
    const itemContentStyle = useMemo(() => ({
        '& .MuiListItemText-secondary': {
            color: 'inherit'
        },
    }), []);

    return (
        <ListItemButton
            key={nanoid()}
            sx={outerStyle}
            onClick={onClickHandler}>
            <ListItemIcon sx={{ color: 'inherit' }}>
                {`${formatSurahNumber(itemNumber)}- ${surah.arabicName}`}
            </ListItemIcon>
            <ListItemText
                sx={itemContentStyle}
                primary={`عدد آياتها ${surah.numberOfAyahs}`}
                secondary={`فى صفحة ${surah.page}`} />
        </ListItemButton>
    )
}

function formatSurahNumber(surahNumber: number) {
    return surahNumber.toString().padStart(2, '0');
}

export default memo(QuranSurahItem);