import recitationsAyahs from "../data/recitations-ayahs";

type QuranPlayerByAyahsAction =
    | { type: 'ayahs/nextPage' }
    | { type: 'ayahs/previousPage' }
    | { type: 'ayahs/setCurrentPage'; payload: number }
    | { type: 'ayahs/setCurrentSurahNumber'; payload: number }
    | { type: 'ayahs/setEndAyahPage'; payload: number }
    | { type: 'ayahs/setActiveAyah'; payload: number | null }
    | { type: 'ayahs/nextActiveAyah' }
    | { type: 'ayahs/toggleAudioPlaying' }
    | { type: 'ayahs/setAudioPlaying'; payload: boolean }
    | { type: 'ayahs/setRecitation'; payload: keyof typeof recitationsAyahs };

type QuranPlayerBySurahsAction =
    | { type: 'surahs/setSurahNumber'; payload: number }
    | { type: 'surahs/nextSurah' }
    | { type: 'surahs/setRecitationIndex'; payload: number }

export type { QuranPlayerByAyahsAction, QuranPlayerBySurahsAction };