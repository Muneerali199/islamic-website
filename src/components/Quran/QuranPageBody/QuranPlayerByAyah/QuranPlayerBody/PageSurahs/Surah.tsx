import { Typography } from "@mui/material"
import { QuranPage } from "../types"
import { useThemeContext } from "../../../../../../contexts/ThemeContext";

type Props = {
    readonly name: QuranPage['surahs'][number]['name']
}

function Surah({ name }: Props) {
    const { theme } = useThemeContext();
    const textStyle = {
        color: theme.colors.quranPlayer.dark,
        fontSize: '1.1rem',
    }

    return (
        <Typography variant='body1' sx={textStyle}>
            {name}
        </Typography>
    )
}

export default Surah