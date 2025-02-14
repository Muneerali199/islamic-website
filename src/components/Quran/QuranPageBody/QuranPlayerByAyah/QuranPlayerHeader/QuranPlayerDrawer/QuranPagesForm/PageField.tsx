import { useCallback, useMemo, useState } from 'react'
import { TextField } from '@mui/material';
import { useThemeContext } from '../../../../../../../contexts/ThemeContext';

type Props = {
    readonly fieldValue: number,
    readonly setFieldValue: React.Dispatch<React.SetStateAction<number>>
}

export default function PageField({ fieldValue, setFieldValue }: Props) {
    const { theme } = useThemeContext();
    const [isError, setIsError] = useState(false);

    const fieldStyle = useMemo(() => ({
        '& .Mui-focused': {
            color: `${theme.colors.primary.main} !important`,
            '&.Mui-focused fieldset': {
                borderColor: `${theme.colors.primary.main} !important`,
            },
        },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
                borderColor: theme.colors.primary.fullDark,
            },
        },
    }), [theme.colors.primary]);
    const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) > 604 || Number(e.target.value) < 1) {
            setIsError(true);
            return;
        }
        setIsError(false);
        setFieldValue(Number(e.target.value));
    }, [setIsError, setFieldValue]);

    return (
        <TextField
            fullWidth
            error={isError}
            value={fieldValue}
            onChange={onChangeHandler}
            sx={fieldStyle}
            id="outlined-basic"
            label="رقم الصفحة"
            type='number'
            variant="outlined" />
    )
}
