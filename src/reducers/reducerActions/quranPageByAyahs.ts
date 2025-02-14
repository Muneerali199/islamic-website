import { changeQuranPlayerLocalStorage } from "../../data/localStorage";
import { QuranPlayer, QuranPlayerByAyahsAction } from "../../types";
import { QuranPlayerByAyahsActionHandlers, QuranPlayerByAyahsActionValue } from "../types";

const quranPlayerByAyahsReducerActions: QuranPlayerByAyahsActionHandlers = {
    'ayahs/nextPage': (state) => {
        if (state.byAyahs.currentPage < 604) {
            state.byAyahs.currentPage += 1;
        } else {
            state.byAyahs.currentPage = 1;
        }
        changeQuranPlayerLocalStorage('byAyahs', 'currentPage', state.byAyahs.currentPage);
    },
    'ayahs/previousPage': (state: QuranPlayer) => {
        if (state.byAyahs.currentPage > 1) {
            state.byAyahs.currentPage -= 1;
        } else {
            state.byAyahs.currentPage = 604;
        }
        changeQuranPlayerLocalStorage('byAyahs', 'currentPage', state.byAyahs.currentPage);
    },
    'ayahs/setCurrentPage': (state, action) => {
        if (action.payload > 0 && action.payload < 605) {
            state.byAyahs.currentPage = action.payload;
        }
        changeQuranPlayerLocalStorage('byAyahs', 'currentPage', state.byAyahs.currentPage);
    },
    'ayahs/setCurrentSurahNumber': (state, action) => {
        state.byAyahs.currentSurahNumber = action.payload;
        changeQuranPlayerLocalStorage('byAyahs', 'currentSurahNumber', state.byAyahs.currentSurahNumber);
    },
    'ayahs/setEndAyahPage': (state, action) => {
        state.byAyahs.endAyahPage = action.payload;
        changeQuranPlayerLocalStorage('byAyahs', 'endAyahPage', state.byAyahs.endAyahPage);
    },
    'ayahs/setActiveAyah': (state, action) => {
        state.byAyahs.activeAyah = action.payload;
    },
    'ayahs/nextActiveAyah': (state) => {
        if (state.byAyahs.activeAyah && state.byAyahs.endAyahPage && (state.byAyahs.activeAyah < state.byAyahs.endAyahPage)) {
            state.byAyahs.activeAyah += 1;
        } else {
            const nextPageAction: QuranPlayerByAyahsActionValue<QuranPlayerByAyahsAction['type']> = { type: 'ayahs/nextPage' } as const;
            quranPlayerByAyahsReducerActions["ayahs/nextPage"](state, nextPageAction);
        }
    },
    'ayahs/toggleAudioPlaying': (state) => {
        state.byAyahs.isAudioPlaying = !state.byAyahs.isAudioPlaying;
    },
    'ayahs/setAudioPlaying': (state, action) => {
        state.byAyahs.isAudioPlaying = action.payload;
    },
    'ayahs/setRecitation': (state, action) => {
        state.byAyahs.recitation = action.payload;
        changeQuranPlayerLocalStorage('byAyahs', 'recitation', state.byAyahs.recitation);
    }
}

export default quranPlayerByAyahsReducerActions;