import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length){
            // const jobsApplied = jobs.filter(job=> storedJobIds.includes(job.id))
            
            const jobsApplied = [];
            for (const id of storedJobIds){
                const job = jobs.find(job=> job.id=== id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            // console.log(jobs, storedJobIds, jobsApplied)
            setAppliedJobs(jobsApplied);
        }
    },[])
    return (
        <div>
            <h2>Jobs I applied to: {appliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;
