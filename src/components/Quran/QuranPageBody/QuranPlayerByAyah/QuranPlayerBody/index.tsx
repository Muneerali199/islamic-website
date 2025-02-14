import { memo, useEffect, useMemo } from 'react'
import { useFetch, isLoading, isSuccess, isError } from '../../../../../custom-hooks';
import { getPageAyahs } from '../../../../../apis';
import PageSurahs from './PageSurahs';
import PageAyahs from './PageAyahs';
import PageControls from './PageControls';
import { setActiveAyah, setEndAyahPage, setCurrentSurahNumber } from '../../../../../reducers/actions/quranPlayerByAyahsActions';
import { Box, Breakpoint, Container } from '@mui/material';
import SpinnerLoading from '../../../../SpinnerLoading';
import ErrorAlert from '../../../../ErrorAlert';
import { useQuranPlayerContext } from '../../../../../contexts/QuranPlayerContext';

type Props = {
    readonly containerMaxWidth: Breakpoint
}

function QuranPlayerBody({ containerMaxWidth }: Props) {
    const { quranPlayerState: {
        byAyahs: quranPlayerState
    }, dispatchQuranPlayerState } = useQuranPlayerContext();
    const pageURL = useMemo(() => getPageAyahs(quranPlayerState.currentPage), [quranPlayerState.currentPage]);
    const { data, status } = useFetch<any>({ url: pageURL }, [pageURL]);

    useEffect(() => {
        if (!data) return;
        const firstAyahPageNumber: number = data.data.ayahs[0].number;
        const lastAyahPageNumber: number = data.data.ayahs[data.data.ayahs.length - 1].number;
        const firstSurahNumber: number = data.data.ayahs[0].surah.number;

        // This will make sure that the current marked surah option is the chosen one not the first one in the page as the page can contains more than one surah
        const isCurrentSurahNumberModified = Object.keys(data.data.surahs).find((surahNumber) => {
            return parseInt(surahNumber) === quranPlayerState.currentSurahNumber;
        });

        if (!isCurrentSurahNumberModified) {
            dispatchQuranPlayerState(setCurrentSurahNumber(firstSurahNumber));
        }

        if (quranPlayerState.isAudioPlaying) {
            dispatchQuranPlayerState(setActiveAyah(firstAyahPageNumber));
        } else {
            dispatchQuranPlayerState(setActiveAyah(null));
        }

        dispatchQuranPlayerState(setEndAyahPage(lastAyahPageNumber));
    }, [data, dispatchQuranPlayerState, quranPlayerState.currentSurahNumber]);

    return (
        <Box component='main'>
            {isLoading(status) && (
                <Container maxWidth={containerMaxWidth}>
                    <SpinnerLoading />
                </Container>
            )}
            {isError(status) && (
                <Container maxWidth={containerMaxWidth}>
                    <ErrorAlert />
                </Container>
            )}
            {isSuccess(status) && (
                <>
                    <PageSurahs containerMaxWidth={containerMaxWidth} surahs={data.data.surahs} />
                    <PageAyahs containerMaxWidth={containerMaxWidth} ayahs={data.data.ayahs} />
                    <PageControls containerMaxWidth={containerMaxWidth} />
                </>
            )}
        </Box>
    )
}

export default memo(QuranPlayerBody);