import ContainerWrap from '../components/ContainerWrap'
import QuranPageBody from '../components/Quran/QuranPageBody'
import { Helmet } from 'react-helmet-async'
import QuranKaremSVG from '../components/SVGs/QuranKarem'

function QuranPage() {
    return (
        <>
            <Helmet>
                <title>{'القرآن الكريم'}</title>
            </Helmet>
            <QuranPageBody />
        </>
    )
}

export default ContainerWrap(QuranPage, {
    HeaderSVG: QuranKaremSVG
})