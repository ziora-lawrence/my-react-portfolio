import Facetile from "../components/Facetile";
import anime from "../assets/anime.png";

const Home = () => {
  return (
    <div className="flex flex-1 items-center shadow-2xl gradient-mesh">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-extrabold text-red-400">Sup welcome to my portfolio</h1>
      </div>
      <div>
        <Facetile className="item-center" image={anime} Name="Ziora" note="Talented web developer" />
      </div>
      <div>
        <h1>so do you wanna waste time playing around here or see more?</h1>
        <div>
          {/* see more and scroll down buttons*/}
        </div>
      </div>
    </div>
  );
};

export default Home;