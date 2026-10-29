import { useEffect, useState } from "react";
import portfolio from "../portfolio";
import { NavBar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import {
  Splash,
  SPLASH_MS,
  SPLASH_REDUCED_MS,
  SPLASH_REVEAL_MS,
  SPLASH_REDUCED_REVEAL_MS,
} from "../components/splash";
import { Landing } from "../components/landing";
import { About } from "../components/about";
import { Experience } from "../components/workcard";
import { Project } from "../components/project";
import { Skills } from "../components/skills";
import { Education } from "../components/education";
import { Contact } from "../components/contact";
import { ChatMiniLeandro } from "../components/chatbot";
import { Footer } from "../components/footer";

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function MainView() {
  const { greeting, socialMediaLinks } = portfolio;
  const [showSplash, setShowSplash] = useState(true);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const reduced = reducedMotion();
    const reveal = setTimeout(() => setRevealed(true), reduced ? SPLASH_REDUCED_REVEAL_MS : SPLASH_REVEAL_MS);
    const remove = setTimeout(() => setShowSplash(false), reduced ? SPLASH_REDUCED_MS : SPLASH_MS);
    return () => {
      clearTimeout(reveal);
      clearTimeout(remove);
    };
  }, []);

  return (
    <>
      {showSplash && <Splash />}
      <div className={`page${revealed ? " in" : ""}`}>
      <NavBar />
      <Sidebar
        github={socialMediaLinks.github}
        linkedin={socialMediaLinks.linkedin}
        photography={socialMediaLinks.photography}
      />
      <Landing
        content={greeting}
        links={[
          { label: "GitHub", url: socialMediaLinks.github },
          { label: "LinkedIn", url: socialMediaLinks.linkedin },
          { label: "Currículo", url: greeting.resumeLink },
          { label: "Email", url: `mailto:${portfolio.contact.email}` },
        ]}
      />
      <main className="container">
        <About content={portfolio.about} />
        <Experience experiences={portfolio.experiences} />
        <Project photus={portfolio.photus} works={portfolio.works} archiveLink={portfolio.archiveLink} />
        <Skills skills={portfolio.skills} />
        <Education
          education={portfolio.education}
          certifications={portfolio.certifications}
          extras={portfolio.extras}
        />
        <Contact content={portfolio.contact} />
      </main>
      <Footer />
      <ChatMiniLeandro />
      </div>
    </>
  );
}
