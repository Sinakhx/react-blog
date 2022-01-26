export const zeroPad = (n: string | number): string => (n > 0 && n < 10 ? `0${n}` : `${n}`);
