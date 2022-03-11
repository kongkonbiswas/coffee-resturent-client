import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpeg';
import banner2 from '../../../images/banner/banner2.jpeg';
import banner3 from '../../../images/banner/banner3.jpeg';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='bg-primary'>WELCOME TO MY COFFEE RESTURENT</h3>
                        <p className='bg-success'>SEARCH FOR WHAT YOU WANT !</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='bg-primary'>WE ARE WAITING FOR YOUR STEP...</h3>
                        <p className='bg-success' >THE FUTURE IS ROLLING</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='bg-primary'>IMAGINING ABOVE EVERYTHING</h3>
                        <p className='bg-success'>STAY WITH US.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;