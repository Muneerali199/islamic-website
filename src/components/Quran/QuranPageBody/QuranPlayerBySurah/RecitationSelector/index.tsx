import { Select, MenuItem, Box } from "@mui/material";
import { nanoid } from "nanoid";
import recitationsBySurah from '../../../../../data/recitations-surahs'
import { useThemeContext } from "../../../../../contexts/ThemeContext";
import { useMemo } from "react";
import HorizontalLine from "./HorizontalLine";
import { useQuranPlayerContext } from "../../../../../contexts/QuranPlayerContext";
import { setRecitationIndex } from "../../../../../reducers/QuranPlayerReducer";

export default function RecitationSelector() {
    const { theme } = useThemeContext();
    const { quranPlayerState: {
        bySurahs: quranPlayerState

    }, dispatchQuranPlayerState } = useQuranPlayerContext();

    const handleChange = (event: any) => {
        dispatchQuranPlayerState(setRecitationIndex(event.target.value as number));
    };
    const outerStyle = useMemo(() => ({
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0 30px',
        gap: 3,
    }), []);
    const selectFieldStyle = useMemo(() => ({
        width: 300,
        backgroundColor: theme.colors.quranPlayer.main,
        color: theme.colors.quranPlayer.contrastText,
        "& *": {
            color: theme.colors.quranPlayer.contrastText,
        },
        filter: theme.dropShadow,
        '&.Mui-focused': {
            border: `none !important`,
            "& *": {
                border: 'none !important',
            }
        },
    }), [theme.colors.quranPlayer, theme.dropShadow]);
    const selectOptionStyle = useMemo(() => ({
        direction: 'rtl',
        "&.Mui-selected": {
            backgroundColor: `${theme.colors.primary.fullLight} !important`,
            color: theme.colors.primary.fullDark,
            "&:hover": {
                backgroundColor: theme.colors.primary.fullLight,
            }
        }
    }), [theme.colors.primary]);

    return (
        <Box sx={outerStyle}>
            <HorizontalLine color={theme.colors.primary.main} />
            <Select
                defaultValue={quranPlayerState.recitationIndex}
                onChange={handleChange}
                sx={selectFieldStyle}>
                {recitationsBySurah.map((recitation, index) => (
                    <MenuItem
                        sx={selectOptionStyle}
                        key={nanoid()}
                        value={index}>
                        {recitation.name} {recitation.style && ` - ${recitation.style}`}
                    </MenuItem>
                ))}
            </Select>
            <HorizontalLine color={theme.colors.primary.main} />
        </Box>
    );
}