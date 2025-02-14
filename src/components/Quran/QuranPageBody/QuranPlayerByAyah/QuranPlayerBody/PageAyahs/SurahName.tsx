import { Box, Typography } from "@mui/material";
import { useThemeContext } from "../../../../../../contexts/ThemeContext";
import { QuranPage } from "../types";
import { useMemo } from "react";
import SurahNameDecorationSVG from "../../../../../SVGs/SurahNameDecoration";

type Props = {
    readonly surahName: QuranPage['ayahs'][number]['surah']['name'];
}

export default function SurahName({ surahName }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        height: '50px',
        maxWidth: '375px',
        display: 'block',
        mx: 'auto',
        my: 2,
        backgroundColor: theme.colors.quranPlayer.light,
        border: '2px solid',
        borderColor: theme.colors.quranPlayer.dark,
        borderRadius: '18px',
        position: 'relative',
    }), [theme.colors.quranPlayer]);
    const textStyle = useMemo(() => ({
        textAlign: 'center',
        lineHeight: '50px',
        fontWeight: 'bold',
        color: theme.colors.quranPlayer.dark,
    }), [theme.colors.quranPlayer]);

    return (
        <Box sx={outerStyle} >
            <SurahNameDecorationSVG
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',

                }}
                mainColor={theme.colors.quranPlayer.main} />
            <Typography variant='h6' sx={textStyle}>
                {surahName}
            </Typography>
        </Box>
    )
}
