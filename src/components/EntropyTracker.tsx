"use client";

import { useState, useEffect, useCallback } from "react";

export interface EntropyState {
    score: number;
}

export const useEntropy = (decayRate = 0.02, increaseRate = 0.1) => {
    const [entropy, setEntropy] = useState(0);

    const handleInteract = useCallback(() => {
        setEntropy((prev) => Math.min(prev + increaseRate, 1.2)); // Allow slightly over 1 for "too much" movement
    }, [increaseRate]);

    useEffect(() => {
        const handleMouseMove = () => handleInteract();
        const handleScroll = () => handleInteract();
        const handleClick = () => handleInteract();
        const handleKeyDown = () => handleInteract();

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousedown", handleClick);
        window.addEventListener("keydown", handleKeyDown);

        const interval = setInterval(() => {
            setEntropy((prev) => Math.max(prev - decayRate, 0));
        }, 100);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousedown", handleClick);
            window.removeEventListener("keydown", handleKeyDown);
            clearInterval(interval);
        };
    }, [handleInteract, decayRate]);

    return entropy;
};

export default function EntropyTracker({ children }: { children: (entropy: number) => React.ReactNode }) {
    const entropy = useEntropy();

    return <>{children(entropy)}</>;
}
