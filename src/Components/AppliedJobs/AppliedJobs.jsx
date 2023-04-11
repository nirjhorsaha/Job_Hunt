import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import './AppliedJobs.css'


const AppliedJobs = () => {
    return (
        <div>
            <h1 className='text-5xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-8'>Applied Jobs</h1>
            <div>
                {/* dropdown */}
                <div className="mb-6 w-4/5 text-end mx-auto">
                    <div className="dropdown inline-block relative ">
                        <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                            <span className="mr-1">Filter</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 text-center ">
                            <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Onsite</a></li>
                            <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Remote</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* applied jobs */}
            <div className='md:flex w-3/5 mx-auto border-2 rounded-3xl justify-between items-center p-4 bg-slate-200'>
                <div className='md:flex gap-4 items-center'>
                    <div className="image p-2">
                        <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png" className='w-36'
                            alt="" srcset="" />
                    </div>
                    <div className="details text-start">
                        <h1 className='text-lg font-bold'>Sr. Software Engineer</h1>
                        <p className='mb-2'>Google LLC</p>
                        <button className='border-2 px-6 py-1 bg-white rounded-lg mb-4'>Remote</button>
                        <div className='md:flex'>
                            <p className='flex items-center mr-6'>
                                <MapPinIcon className="h-6 w-6 text-blue-500" />
                                Dhaka, Bangladesh</p>
                            <p className='flex items-center mt-2 md:mt-0'>
                                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                                Salary : 70K - 90K</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to='/details' className='custom-btn mt-4'>
                        View Details
                    </Link>
                </div>
                {/* <div className="button custom-btn mt-4">View Details</div> */}
            </div>
        </div>
    );
};

export default AppliedJobs;