import { Box } from '@mui/material'
import React, { memo, useMemo } from 'react'
import { useThemeContext } from '../../../../../../contexts/ThemeContext';
import SurahNumberDecorationSVG from '../../../../../SVGs/SurahNumberDecoration';

type Props = {
    readonly number: number;
    readonly isActived: boolean;
}

function AyahNumber({ number, isActived }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        color: isActived ? theme.colors.primary.contrastText : theme.colors.quranPlayer.dark,
        py: '8px',
        px: '12px',
        fontSize: '0.9rem',
        fontWeight: '600',
        mx: '5px',
        position: 'relative',
    }), [theme.colors, isActived]);

    return (
        <Box component='span' sx={outerStyle}>
            <SurahNumberDecorationSVG
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                }}
                mainColor={isActived ? theme.colors.primary.contrastText : theme.colors.quranPlayer.dark} />
            {number}
        </Box>
    )
}

export default memo(AyahNumber)