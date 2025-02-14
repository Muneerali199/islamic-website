import { Box, Container, Grid } from '@mui/material'
import { useMemo } from 'react'
import SVGComponent from './SVGComponent';
import { useThemeContext } from '../../contexts/ThemeContext';
import YoungMuslimWithQuranSVG from '../SVGs/YoungMuslimWithQuran';

type Props = {
    readonly isSectionHighlighted: boolean;
    readonly ImageComponent: typeof YoungMuslimWithQuranSVG;
    readonly children: React.ReactNode;
}

function ContentWithImage({
    isSectionHighlighted,
    ImageComponent,
    children
}: Props) {
    const { theme } = useThemeContext();
    const sectionStyle = useMemo(() => ({
        py: 8,
        backgroundColor: isSectionHighlighted ? theme.colors.primary.fullLight : 'transparent',
    }), [theme.colors.primary, isSectionHighlighted]);
    const sectionContentStyle = useMemo(() => ({
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }), []);

    return (
        <Box
            component='section'
            sx={sectionStyle}>
            <Container maxWidth='lg' >
                <Grid container spacing={2} sx={sectionContentStyle}>
                    <Grid item xs={12} md={4}>
                        <SVGComponent Component={ImageComponent} />
                    </Grid>
                    <Grid
                        item container
                        rowSpacing={3} xs={12} md={8}
                        sx={sectionContentStyle}>
                        {children}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ContentWithImage;
