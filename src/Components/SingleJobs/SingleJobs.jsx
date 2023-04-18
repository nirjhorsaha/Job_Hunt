import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const SingleJobs = ({ job }) => {
    // console.log(job);
    const { company_logo, company_name, job_title, location, remote_or_onsite, salary} = job;
    return (
        <div>
            <div className='mx-auto border-2 rounded-xl items-center p-4  bg-slate-200'>
                <div className='gap-4 items-center'>
                    <div className="image p-2">
                        <img src={company_logo} className='w-36'
                            alt="" srcset="" />
                    </div>
                    <div className="details text-start p-2">
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-lg font-bold'>{job_title}</h1>
                                <p className='mb-2'>{company_name}</p>
                            </div>
                            <div>
                                <button className='border-2 px-6 py-2 bg-white rounded-lg mb-4'>{remote_or_onsite}</button>
                            </div>
                        </div>
                        <div className='md:flex'>
                            <p className='flex items-center mr-6'>
                                <MapPinIcon className="h-6 w-6 text-blue-500" />
                                {location}
                            </p>
                            <p className='flex items-center mt-2 md:mt-0'>
                                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                                Salary : {salary}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/details/${job.id}`}  className='custom-btn mt-4 w-full '>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleJobs;