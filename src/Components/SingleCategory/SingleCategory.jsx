import React from 'react';

const SingleCategory = ({ ct }) => {
    const {logo, title, available } = ct;
    // console.log(ct);
    return (
        <div>
            <div className='border-2 bg-slate-200 p-4 rounded-3xl'>
                <img className='w-20 mx-auto mb-2 rounded-xl'
                    src={logo} alt="" />
                <h1 className='text-lg tracking-wider'>{title}</h1>
                <p>{available }</p>
            </div>
        </div>
    );
};

export default SingleCategory;