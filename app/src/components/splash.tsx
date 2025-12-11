import { useEffect, useState } from "react";


export function SplashAnimation() {
    const max = 20;
    const character = "#";
    const [hashtags, setHashtags] = useState<string[]>([]);
    const [status, setStatus] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const [message, setMessage] = useState("😶‍🌫️ Carregando...");

    useEffect(() => {
        if (hashtags.length === 0) {
            setHashtags([character]);
            setStatus(false);
            setMessage("😶‍🌫️ Carregando...");
            const interval = setInterval(() => {
                setHashtags(prev => {
                    if (prev.length >= max) {
                        setStatus(true);
                        setMessage("🤯Sucesso!");
                        clearInterval(interval);
                        return prev;
                    }
                    return [...prev, character];
                });
            }, 65);
            return () => clearInterval(interval);
        }
    }, [hashtags.length]);

    useEffect(() => {
        setPercentage(Math.floor((hashtags.length / max) * 100));
    }, [hashtags.length, max]);

    return (
        <div className="flex items-center justify-center absolute z-50 bg-white text-black dark:bg-black dark:text-slate-300 text-center w-screen h-screen">
            <div>
                <div className="flex w-full space-x-2 items-center">
                    <div className="flex w-full relative items-center justify-between py-4">
                        <span>[</span>
                        <p className="text-left w-[20ch]">{hashtags.join('')}</p> {/* Change width if changing max value */}
                        <span className="ml-auto">]</span>
                    </div>
                    <p>{percentage}%</p>
                </div>
                <p className={`transition-all duration-200 ${status ? 'text-green-600' : 'text-black dark:text-slate-300'}`}>{message}</p>
            </div>
        </div>
    );
}