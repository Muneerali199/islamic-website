import recitations from "../../data/recitations-ayahs"
import { QuranPlayerByAyahsAction } from "../../types"

const nextPage = (): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/nextPage'
    }
}

const previousPage = (): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/previousPage'
    }
}

const setCurrentPage = (page: number): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/setCurrentPage',
        payload: page
    }
}

const setCurrentSurahNumber = (surahNumber: number): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/setCurrentSurahNumber',
        payload: surahNumber
    }
}

const setActiveAyah = (ayah: number | null): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/setActiveAyah',
        payload: ayah
    }
}

const setEndAyahPage = (ayah: number): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/setEndAyahPage',
        payload: ayah
    }
}

const nextActiveAyah = (): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/nextActiveAyah'
    }
}

const toggleAudioPlaying = (): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/toggleAudioPlaying'
    }
}

const setAudioPlaying = (isPlaying: boolean): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/setAudioPlaying',
        payload: isPlaying
    }
}

const setRecitation = (receiter: keyof typeof recitations): QuranPlayerByAyahsAction => {
    return {
        type: 'ayahs/setRecitation',
        payload: receiter
    }
}

export {
    nextPage,
    previousPage,
    setCurrentPage,
    setCurrentSurahNumber,
    setActiveAyah,
    setEndAyahPage,
    nextActiveAyah,
    toggleAudioPlaying,
    setAudioPlaying,
    setRecitation
}