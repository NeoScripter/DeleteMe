import { useMemo, useState } from 'react';
import { BlockType } from '../types/cmsBlock';

export function useBlockRangeCount(prefix: string, blocks: BlockType) {
    const defaultCount = useMemo(() => {
        const regex = new RegExp(`^${prefix}(\\d+)$`);
        const matchingKeys = Object.keys(blocks).filter((key) => regex.test(key));
        return matchingKeys.length > 0 ? matchingKeys.length : 1;
    }, [prefix, blocks]);

    const [count, setCount] = useState(defaultCount);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

    return {
        value: count,
        increment,
        decrement,
    };
}
