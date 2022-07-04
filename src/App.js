import { NavBar } from "./modules/common/components";
import Homepage from "./modules/homepage/routes/Homepage";

function App() {
  return (
    <div className="App bg-trivial-yellow-1 font-inter tracking-[-0.02em] flex-col flex items-center w-screen h-screen">
      <div className="w-[48.750rem] mt-3.5">
        <NavBar />
      </div>
      <Homepage />
    </div>
  );
}

export default App;
