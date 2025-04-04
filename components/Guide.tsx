import Image from 'next/image'
import React from 'react'

const Guide = () => {
    return (
        <section className="flex-center flex-col">
            <div className="padding-container max-container w-full pb-24">
                <Image src="/camp.svg" alt='camp' width={50} height={50} />
                <p className='uppercase regular-18 mt-1 mb-3 text-green-50'> Nous sommes la pour vous</p>
                <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
                    <h2 className='bold-32 lg:bold-52 xl:max-w[390px] dark:text-gray-200'>Votre  Guide sur</h2>
                    <p className='regular-16 text-gray-30 lg:max-w-[520px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint earum, totam nemo odio magni nesciunt et ullam sit beatae excepturi labore magnam reiciendis iste, eum atque accusantium quod inventore.

                    </p>
                </div>
            </div>
            <div className="flex-center max-container relative w-full">
                <Image src="/boat.png" alt='boat'
                    width={1440} height={580}
                    className='w-full object-cover object-center 2xl:rounded-5xl '
                />

                <div className="dark:invert absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                    <Image src="/meter.svg" alt='meter'
                        width={16} height={258}
                        className='h-full w-auto invert dark:invert mix-blend-difference dark:mix-blend-normal'
                    />
                    <div className="flex-between flex-col">
                        <div className="flex w-full flex-col">
                            <div className="flex-between w-full">
                                <p className='regular-16 text-gray-30'>Destination</p>
                                <p className='bold-16 text-green-50 invert dark:invert mix-blend-difference dark:mix-blend-normal'>58min</p>
                                <p></p>
                            </div>
                            <p className='bold-20 mt-2'>Aguas Calientes</p>
                        </div>

                        <div className="flex w-full flex-col">
                            <p className='regular-16 text-gray-30'>Start track</p>

                            <h4 className='bold-20 mt-2 whitespace-nowrap'>Laugh Tale</h4>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Guide
