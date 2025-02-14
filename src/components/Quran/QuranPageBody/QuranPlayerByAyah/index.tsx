import QuranPlayerHeader from './QuranPlayerHeader'
import QuranPlayerBody from './QuranPlayerBody'
import QuranPlayerFooter from './QuranPlayerFooter';
import { useMemo } from 'react';
import Tafsir from './Tafsir';
import { Box, Breakpoint, Container } from '@mui/material';

export default function QuranPlayerByAyah() {
    const containerMaxWidth = useMemo((): Breakpoint => 'xl', []);

    return (
        <Box component='main'>
            <Container maxWidth={containerMaxWidth}>
                <QuranPlayerHeader containerMaxWidth={containerMaxWidth} />
                <QuranPlayerBody containerMaxWidth={containerMaxWidth} />
                <QuranPlayerFooter containerMaxWidth={containerMaxWidth} />
            </Container>
            <Tafsir containerMaxWidth={containerMaxWidth} />
        </Box>
    )
}
