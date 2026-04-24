export function adjustHexColor(hex: string, percent: number): string {
    // percent: positivo clareia | negativo escurece
    const cleanHex = hex.replace('#', '');
    const num = parseInt(cleanHex, 16);

    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;

    r = Math.min(255, Math.max(0, Math.round(r + 255 * percent)));
    g = Math.min(255, Math.max(0, Math.round(g + 255 * percent)));
    b = Math.min(255, Math.max(0, Math.round(b + 255 * percent)));

    return (
        '#' +
        ((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16)
            .slice(1)
    );
}