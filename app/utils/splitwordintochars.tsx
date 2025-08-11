export function splitWordIntoChars(word: string): string[] {
    const chars: string[] = [];
    const regex = /[\s\S]/gu;
    let match;
    while ((match = regex.exec(word)) !== null) {
        chars.push(match[0]);
    }
    return chars;
}