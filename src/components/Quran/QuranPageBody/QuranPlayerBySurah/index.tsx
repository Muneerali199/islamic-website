import { useEffect, useMemo, useState } from 'react';
import { Box, Breakpoint, Container } from '@mui/material';
import AudioPlayerBySurah from './AudioPlayerBySurah';
import Surahs from './Surahs';
import RecitationSelector from './RecitationSelector';
import recitationsBySurah from '../../../../data/recitations-surahs'
import { useQuranPlayerContext } from '../../../../contexts/QuranPlayerContext';

export default function QuranPlayerBySurah() {
    const containerMaxWidth = useMemo((): Breakpoint => 'xl', []);
    const [audioSrc, setAudioSrc] = useState<string | undefined>();
    const { quranPlayerState: {
        bySurahs: quranPlayerState
    } } = useQuranPlayerContext();

    useEffect(() => {
        setAudioSrc(recitationsBySurah[quranPlayerState.recitationIndex].getSurahURL(quranPlayerState.surahNumber));
    }, [quranPlayerState.recitationIndex, quranPlayerState.surahNumber]);

    return (
        <Box component='main'>
            <Container maxWidth={containerMaxWidth}>
                <RecitationSelector />
                <AudioPlayerBySurah
                    src={audioSrc}
                    containerMaxWidth={containerMaxWidth} />
                <Surahs />
            </Container>
        </Box>
    )
}
