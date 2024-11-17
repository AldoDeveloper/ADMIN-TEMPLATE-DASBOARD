export function shortEnMessage(message: string, maxLength: number) {
    if (message.length > maxLength) {
        return message.slice(0, maxLength) + '...';
    }
    return message;
}