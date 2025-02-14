import { nanoid } from "nanoid"
import { CSSProperties, useMemo } from "react";
import surahs from "../../../../../data/surahs";
import Surah from "./Surah";

export default function Surahs() {
    const outerStyle = useMemo((): CSSProperties => ({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px',
    }), []);

    return (
        <div style={outerStyle}>
            {surahs.map((surah) => {
                return (
                    <Surah
                        key={nanoid()}
                        surah={surah} />
                )
            })}
        </div>
    )
}
