import React from 'react';
import Header from '../Header/Header';
import JobSection from '../JobSection/JobSection';
import JobCategory from '../JobCategory/JobCategory';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <JobCategory />
            <JobSection />
            <Footer />
        </div>
    );
};

export default Home;