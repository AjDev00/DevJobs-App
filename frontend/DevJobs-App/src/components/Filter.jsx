import filterImg from "../assets/mobile/icon-filter.svg";
import searchImg from "../assets/desktop/icon-search.svg";
import { filterByTitle, getJobs } from "../services/devjobServices";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Filter({
  setOpenModal,
  setJobs,
  filterInputData,
  setFilterInputData,
  setFilterModalInputData,
}) {
  const [error, setError] = useState(false);

  async function searchByTitle() {
    if (filterInputData.trim() !== "") {
      const data = await filterByTitle(filterInputData);

      setJobs(data.data);
      if (data.status === true && data.data.length === 0) {
        toast.error("No Results!");
        setFilterInputData("");
        setFilterModalInputData("");

        async function getAllJobs() {
          const data = await getJobs();

          setJobs(data.data);
        }
        getAllJobs();
      }

      setFilterModalInputData("");
    } else {
      setError(true);
      toast.error("Please input title.");
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={filterInputData}
          placeholder="Filter by title..."
          className={
            !error
              ? "border border-white dark:border-transparent dark:bg-slate-800 bg-white w-80 p-6 tracking-wider rounded-md -mt-10 placeholder:tracking-wide placeholder:font-semibold focus:outline-none"
              : "border-2 border-red-500 dark:border-red-500 dark:border-2 dark:border-transparent dark:bg-slate-800 bg-white w-80 p-6 tracking-wider rounded-md -mt-10 placeholder:tracking-wide placeholder:font-semibold focus:outline-none"
          }
          onChange={(e) => setFilterInputData(e.target.value) - setError(false)}
        />
      </div>
      <div className="flex flex-row gap-4 relative float-right mr-8 -mt-14 justify-center items-center">
        <img
          onClick={() => setOpenModal(true)}
          src={filterImg}
          alt=""
          className="h-5 cursor-pointer"
        />
        <div
          onClick={searchByTitle}
          className="border dark:border-white border-blue-700 p-3 rounded-md hover:cursor-pointer"
        >
          <img src={searchImg} alt="" className="w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
