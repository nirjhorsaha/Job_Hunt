import React, { useEffect, useState } from 'react';
// import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
// import { Link } from 'react-router-dom';
import SingleJobs from '../SingleJobs/SingleJobs';

const JobSection = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('/company.json')
            .then((res) => res.json())
            .then((data) => setJobs(data))
    }, []);

    return (
        <div className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4'>Featured Jobs </h1>
            <p className='text-lg my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div class="grid md:grid-cols-2 gap-4 md:w-3/4 mx-auto">
                {/* featured job card */}
                {
                    jobs.map((job) => <SingleJobs
                        key={job.id}
                        job={job}
                    >
                    </SingleJobs>)
                }
            </div>
            <button className='custom-btn mt-6'>Show All</button>
        </div>
    );
};

export default JobSection;