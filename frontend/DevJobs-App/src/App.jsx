import { useEffect, useState } from "react";
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
import { Toaster } from "react-hot-toast";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [filterInputData, setFilterInputData] = useState("");
  const [filterModalInputData, setFilterModalInputData] = useState("");

  function closeModalFromBackground() {
    if (openModal) {
      setOpenModal(false);
    }
  }

  //toggle light and dark mode.
  useEffect(() => {
    if (toggleSwitch) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleSwitch]);

  return (
    <div className="dark:bg-slate-900 dark:text-white dark:duration-500 bg-slate-100 min-h-screen duration-500">
      <Router>
        <Switch>
          <Route exact path="/">
            <div
              onClick={closeModalFromBackground}
              className={
                openModal
                  ? "opacity-30 bg-slate-300 fixed min-h-screen w-full"
                  : ""
              }
            >
              <Header
                toggleSwitch={toggleSwitch}
                setToggleSwitch={setToggleSwitch}
              />
              <Filter
                setOpenModal={setOpenModal}
                setJobs={setJobs}
                filterInputData={filterInputData}
                setFilterInputData={setFilterInputData}
                setFilterModalInputData={setFilterModalInputData}
              />
              <div className="pb-8">
                <Home
                  openModal={openModal}
                  jobs={jobs}
                  setJobs={setJobs}
                  filterInputData={filterInputData}
                  filterModalInputData={filterModalInputData}
                />
              </div>
            </div>
            {openModal && (
              <FilterModal
                jobs={jobs}
                setJobs={setJobs}
                setOpenModal={setOpenModal}
                filterModalInputData={filterModalInputData}
                setFilterModalInputData={setFilterModalInputData}
                filterInputData={filterInputData}
                setFilterInputData={setFilterInputData}
              />
            )}
          </Route>
          <Route path="/job-details/:id">
            <Header
              toggleSwitch={toggleSwitch}
              setToggleSwitch={setToggleSwitch}
            />
            <JobDetails />
          </Route>
        </Switch>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
