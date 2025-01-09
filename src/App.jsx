import { Loader, Header, Cursor, Home } from "./components";
const App = () => {
  return (
    <main className="w-full h-screen ">
      <Loader />
      <Cursor />
      <Header />
      <Home />
      <div className="bg-black w-full h-screen">hel</div>
    </main>
  );
};

export default App;
