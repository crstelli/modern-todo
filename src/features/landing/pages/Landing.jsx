import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

function Landing() {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center gap-6 overflow-hidden bg-gradient-to-t from-neutral-900 to-black/96 text-violet-100/75">
      <Header />
      <Button />
      <Footer />
      <div className="absolute -top-[500px] -right-[300px] aspect-square w-[600px] rotate-30 rounded-full border-4 border-violet-400 bg-gradient-to-br from-neutral-950 to-neutral-900"></div>
    </div>
  );
}

export { Landing };
