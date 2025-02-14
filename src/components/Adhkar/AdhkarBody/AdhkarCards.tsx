import { memo } from 'react'
import AdhkarCard from './AdhkarCard'
import { Box, Container, Grid } from '@mui/material'
import { nanoid } from 'nanoid'

type Props = {
    readonly data: string[],
    readonly chosenAdhkar: string,
    readonly setChosenAdhkar: (value: string) => void
}

function AdhkarCards({ data, chosenAdhkar, setChosenAdhkar }: Props) {
    const outerStyle = { flexGrow: 1, pb: 3 };

    return (
        <Box component="main" sx={outerStyle}>
            <Container maxWidth="lg">
                <Grid container sx={{
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    '& > *': {
                        flexGrow: 1,
                    }
                }} spacing={2}>
                    {data.map((item) => {
                        return (
                            <Grid item key={nanoid()} >
                                <AdhkarCard
                                    cardData={item}
                                    isChosen={item === chosenAdhkar}
                                    setChosenAdhkar={setChosenAdhkar} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}

export default memo(AdhkarCards)