import { Grid } from '@mui/material'
import homeContent from '../../../../data/home';
import Description from './Description';
import SectionNavigator from './SectionNavigator';
import ContentWithImage from '../../../ContentWithImage';

type Props = {
    readonly data: typeof homeContent.sections[number],
    readonly index: number
}

export default function HomeBodySection({ data, index }: Props) {
    return (
        <ContentWithImage
            isSectionHighlighted={index % 2 === 0}
            ImageComponent={data.SVGComponent}>
            <Grid item xs={12}>
                <Description description={data.description} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <SectionNavigator
                    targetURL={data.targetURL}
                    buttonText={data.buttonText} />
            </Grid>
        </ContentWithImage>
    )
}
