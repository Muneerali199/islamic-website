export function formatTime(time: number) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    let result: string;
    result = hours ? `${formatTimeNumbers(hours)}:` : '';
    result += `${formatTimeNumbers(minutes)}:${formatTimeNumbers(seconds)}`;
    return result;
}

function formatTimeNumbers(time: number) {
    return time.toString().padStart(2, '0');
}