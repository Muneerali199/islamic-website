import { useMemo } from 'react'
import { Typography } from '@mui/material';
import { useQuranPlayerContext } from '../../../../../../contexts/QuranPlayerContext';

export default function PageNumber() {
    const { quranPlayerState: {
        byAyahs: quranPlayerState
    } } = useQuranPlayerContext();

    const pageText = useMemo(() => {
        return `صفحة ${quranPlayerState.currentPage}`;
    }, [quranPlayerState.currentPage]);
    const textStyle = useMemo(() => ({
        textAlign: 'center',
    }), []);

    return (
        <Typography variant='h6' sx={textStyle}>
            {pageText}
        </Typography>
    )
}
