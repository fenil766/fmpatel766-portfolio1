import { useEffect, useState } from 'react';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

export const useKonamiCode = (callback: () => void) => {
    const [input, setInput] = useState<string[]>([]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const nextInput = [...input, e.key].slice(-KONAMI_CODE.length);
            setInput(nextInput);

            if (nextInput.join('') === KONAMI_CODE.join('')) {
                callback();
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [input, callback]);
};
