import { QuranPlayer, UserLocation } from "../types";

type LocalStorageKey = 'quranPlayer' | 'location';

type LocalStorageValue = QuranPlayer | UserLocation;

const setToLocalStorage = ({ key, value }: { key: LocalStorageKey, value: LocalStorageValue }) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getFromLocalStorage = (key: LocalStorageKey) => {
    return localStorage.getItem(key) as string;
}

const defaultValues: QuranPlayer = {
    byAyahs: {
        activeAyah: null,
        endAyahPage: null,
        currentPage: 1,
        currentSurahNumber: 1,
        isAudioPlaying: false,
        recitation: 'AbdulBaset_Mujawwad',
    },
    bySurahs: {
        recitationIndex: 0,
        surahNumber: 1,
    }
}

const getQuranPlayerLocalStorage = () => {
    const quranPlayer: QuranPlayer = JSON.parse(getFromLocalStorage('quranPlayer'));
    if (!checkCorrectLocalStorage(quranPlayer)) {
        setToLocalStorage({ key: 'quranPlayer', value: defaultValues });
        return defaultValues;
    }
    return quranPlayer;
}

function checkCorrectLocalStorage(data: QuranPlayer) {
    return data?.byAyahs && data?.bySurahs;
}

const changeQuranPlayerLocalStorage = <K extends keyof QuranPlayer>(
    page: K,
    key: keyof QuranPlayer[K],
    value: QuranPlayer[K][keyof QuranPlayer[K]]
) => {
    const quranPlayerLocalStorage: QuranPlayer = JSON.parse(getFromLocalStorage('quranPlayer'));
    quranPlayerLocalStorage[page][key] = value;
    setToLocalStorage({ key: 'quranPlayer', value: quranPlayerLocalStorage });
}

const setUserLocationLocalStorage = async () => {
    if (!getFromLocalStorage('location')) {
        const URL = "https://ipinfo.io/41.44.83.12?token=87c42456f0ae82";
        let result = await (await (fetch(URL))).json();
        let [latitude, longitude] = result.loc.split(",");
        let userLocation: UserLocation = {
            latitude,
            longitude
        };
        setToLocalStorage({ key: 'location', value: userLocation });
    }
}

const getUserLocationLocalStorage = () => {
    return JSON.parse(getFromLocalStorage('location'));
}

export {
    getQuranPlayerLocalStorage,
    changeQuranPlayerLocalStorage,
    setUserLocationLocalStorage,
    getUserLocationLocalStorage
}