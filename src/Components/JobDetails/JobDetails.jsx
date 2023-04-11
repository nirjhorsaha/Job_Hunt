import React, { useEffect, useState } from 'react';
import { CurrencyDollarIcon, CalendarDaysIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const dynamic = useParams();
    console.log(dynamic.id);

    // const detailss = useLoaderData();
    // setDetails(detailss);
    
    const [details, setDetails] = useState({});
    // useEffect(() => {
    //     fetch(`/company.json/${dynamic.id}`)
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }, [])
    // console.log(details);

    // useEffect(() => {
    //     if (detailss) {
    //         const detailsData = detailss.find(dt => dt.id === id)
    //         setDetails(detailsData);
    //         // console.log(detailsData);
    //    } 
    // }, [])
    // // console.log(details);
    
    return (
        <div >
            <h1 className='text-5xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-8'>Job Details</h1>

            <div className='md:flex px-16 gap-6'>
                <div className="left w-11/12 text-lg">
                    <h1 className='tracking-wide'>
                        <span className='font-bold'>Job Description:</span> A UI/UX (U ser Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h1>
                    <h1 className='mt-4 tracking-wide'>
                        <span className='font-bold '>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
                    </h1>
                    <h1 className='font-bold mt-4 tracking-wide'>Educational Requirements:</h1>
                    <p className='tracking-wide'>Bachelor degree to complete any reputational university.</p>
                    <h1 className='my-4 tracking-wide
'>
                        <span className='font-bold '>Experiences:</span> 3+ years of experience
                    </h1>
                </div>
                <div className='md:w-2/4'>
                    <div className="right  rounded-xl border-4 p-4 leading-loose">
                        <h1 className='font-bold text-xl mb-2'>Job Details</h1>
                        <hr />
                        <p className='flex mt-2'> <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2 '>Salary : </span>
                                100K - 150K (Per Month)
                            </div>
                        </p>
                        <p className='flex mt-2' >
                            <CalendarDaysIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2'>Job Title : </span>
                                Product Designer
                            </div>
                        </p>

                        <h1 className='font-bold text-xl mt-4 mb-2'>Contact Information</h1>
                        <hr />
                        <p className='flex mt-2'><PhoneIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2'>Phone : </span>
                                01750-00 00 00
                            </div>
                        </p>
                        <p className='flex mt-2'><EnvelopeIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2'>Email :</span>
                                info@gmail.com
                            </div>
                        </p>

                        <p className='flex mt-2'> <MapPinIcon className="h-6 w-6 text-blue-500" />
                            <div>
                                <span className='font-bold ml-2'>Address :  </span>
                                Dhanmondi 32, Sukrabad
                                Bangladesh
                            </div>
                        </p>
                    </div>
                    <button className='custom-btn w-full mt-4'>Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;