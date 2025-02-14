function checkPuttingBasmala(ayahNumberInSurah: number, ayahPageNumber: number) {
    return (ayahNumberInSurah === 1 && ayahPageNumber !== 1 && ayahPageNumber !== 187);
}

function parseAyahFromBasmala(ayahText: string) {
    return ayahText.slice(38);
}

function isFirstAyahInSurah(ayahNumberInSurah: number) {
    return ayahNumberInSurah === 1;
}

export { checkPuttingBasmala, parseAyahFromBasmala, isFirstAyahInSurah }