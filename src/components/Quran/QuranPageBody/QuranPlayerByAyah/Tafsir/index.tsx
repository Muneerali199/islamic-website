import { useEffect, useMemo, useState } from 'react'
import { getAyahTafsir } from '../../../../../apis';
import { useFetch, isLoading, isSuccess, isError } from '../../../../../custom-hooks';
import TafsirContent from './TafsirContent';
import { Box, Breakpoint, Container, Typography } from '@mui/material';
import SpinnerLoading from '../../../../SpinnerLoading';
import TafsirHeader from './TafsirHeader';
import ErrorAlert from '../../../../ErrorAlert';
import { useThemeContext } from '../../../../../contexts/ThemeContext';
import { useQuranPlayerContext } from '../../../../../contexts/QuranPlayerContext';

type Props = {
    readonly containerMaxWidth: Breakpoint;
}

export default function Tafsir({ containerMaxWidth }: Props) {
    const { theme } = useThemeContext();

    const [tafsirURL, setTafsirURL] = useState<string>('');
    const { quranPlayerState: {
        byAyahs: quranPlayerState
    } } = useQuranPlayerContext();
    const { data, status } = useFetch<any>({ url: tafsirURL }, [tafsirURL]);

    useEffect(() => {
        if (!quranPlayerState.activeAyah) return;
        getAyahTafsir({ ayahNumber: quranPlayerState.activeAyah }).then(url => {
            setTafsirURL(url);
        });
    }, [quranPlayerState.activeAyah]);

    const outerStyle = useMemo(() => ({
        mt: 4,
        py: 4,
        backgroundColor: theme.colors.primary.fullLight,
    }), [theme.colors.primary]);
    const containerStyle = useMemo(() => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        width: '100%',
    }), []);
    const noContentTextStyle = useMemo(() => ({
        mb: 4,
        color: theme.colors.primary.fullDark,
    }), [theme.colors.primary]);

    return (
        <Box sx={outerStyle}>
            <Container maxWidth={containerMaxWidth} sx={containerStyle}>
                {!isLoading(status) && !data && (
                    <Box>
                        <Container maxWidth="lg">
                            <Typography variant="h5" sx={noContentTextStyle}>
                                {'اختر آية ليظهر تفسيرها'}
                            </Typography>
                        </Container>
                    </Box>
                )}
                {isLoading(status) && (
                    <Box>
                        <Container maxWidth="lg">
                            <SpinnerLoading />
                        </Container>
                    </Box>
                )}
                {isError(status) && tafsirURL && <ErrorAlert />}
                {isSuccess(status) && (
                    <>
                        <TafsirHeader
                            ayahText={data?.result.arabic_text}
                            ayahNumber={data?.result.aya} />
                        <TafsirContent text={data?.result.translation} />
                    </>
                )}
            </Container>
        </Box>
    )
}
