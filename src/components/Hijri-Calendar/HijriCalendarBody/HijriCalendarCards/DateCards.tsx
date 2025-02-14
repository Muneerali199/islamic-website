import { Grid } from '@mui/material'
import DateCard from './DateCard'
import { nanoid } from 'nanoid'
import { memo, useMemo } from 'react'
import { HijriCardData } from './types'

type Props = {
    readonly data: HijriCardData[],
}

function DateCards({ data }: Props) {
    const outerStyle = useMemo(() => ({
        mt: '0.5rem',
        textAlign: 'center',
    }), []);
    return (
        <Grid
            container rowSpacing={5} columnSpacing={2}
            sx={outerStyle}>
            {data.map((date) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={nanoid()}>
                    <DateCard key={nanoid()} date={date} />
                </Grid>
            ))}
        </Grid>
    )
}

export default memo(DateCards)

