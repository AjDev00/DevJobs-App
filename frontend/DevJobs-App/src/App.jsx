import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import FilterModal from "./components/FilterModal";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [openModal, setOpenModal] = useState(false);

  function closeModalFromBackground() {
    if (openModal) {
      setOpenModal(false);
    }
  }
  return (
    <div className="App bg-slate-100 min-h-screen">
      <div
        onClick={closeModalFromBackground}
        className={openModal && "opacity-30"}
      >
        <Header />
        <Filter setOpenModal={setOpenModal} openModal={openModal} />
        <Home />
      </div>
      {openModal && <FilterModal />}
    </div>
  );
}

export default App;
