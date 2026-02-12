"use client";

import EntropyTracker from "@/components/EntropyTracker";
import CrystallizedText from "@/components/CrystallizedText";
import { useState, useEffect } from "react";

export const runtime = 'edge';

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#0a0a0a]">
            <div className="max-w-2xl w-full space-y-24 text-center">
                <EntropyTracker>
                    {(entropy) => (
                        <>
                            <div className="space-y-4">
                                <CrystallizedText
                                    text="STILLNESS"
                                    entropy={entropy}
                                />
                                <div className="h-[1px] w-24 bg-white/10 mx-auto transition-all duration-1000"
                                    style={{ width: `${Math.max(24, 100 - entropy * 100)}%` }}
                                />
                            </div>

                            <div className="space-y-8">
                                <div className="text-sm font-extralight tracking-[0.3em] text-white/30 uppercase">
                                    Entropy: {(entropy * 100).toFixed(0)}%
                                </div>

                                <div className="p-12 border border-white/5 bg-white/[0.02] rounded-2xl zen-glow transition-all duration-1000"
                                    style={{
                                        borderColor: `rgba(255, 255, 255, ${Math.max(0.01, 0.1 - entropy * 0.1)})`,
                                        transform: `scale(${1 - entropy * 0.02})`
                                    }}>
                                    <div className="space-y-6">
                                        <p className="text-xl leading-relaxed">
                                            <CrystallizedText
                                                text="In the center of movement, there is stillness."
                                                entropy={entropy}
                                            />
                                        </p>
                                        <p className="text-sm text-white/40 italic">
                                            <CrystallizedText
                                                text="- T.S. Eliot (ish)"
                                                entropy={entropy}
                                            />
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs font-extralight tracking-widest text-white/20 uppercase animate-pulse">
                                    {entropy > 0.1 ? "Be still to reveal the message" : "You have found clarity"}
                                </p>
                            </div>
                        </>
                    )}
                </EntropyTracker>
            </div>
        </main>
    );
}
