import { Helmet } from "react-helmet-async";
import AboutBody from "../components/About/AboutBody";
import ContainerWrap from "../components/ContainerWrap";

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>{'عنّي'}</title>
            </Helmet>
            <AboutBody />
        </>
    )
}

export default ContainerWrap(AboutPage, {})
