import { Typography } from '@mui/material'
import homeContent from '../../../data/home';

export default function HeaderTitle() {
    const outerStyle = {
        color: 'white',
        textAlign: 'center',
        mt: 3,
        lineHeight: 1.6,
    }
    return (
        <Typography
            className='ayah-font'
            variant='h4'
            sx={outerStyle}>
            {homeContent.header}
        </Typography>
    )
}
