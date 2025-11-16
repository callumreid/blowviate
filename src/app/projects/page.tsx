export default function Page() {
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
      title: "FreakGPT",
      links: [
        { url: "https://github.com/callumreid/freakgpt", label: "github" },
        { url: "https://freakgpt.ai/", label: "visit" },
      ],
      description:
        "ever wish ChatGPT was just a lil freakier? of course you did. well here ya go, pig",
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
        { url: "https://github.com/callumreid/sayCast", label: "github" },
      ],
      description:
        "sayCast enable voice-based navigation of your computer command it without the ridiculously steep learning curve of previous software solutions. hold down a hotkey and use Wispr Voice-to-Text combined with a series of pre-built scripts (or add your own!) to control window management, open apps, set off processes in your terminal, and many moooooore!",
      wip: true,
    },
  ];

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
                  {project.title === "FreakGPT" && (
                    <img
                      src="/hub/hubglaze.png"
                      alt="glaze"
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
                  {project.title === "FreakGPT" && (
                    <img
                      src="/hub/hubglaze.png"
                      alt="glaze"
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
      </div>
    </div>
  );
}
