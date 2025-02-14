import { nanoid } from 'nanoid';
import homeContent from '../../../data/home';
import HomeBodySection from './HomeBodySection';

export default function HomeBodySections() {
    return (
        <>
            {homeContent.sections.map((data, index) =>
            (<HomeBodySection
                key={nanoid()}
                index={index}
                data={data} />)
            )}
        </>
    )
}
