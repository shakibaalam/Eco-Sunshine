import React from 'react';


const Banner = ({banner,title}) => {
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(1px)'
      };

    return (
        <div className="relative w-full h-[30vh] lg:mt-[-35px]">
            <div style={bannerStyle} className="absolute inset-0 w-full h-full"></div>
            <div className="bg-black bg-opacity-50 absolute inset-0 w-full h-full"></div>
            <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-4xl font-bold text-primary uppercase">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;
