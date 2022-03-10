import React from 'react';

import cp1 from '../../../images/branch/cp1.jpeg';
import cp2 from '../../../images/branch/cp2.jpeg';
import cp3 from '../../../images/branch/cp3.jpeg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: cp1,
        name: 'Artichore Coffee',
        expertize: 'Location: London'
    },
    {
        img: cp2,
        name: 'REO Coffee',
        expertize: 'Location: Dubai'
    },
    {
        img: cp3,
        name: 'Hope & Strock Coffee',
        expertize: 'Location: New York'
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;