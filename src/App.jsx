import { Loader, Header, Cursor, Home } from "./components";
const App = () => {
  return (
    <main className="w-full h-screen ">
      <Loader />
      <Cursor />
      <Header />
      <Home />
    </main>
  );
};

export default App;
