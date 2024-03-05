import React from 'react'
import CardCarousel from './CardCarousel'

const cards = [
    { title: 'Card 1', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dignissimos numquam eveniet obcaecati beatae ipsa ut exercitationem nulla id dicta magnam saepe amet maiores, facilis similique, odit totam enim quod dolore adipisci debitis veniam.', image: 'image1.jpg' },
    { title: 'Card 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dignissimos numquam eveniet obcaecati beatae ipsa ut exercitationem nulla id dicta magnam saepe amet maiores, facilis similique, odit totam enim quod dolore adipisci debitis veniam.', image: 'image2.jpg' },
    { title: 'Card 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dignissimos numquam eveniet obcaecati beatae ipsa ut exercitationem nulla id dicta magnam saepe amet maiores, facilis similique, odit totam enim quod dolore adipisci debitis veniam.', image: 'image3.jpg' },
    { title: 'Card 4', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dignissimos numquam eveniet obcaecati beatae ipsa ut exercitationem nulla id dicta magnam saepe amet maiores, facilis similique, odit totam enim quod dolore adipisci debitis veniam.', image: 'image4.jpg' },
    { title: 'Card 5', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dignissimos numquam eveniet obcaecati beatae ipsa ut exercitationem nulla id dicta magnam saepe amet maiores, facilis similique, odit totam enim quod dolore adipisci debitis veniam.', image: 'image5.jpg' },
    // Add more cards as needed
];
const Sentiment = () => {
    return (
        <div className=''>
            <div className=' m-5'>
                <h1 className='text-3xl pt-5'>Sentiment</h1>
            </div>
            <div className='m-5'>
                <h1 className='text-xl '>Key Events</h1>
            </div>
            <div>

                <CardCarousel cards={cards} />
            </div>
        </div>
    )
}

export default Sentiment
