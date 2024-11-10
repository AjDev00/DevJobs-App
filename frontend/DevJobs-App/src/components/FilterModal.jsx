import { useEffect, useState } from "react";
import locationImg from "../assets/desktop/icon-location.svg";
import check from "../assets/desktop/icon-check.svg";
import { searchJobsByLocation } from "../services/devjobServices";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function FilterModal({ setJobs, setOpenModal }) {
  const [checked, setChecked] = useState(false);
  const [inputData, setInputData] = useState("");

  async function searchByLocation() {
    const data = await searchJobsByLocation(inputData);

    setJobs(data.data);
  }

  useEffect(() => {
    searchByLocation();
  }, [inputData]);

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
              value={inputData}
              placeholder="Filter by location..."
              className="border border-white dark:border-slate-800 dark:bg-slate-800 p-2 bg-white tracking-wider rounded-md placeholder:tracking-wide placeholder:font-semibold focus:outline-none"
              onChange={(e) => setInputData(e.target.value)}
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
            <div className="border border-slate-300 w-5 h-5">
              {/* <img src={check} alt="" /> */}
            </div>
          ) : (
            <div className="border bg-blue-700 border-transparent w-5 h-5">
              {/* <img src={check} alt="" className="invert" /> */}
            </div>
          )}
          <div className="font-bold text-blue-700 dark:text-white">
            Full Time
          </div>
        </div>
        <div onClick={() => setOpenModal(false)} className="mt-2">
          <button className="border border-blue-700 bg-blue-700 text-white font-bold w-full rounded-md p-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
