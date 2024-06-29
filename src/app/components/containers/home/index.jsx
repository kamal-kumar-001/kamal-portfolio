import './styles.scss';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsTelegram, BsGithub } from 'react-icons/bs'
import Link from 'next/link';
import { Animate } from 'react-simple-animate';
import { useEffect, useState } from 'react';

const Home = () => {
    const words = ["Developer", "Freelancer", "Designer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const rotateWords = () => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        };

        const intervalId = setInterval(rotateWords, 2500);

        return () => clearInterval(intervalId);
    }, [words.length]);

    return (
        <section className='home' id='home'>
            <Animate
                play
                duration={0.6}
                delay={0}
                start={{
                    transform: 'translateY(100px)',
                    opacity: 0
                }}
                end={{
                    transform: 'translateY(0px)',
                    opacity: 1
                }}
            >
                <div className="home__text-wrapper">

                    <h1>
                        Kamal <span className='surname'>Kumar</span>
                    </h1>
                    <br />
                    <section className="cd-intro">
                        <h3 className="cd-headline rotate-1 home__skills">
                            <span className="home__skills__description">
                                <p className="fix">Creative</p>
                                <span className="cd-words-wrapper home__skills__description__wrapper">
                                    {words.map((word, index) => (
                                        <b key={index} className={index === currentWordIndex ? 'is-visible' : 'is-hidden'}>
                                            {word}
                                        </b>
                                    ))}
                                </span>
                            </span>
                        </h3>
                    </section>

                </div>

                <div className="contact-me">
                    <div className="contact-me__buttons-wrapper">
                        <Link href={"/contact"}>Get in Touch</Link>
                        <Link href={"/portfolio"}  >View Portfolio</Link>
                    </div>
                    <div className="contact-me__socials-wrapper">
                        <a href={'https://www.linkedin.com/in/kamal-kumar-8b3a6b230'} target={"_blank"} rel="noopener noreferrer"><FaLinkedin size={25} /> </a>
                        <a href={'https://github.com/kamal-kumar-001'} target={"_blank"} rel="noopener noreferrer" ><BsGithub size={25} /></a>
                        <a href={'https://t.me/Kamal_Khatiwal'} target={"_blank"} rel="noopener noreferrer"><BsTelegram size={25} /></a>
                        <a href={'https://instagram.com/kamal_khatiwal?igshid=YmMyMTA2M2Y='} target={"_blank"} rel="noopener noreferrer"><FaInstagram size={25} /></a>
                    </div>
                </div>
            </Animate>


        </section>
    )
};

export default Home;