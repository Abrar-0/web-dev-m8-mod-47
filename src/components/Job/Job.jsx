import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const{id,logo,job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <img
          className="w-1/2 mx-auto aspect-square bg-cover"
          src={logo}
          alt="Shoes"
        />
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="">
            <button className="text-[#9873FF] px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4">
              {remote_or_onsite}
            </button>
            <button className="text-[#9873FF] px-5 py-2 font-extrabold border rounded border-[#7E90FE]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-4 text-lg">
            <h2 className="flex items-center gap-2">
              <CiLocationOn /> {location}
            </h2>
            <h2 className="flex items-center gap-2">
              <CiDollar />
              Salary: {salary}
            </h2>
          </div>
          <div className="card-actions justify-start">
            <Link to={`/job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Job;
