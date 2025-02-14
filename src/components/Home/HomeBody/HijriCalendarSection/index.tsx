import { Box, Button, Grid } from '@mui/material'
import HijriCalendarHeaderSection from '../../../Hijri-Calendar/HijriCalendarHeaderSection'
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../../../contexts/ThemeContext';
import ContentWithImage from '../../../ContentWithImage';
import MasjidSVG from '../../../SVGs/Masjid';

export default function HijriCalendarSection() {
    const { theme } = useThemeContext();

    return (
        <ContentWithImage
            isSectionHighlighted={false}
            ImageComponent={MasjidSVG}>
            <Grid item xs={12}>
                <HijriCalendarHeaderSection />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Link
                        to='/hijri-calendar'
                        style={{
                            width: 'fit-content',
                        }}>
                        <Button
                            endIcon={<KeyboardDoubleArrowLeftRoundedIcon sx={{ mr: 2 }} />}
                            size="large"
                            sx={{
                                fontSize: '1.2rem',
                                color: theme.colors.primary.contrastText,
                                backgroundColor: theme.colors.primary.main,
                                '&:hover': {
                                    backgroundColor: theme.colors.primary.dark,
                                }
                            }}
                            variant="contained">
                            {'التقويم الهجري'}
                        </Button>
                    </Link>
                </Box>
            </Grid>
        </ContentWithImage>
    )
}
