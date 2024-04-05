import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJob } from "../../utility/localstorage";

const JobDetails = () => {
    const jobs= useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == id);

    const handleApplyJob = ()=>{
        saveJob(parseInt(id))
        toast('You have applied')
    }
    return (
      <div>
        <h2>Job details of: {id}</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="border md:col-span-3 text-xl">
            <h2>Description of Job: {job.job_description}</h2>
            <h2>Responsibilities of Job: {job.job_responsibility}</h2>
          </div>
          <div className="border">
            <h2 className="text-2xl">Side things:</h2>
            <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
};

export default JobDetails;
