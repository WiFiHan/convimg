import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./routes/MainPage";
import ViewPage from "./routes/ViewPage";

function App() {


  return (
    <div className="app">
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@3.2.1/dist/full.css"
        rel="stylesheet"
        type="text/css"
      />
      <script src="https://cdn.tailwindcss.com"></script>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
