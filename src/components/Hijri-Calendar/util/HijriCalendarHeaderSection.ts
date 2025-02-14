import {
    APIGregorianDate,
    APIHijriDate,
    APIPrayerTimes,
    GregorianDate,
    HijriDate,
    PrayerTimes,
} from "../types"


const parsePrayerTimes = (timings: APIPrayerTimes): PrayerTimes => {
    return {
        "الفجر": timings.Fajr,
        "الظهر": timings.Dhuhr,
        "العصر": timings.Asr,
        "المغرب": timings.Maghrib,
        "العشاء": timings.Isha,
    }
}

const parseHijriDate = (date: APIHijriDate): HijriDate => {
    return {
        dateInNumbers: date.date,
        day: date.weekday.ar,
        month: date.month.ar,
        year: date.year,
    }
}

const parseGregorianDate = (date: APIGregorianDate): GregorianDate => {
    return {
        dateInNumbers: date.date,
    }
}

const currentDate = {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
}

export { parsePrayerTimes, parseHijriDate, parseGregorianDate, currentDate };