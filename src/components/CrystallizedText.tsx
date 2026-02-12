"use client";

import React from "react";
import { motion } from "framer-motion";

interface CrystallizedTextProps {
    text: string;
    entropy: number;
}

export default function CrystallizedText({ text, entropy }: CrystallizedTextProps) {
    // Scramble text function
    const scrambledText = React.useMemo(() => {
        if (entropy < 0.1) return text;

        return text.split("").map((char) => {
            if (char === " ") return " ";
            if (Math.random() < entropy * 0.8) {
                const chars = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
                return chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return char;
        }).join("");
    }, [text, entropy]);

    // Visual effects based on entropy
    const blurAmount = entropy * 12;
    const opacity = Math.max(0.1, 1 - entropy * 0.5);
    const scale = 1 + entropy * 0.05;

    return (
        <motion.span
            style={{
                filter: `blur(${blurAmount}px)`,
                opacity: opacity,
            }}
            animate={{
                scale: scale,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block"
        >
            <span className="font-light tracking-widest text-white/90">
                {scrambledText}
            </span>
        </motion.span>
    );
}
