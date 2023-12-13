import React, { useState, useEffect } from "react";
import Job from "./Job";

function JobListings() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(
          "https://www.arbeitnow.com/api/job-board-api"
        );
        const jsonData = await response.json();
        setJobs(jsonData.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div className="job-listings-container">
      {jobs.map((job) => (
        <Job
          key={job.slug}
          title={job.title}
          description={job.description}
          company={job.company_name}
          location={job.location}
          jobType={job.job_types.join(", ")}
          tags={job.tags}
          applyLink={job.url}
        />
      ))}
    </div>
  );
}

export default JobListings;
