import { requestAyahAudioQuranComAPI } from "../apis";

const recitations = {
    AbdulBaset_Mujawwad: {
        name: "عبد الباسط عبد الصمد",
        style: "مجود",
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(1, ayahNumber),
    },
    AbdulBaset_Murattal: {
        name: "عبد الباسط عبد الصمد",
        style: "مرتل",
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(2, ayahNumber),
    },
    Sudais: {
        name: "عبدالرحمن السديس",
        style: null,
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(3, ayahNumber),
    },
    Shatri: {
        name: "أبو بكر الشاطرى",
        style: null,
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(4, ayahNumber),
    },
    Rifai: {
        name: "هاني الرفاعي",
        style: null,
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(5, ayahNumber),
    },
    Husary: {
        name: "محمود خليل الحصري",
        style: null,
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(6, ayahNumber),
    },
    Husary_Muallim: {
        name: "محمود خليل الحصري",
        style: 'معلم',
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(12, ayahNumber),
    },
    Alafasy: {
        name: "مشاري راشد العفاسي",
        style: null,
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(7, ayahNumber),
    },
    Minshawi_Mujawwad: {
        name: "محمد صديق المنشاوي",
        style: 'مجود',
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(8, ayahNumber),
    },
    Minshawi_Murattal: {
        name: "محمد صديق المنشاوي",
        style: 'مرتل',
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(9, ayahNumber),
    },
    Shuraym: {
        name: "سعود الشريم",
        style: null,
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(10, ayahNumber),
    },
    Tablaway: {
        name: "محمد الطبلاوي",
        style: null,
        getAyahAudioURL: (ayahNumber: number) => requestAyahAudioQuranComAPI(11, ayahNumber),
    },
}

export default recitations;