"use client";
import React from 'react';
import Image from 'next/image';

const FastSelling = () => {
    const properties = [
        {
            imgSrc: '/R2.png',
            description: [
                'Lorem ipsum dolor sit amet contetur.',
                'Amet risus rhoncus sodales vulputate',
                'arcu. Erat mi dolor vitae in. Consequat',
                'pellentesque sed vitae purus erat id in',
                'pretium. Sed cras fringilla lacinia',
            ],
            price: 'Rs 1.1 Cr - Rs 1.4 Cr',
            size: '402 - 1172 sq. ft.',
            link: '#property1',
        },
        {
            imgSrc: '/R2.png',
            description: [
                'Lorem ipsum dolor sit amet contetur.',
                'Amet risus rhoncus sodales vulputate',
                'arcu. Erat mi dolor vitae in. Consequat',
                'pellentesque sed vitae purus erat id in',
                'pretium. Sed cras fringilla lacinia',
            ],
            price: 'Rs 1.1 Cr - Rs 1.4 Cr',
            size: '402 - 1172 sq. ft.',
            link: '#property2',
        },
        {
            imgSrc: '/R2.png',
            description: [
                'Lorem ipsum dolor sit amet contetur.',
                'Amet risus rhoncus sodales vulputate',
                'arcu. Erat mi dolor vitae in. Consequat',
                'pellentesque sed vitae purus erat id in',
                'pretium. Sed cras fringilla lacinia',
            ],
            price: 'Rs 1.1 Cr - Rs 1.4 Cr',
            size: '402 - 1172 sq. ft.',
            link: '#property3',
        },
    ];

    return (
        <>
            <main className="w-full bg-[#F6F6F6] md:py-[80px] py-[27px] px-[22px]">
                <div className="max-w-[1140px] m-auto font-normal text-[14px] leading-[21.7px]">
                    {/* Header Section */}
                    <div className="flex md:items-end items-center md:gap-16 flex-col md:flex-row">
                        <h1 className="md:text-[48px] text-[30px] text-[#1AD4D4] leading-[52.8px] font-bold">
                            Fast Selling Properties
                        </h1>
                        <p className="md:text-[16px] text-[12px] leading-[24px] font-normal text-[#060101]">
                            Lorem ipsum dolor sit amet consectetur. Amet risus rhoncus sodales
                        </p>
                    </div>

                    {/* Properties Section */}
                    <div className="pt-[52px] flex flex-col justify-center md:flex-row gap-10 md:gap-6">
                        <div className="flex justify-center ">
                            <Image
                                src="/R1.png"
                                width={500}
                                height={50}
                                // className="text-center  lg:max-w-full md:max-w-[300px] max-w-[200px]"
                                alt="Featured Property"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center  gap-6">
                            {properties.map((property, index) => (
                                <div
                                    key={index}
                                    className="flex gap-[25px] flex-col justify-center sm:flex-row"
                                >
                                    <div className='flex justify-center'>
                                        <Image
                                            src={property.imgSrc}
                                            width={277}
                                            height={50}
                                            className="xl:w-full lg:w-[200px] md:w-[300px] w-full"
                                            
                                        />
                                    </div>
                                    <div className='flex flex-col '>
                                        <div className='flex flex-col md:items-start items-center'>
                                            
                                        {property.description.map((line, idx) => (
                                            <p
                                                key={idx}
                                                className="font-normal text-[14px] leading-[21.7px]"
                                            >
                                                {line}
                                            </p>
                                        ))}
                                        <h1 className="text-[16px] font-bold leading-[24px] pt-7">
                                            {property.price}
                                        </h1>
                                        <h1 className="text-[16px] font-bold leading-[24px]">
                                            {property.size}
                                        </h1>
                                        <a
                                            href={property.link}
                                            className="text-[21px] hover:text-[#3c7b7b] text-[#1AD4D4] font-bold leading-[24px] pt-[20px] block"
                                        >
                                            Read More
                                        </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default FastSelling;
