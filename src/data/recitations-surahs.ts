const recitationsBySurah = [
    {
        name: "الحصري",
        style: null,
        getSurahURL: (surahNumber: number) => `https://muqri.com/audio/alhusari/mp3/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "العفاسي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "عبدالباسط",
        style: "مرتل",
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/abdul_basit_murattal/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "عبدالباسط",
        style: "مجود",
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/abdulbaset_mujawwad/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "أبو بكر الشاطري",
        style: null,
        getSurahURL: (surahNumber: number) => `https://muqri.com/audio/alshatiri/mp3/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "المنشاوي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/muhammad_siddeeq_al-minshaawee/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "المنشاوي",
        style: "مجود",
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/minshawi_mujawwad/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "ناصر القطامي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/nasser_bin_ali_alqatami/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "توفيق بن سعيد الصائغ",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/tawfeeq_bin_saeed-as-sawaaigh/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "خليفة الطنيجي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://server12.mp3quran.net/tnjy/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "أكرم العلاقمي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/akram_al_alaqmi/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "فارس عباد",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/fares/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "هاني الرفاعي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/rifai/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "محمود علي البنا",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/mahmood_ali_albana/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "الطبلاوي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/mohammad_altablawi/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "محمد جبريل",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/muhammad_jibreel/complete/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "مصطفى بن رعد العزاوي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/mustafa_al3azzawi/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "صلاح الهاشم",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/salah_alhashim/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "وديع اليمني",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/wadee_hammadi_al-yamani/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "ياسر الدوسري",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/yasser_ad-dussary/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "عبد البارئ محمد",
        style: null,
        getSurahURL: (surahNumber: number) => `https://server12.mp3quran.net/bari/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "عبد الرحمن العوسي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://server6.mp3quran.net/aloosi/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "بندر بليله",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/bandar_baleela/complete/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "فاتح سفرجيك",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/fatih_seferagic/${formatSurahNumber(surahNumber)}.mp3`
    },
    {
        name: "ماهر المعيقلي",
        style: null,
        getSurahURL: (surahNumber: number) => `https://download.quranicaudio.com/quran/maher_almu3aiqly/year1440/${formatSurahNumber(surahNumber)}.mp3`
    }
]

function formatSurahNumber(surahNumber: number) {
    return surahNumber.toString().padStart(3, '0');
}

export default recitationsBySurah;