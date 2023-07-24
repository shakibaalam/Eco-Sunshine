import React from 'react';
import Banner from '../components/Home/Banner';
import EcoServices from '../components/Home/EcoServices';
import EcoCauses from '../components/Home/EcoCauses';
import DonateForm from '../components/Home/DonateForm';
import Products from '../components/Home/Products';
import LatestEvent from '../components/Home/LatestEvent';
import Blogs from '../components/Home/Blogs';


const Home = () => {
   
    return (
        <div className='w-[100%]'>
            <Banner/>
            <EcoServices/>
            <EcoCauses/>
            <DonateForm></DonateForm>
            <Products></Products>
            <LatestEvent/>
            <Blogs/>
        </div>
    );
};

export default Home;