import { Button } from '@mui/material';
import React, { useCallback, useMemo } from 'react'
import { useThemeContext } from '../../../../../../../contexts/ThemeContext';
import { useQuranPlayerContext } from '../../../../../../../contexts/QuranPlayerContext';
import { setCurrentPage } from '../../../../../../../reducers/actions/quranPlayerByAyahsActions';

type Props = {
    readonly fieldValue: number,
}

export default function PageFieldButton({ fieldValue }: Props) {
    const { theme } = useThemeContext();
    const { dispatchQuranPlayerState } = useQuranPlayerContext();

    const handlePageChange = useCallback((page: number) => {
        dispatchQuranPlayerState(setCurrentPage(page));
    }, [dispatchQuranPlayerState]);
    const buttonStyle = useMemo(() => ({
        mt: 1,
        backgroundColor: theme.colors.primary.main,
        color: theme.colors.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.colors.primary.dark,
        }
    }), [theme.colors.primary]);
    const onClickHandler = useCallback(() => {
        handlePageChange(fieldValue);
    }, [fieldValue, handlePageChange]);

    return (
        <Button
            fullWidth
            onClick={onClickHandler}
            sx={buttonStyle}
            variant="contained">
            {'الذهاب للصفحة'}
        </Button>
    )
}
