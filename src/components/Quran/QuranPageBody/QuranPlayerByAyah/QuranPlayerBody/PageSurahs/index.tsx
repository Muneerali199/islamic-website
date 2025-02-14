import { memo, useMemo } from 'react';
import Surah from './Surah'
import { nanoid } from 'nanoid';
import { Box, Breakpoint, Container } from '@mui/material';
import { useThemeContext } from '../../../../../../contexts/ThemeContext';
import { QuranPage } from '../types';

type Props = {
    readonly containerMaxWidth: Breakpoint;
    readonly surahs: QuranPage['surahs'];
}

function PageSurahs({ surahs, containerMaxWidth }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        py: 1,
        backgroundColor: theme.colors.quranPlayer.light,
        gap: '1rem',
        border: '2px solid',
        borderColor: theme.colors.quranPlayer.dark,
        borderTop: 'none',
    }), [theme.colors.quranPlayer]);
    const containerStyle = useMemo(() => ({
        display: 'flex',
        justifyContent: 'space-evenly',
        gap: '1rem',
        flexWrap: 'wrap',
    }), []);

    return (
        <Box component='header' sx={outerStyle}>
            <Container maxWidth={containerMaxWidth} sx={containerStyle}>
                {Object.values(surahs).map((surah) => {
                    return (
                        <Surah key={nanoid()} name={surah.name} />
                    )
                })}
            </Container>
        </Box>
    )
}

export default memo(PageSurahs)