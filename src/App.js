import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./modules/login/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="App bg-trivial-yellow-1 font-inter tracking-[-0.02em] flex-col flex items-center w-screen h-screen">
  <div className="w-[48.750rem] mt-3.5">
    <NavBar />
  </div>
  <Homepage />
</div>; */
}
