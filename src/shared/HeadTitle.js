import React from 'react';

const HeadTitle = ({title}) => {
    const words = title?.split(' ');
    return (
        <div className=' text-center'>
            <h2 className=' text-2xl font-bold uppercase'><span className='text-primary'>{words[0]}</span> {words[1]}</h2>
            <p className='text-primary font-bold '>Promote Your Environment</p>
        </div>
    );
};

export default HeadTitle;