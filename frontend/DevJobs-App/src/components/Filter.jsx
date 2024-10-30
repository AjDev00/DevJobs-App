import filterImg from "../assets/mobile/icon-filter.svg";
import searchImg from "../assets/desktop/icon-search.svg";
import { useState } from "react";

export default function Filter({ setOpenModal, openModal }) {
  const [inputData, setInputData] = useState("");

  return (
    <div>
      <div className="flex justify-center items-center">
        <input
          type="text"
          value={inputData}
          placeholder="Filter by title..."
          className="border border-white bg-white w-80 p-6 tracking-wider rounded-md -mt-10 placeholder:tracking-wide placeholder:font-semibold focus:outline-none"
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
      <div className="flex flex-row gap-4 relative float-right mr-8 -mt-14 justify-center items-center">
        <img
          onClick={() => setOpenModal(!openModal)}
          src={filterImg}
          alt=""
          className="h-5 cursor-pointer"
        />
        <div className="border border-blue-700 p-3 rounded-md">
          <img src={searchImg} alt="" className="w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
