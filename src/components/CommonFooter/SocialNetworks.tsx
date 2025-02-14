import { Box } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Instagram } from "@mui/icons-material";
import { useMemo } from "react";

export default function SocialNetworks() {
    const containerStyle = useMemo(() => ({
        display: 'flex',
        mt: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
    }), []);
    return (
        <Box
            component="div"
            sx={containerStyle}>
            <a href="https://www.facebook.com/muneer.alisubzwari/" target="_blank" rel="noreferrer">
                <FacebookRoundedIcon />
            </a>

            <a href="https://www.linkedin.com/in/muneer-ali" target="_blank" rel="noreferrer">
                <LinkedInIcon />
            </a>
            <a href="https://www.instagram.com/Muneerali199" target="_blank" rel="noreferrer">
                <Instagram />
            </a>



            <a href="https://github.com/Muneerali199" target="_blank" rel="noreferrer">
                <GitHubIcon />
            </a>
        </Box>
    )
}
