import recitationsAyahs from '../data/recitations-ayahs';

type QuranPlayer = {
    byAyahs: {
        activeAyah: number | null,
        endAyahPage: number | null,
        currentPage: number,
        currentSurahNumber: number,
        isAudioPlaying: boolean,
        recitation: keyof typeof recitationsAyahs,
    },
    bySurahs: {
        recitationIndex: number,
        surahNumber: number,
    }
};

type UserLocation = {
    latitude: string,
    longitude: string
};

export {
    type QuranPlayer,
    type UserLocation,
}