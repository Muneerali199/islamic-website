import { Box } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { ToggleDrawer } from '../types';
import { useCallback, useMemo } from 'react';
import { useThemeContext } from '../../../../../../contexts/ThemeContext';

type Props = {
    readonly toggleDrawer: ToggleDrawer
}

export default function DrawerClosing({ toggleDrawer }: Props) {
    const { theme } = useThemeContext();

    const outerStyle = useMemo(() => ({
        textAlign: 'center',
        py: 1,
        position: 'sticky',
        backgroundColor: 'white',
        filter: theme.dropShadow,
        top: 0,
        zIndex: 1,
    }), [theme.dropShadow]);
    const iconStyle = useMemo(() => ({
        cursor: 'pointer',
        filter: theme.dropShadow
    }), [theme.dropShadow]);
    const onClickHandler: React.MouseEventHandler<SVGSVGElement> = useCallback(() => {
        toggleDrawer(false);
    }, [toggleDrawer]);

    return (
        <Box sx={outerStyle}>
            <CancelIcon
                fontSize='large'
                sx={iconStyle}
                onClick={onClickHandler} />
        </Box>
    )
}
