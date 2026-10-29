import { useEffect, useState } from "react";

// the content starts fading in when the splash starts fading out; the splash is removed after its fade
export const SPLASH_REVEAL_MS = 1850;
export const SPLASH_MS = 2800;
export const SPLASH_REDUCED_REVEAL_MS = 950;
export const SPLASH_REDUCED_MS = 1250;

const FILL_MS = 1800;
const FILL_REDUCED_MS = 800;

// dots along the track, the last one is the power pellet
const DOTS = Array.from({ length: 14 }, (_, i) => 8 + (i * 92) / 13);

export function Splash() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const duration = reduced ? FILL_REDUCED_MS : FILL_MS;
        const start = performance.now();
        let frame = 0;

        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            // ease-in-out keeps the movement readable as Pac-Man chomps along
            const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            setProgress(Math.round(eased * 100));
            if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <div
            className="splash"
            role="progressbar"
            aria-label="Carregando"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
        >
            <div className="pac-track">
                {DOTS.map((pos, i) => (
                    <span
                        key={pos}
                        className={`pac-dot${i === DOTS.length - 1 ? " pellet" : ""}${progress >= pos ? " eaten" : ""}`}
                        style={{ left: `${pos}%` }}
                    />
                ))}
                <span className="pac" style={{ left: `${progress}%` }}>
                    <span className="pac-half top" />
                    <span className="pac-half bottom" />
                </span>
            </div>
            <p className="splash-count">{progress}%</p>
        </div>
    );
}
