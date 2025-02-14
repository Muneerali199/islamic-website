type BlurBackgroundProps = {
    readonly backgroundColor: string,
}

export default function BlurBackground({ backgroundColor }: BlurBackgroundProps) {
    return (
        <div style={{
            position: "absolute",
            backgroundColor: toRGBA(backgroundColor, 0.2),
            filter: "brightness(0.7)",
            backdropFilter: "blur(3px)",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
        }} />
    )
}

function toRGBA(color: string, alpha: number) {
    return `${color}${Math.round(alpha * 255).toString(16)}`;
}
