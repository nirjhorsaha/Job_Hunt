import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobSection = () => {
    return (
        <div className='text-center my-6'>
            <h1 className='text-5xl custom-text p-4'>Featured Jobs </h1>
            <p className='text-lg my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div class="grid md:grid-cols-2 gap-4 md:w-3/4 mx-auto">
                {/* featured job card */}
                <div>
                    <div className='mx-auto border-2 rounded-xl items-center p-4 bg-slate-200'>
                        <div className='gap-4 items-center'>
                            <div className="image p-2">
                                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png" className='w-36'
                                    alt="" srcset="" />
                            </div>
                            <div className="details text-start">
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-lg font-bold'>Sr. Software Engineer</h1>
                                        <p className='mb-2'>Google LLC</p>
                                    </div>
                                    <div>
                                        <button className='border-2 px-6 py-1 bg-white rounded-lg mb-4'>Remote</button>
                                    </div>
                                </div>
                                
                                
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
                            <Link to='/details' className='custom-btn mt-4 w-full '>
                                View Details
                            </Link>
                        </div>
                    </div>
                </div> 
                <div>
                    <div className='mx-auto border-2 rounded-xl items-center p-4 bg-slate-200'>
                        <div className='gap-4 items-center'>
                            <div className="image p-2">
                                <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png" className='w-36'
                                    alt="" srcset="" />
                            </div>
                            <div className="details text-start">
                                <div className='flex justify-between'>
                                    <div>
                                        <h1 className='text-lg font-bold'>Sr. Software Engineer</h1>
                                        <p className='mb-2'>Google LLC</p>
                                    </div>
                                    <div>
                                        <button className='border-2 px-6 py-1 bg-white rounded-lg mb-4'>Remote</button>
                                    </div>
                                </div>
                                
                                
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
                            <Link to='/details' className='custom-btn mt-4 w-full '>
                                View Details
                            </Link>
                        </div>
                    </div>
                </div> 
            </div>
            <button className='custom-btn mt-6'>Show All</button>
        </div>
    );
};

export default JobSection;