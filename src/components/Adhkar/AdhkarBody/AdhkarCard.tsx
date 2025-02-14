import { memo, useCallback, useMemo } from 'react'
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { useThemeContext } from '../../../contexts/ThemeContext';

type Props = {
    readonly cardData: string,
    readonly isChosen: boolean,
    readonly setChosenAdhkar: (value: string) => void
}

function AdhkarCard({ cardData, isChosen, setChosenAdhkar }: Props) {
    const { theme } = useThemeContext();

    const handleClick = useCallback(() => {
        setChosenAdhkar(cardData);
    }, [setChosenAdhkar, cardData]);

    const cardStyle = useMemo(() => ({
        cursor: 'pointer',
        p: 2,
        textAlign: 'center',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isChosen ? theme.colors.primary.main : theme.colors.primary.fullLight,
        color: isChosen ? 'white' : theme.colors.primary.fullDark,
        transition: theme.transition,
        '&:hover': {
            backgroundColor: theme.colors.primary.light,
            color: theme.colors.primary.contrastText,
        },
    }), [theme.colors.primary, isChosen, theme.transition]);

    return (
        <Paper onClick={handleClick} sx={cardStyle} >
            <Typography variant="h6" component="div">
                {cardData}
            </Typography>
        </Paper>
    )
}

export default memo(AdhkarCard)
