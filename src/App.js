import { NavBar } from "./modules/common/components";
import Profile from "./modules/homepage/components/Profile";
import AwardWrapper from "./modules/homepage/components/AwardWrapper";

function App() {
  return (
    <div className="App bg-trivial-yellow-1 font-inter tracking-[-0.02em] flex flex-col w-screen h-screen">
      <NavBar />
      <Profile />
      <AwardWrapper />
    </div>
  );
}

export default App;
