import { Box, Typography } from "@mui/material";

type Props = {
    readonly text: string;
}

export default function TafsirContent({ text }: Props) {
    const outerStyle = {
        width: '100%',
        height: '100%',
    }
    const textStyle = {
        fontSize: '1.3rem',
        lineHeight: '2rem',
    }

    return (
        <Box sx={outerStyle}>
            <Typography sx={textStyle}>
                {text}
            </Typography>
        </Box>
    )
}
