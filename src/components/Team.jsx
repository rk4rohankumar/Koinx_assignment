import React from 'react'
import TeamCard from './TeamCard'
const Team = () => {
    return (
        <div className='bg-white rounded-lg'>

            <div className='m-5 py-5 font-semibold'>
                <h1 className='text-3xl font-bold  '>Team</h1>
                <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla natus voluptatem aut molestias doloremque ipsam harum facere doloribus error et nihil ut ea cum, enim animi iure eaque dignissimos magni illum quisquam blanditiis dolore?</p>
            </div>
            <div className='flex flex-col font-semibold'>
                <TeamCard imageSrc={"https://i.ibb.co/LppzMr6/wallpaperflare-com-wallpaper-2024-02-02-T012925-169.jpg"} personName={"Rohan Kumar"} designation={"Expert"} text={"Rohan Kumar stands out as a dynamic and accomplished individual, showcasing a rare blend of technical prowess, innovative thinking, and unwavering commitment. His educational journey at IIIT Pune, coupled with hands-on experiences like the Oasis Infobyte internship and participation in the Amazon ML Summer School, demonstrates not only his academic excellence but also a passion for staying at the forefront of technology."} />
                <TeamCard imageSrc={"https://i.ibb.co/LppzMr6/wallpaperflare-com-wallpaper-2024-02-02-T012925-169.jpg"} personName={"Rohan Kumar"} designation={"Expert"} text={"Rohan Kumar stands out as a dynamic and accomplished individual, showcasing a rare blend of technical prowess, innovative thinking, and unwavering commitment. His educational journey at IIIT Pune, coupled with hands-on experiences like the Oasis Infobyte internship and participation in the Amazon ML Summer School, demonstrates not only his academic excellence but also a passion for staying at the forefront of technology."} />
            </div>

        </div>
    )
}

export default Team
