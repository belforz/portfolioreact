import type { LandingProps } from "../types/sections";

export function Landing(props: LandingProps) {
    const { content, transitions } = props;
    const showTransition = transitions?.active ?? true;

    return (
        <section className="min-h-[calc(100vh*0.80)] w-full flex justify-center mb-52" id="landing-page">
            <div className="flex flex-col items-center space-x-0 space-y-7 md:space-y-0 md:space-x-7 md:flex-row m-auto">
                <img
                    className={`w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms] ${showTransition ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                    src={content.portraitLink as string}
                    alt={content.name as string}
                />
                <div className="!mx-4 flex flex-col !space-y-2">
                    <p className={`text-lg lg:text-xl transition-all motion-reduce:transition-none duration-500 delay-[500ms] ${showTransition ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>{content.intro as string}</p>
                    <h1 className={`text-2xl lg:text-4xl font-bold transition-all motion-reduce:transition-none duration-500 delay-[550ms] ${showTransition ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>{content.name as string}</h1>
                    <p className={`text-sm lg:text-base text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-[600ms] ${showTransition ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>{content.message as string}</p>
                </div>
                
            </div>
        </section>
    );

}