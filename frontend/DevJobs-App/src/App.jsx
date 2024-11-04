import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import FilterModal from "./components/FilterModal";
import Header from "./components/Header";
import Home from "./components/Home";
import JobDetails from "./components/JobDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [openModal, setOpenModal] = useState(false);

  function closeModalFromBackground() {
    if (openModal) {
      setOpenModal(false);
    }
  }
  return (
    <div className="App bg-slate-100 min-h-screen">
      <Router>
        <Switch>
          <Route exact path="/">
            <div
              onClick={closeModalFromBackground}
              className={openModal ? "opacity-30 bg-slate-300 fixed" : ""}
            >
              <Header />
              <Filter setOpenModal={setOpenModal} openModal={openModal} />
              <Home openModal={openModal} />
            </div>
            {openModal && <FilterModal />}
          </Route>
          <Route path="/job-details/:id">
            <JobDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
