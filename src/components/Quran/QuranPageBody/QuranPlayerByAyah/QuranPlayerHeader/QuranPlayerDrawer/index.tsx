import { Drawer } from '@mui/material';
import DrawerClosing from './DrawerClosing';
import DrawerList from './DrawerList';
import { SettingsOpened, ToggleDrawer } from '../types';
import { useMemo } from 'react';

type Props = {
    readonly settingsOpened: SettingsOpened,
    readonly toggleDrawer: ToggleDrawer
}

export default function QuranPlayerDrawer({ settingsOpened, toggleDrawer }: Props) {
    const outerStyle = useMemo(() => ({
        '& .MuiDrawer-paper': {
            width: '20rem',
            border: 'none',
        }
    }), []);
    return (
        <Drawer
            anchor={'right'}
            open={settingsOpened}
            sx={outerStyle}
            onClose={() => toggleDrawer(false)}>
            <DrawerClosing toggleDrawer={toggleDrawer} />
            <DrawerList />
        </Drawer>
    )
}
