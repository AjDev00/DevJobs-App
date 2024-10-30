import { useState } from "react";
import locationImg from "../assets/desktop/icon-location.svg";
import check from "../assets/desktop/icon-check.svg";

export default function FilterModal() {
  const [checked, setChecked] = useState(false);
  const [inputData, setInputData] = useState("");

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5 py-8 rounded-md px-10 absolute top-52 border border-white bg-white p-4">
        <div className="flex flex-row gap-4">
          <div>
            <img src={locationImg} alt="" />
          </div>
          <div>
            <input
              type="text"
              value={inputData}
              placeholder="Filter by location..."
              className="border border-white bg-white tracking-wider rounded-md placeholder:tracking-wide placeholder:font-semibold focus:outline-none"
              onChange={(e) => setInputData(e.target.value)}
            />
          </div>
        </div>
        <hr />
        <div
          onClick={() => setChecked(!checked)}
          className="flex flex-row gap-4 items-center"
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
          <div className="font-bold text-blue-700">Full Time</div>
        </div>
        <div className="mt-2">
          <button className="border border-blue-700 bg-blue-700 text-white font-bold w-full rounded-md p-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
