import {
  Loader,
  Header,
  Cursor,
  Home,
  AboutUs,
  TimeLine,
  Highlights,
} from "./components";
import Lenis from "lenis";
const App = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <main className="w-full h-screen ">
      <Loader />
      <Cursor />
      <Header />
      <Home />
      <AboutUs />
      <TimeLine />
      <Highlights />
      <div className="bg-black w-full h-screen">hel</div>
    </main>
  );
};

export default App;
