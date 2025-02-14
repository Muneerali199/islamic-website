import { changeQuranPlayerLocalStorage } from "../../data/localStorage";
import { QuranPlayerBySurahsActionHandlers } from "../types";

const quranPlayerBySurahsReducerActions: QuranPlayerBySurahsActionHandlers = {
    'surahs/nextSurah': (state) => {
        if (state.bySurahs.surahNumber < 114) {
            state.bySurahs.surahNumber += 1;
        } else {
            state.bySurahs.surahNumber = 1;
        }
        changeQuranPlayerLocalStorage('bySurahs', 'surahNumber', state.bySurahs.surahNumber);
    },
    'surahs/setRecitationIndex': (state, action) => {
        state.bySurahs.recitationIndex = action.payload;
        changeQuranPlayerLocalStorage('bySurahs', 'recitationIndex', state.bySurahs.recitationIndex);
    },
    'surahs/setSurahNumber': (state, action) => {
        state.bySurahs.surahNumber = action.payload;
        changeQuranPlayerLocalStorage('bySurahs', 'surahNumber', state.bySurahs.surahNumber);
    }
}

export default quranPlayerBySurahsReducerActions;