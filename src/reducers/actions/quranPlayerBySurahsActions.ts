import { QuranPlayerBySurahsAction } from "../../types"

const setSurahNumber = (surahNumber: number): QuranPlayerBySurahsAction => {
    return {
        type: 'surahs/setSurahNumber',
        payload: surahNumber
    }
}

const nextSurah = (): QuranPlayerBySurahsAction => {
    return {
        type: 'surahs/nextSurah'
    }
}

const setRecitationIndex = (index: number): QuranPlayerBySurahsAction => {
    return {
        type: 'surahs/setRecitationIndex',
        payload: index
    }
}

export {
    setSurahNumber,
    nextSurah,
    setRecitationIndex
}