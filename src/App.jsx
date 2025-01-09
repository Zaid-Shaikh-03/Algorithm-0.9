import { Loader, Header, Cursor, Home } from "./components";
import AboutUs from "./components/AboutUs";
import Lenis from "lenis";
const App = () => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
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
      <div className="bg-black w-full h-screen">hel</div>
    </main>
  );
};

export default App;
