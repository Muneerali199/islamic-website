type ArabicPrayers = "الفجر" | "الظهر" | "العصر" | "المغرب" | "العشاء";

type APIHijriDate = {
    date: number;
    weekday: {
        ar: string;
    };
    month: {
        ar: string;
    };
    year: number;
};

type APIGregorianDate = {
    date: number;
};

type APIPrayerTimes = {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
};

type PrayerTimes = Record<ArabicPrayers, string>;

type HijriDate = {
    dateInNumbers: number;
    day: string;
    month: string;
    year: number;
};

type GregorianDate = {
    dateInNumbers: number;
};

type DateObject = {
    day: number;
    month: number;
    year: number;
};

export type {
    ArabicPrayers,
    APIHijriDate,
    APIGregorianDate,
    APIPrayerTimes,
    PrayerTimes,
    HijriDate,
    GregorianDate,
    DateObject,
};
