import { Box } from '@mui/material'

export default function Background() {
    return (
        <Box
            sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: 'url(images/home-header.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(2px) brightness(0.7) contrast(1.2) sepia(0.8) hue-rotate(10deg)',
            }} />
    )
}
