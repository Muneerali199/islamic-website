import { Typography } from '@mui/material'
import homeContent from '../../../../data/home';
import { useMemo } from 'react';

type Props = Readonly<Pick<typeof homeContent.sections[number], 'description'>>;

export default function Description({ description }: Props) {
    const descriptionStyle = useMemo(() => ({
        textAlign: 'center',
        lineHeight: '1.7',
        fontSize: '1.8rem',
    }), []);

    return (
        <Typography
            sx={descriptionStyle}>
            {description}
        </Typography>
    )
}
