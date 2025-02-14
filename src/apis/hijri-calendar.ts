import { getUserLocationLocalStorage, setUserLocationLocalStorage } from "../data/localStorage";

async function getDatesAndTimes(date: { day: number; month: number; year: number; }) {
    let fullDate = `${date.day}-${date.month}-${date.year}`;
    await setUserLocationLocalStorage();
    const location = getUserLocationLocalStorage();
    const URL = `https://api.aladhan.com/v1/timings/${fullDate}?latitude=${location.latitude}&longitude=${location.longitude}&method=5`;
    return URL;
}

function getHijriMonthDays({ month, year }: { month: number; year: number; }) {
    const URL = `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`;
    return URL;
}

export {
    getDatesAndTimes,
    getHijriMonthDays
};