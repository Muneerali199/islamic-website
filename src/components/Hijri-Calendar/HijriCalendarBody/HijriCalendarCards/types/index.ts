type HijriCardData = {
    readonly hijri: {
        readonly date: string,
        readonly weekday: {
            readonly ar: string,
        },
        readonly month: {
            readonly ar: string,
        },
        readonly year: string,
    },
    readonly gregorian: {
        readonly date: string,
    }
};

export type { HijriCardData };