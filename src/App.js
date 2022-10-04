import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./components/GamePage";
import HomePage from "./components/HomePage" ;

function App() {

  const key = "99cd09f6c33b42b5a24a9b447ee04a81"

  return (

<BrowserRouter>
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
  </Routes>
</BrowserRouter>
);

}

export default App;
