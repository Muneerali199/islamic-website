import AdhkarBody from '../components/Adhkar/AdhkarBody'
import { Helmet } from 'react-helmet-async'
import ContainerWrap from '../components/ContainerWrap'
import YoungMuslimWithDoaaSVG from '../components/SVGs/YoungMuslimWithDoaa'

function AdhkarPage() {
    return (
        <>
            <Helmet>
                <title>{'الأذكار'}</title>
            </Helmet>
            <AdhkarBody />
        </>
    )
}

export default ContainerWrap(AdhkarPage, {
    HeaderSVG: YoungMuslimWithDoaaSVG
})
