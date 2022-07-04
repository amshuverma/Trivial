import { NavBar } from "./modules/common/components";
import Homepage from "./modules/homepage/routes/homepage";

function App() {
  return (
    <div className="App bg-trivial-yellow-1 font-inter tracking-[-0.02em] flex flex-col w-screen h-screen">
      <NavBar />
      <Homepage />
    </div>
  );
}

export default App;
