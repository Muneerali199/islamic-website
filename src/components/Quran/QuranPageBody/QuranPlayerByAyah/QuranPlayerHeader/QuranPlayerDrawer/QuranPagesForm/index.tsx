import { useMemo, useState } from 'react'
import { Box } from '@mui/material';
import { useQuranPlayerContext } from '../../../../../../../contexts/QuranPlayerContext';
import PageField from './PageField';
import PageFieldButton from './PageFieldButton';

function QuranPagesForm() {
    const { quranPlayerState: {
        byAyahs: quranPlayerState
    } } = useQuranPlayerContext();
    const [fieldValue, setFieldValue] = useState(quranPlayerState.currentPage);

    const outerStyle = useMemo(() => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 1,
        my: 1,
    }), []);

    return (
        <Box sx={outerStyle}>
            <PageField fieldValue={fieldValue} setFieldValue={setFieldValue} />
            <PageFieldButton fieldValue={fieldValue} />
        </Box>
    )
}

export default QuranPagesForm;