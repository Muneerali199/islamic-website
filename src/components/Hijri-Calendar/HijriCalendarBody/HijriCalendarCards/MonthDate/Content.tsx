import { Typography } from '@mui/material'
import { DateObject } from '../../../types';
import { useThemeContext } from '../../../../../contexts/ThemeContext';

type Props = {
    readonly date: DateObject,
}

export default function Content({ date }: Props) {
    const { theme } = useThemeContext();
    const textStyle = {
        fontWeight: 'bold',
        color: theme.colors.primary.main,
        mx: 2,
        direction: 'ltr'
    }

    return (
        <Typography variant="h5" sx={textStyle}>
            {date.month} / {date.year}
        </Typography>
    )
}
