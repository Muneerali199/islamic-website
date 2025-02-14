import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { memo } from 'react';

type Props = {
    readonly open: boolean,
    readonly setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function QuranSurahsListTitle({ open, setOpen }: Props) {
    const handleClick = () => {
        setOpen((oldState) => !oldState);
    };

    return (
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText primary="السور" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
    )
}

export default memo(QuranSurahsListTitle);