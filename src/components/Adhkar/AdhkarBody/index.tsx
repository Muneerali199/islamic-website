import { useMemo, useState } from 'react'
import { useFetch, isError, isLoading, isSuccess } from '../../../custom-hooks'
import { getAdhkar } from '../../../apis'
import AdhkarCards from './AdhkarCards';
import AdhkarContent from './AdhkarContent';
import SpinnerLoading from '../../SpinnerLoading';
import ErrorAlert from '../../ErrorAlert';
import { AdhkarType, CardsValueType } from './types';
import { Box } from '@mui/material';

export default function AdhkarBody() {
    const { data, status } = useFetch<any>({ url: getAdhkar() }, []);
    const [chosenAdhkar, setChosenAdhkar] = useState('');
    const cardsValue: CardsValueType = useMemo(() => data ? Object.keys(data) : null, [data]);
    const adhkarContent = useMemo(() => {
        if (!data) return null;
        const content: AdhkarType = data[chosenAdhkar]?.flat();
        if (!content) return null;
        return content.filter((item) => item.content !== "stop");
    }, [data, chosenAdhkar]);

    return (
        <main>
            {isLoading(status) && <SpinnerLoading />}
            {isError(status) && <ErrorAlert />}
            {isSuccess(status) && cardsValue && (
                <Box>
                    <AdhkarCards
                        chosenAdhkar={chosenAdhkar}
                        setChosenAdhkar={setChosenAdhkar}
                        data={cardsValue} />
                    <AdhkarContent content={adhkarContent} />
                </ Box>
            )}
        </main>
    )
}
