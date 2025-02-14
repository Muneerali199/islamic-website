import { memo } from 'react';
import StopCircleRoundedIcon from '@mui/icons-material/StopCircleRounded';

type Props = {
    readonly handleStop: () => void;
    readonly commonColor: string;
}

function StopButton({ handleStop, commonColor }: Props) {
    const outerStyle = {
        cursor: 'pointer',
        color: commonColor,
    }

    return (
        <StopCircleRoundedIcon
            fontSize='large'
            onClick={handleStop} sx={outerStyle} />
    )
}

export default memo(StopButton);
