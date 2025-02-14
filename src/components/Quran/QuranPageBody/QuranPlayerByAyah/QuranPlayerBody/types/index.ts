type QuranPage = {
    surahs: [{
        name: string;
    }];
    ayahs: [{
        number: number;
        numberInSurah: number;
        page: number;
        text: string;
        surah: {
            name: string;
        };
    }];
};

export type { QuranPage };