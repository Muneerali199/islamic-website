import { useState } from "react";
import PageSelectors from "./PageSelectors";
import QuranPlayerByAyah from "./QuranPlayerByAyah";
import QuranPlayerBySurah from "./QuranPlayerBySurah";
import { QuranPlayerPagesState } from "./types";
import QuranPlayerContext from '../../../contexts/QuranPlayerContext';


export default function QuranPageBody() {
    const [selectedPage, setSelectedPage] = useState<QuranPlayerPagesState>('QuranPlayerByAyah');

    return (
        <>
            <PageSelectors
                containerMaxWidth='xl'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
            <QuranPlayerContext>
                {selectedPage === 'QuranPlayerByAyah' && <QuranPlayerByAyah />}
                {selectedPage === 'QuranPlayerBySurah' && <QuranPlayerBySurah />}
            </QuranPlayerContext>
        </>
    )
}
