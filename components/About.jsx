import Slider from 'react-slick';
import Image from 'next/image';
import Badge from './badge';
import Separator from './separator';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
    {
        imgSrc: '/assets/about/photo-1.jpg',
        title: 'Our Journey',
        description: 'Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we\'re known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.',
    },
    {
        imgSrc: '/assets/about/photo-2.jpg',
        title: 'Our Promise',
        description: 'At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.',
    },
    {
        imgSrc: '/assets/about/photo-3.jpg',
        title: 'Our Team',
        description: 'At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.',
    },
];

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, 
        arrows: true,
        pauseOnHover: true,
    };

    return (
        <section className="overflow-hidden h-[100vh] bg-primary py-8">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div className=' ' key={index}>
                        <div className="flex flex-col lg:flex-row items-center container mx-auto justify-center px-6">
                            {/* Text */}
                            <div className="flex-1 flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
                                <div className='flex w-full justify-center items-center'>
                                    <Badge className="w-[180px] text-center h-[180px] mb-6 lg:mb-0" />
                                </div>
                                <div className="max-w-[560px] lg:max-w-full">
                                    <h2 className="lg:h2 h4 text-center text-6xl text-white mb-4">
                                        <span className="mr-2 lg:mr-4">{item.title.split(' ')[0]}</span>
                                        <span className="text-[#A67B5B]">{item.title.split(' ')[1]}</span>
                                    </h2>
                                    {/* Separator */}
                                    <div className="mb-4">
                                        <Separator />
                                    </div>
                                    {/* Description */}
                                    <p className="leading-relaxed mb-16 px-8 lg:px-0">
                                        {item.description}
                                    </p>
                                    <div className='flex justify-center items-center w-full'>
                                        <button className="btn">See More</button>
                                    </div>
                                </div>
                            </div>
                            {/* Image */}
                            <div className="flex-1 w-full h-[50vh] lg:h-[70vh] relative">
                                <Image
                                    src={item.imgSrc}
                                    fill
                                    className="object-cover"
                                    quality={100}
                                    priority
                                    alt={item.title}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default About;
