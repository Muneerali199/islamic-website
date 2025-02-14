import { useThemeContext } from "../../../../contexts/ThemeContext";
import { Typography } from "@mui/material";

type Props = {
    readonly text: string;
    readonly onClick: () => void;
    readonly isSelected: boolean;
}

export default function Selector({ text, onClick, isSelected }: Props) {
    const { theme } = useThemeContext();

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLParagraphElement>) => {
        if (e.key === 'Enter') {
            onClick();
        }
    }
    const textStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '1rem 0.5rem',
        borderRadius: '1rem',
        cursor: 'pointer',
        transition: theme.transition,
        backgroundColor: isSelected ? theme.colors.primary.main : theme.colors.primary.fullLight,
        color: isSelected ? theme.colors.primary.contrastText : theme.colors.primary.fullDark,
        border: `2px solid ${theme.colors.primary.fullDark}`,
        filter: theme.dropShadow,
        flex: '1',
        "&:hover": {
            backgroundColor: theme.colors.primary.main,
            color: theme.colors.primary.contrastText,
        }
    }

    return (
        <Typography
            sx={textStyle}
            tabIndex={0}
            onClick={onClick}
            onKeyDown={onKeyDownHandler}>
            {text}
        </Typography >
    )
}
