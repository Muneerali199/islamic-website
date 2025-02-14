import { Box, Container } from '@mui/material';
import { useFetch, isError, isLoading } from '../../custom-hooks';
import SpinnerLoading from '../SpinnerLoading';
import ErrorAlert from '../ErrorAlert';
import { useMemo } from 'react';
import { Data } from './types';
import BodyContent from './BodyContent';

export default function AboutBody() {
    const { data, status } = useFetch<Data>({ url: 'https://api.github.com/users/shawkyebrahim2514' }, []);
    const containerStyle = useMemo(() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
    }), []);

    return (
        <Box component='main'>
            <Container maxWidth='lg' sx={containerStyle}>
                {isError(status) && <ErrorAlert />}
                {isLoading(status) ? <SpinnerLoading /> : (
                    data && <BodyContent data={data} />
                )}
            </Container>
        </Box>
    );
}
