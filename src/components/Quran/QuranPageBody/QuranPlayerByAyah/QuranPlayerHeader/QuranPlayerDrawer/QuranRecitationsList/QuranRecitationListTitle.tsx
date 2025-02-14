import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { memo, useCallback } from 'react';

type Props = {
    readonly open: boolean,
    readonly setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

function QuranRecitationListTitle({ open, setOpen }: Props) {
    const handleClick = useCallback(() => {
        setOpen((oldState) => !oldState);
    }, [setOpen]);

    return (
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <RecordVoiceOverIcon />
            </ListItemIcon>
            <ListItemText primary={'القّراء'} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
    )
}

export default memo(QuranRecitationListTitle)