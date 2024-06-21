"use client"
import { Animate } from "react-simple-animate";
// import { AboutImage } from "./utils";
import './styles.scss'
import Modal from "./Modal";
import { useEffect, useState } from "react";
import Resume from "../resume";

const About = () => {
    const words = ["Developer", "Freelancer", "Designer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const rotateWords = () => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        };

        const intervalId = setInterval(rotateWords, 2500);

        return () => clearInterval(intervalId);
    }, [words.length]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
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
                <section className="about">

                    <div className="about__left">
                        <img className="rounded-md" src={'/images/img.jpg'} alt="photo" />
                    </div>
                    <div className="about__right">
                        <div className="about__right__text">
                            <h2>Kamal<span className='lastText'> Kumar</span></h2>
                            <section className="cd-intro">
                        <h3 className="cd-headline rotate-1 text-4xl pt-4">
                                <span className="text-[#a2a2a2] pr-4">Creative</span>
                                <span className="cd-words-wrapper ">
                                    {words.map((word, index) => (
                                        <b key={index} className={index === currentWordIndex ? 'is-visible' : 'is-hidden'}>
                                            {word}
                                        </b>
                                    ))}
                                </span>
                        </h3>
                    </section>
                        </div>
                        <div className="about__right__text__description">
                            <p>
                                My name is <span>Kamal Kumar</span>. I am a Web Developer, and I&apos;m very passionate and dedicated to my work. With 20 years experience as a professional a Web Developer, I have acquired the skills and knowledge.
                            </p>
                        </div>
                        <button onClick={openModal}>
                            Learn More
                        </button>
                    </div>
                </section>
            </Animate>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                    <Resume />
                </Modal>
            )}
        </>
    )
};

export default About;