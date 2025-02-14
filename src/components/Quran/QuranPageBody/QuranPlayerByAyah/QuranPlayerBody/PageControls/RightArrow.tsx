import { useMemo } from 'react'
import { Box } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

type Props = {
    readonly onCLickHandler: () => void;
    readonly style?: React.CSSProperties;
}

export default function RightArrow({
    onCLickHandler,
    style
}: Props) {
    const outerStyle = useMemo(() => ({
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        border: '2px solid',
        borderColor: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }), []);
    const iconStyle = useMemo(() => ({
        cursor: 'pointer',
        ...style
    }), [style]);

    return (
        <Box sx={outerStyle}>
            <KeyboardArrowRightRoundedIcon
                fontSize='medium'
                onClick={onCLickHandler}
                sx={iconStyle} />
        </Box>
    )
}
