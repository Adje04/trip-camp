
import Image from 'next/image'
import React from 'react'
import Button from './Button';

const GetApp = () => {
    return (

        <section className="flex-center w-full flex-col pb-8">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                    <h2 className="bold-32 lg:bold-52 sl:max-w-[320px]">Telecharger le gratuitement des maintenant !</h2>
                    <p className="regular-16 text-gray-10">Disponible sur iOS et Android</p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <Button
                            type="button"
                            title="App Store"
                            icon="/apple.svg"
                            variant="btn_white"
                            full
                        />
                        <Button
                            type="button"
                            title="Play Store"
                            icon="/android.svg"
                            variant="btn_dark_green_outline"
                            full
                        />
                    </div>
                </div>
                <div className='flex flex-1 items-center justifyend'>
                    <Image
                        src="/phones.png"
                        alt='phones'
                        width={550}
                        height={870}
                    />
                </div>
            </div>
        </section>
    );
}
export default GetApp