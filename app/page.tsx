export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-slate-400 font-sans dark:bg-slate-600">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-8 px-8 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Chance Carr Portfolio
          </h1>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-4 ring shadow-xl ring-ray-900/5">
          <h2 className="text-gray-900 dark:text-white mt-5 text-3xl font-medium tracking-tight">BYU Projects</h2>
          <ul className="list-disc list-inside pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
            <li>Capstone: 
              <a className="text-sky-500 hover:text-sky-700" href="https://github.com/Picolab/MCPforEXP"> MCP implementation</a> for
              <a className="text-sky-500 hover:text-sky-700" href="https://picolabs.io/"> Pico Labs</a>
            </li>
            <li>DevOps: jwt-pizza
              <ul className="list-[circle] list-inside pl-5">
                <li>Frontend Repo</li>
                <li>Backend Repo</li>
              </ul>
            </li>
            <li>Software Architecture: tweeter</li>
            <li>Web Development: "QuoteBoard" startup</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-4 ring shadow-xl ring-ray-900/5">
          <h2 className="text-gray-900 dark:text-white mt-5 text-3xl font-medium tracking-tight">Boot.dev Projects</h2>
          <ul className="list-disc list-inside pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
            <li>Asteroids</li>
            <li>Simple Coding AI Agent</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-4 ring shadow-xl ring-ray-900/5">
          <h2 className="ttext-gray-900 dark:text-white mt-5 text-3xl font-medium tracking-tight">Personal Projects</h2>
          <ul className="list-disc list-inside pl-5 mt-2 space-y-1 text-gray-500 dark:text-gray-400">
            <li>Baseball Simulator: BassBall</li>
            <li>More to come...</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
