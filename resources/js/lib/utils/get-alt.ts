export function getAlt<T>(alts: string[] | null | undefined, index: number, slides: T[]) {
    if (!Array.isArray(alts) || alts.length === 0) return '';
    const safeIndex = index % Math.max(1, Math.floor(slides.length / 2));
    return alts[safeIndex] ?? '';
}
