import { NavBar } from "./modules/common/components";
import Profile from "./modules/homepage/components/Profile";

function App() {
  return (
    <div className="App bg-trivial-yellow-1 font-inter tracking-[-0.02em] flex flex-col w-screen h-screen">
      <NavBar />
      <Profile />
    </div>
  );
}

export default App;
