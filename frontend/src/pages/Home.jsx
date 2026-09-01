import Facetile from "../components/Facetile";
import anime from "../assets/hero.png";

const Home = () => {
  return (
    <div className="flex flex-1 bg-stone-100/70">
      <div className="flex justify-center items-center bg-amber-100 w-200">
          <h1 className="self-start p-8 text-3xl font-extrabold mt-50 text-red-400">Sup welcome to my portfolio</h1>
          {/* the facecard goes here*/}
          <Facetile image={anime} Name="Anime" note="A passionate anime enthusiast" />
      </div>
      

    </div>
  );
};

export default Home;
