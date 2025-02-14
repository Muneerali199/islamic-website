import { Box, Breakpoint, Container } from '@mui/material';
import RightArrow from './RightArrow';
import PageNumber from './PageNumber';
import { memo, useCallback, useMemo } from 'react';
import { useThemeContext } from '../../../../../../contexts/ThemeContext';
import { nextPage, previousPage } from '../../../../../../reducers/actions/quranPlayerByAyahsActions';
import { useQuranPlayerContext } from '../../../../../../contexts/QuranPlayerContext';

type Props = {
    readonly containerMaxWidth: Breakpoint;
}

function PageControls({ containerMaxWidth }: Props) {
    const { theme } = useThemeContext();
    const { dispatchQuranPlayerState } = useQuranPlayerContext();

    const outerStyle = useMemo(() => ({
        backgroundColor: theme.colors.quranPlayer.light,
        color: theme.colors.quranPlayer.dark,
        border: '2px solid',
        borderColor: theme.colors.quranPlayer.dark,
        py: 2,
    }), [theme.colors.quranPlayer]);
    const containerStyle = useMemo(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
    }), []);

    const handlePreviousPage = useCallback(() => {
        dispatchQuranPlayerState(previousPage());
    }, [dispatchQuranPlayerState]);
    const handleNextPage = useCallback(() => {
        dispatchQuranPlayerState(nextPage());
    }, [dispatchQuranPlayerState]);

    return (
        <Box sx={outerStyle}>
            <Container maxWidth={containerMaxWidth} sx={containerStyle}>
                <RightArrow
                    onCLickHandler={handlePreviousPage} />
                <PageNumber />
                <RightArrow
                    style={{ transform: 'rotate(180deg)' }}
                    onCLickHandler={handleNextPage} />
            </Container>
        </Box>
    )
}

export default memo(PageControls)
