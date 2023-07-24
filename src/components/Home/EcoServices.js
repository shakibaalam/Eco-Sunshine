import React from 'react';
import banner from '../../img/bg-1.jpg';
import global from '../../img/global.png';
import img1 from '../../img/image1.jpg';
import img2 from '../../img/image2.jpg';
import img3 from '../../img/image3.png';
import img4 from '../../img/image4.png';
import HeadTitle from '../../shared/HeadTitle';

const EcoServices = () => {
    return (
        <div className='w-full text-center py-10' style={{ 'backgroundImage': `url(${banner})` }}>
            <HeadTitle title='Eco Services'></HeadTitle>

            <div className=' flex justify-around mt-20 items-center text-[#666] lg:px-20'>
                <div className=' text-right'>
                    <div className=' flex items-center gap-3 '>
                        <div>
                            <h3 className=' font-bold text-2xl'>RECYCLING</h3>
                            <p>Proin eget ultricies velit, <br /> in consectetur purus Nam vitae purus et arcu.</p>
                        </div>
                        <img className='w-16 h-16 rounded-full border-2 border-[#9f9e9e] hover:border-4 hover:border-[#7abf18]' src={img1} alt="" />
                    </div>
                    <div className=' flex items-center gap-3 mt-10'>
                        <div>
                            <h3 className=' font-bold text-2xl'>ECO SYSTEM</h3>
                            <p>Proin eget ultricies velit, <br /> in consectetur purus Nam vitae purus et arcu.</p>
                        </div>
                        <img className='w-16 h-16 rounded-full border-2 border-[#9f9e9e] hover:border-4 hover:border-[#7abf18]' src={img2} alt="" />
                    </div>
                </div>
                <img src={global} alt="" />
                <div className=' text-left'>
                    <div className=' flex items-center gap-3'>
                        <img className='w-16 h-16 rounded-full border-2 border-[#9f9e9e] hover:border-4 hover:border-[#7abf18]' src={img3} alt="" />
                        <div>
                            <h3 className=' font-bold text-2xl'>ORGANIC</h3>
                            <p>Proin eget ultricies velit, <br /> in consectetur purus Nam vitae purus et arcu.</p>
                        </div>

                    </div>
                    <div className=' flex items-center gap-3 mt-10'>
                        <img className='w-16 h-16 rounded-full border-2 border-[#9f9e9e] hover:border-4 hover:border-[#7abf18]' src={img4} alt="" />
                        <div>
                            <h3 className=' font-bold text-2xl'>BIOLOGY</h3>
                            <p>Proin eget ultricies velit, <br /> in consectetur purus Nam vitae purus et arcu.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EcoServices;