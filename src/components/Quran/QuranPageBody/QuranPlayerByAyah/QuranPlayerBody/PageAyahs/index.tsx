import { Fragment, memo, useMemo } from 'react'
import Ayah from './Ayah'
import { nanoid } from 'nanoid';
import Basmala from './Basmala';
import { checkPuttingBasmala, isFirstAyahInSurah, parseAyahFromBasmala } from './util';
import { Box, Breakpoint, Container, Divider } from '@mui/material';
import SurahName from './SurahName';
import { useThemeContext } from '../../../../../../contexts/ThemeContext';
import { QuranPage } from '../types';

type Props = {
    readonly ayahs: QuranPage['ayahs'];
    readonly containerMaxWidth: Breakpoint;
}

function PageAyahs({ ayahs, containerMaxWidth }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = useMemo(() => ({
        py: 2,
        borderStyle: 'solid',
        borderWidth: '0px 2px',
        borderColor: theme.colors.quranPlayer.dark,
        backgroundColor: theme.colors.primary.contrastText,
    }), [theme.colors]);

    return (
        <Box component='main' sx={outerStyle}>
            <Container maxWidth={containerMaxWidth} sx={{ textAlign: 'center' }}>
                {ayahs.map((ayah, index) => {
                    const isSurahWithBasmala = checkPuttingBasmala(ayah.numberInSurah, ayah.page);
                    const ayahText = isSurahWithBasmala ? parseAyahFromBasmala(ayah.text) : ayah.text;

                    return (
                        <Fragment key={nanoid()}>
                            {isFirstAyahInSurah(ayah.numberInSurah) && (
                                <>
                                    {/* Put divider in case of the ayah is the first one in surah and isn't the first ayah in the page */}
                                    {index ? <Divider /> : null}
                                    <SurahName surahName={ayah.surah.name} />
                                </>
                            )}

                            {isSurahWithBasmala && <Basmala />}

                            <Ayah
                                text={ayahText}
                                ayahNumber={ayah.number}
                                ayahNumberInSurah={ayah.numberInSurah}
                            />
                        </Fragment>
                    )
                })}
            </Container>
        </Box>
    )
}

export default memo(PageAyahs)