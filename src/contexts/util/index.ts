import tinycolor from 'tinycolor2';

function adjustBrightness(color: string, amount: number): string {
    let hsl = tinycolor(color).toHsl();
    hsl.l += amount;
    return tinycolor(hsl).toString();
}

function adjustSaturation(color: string, amount: number): string {
    let hsl = tinycolor(color).toHsl();
    hsl.s += amount;
    return tinycolor(hsl).toString();
}

function getLightColor(color: string): string {
    return adjustBrightness(color, 0.07);
}

function getFullLightColor(color: string): string {
    let hsl = tinycolor(color).toHsl();
    hsl.l = 0.92;
    hsl.s = 100;
    return tinycolor(hsl).toString();
}

function getDarkColor(color: string): string {
    return adjustBrightness(color, -0.07);
}

function getFullDarkColor(color: string): string {
    let hsl = tinycolor(color).toHsl();
    hsl.l = 0.1;
    return tinycolor(hsl).toString();
}

export {
    getLightColor,
    getFullLightColor,
    getDarkColor,
    getFullDarkColor,
    adjustBrightness,
    adjustSaturation,
}