import { CSSProperties } from "react";

type Props = {
    readonly style?: CSSProperties;
    readonly mainColor: string;
}

function SurahNumberDecorationSVG({ style, mainColor }: Props) {
    const highDarkStyle = {
        fill: mainColor,
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 512 512"
            style={style}
        >
            <path d="M451.9 174.9 437 75l-99.8-14.9L256 0l-81.1 60.1L75 75l-14.9 99.8L0 256l60.1 81.1L75 437l99.8 14.9L256 512l81.1-60.1L437 437l14.9-99.8L512 256l-60.1-81.1zM256 492.6l-75-55.5-92.3-13.8-13.4-90-.4-2.3-55.5-75 54.1-73 1.4-2 13.8-92.3 90-13.4 2.3-.4 75-55.5 73 54.2 2 1.4 92.3 13.8 13.4 89.9.4 2.3 55.5 75-55.6 75-13.8 92.3-89.9 13.4-2.3.4-75 55.5z" style={highDarkStyle} />
        </svg>
    )
}

export default SurahNumberDecorationSVG