import { Box } from "@mui/material";
import { CSSProperties, FC, useMemo } from "react";
import YoungMuslimWithQuranSVG from "../SVGs/YoungMuslimWithQuran";
import Header from "./Header";

type Props = {
    readonly HeaderSVG?: typeof YoungMuslimWithQuranSVG
}

const ContainerWrap = (Component: FC, { HeaderSVG }: Props) => function HOC() {
    const containerStyle = useMemo((): CSSProperties => {
        return {
            minHeight: 'calc(100vh - 100px)',
            display: "flex",
            flexDirection: "column",
            paddingTop: "100px",
        }
    }, []);

    return (
        <Box sx={containerStyle}>
            {HeaderSVG && <Header HeaderSVG={HeaderSVG} />}
            <Component />
        </Box>
    )
}

export default ContainerWrap