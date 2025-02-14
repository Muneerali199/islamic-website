import { Box, Typography } from "@mui/material";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { useMemo } from "react";

export default function Phrase() {
    const containerStyle = useMemo(() => ({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        direction: 'ltr'
    }), []);
    const phraseStyle = useMemo(() => ({
        fontSize: '22px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }), []);

    return (
        <Box component="div" sx={containerStyle}>
            <Typography
                variant="body1"
                sx={phraseStyle}>
                Developed with all
            </Typography>
            <FavoriteRoundedIcon sx={{ mx: 0.5, color: 'tomato' }} />
            <Typography
                variant="body1"
                sx={phraseStyle}>
                by Muneer Ali
            </Typography>
        </Box>
    )
}
