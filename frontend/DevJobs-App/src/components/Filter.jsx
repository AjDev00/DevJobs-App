import filterImg from "../assets/mobile/icon-filter.svg";
import searchImg from "../assets/desktop/icon-search.svg";
import { searchJobs } from "../services/devjobServices";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

export default function Filter({ setOpenModal, openModal, setJobs }) {
  const [inputData, setInputData] = useState("");

  async function searchByTitle() {
    const data = await searchJobs(inputData);

    // if (!data.data || data.data.length === 0) {
    //   <NotFound />;
    // }

    setJobs(data.data);
  }

  useEffect(() => {
    searchByTitle();
  }, [inputData]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={inputData}
          placeholder="Filter by title..."
          className="border border-white dark:border-transparent dark:bg-slate-800 bg-white w-80 p-6 tracking-wider rounded-md -mt-10 placeholder:tracking-wide placeholder:font-semibold focus:outline-none"
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-4 relative float-right mr-8 -mt-14 justify-center items-center">
        <img
          onClick={() => setOpenModal(true)}
          src={filterImg}
          alt=""
          className="h-5 cursor-pointer"
        />
        <div className="border dark:border-white border-blue-700 p-3 rounded-md hover:cursor-pointer">
          <img src={searchImg} alt="" className="w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
