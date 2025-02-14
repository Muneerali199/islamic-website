import { useCallback, useMemo, useState } from "react";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { Typography } from "@mui/material";
import { useThemeContext } from "../../../contexts/ThemeContext";

type Props = {
    readonly initialCounter: number
}

export default function AdhkarContentSectionCounter({ initialCounter }: Props) {
    const { theme } = useThemeContext();

    const [counter, setCounter] = useState(initialCounter);
    const handleCounterClick = useCallback(() => {
        if (counter === 0) return;
        setCounter((oldState) => oldState - 1);
    }, [counter]);

    const outerStyle = useMemo(() => ({
        '& > :not(style)':
        {
            m: 1
        }
    }), []);
    const iconStyle = useMemo(() => ({
        backgroundColor: theme.colors.primary.main,
        color: theme.colors.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.colors.primary.dark,
        }
    }), [theme.colors.primary]);
    const counterTextStyle = useMemo(() => ({
        textAlign: 'center',
        lineHeight: '1.6',
    }), []);

    return (
        <Box sx={outerStyle} onClick={handleCounterClick}>
            <Fab
                sx={iconStyle}
                aria-label="edit">
                <Typography variant="h6" component="h3" sx={counterTextStyle}>
                    {counter}
                </Typography>
            </Fab>
        </Box>
    )
}
