import YoungMuslimWithDoaaSVG from "../components/SVGs/YoungMuslimWithDoaa";
import YoungMuslimWithQuranSVG from "../components/SVGs/YoungMuslimWithQuran";

const homeSections = [
    {
        description: 'إِنَّ هَٰذَا ٱلۡقُرۡءَانَ يَهۡدِي لِلَّتِي هِيَ أَقۡوَمُ وَيُبَشِّرُ ٱلۡمُؤۡمِنِينَ ٱلَّذِينَ يَعۡمَلُونَ ٱلصَّٰلِحَٰتِ أَنَّ لَهُمۡ أَجۡرٗا كَبِيرٗا',
        buttonText: 'القرآن الكريم',
        targetURL: '/quran',
        SVGComponent: YoungMuslimWithQuranSVG
    },
    {
        description: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُواْ ٱذۡكُرُواْ ٱللَّهَ ذِكۡرٗا كَثِيرٗا',
        buttonText: 'الأذكار',
        targetURL: '/adhkar',
        SVGComponent: YoungMuslimWithDoaaSVG
    },
];

const homeContent = {
    header: 'كِتَٰبٌ أَنزَلۡنَٰهُ إِلَيۡكَ مُبَٰرَكٞ لِّيَدَّبَّرُوٓاْ ءَايَٰتِهِۦ وَلِيَتَذَكَّرَ أُوْلُواْ ٱلۡأَلۡبَٰبِ',
    sections: homeSections,
};

export default homeContent;