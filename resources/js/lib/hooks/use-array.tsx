import { useState } from 'react';

export default function useArray<T>(defaultValue: T[]) {
    const [array, setArray] = useState<T[]>(defaultValue);

    function push(element: T) {
        setArray((a) => [...a, element]);
    }

    function filter(callback: (value: T, index: number, array: T[]) => boolean) {
        setArray((a) => a.filter(callback));
    }

    function update(index: number, newElement: T) {
        setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1)]);
    }

    function remove(index: number) {
        setArray((a) => [...a.slice(0, index), ...a.slice(index + 1)]);
    }

    function clear() {
        setArray([]);
    }

    function unshift(element: T) {
        setArray((a) => [element, ...a]);
    }

    function pop(): T | undefined {
        let popped: T | undefined;
        setArray((a) => {
            popped = a[a.length - 1];
            return a.slice(0, -1);
        });
        return popped;
    }

    function shift(): T | undefined {
        let shifted: T | undefined;
        setArray((a) => {
            shifted = a[0];
            return a.slice(1);
        });
        return shifted;
    }

    return {
        array,
        set: setArray,
        push,
        filter,
        update,
        remove,
        clear,
        unshift,
        pop,
        shift
    };
}
