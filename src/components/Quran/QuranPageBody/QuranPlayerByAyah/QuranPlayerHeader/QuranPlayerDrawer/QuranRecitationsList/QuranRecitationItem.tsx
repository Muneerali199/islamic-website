import { useCallback, useMemo } from 'react'
import { setRecitation } from '../../../../../../../reducers/actions/quranPlayerByAyahsActions';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { nanoid } from 'nanoid';
import { useThemeContext } from '../../../../../../../contexts/ThemeContext';
import { useQuranPlayerContext } from '../../../../../../../contexts/QuranPlayerContext';
import recitations from '../../../../../../../data/recitations-ayahs'


type Props = {
    readonly recitationId: keyof typeof recitations,
    readonly value: typeof recitations[keyof typeof recitations],
    readonly recitationNumber: number
}

export default function QuranRecitationItem({ recitationId, value, recitationNumber }: Props) {
    const { theme } = useThemeContext();
    const { quranPlayerState: {
        byAyahs: quranPlayerState
    }, dispatchQuranPlayerState } = useQuranPlayerContext();

    const handleChange = useCallback((name: keyof typeof recitations) => {
        dispatchQuranPlayerState(setRecitation(name));
    }, [dispatchQuranPlayerState]);
    const outerStyle = useMemo(() => ({
        pl: 4,
        backgroundColor: quranPlayerState.recitation === recitationId ? theme.colors.primary.main : 'transparent',
        color: quranPlayerState.recitation === recitationId ? theme.colors.primary.contrastText : theme.colors.primary.fullDark,
        '&:hover': {
            backgroundColor: theme.colors.primary.fullLight,
            color: theme.colors.primary.fullDark,
        },
    }), [theme.colors.primary, quranPlayerState.recitation, recitationId]);
    const itemContentStyle = useMemo(() => ({
        '& .MuiListItemText-secondary': {
            color: 'inherit'
        },
    }), []);

    return (
        <ListItemButton
            key={nanoid()}
            sx={outerStyle}
            onClick={() => handleChange(recitationId)}>
            <ListItemIcon>
                {recitationNumber}
            </ListItemIcon>
            <ListItemText
                sx={itemContentStyle}
                primary={value.name}
                secondary={value.style ? `(${value.style})` : ''} />
        </ListItemButton>
    )
}
