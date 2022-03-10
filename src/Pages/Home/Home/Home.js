import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Card from '../../Shared/Map/Card';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            {/* <Experts></Experts> */}
            <Card></Card>
            <Footer></Footer>
        </div>
    );
};

export default Home;