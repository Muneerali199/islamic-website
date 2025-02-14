type Props = {
    readonly color: string;
}

export default function HorizontalLine({ color }: Props) {
    return (
        <div style={{
            width: '100%',
            borderBottom: `2px solid ${color}`,
            margin: 'auto',
            flex: 1,
        }}></div>
    )
}
