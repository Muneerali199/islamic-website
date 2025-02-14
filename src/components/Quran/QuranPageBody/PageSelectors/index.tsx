import { useCallback, useMemo } from 'react';
import { useThemeContext } from '../../../../contexts/ThemeContext'
import { Box, Breakpoint, Container } from '@mui/material';
import Selector from './Selector';
import { QuranPlayerPagesState } from '../types';

type Props = {
    readonly containerMaxWidth: Breakpoint;
    readonly selectedPage: QuranPlayerPagesState;
    readonly setSelectedPage: React.Dispatch<React.SetStateAction<QuranPlayerPagesState>>;
}

export default function PageSelectors({
    containerMaxWidth,
    selectedPage,
    setSelectedPage
}: Props) {
    const { theme } = useThemeContext();

    const showQuranPageByAyah = useCallback(() => setSelectedPage('QuranPlayerByAyah'),
        [setSelectedPage]);
    const showQuranPageBySurah = useCallback(() => setSelectedPage('QuranPlayerBySurah'),
        [setSelectedPage]);

    const outerStyle = useMemo(() => ({
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'center',
        color: theme.colors.primary.fullDark,
        gap: '2rem',
        marginBottom: '1.5rem',
    }), [theme]);

    return (
        <Box>
            <Container maxWidth={containerMaxWidth} sx={outerStyle}>
                <Selector
                    text={`سماع سور القرآن`}
                    isSelected={selectedPage === 'QuranPlayerBySurah'}
                    onClick={showQuranPageBySurah} />
                <Selector
                    text={`قراءة وسماع القرآن`}
                    isSelected={selectedPage === 'QuranPlayerByAyah'}
                    onClick={showQuranPageByAyah} />
            </Container>
        </Box>
    )
}
