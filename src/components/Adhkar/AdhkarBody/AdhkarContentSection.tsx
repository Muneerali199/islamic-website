import { Typography } from '@mui/material'
import AdhkarContentSectionCounter from './AdhkarContentSectionCounter'
import { useThemeContext } from '../../../contexts/ThemeContext';
import { AdhkarType } from './types';

type Props = {
    readonly data: AdhkarType[number]
}

export default function AdhkarContentSection({ data }: Props) {
    const { theme } = useThemeContext();
    const contentTextStyle = {
        textAlign: 'center',
        lineHeight: '1.6',
        color: theme.colors.primary.fullDark,
    }

    return (
        <>
            <Typography variant="h5" component="h3" sx={contentTextStyle}>
                {formatAdhkarContent(data.content)}
            </Typography>

            {data.description && (
                <Typography variant="body1" component="p" sx={contentTextStyle}>
                    {data.description}
                </Typography>
            )}

            <AdhkarContentSectionCounter initialCounter={+data.count} />
        </>
    )
}

function formatAdhkarContent(content: string) {
    return content.replace(/\\|n|'|,/g, "");
}