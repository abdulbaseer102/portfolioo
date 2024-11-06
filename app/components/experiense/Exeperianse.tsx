import React from 'react'

const Exeperianse = () => {
    const cardsData = [
        {
            name: "Frontend Developer at Chance",
            image:
                "https://play-lh.googleusercontent.com/mARUNHonOc6MW2rsbr7V9h1CMM0EbloWbfOw7E64K_r2QwCzTPAmaOD_VjlzgT4syA=w480-h960-rw",
            title: "Frontend Developer at Chance",
            description: [
                "Learn to code the easier way and grow with the community",
                "Be consistent and flexible, always one line of code at a time",
                "Embark on your coding expedition, where the community supports your growth",
                "Embrace the power of adaptability and uniformity, leaving a trail of code",
            ],
        },
        {
            name: "App Developer at Patilkaki",
            image:
                "https://cdn.dribbble.com/users/3484830/screenshots/16310649/character_face_animation.gif",
            description: [
                "Learn to code the easier way and grow with the community",
                "Be consistent and flexible, always one line of code at a time",
                "Embark on your coding expedition, where the community supports your growth",
                "Embrace the power of adaptability and uniformity, leaving a trail of code",
            ],
        },
        {
            name: "Content Creator at Code Feast",
            image:
                "https://cdn.dribbble.com/users/3258568/screenshots/6815101/face.gif",
            description: [
                "Learn to code the easier way and grow with the community",
                "Be consistent and flexible, always one line of code at a time",
                "Embark on your coding expedition, where the community supports your growth",
                "Embrace the power of adaptability and uniformity, leaving a trail of code",
            ],
        },
    ];
    return (
        <>
            <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
                Experience
            </h3>
            <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
                {cardsData?.map((item, index) => (
                    <div
                        className="bg-slate-400 p-6 rounded-lg shadow-md mx-4"
                        key={index}
                    >
                        <div className="flex items-center justify-center">
                            <img
                                className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
                                src={item?.image}
                            />
                        </div>
                        <h4 className="text-xl text-white font-bold mb-2 mt-4">
                            {item?.name}
                        </h4>
                        <ul className="text-xl text-white font-light text-left list-disc">
                            {item?.description.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Exeperianse
