import React from 'react';
import Header from '../Header/Header';
import JobSection from '../JobSection/JobSection';
import JobCategory from '../JobCategory/JobCategory';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const category = useLoaderData();
    // console.log(category);
    
    return (
        <div className='p-10'>
            <Header />
            <JobCategory category={category} 
            />
            <JobSection />
            <Footer />
        </div>
    );
};

export default Home;