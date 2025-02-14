import { Facebook, GitHub, LinkedIn, Instagram } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'

export default function Contacts() {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                justifyContent: 'space-evenly',
            }}>
            <IconButton
                target='_blank'
                href="https://www.facebook.com/muneer.alisubzwari">
                <Facebook />
            </IconButton>
            <IconButton
                target='_blank'
                href="https://www.instagram.com/Muneerali199">
                <Instagram />
            </IconButton>

           

            <IconButton
                target='_blank'
                href="https://www.linkedin.com/in/muneer-ali">
                <LinkedIn />
            </IconButton>

            <IconButton
                target='_blank'
                href="https://github.com/Muneerali199">
                <GitHub />
            </IconButton>
        </Stack>
    )
}
