import { Header } from "../components/Header";
import { Title } from "../components/Title";

import { AnimatedDiv } from "../../../shared/ui/AnimatedDiv";

function Home() {
  return (
    <AnimatedDiv classes="flex min-h-screen w-screen flex-col bg-neutral-900 bg-gradient-to-t from-neutral-900 to-black/96 text-violet-100">
      <Header />
      <Title />
      <div className="mx-auto mt-10 flex w-[80%] flex-col gap-4">
        <div className="rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2">
          Complete this project for the weekend
        </div>
        <div className="rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2">
          Complete this project for the weekend
        </div>
        <div className="rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2">
          Complete this project for the weekend
        </div>
      </div>
    </AnimatedDiv>
  );
}

export { Home };
