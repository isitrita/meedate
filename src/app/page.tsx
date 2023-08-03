import { messages } from "@/data/messages";
import ApocalipseTourist from "../components/icons/ApocalipseTourist";
import EvilLips from "../components/icons/EvilLips";
import Heart from "../components/icons/Heart";
import Messages from "../components/Messages";
import MovingSVGs from "../components/MovingSvgs";

function EmulatedChat() {
  return (
    <div className="flex align-end flex-wrap">
      <div className="mb-40 width-300 height-400">
        <div className="animate-spin-slow max-w-[100px] max-h-[100px]">
          <ApocalipseTourist
            width="72"
            height="72"
            //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          />
        </div>
        <div className="animate-spin-slow max-w-[50px] max-h-[50px] easy-in animation-delay-[2000ms]">
          <ApocalipseTourist
            width="72"
            height="72"
            //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          />
        </div>
        <div className="animate-spin-slow max-w-[30px] max-h-[30px]">
          <ApocalipseTourist
            width="72"
            height="72"
            //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          />
        </div>
        <div className="animate-spin-slow max-w-[40px] max-h-[40px] animation-delay-[6600ms]">
          <ApocalipseTourist
            width="72"
            height="72"
            //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          />
        </div>
        <h1 className="text-2xl font-semibold">Уютно общайся</h1>
      </div>
    </div>
  );
}

function EmulatedChat2() {
  return (
    <div className="mb-40 m-w-350 min-h-400">
      <div className="py-10 px-5">
        <Messages messages={messages} />
      </div>
      <h1 className="text-2xl font-semibold">Уютно общайся</h1>
    </div>
  );
}

function Chats() {
  return (
    <div className="max-w-[200px] max-h-[200px] mb-30">
      <div className="relative grid grid-cols-3 gap-2 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <ApocalipseTourist
          width="72"
          height="72"
          //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        />
        <EvilLips
          width="72"
          height="72"
          //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        />
        <Heart
          width="72"
          height="72"
          //className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        />
      </div>
      <h1 className="text-2xl font-semibold">
        со своим матчем в теплом чятике
      </h1>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            By ritarita
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* <MovingSVGs /> */}
        {/* <EmulatedChat /> */}
        <Chats />
        <EmulatedChat2 />
      </div>
    </main>
  );
}
