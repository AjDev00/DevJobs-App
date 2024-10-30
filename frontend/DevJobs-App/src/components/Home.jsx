import { useEffect, useState } from "react";
import getJobs from "../services/devjobServices";
import logo from "../assets/logos/coffeeroasters.svg";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  //get jobs.
  async function getAllJobs() {
    const data = await getJobs();

    setJobs(data.data);
  }

  useEffect(() => {
    getAllJobs();
  }, []);

  //get images.
  function showAllImage(img) {
    return img ? "http://localhost:8000/uploads/logos/" + img : "Image";
  }

  return (
    <div>
      {jobs &&
        jobs.map((job) => (
          <div key={job.id} className="px-6">
            <div>
              <div className="relative top-10 left-6 border border-blue-500 bg-blue-500 p-4 w-fit rounded-2xl">
                <img src={showAllImage(job.logo)} alt="" />
              </div>
              <div className="tracking-wide border border-white bg-white p-4 mt-4 rounded-md flex flex-col hover:cursor-pointer">
                <div className="flex flex-col gap-3 py-8 ml-3">
                  <div className="flex flex-row gap-2 opacity-40">
                    <div>{job.postedAt}</div>
                    <div>|</div>
                    <div>{job.contract}</div>
                  </div>
                  <div className="font-bold text-[18px]">{job.position}</div>
                  <div className="opacity-40 font-semibold ">{job.company}</div>
                </div>
                <div className="font-bold text-blue-700 ml-3">
                  {job.location}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
