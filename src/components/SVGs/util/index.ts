import { adjustBrightness } from '../../../contexts/util';

function darkenColor(color: string, percent: number) {
    return adjustBrightness(color, -percent / 100);
}

function lightenColor(color: string, percent: number) {
    return adjustBrightness(color, percent / 100);
}

const highDarkStyle = (color: string) => ({
    fill: darkenColor(color, 35),
})

const darkStyle = (color: string) => ({
    fill: darkenColor(color, 20)
})

const highlightStyle = (color: string) => ({
    fill: lightenColor(color, 40),
})

const lightStyle = (color: string) => ({
    fill: lightenColor(color, 20),
})

const borderStyle = (color: string) => ({
    fill: darkenColor(color, 20),
})

export {
    darkenColor,
    lightenColor,
}

export {
    highDarkStyle,
    darkStyle,
    highlightStyle,
    lightStyle,
    borderStyle,
}