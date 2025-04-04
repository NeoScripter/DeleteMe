import { useRef, useState } from 'react';
import useEventListener from './use-event-listener';

export function useScreenResize(screenSize: number) {
    const [isLarge, setIsLarge] = useState(() => window.innerWidth > screenSize);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEventListener('resize', () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setIsLarge(window.innerWidth > screenSize);
        }, 100);
    });

    return isLarge;
}
