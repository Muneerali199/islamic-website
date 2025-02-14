import { Box, Container, Typography } from '@mui/material';
import AdhkarContentSection from './AdhkarContentSection'
import { nanoid } from 'nanoid';
import { memo } from 'react';
import { useThemeContext } from '../../../contexts/ThemeContext';
import { AdhkarType } from './types';

type Props = {
    readonly content: AdhkarType | null
}

function AdhkarContent({ content }: Props) {
    const { theme } = useThemeContext();
    const outerStyle = {
        py: 2
    }
    const adhkarContentOuterStyle = (index: number) => ({
        backgroundColor: index % 2 === 0 ? theme.colors.primary.fullLight : theme.colors.primary.contrastText,
        py: 4,
    });
    const adhkarContentContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '1rem',
    }
    const noAdhkarContentStyle = {
        textAlign: 'center',
        lineHeight: '1.6',
        color: theme.colors.primary.fullDark,
    }

    return (
        <Box sx={outerStyle}>
            {content ? content.map((item, index) => {
                return (
                    <Box
                        component='section'
                        key={nanoid()}
                        sx={adhkarContentOuterStyle(index)}>
                        <Container maxWidth="lg" sx={adhkarContentContainerStyle}>
                            <AdhkarContentSection data={item} />
                        </Container>
                    </Box>
                )
            }) : (
                <Typography variant="h6" component="h3" sx={noAdhkarContentStyle}>
                    اختر ذكراً من القائمة
                </Typography>
            )}
        </Box >
    )
}

export default memo(AdhkarContent);
