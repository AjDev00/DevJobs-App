import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import { fetchSingleJob } from "../services/devjobServices";
import { useEffect, useState } from "react";
import loadingImg from "../assets/loading.svg";

export default function JobDetails() {
  const [job, setJob] = useState("");
  const [reqDesc, setReqDesc] = useState("");
  const [roleDesc, setRoleDesc] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const history = useHistory();

  async function getJob(id) {
    const data = await fetchSingleJob(id);
    setJob(data.data);
    setReqDesc(data.data.requirement_items);
    setRoleDesc(data.data.role_items);
    setLoading(false);
  }

  useEffect(() => {
    getJob(params.id);
  }, [params.id]);

  //get images.
  function showAllImage(img) {
    return img ? "http://localhost:8000/uploads/logos/" + img : "Image";
  }

  const bulletPoints = reqDesc
    .split(".")
    .map((point) => point.trim())
    .filter((point) => point);

  const roleBulletPoints = roleDesc
    .split(".")
    .map((point) => point.trim())
    .filter((point) => point);

  return (
    <div>
      <div>
        <Header />
      </div>
      {loading && (
        <div className="flex justify-center items-center mt-44">
          <img src={loadingImg} alt="" className="w-7 animate-spin" />
        </div>
      )}
      {!loading && (
        <div className="px-6 flex flex-col gap-8">
          <div className="-mt-4 px-6 border border-white bg-white rounded-md flex flex-col justify-center items-center py-4">
            <div className="relative bottom-10 border border-blue-500 bg-blue-500 p-4 w-fit rounded-2xl">
              <img src={showAllImage(job.logo)} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center -mt-4">
              <div className="font-bold text-[18px]">{job.company}</div>
              <div className="opacity-40 font-semibold ">
                {job.company + ".com"}
              </div>
            </div>
            <div className="mt-6 mb-2 border border-transparent p-3 px-5 bg-blue-50 hover:cursor-pointer w-fit rounded-md">
              <div className="text-blue-700 font-bold text-[15px]">
                Company Site
              </div>
            </div>
          </div>
          <div className="px-4 py-4 border border-transparent bg-white flex flex-col gap-1">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 opacity-40 text-[15px] font-semibold">
                <div>{job.postedAt}</div>
                <div>|</div>
                <div>{job.contract}</div>
              </div>
              <div className="font-bold text-[18px]">{job.position}</div>
              <div className="font-bold text-blue-700">{job.location}</div>
            </div>
            <div className="flex justify-center items-center border border-blue-700 font-bold hover:cursor-pointer bg-blue-700 text-white mt-12 p-2 rounded-md">
              <button>Apply Now</button>
            </div>
            <div className="flex flex-col gap-8 py-8">
              <div className="font-semibold opacity-50 tracking-wider">
                {job.description}
              </div>
              <div className="flex flex-col gap-6">
                <div className="font-bold text-[20px]">Requirements</div>
                <div className="font-semibold opacity-50 tracking-wider">
                  {job.requirement_content}
                </div>
                <div className="px-4 font-semibold opacity-50 tracking-wider flex flex-col">
                  <ul style={{ listStyleType: "disc" }}>
                    {bulletPoints.map((point, index) => (
                      <li className="mb-4" key={index}>
                        {point}.
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="font-bold text-[20px]">What You Will Do</div>
                <div className="font-semibold opacity-50 tracking-wider">
                  {job.role_content}
                </div>
                <div className="px-4 font-semibold opacity-50 tracking-wider flex flex-col">
                  <ul style={{ listStyleType: "disc" }}>
                    {roleBulletPoints.map((point, index) => (
                      <li className="mb-4" key={index}>
                        {point}.
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!loading && (
        <div className="flex flex-row justify-between border border-white bg-white py-4 px-6 mt-10 hover:cursor-pointer">
          <button
            onClick={() => history.go(-1)}
            className="border border-transparent font-bold hover:cursor-pointer bg-slate-200 text-black p-2 rounded-md"
          >
            Go Back
          </button>
          <a href={job.apply}>
            <button
              // onClick={() => job.apply}
              className="px-5 border border-blue-700 font-bold hover:cursor-pointer bg-blue-700 text-white p-2 rounded-md"
            >
              Apply Now
            </button>
          </a>
        </div>
      )}
    </div>
  );
}
