import Facetile from "../components/Facetile";
import Seemore from "../components/seemore";
import Scrolldown from "../components/scrolldown";
import anime from "../assets/anime.png";

const Home = () => {
  return (
    <div className="">
      <section className="flex flex-1 items-center justify-between gap-12 gradient-mesh px-16 h-[100vh]">
          <div className="flex flex-col gap-4 max-w-md">
            <span className="text-sm font-semibold tracking-wide text-stone-500 uppercase font-body">
              Sup, welcome to my portfolio
            </span>
            <h1 className="text-3xl font-extrabold text-stone-800 font-heading">
              I'm Daniel Ziorammachukwu Iwuji
            </h1>
            <p className="text-base text-stone-700 leading-relaxed font-body">
              I used to want to save lives — turns out I just wanted to fix things
              that were broken, and code lets me do that without the pop quizzes
              on the Krebs cycle. Somewhere between med school and staring at a
              terminal at 2am wondering why my nav bar had three identical keys,
              I realized I'd found my actual thing.
            </p>
          </div>

          <div className="cursor-grab relative flex flex-col items-center">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-stone-800/80 px-3 py-1 text-xs text-white backdrop-blur-sm">
              Try clicking and dragging the card
            </span>
            <Facetile image={anime} Name="Ziora" note="Talented web developer" />
          </div>

          <div className="flex flex-col gap-6 max-w-xs">
            <h1 className="text-2xl font-extrabold text-stone-800 font-heading leading-snug">
              Wanna explore Home, or jump straight to my work?
            </h1>
            <div className="flex flex-row gap-4">
              <Seemore content="see more" />
              <Scrolldown content="scroll down" />
            </div>
          </div>
      </section> 
      <section className=" h-[200vh] bg-black/55 ">
        <header className=" flex justify-center ">
          <h1 className="text-2xl font-extrabold font-heading text-blue-500">
            welcome to my project display
          </h1>
        </header>
      </section>   
    </div>
  );
};

export default Home;