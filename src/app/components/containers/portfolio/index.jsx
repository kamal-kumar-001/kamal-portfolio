import { Animate } from "react-simple-animate";
import PageHeaderContent from '../../pageHeaderContent';
import './styles.scss';
import { portfolioData } from "../../../../../public/utils";
import ProjectDetail from "./Details";
import { useState } from "react";
import Modal from "./Modal";

const Portfolio = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const openModal = (project) => {
        setCurrentProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentProject(null);
    };

    return (
        <>
            <section className="portfolio">
                <PageHeaderContent
                    headerText='Creative '
                    lastText='Portfolio'
                />
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
                    <div className="portfolio__content">
                        <div className="portfolio__content__card">
                            {portfolioData.map((item, key) => (
                                <div key={key}  className="portfolio__content__card__item">
                                    <div className="portfolio__content__card__item__img-wrapper">
                                        <p>
                                            <img src={item.img} alt="project" />
                                        </p>
                                    </div>
                                    <div onClick={() => openModal(item.projectData)} className="overlay">
                                        <div>
                                            <p className="projectname text-xl">
                                                {item.projectName}
                                            </p>
                                            <button onClick={() => openModal(item.projectData)}>
                                                View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Animate>
            </section>
            {isModalOpen && currentProject && (
                <Modal onClose={closeModal}>
                    <ProjectDetail project={currentProject} />
                </Modal>
            )}
        </>
    );
};

export default Portfolio;
