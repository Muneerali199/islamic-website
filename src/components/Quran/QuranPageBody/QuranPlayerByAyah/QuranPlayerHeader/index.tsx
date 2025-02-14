import { memo, useCallback, useMemo, useState } from 'react'
import { Box, Breakpoint, Container } from '@mui/material';
import QuranPlayerDrawer from './QuranPlayerDrawer';
import { useThemeContext } from '../../../../../contexts/ThemeContext';
import Configurations from '../Configurations';
import { SettingsOpened, ToggleDrawer } from './types';

type Props = {
    readonly containerMaxWidth: Breakpoint
}

function QuranPlayerHeader({ containerMaxWidth }: Props) {
    const { theme } = useThemeContext();
    const [settingsOpened, setSettingsOpened] = useState<SettingsOpened>(false);
    const toggleDrawer: ToggleDrawer = useCallback((open: boolean) => {
        setSettingsOpened(open);
    }, []);

    const outerStyle = useMemo(() => ({
        py: 1,
        backgroundColor: theme.colors.quranPlayer.main,
        border: `2px solid ${theme.colors.quranPlayer.dark}`,
        filter: 'drop-shadow(0px 2px 8px #170f052e)'
    }), [theme.colors.quranPlayer]);
    const containerStyle = useMemo(() => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }), []);

    return (
        <Box component='header' sx={outerStyle}>
            <Container maxWidth={containerMaxWidth} sx={containerStyle}>
                <Configurations toggleDrawer={toggleDrawer} />
                <QuranPlayerDrawer
                    settingsOpened={settingsOpened}
                    toggleDrawer={toggleDrawer} />
            </Container>
        </Box>
    )
}

export default memo(QuranPlayerHeader);