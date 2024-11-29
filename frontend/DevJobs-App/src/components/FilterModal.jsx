import { useState } from "react";
import locationImg from "../assets/desktop/icon-location.svg";
import check from "../assets/desktop/icon-check.svg";
import {
  filterByContract,
  filterByLocation,
  filterByLocationAndContract,
  filterByOnlyContract,
  filterByTitle,
  filterByTitleAndLocation,
} from "../services/devjobServices";
import toast from "react-hot-toast";

export default function FilterModal({
  setJobs,
  setOpenModal,
  filterModalInputData,
  setFilterModalInputData,
  filterInputData,
}) {
  const [checked, setChecked] = useState(false);

  async function searchByLocation() {
    if (filterInputData) {
      const data = await filterByTitleAndLocation(
        filterInputData,
        filterModalInputData
      );

      setJobs(data.data);
      setOpenModal(false);
      if (data.status === true && data.data.length === 0) {
        const data = await filterByTitle(filterInputData);
        setJobs(data.data);

        toast.error("No results for the location!");
        setOpenModal(false);
      }
    } else if (!filterInputData && filterModalInputData) {
      const data = await filterByLocation(filterModalInputData);

      setJobs(data.data);
      setOpenModal(false);
    } else {
      toast.error("Please input title.");
      setOpenModal(false);
    }
  }

  async function searchByContract() {
    const data = await filterByContract(filterInputData, filterModalInputData);

    // console.log(data);
    setJobs(data.data);
    setOpenModal(false);
  }

  async function searchByOnlyContract() {
    const data = await filterByOnlyContract();

    // console.log(data);
    setJobs(data.data);
    setOpenModal(false);
  }

  function handleSearchClick() {
    if (filterModalInputData) {
      searchByLocation();
    }

    if (filterModalInputData && checked) {
      async function handleLocationAndContract() {
        const data = await filterByLocationAndContract(filterModalInputData);

        // console.log(data);
        setJobs(data.data);
        setOpenModal(false);
      }

      handleLocationAndContract();
    }

    if (checked && filterInputData) {
      searchByContract();
    }

    if (checked && !filterInputData && !filterModalInputData) {
      searchByOnlyContract();
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5 py-8 rounded-md px-10 absolute top-52 border border-white bg-white dark:border-slate-800 dark:bg-slate-800 p-4">
        <div className="flex flex-row justify-center items-center gap-4">
          <div>
            <img src={locationImg} alt="" />
          </div>
          <div>
            <input
              type="text"
              value={filterModalInputData}
              placeholder="Filter by location..."
              className="border border-white dark:border-slate-800 dark:bg-slate-800 p-2 bg-white tracking-wider rounded-md placeholder:tracking-wide placeholder:font-semibold focus:outline-none"
              onChange={(e) => setFilterModalInputData(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <div
          onClick={() => setChecked(!checked)}
          className="flex flex-row gap-4 items-center"
          value="Full Time"
        >
          {!checked ? (
            <div className="border border-slate-300 w-5 h-5 p-1 rounded-sm">
              <img src={check} alt="" className="dark:hidden" />
            </div>
          ) : (
            <div className="border border-blue-700 bg-blue-700 w-5 h-5 p-1 rounded-sm">
              <img src={check} alt="" className="mt-0" />
            </div>
          )}
          <div className="font-bold text-blue-700 dark:text-white">
            Full Time
          </div>
        </div>
        <div onClick={handleSearchClick} className="mt-2">
          <button className="border border-blue-700 bg-blue-700 text-white font-bold w-full rounded-md p-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
