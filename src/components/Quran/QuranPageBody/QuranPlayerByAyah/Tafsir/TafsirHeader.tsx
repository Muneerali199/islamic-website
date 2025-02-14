import { Typography } from '@mui/material'
import { memo, useMemo } from 'react'
import AyahNumber from '../QuranPlayerBody/PageAyahs/AyahNumber'
import { useThemeContext } from '../../../../../contexts/ThemeContext';

type Props = {
    readonly ayahText: string;
    readonly ayahNumber: number;
}

function TafsirHeader({ ayahText, ayahNumber }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        mb: 2,
        color: theme.colors.quranPlayer.dark,
        border: '2px solid',
        borderColor: theme.colors.quranPlayer.dark,
        py: 0.5,
        px: 0.5,
        width: '100%',
        lineHeight: '3rem',
    }), [theme.colors.quranPlayer]);

    return (
        <Typography variant="h5" sx={outerStyle}>
            {ayahText}
            <AyahNumber isActived={false} number={ayahNumber} />
        </Typography>
    )
}

export default memo(TafsirHeader)
