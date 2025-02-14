import { Box, Container } from "@mui/material";
import Phrase from "./Phrase";
import SocialNetworks from "./SocialNetworks";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useMemo } from "react";
import { PagePathes } from "../../types";
import { useMatch } from "react-router-dom";

export default function CommonFooter() {
    const { theme } = useThemeContext();
    const isQuranPageOpened = useMatch<any, PagePathes>("/quran");

    const containerStyle = useMemo(() => ({
        backgroundColor: theme.colors.primary.main,
        color: theme.colors.primary.contrastText,
        p: 2,
        textAlign: 'center',
        marginBottom: isQuranPageOpened ? '50px' : 0,
    }), [theme.colors.primary, isQuranPageOpened]);

    return (
        <Box component="footer" sx={containerStyle}>
            <Container maxWidth="lg">
                <Phrase />
                <SocialNetworks />
            </Container>
        </Box>
    )
}
