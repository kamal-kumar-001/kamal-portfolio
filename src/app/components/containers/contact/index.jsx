import { useState } from 'react';
import { Animate } from 'react-simple-animate';
import PageHeaderContent from '../../pageHeaderContent';
import './styles.scss'
import { personalDataContact } from '../../../../../public/utils';

const Contact = () => {

    const [status, setStatus] = useState("Submit Message");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.message);
    
  };
    return (
        <section className="contact">
            <PageHeaderContent
                headerText='Get in'
                lastText='Touch'
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
                <div className="contact__content">
                    <div className="contact__content__left">
                        {
                            personalDataContact.map((item, key) => (
                                <li className='flex' key={key}>
                                    <span className="icon pt-1">
                                        {item.icon}
                                    </span>
                                    <span className="value">
                                        {item.value}
                                    </span>

                                </li>
                            ))
                        }
                    </div>
                    <div className="contact__content__right">
                        <form onSubmit={handleSubmit}>
                        <div className="contact__content__form">
                            <div className="contact__content__form__controlsWrapper">
                                <div className='contact__content__form__controlsWrapper__first'>
                                    <div className="nameWrapper">
                                        <input placeholder='Name' name='name' type="text" className="inputName" required />
                                    </div>
                                    <div className="emailWrapper">
                                        <input placeholder='Email' name='email' type="email" className="inputEmail" required />
                                    </div>
                                </div>
                                <div className="messageWrapper">
                                    <textarea placeholder='Message' name="message" id="" className='inputMessage' rows={"5"} style={{ resize: 'none' }} required ></textarea>
                                </div>
                            </div>
                            <button type="submit">
                                {status}
                            </button>
                        </div>
                        </form>
                    </div>

                </div>
            </Animate>
        </section>
    );
};

export default Contact;