"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export default function Page() {
  const [freakUnlocked, setFreakUnlocked] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === KONAMI_CODE[konamiIndex]) {
        const next = konamiIndex + 1;
        if (next === KONAMI_CODE.length) {
          setFreakUnlocked(true);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(next);
        }
      } else {
        setKonamiIndex(0);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex]);

  const projects = [
    {
      title: "GameOrchard",
      links: [
        { url: "https://github.com/callumreid/GameOrchard", label: "github" },
        { url: "https://www.gameorchard.beer/", label: "play" },
      ],
      description:
        "play GameOrchard, a real-time voice-to-voice AI powered game where you try and teach the child what happens after death, talk your way out of a ticket, and stand up to a bully! the AI judge (God) determines whether your response is worthy",
    },
    {
      title: "Reverso",
      links: [
        { url: "https://github.com/callumreid/reverso", label: "github" },
        { url: "https://reverso.lol/", label: "play" },
      ],
      description:
        "reverso is a game where you say something, reverso that son of a gun, listen to that, then try and say the reverso, then listen to reverso-reverso and see if it sounds like original thing! 10% ownership by Cyrah",
    },
    {
      title: "Trollilopolis",
      links: [{ url: "https://www.trollilopolis.com/", label: "play" }],
      description:
        "(click the trolley to start). chugga chugga motherfucker, it's time to choose - are you going to veer left or right? hone the skill of deciding who lives or who dies in a world where trollys is boss",
    },
    {
      title: "Cowboat",
      links: [
        { url: "https://github.com/callumreid/cowboat", label: "github" },
      ],
      description:
        "you know how pushing code all day to GitHub is fucking boring and terrible? well it doesn't have to be. with a quick `.zshrc` alias from the readme, set cows a sail every time that you push to remote in your terminal ! or just whenever you feel like it! easy install via Homebrew. pinky promise no malware",
    },
    {
      title: "What Are You?",
      links: [{ url: "https://what-are-you-nine.vercel.app/", label: "play" }],
      description:
        "like the magazine questionnaires of yore that helped you find out what type of dog breed you are (schnauser btw), play this with your friends to get down to the truth of what you are, no matter the category",
    },
    {
      title: "sayCast",
      links: [
        {
          url: "https://github.com/callumreid/sayCast/releases/tag/v0.1.0",
          label: "download",
        },
        { url: "https://github.com/callumreid/sayCast", label: "github" },
        {
          url: "brew tap callumreid/saycast",
          label: "brew tap",
        },
        {
          url: "brew install --cask saycast",
          label: "brew install",
        },
        { url: "saycast", label: "saycast" },
      ],
      description:
        "sayCast enable voice-based navigation of your computer command it without the ridiculously steep learning curve of previous software solutions. hold down a hotkey and use Wispr Voice-to-Text combined with a series of pre-built scripts (or add your own!) to control window management, open apps, set off processes in your terminal, and many moooooore!",
      wip: true,
    },
  ];

  const freakGPT = {
    title: "FreakGPT",
    links: [
      { url: "https://github.com/callumreid/freakgpt", label: "github" },
      { url: "https://freakgpt.ai/", label: "visit" },
    ],
    description:
      "ever wish ChatGPT was just a lil freakier? of course you did. well here ya go, pig",
  };

  return (
    <div className="space-y-8 text-center">
      <h1 className="text-3xl font-bold">what's clackin'?</h1>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-lg border-2 border-zinc-200 bg-white p-6 text-center flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex-1 w-full">
                <h3 className="font-semibold text-zinc-900 flex items-center justify-center gap-2 flex-wrap">
                  {project.title === "GameOrchard" && (
                    <>
                      <img
                        src="/hub/orchard_kiwi.png"
                        alt="kiwi"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/orchard_banana.png"
                        alt="banana"
                        className="w-6 h-6"
                      />

                      <img
                        src="/hub/orchard_starberry.png"
                        alt="strawberry"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/orchard_apple.png"
                        alt="apple"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/orchard_lemon.png"
                        alt="lemon"
                        className="w-6 h-6"
                      />
                    </>
                  )}
                  {project.title === "Reverso" && (
                    <>
                      <img
                        src="/hub/hubslurp.png"
                        alt="hubslurp"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/hubslurp.png"
                        alt="hubslurp"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/hubslurp.png"
                        alt="hubslurp"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/hubslurp.png"
                        alt="hubslurp"
                        className="w-6 h-6"
                      />
                    </>
                  )}
                  {project.title === "Trollilopolis" && (
                    <img
                      src="/hub/trolly.png"
                      alt="trolly"
                      className="w-6 h-6"
                    />
                  )}
                  {project.title === "Cowboat" && (
                    <img
                      src="/hub/henry_heiffer.png"
                      alt="henry"
                      className="w-6 h-6"
                    />
                  )}
                  {project.title === "What Are You?" && (
                    <img
                      src="/hub/fattyHubsInAmish.png"
                      alt="fatty"
                      className="w-6 h-6"
                    />
                  )}
                  {project.title === "sayCast" && (
                    <img
                      src="/hub/hubfootlong.png"
                      alt="footlong"
                      className="w-6 h-6"
                    />
                  )}
                  {project.title}
                  {project.title === "GameOrchard" && (
                    <>
                      <img
                        src="/hub/orchard_lemon.png"
                        alt="lemon"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/orchard_apple.png"
                        alt="apple"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/orchard_starberry.png"
                        alt="strawberry"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/orchard_banana.png"
                        alt="banana"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/orchard_kiwi.png"
                        alt="kiwi"
                        className="w-6 h-6"
                      />
                    </>
                  )}
                  {project.title === "Reverso" && (
                    <>
                      <img
                        src="/hub/hubslurp.png"
                        alt="hubslurp"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/hubslurp.png"
                        alt="hubslurp"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/hubslurp.png"
                        alt="hubslurp"
                        className="w-6 h-6"
                      />
                      <img
                        src="/hub/hubslurp.png"
                        alt="hubslurp"
                        className="w-6 h-6"
                      />
                    </>
                  )}
                  {project.title === "Trollilopolis" && (
                    <img
                      src="/hub/trolly.png"
                      alt="trolly"
                      className="w-6 h-6"
                    />
                  )}
                  {project.title === "Cowboat" && (
                    <img
                      src="/hub/henry_heiffer.png"
                      alt="henry"
                      className="w-6 h-6"
                    />
                  )}
                  {project.title === "What Are You?" && (
                    <img
                      src="/hub/fattyHubsInAmish.png"
                      alt="fatty"
                      className="w-6 h-6"
                    />
                  )}
                  {project.title === "sayCast" && (
                    <img
                      src="/hub/hubfootlong.png"
                      alt="footlong"
                      className="w-6 h-6"
                    />
                  )}
                  {project.wip && (
                    <span className="text-xs text-zinc-500 ml-2">(wip)</span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-500 hover:text-zinc-900 transition underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}

        {freakUnlocked && (
          <div className="relative rounded-lg border-2 border-red-900 bg-black p-6 text-center flex flex-col items-center overflow-hidden animate-[flicker_0.15s_ease-in-out_3]">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-transparent to-red-900/30 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)] pointer-events-none" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex-1 w-full">
                <h3 className="font-semibold text-red-500 flex items-center justify-center gap-2 flex-wrap animate-pulse">
                  <img
                    src="/hub/hubglaze.png"
                    alt="glaze"
                    className="w-6 h-6 saturate-0 brightness-75 hue-rotate-180"
                  />
                  <span className="tracking-widest" style={{ textShadow: "0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.5)" }}>
                    {freakGPT.title}
                  </span>
                  <img
                    src="/hub/hubglaze.png"
                    alt="glaze"
                    className="w-6 h-6 saturate-0 brightness-75 hue-rotate-180"
                  />
                </h3>
                <p className="mt-2 text-sm text-red-400/80 italic">
                  {freakGPT.description}
                </p>
              </div>
            </div>
            <div className="relative mt-3 flex flex-wrap gap-2">
              {freakGPT.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-red-600 hover:text-red-400 transition underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
