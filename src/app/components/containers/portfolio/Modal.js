import { Animate } from 'react-simple-animate';
import './styles.scss';

function Modal({ children, onClose }) {
  return (
    <>
    <div className="ModalBackdrop" onClick={onClose}>
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
      <div className="Modal" onClick={(e) => e.stopPropagation()}>
        <div className="Modal__main-content-wrapper">
            <div className="Modal__close bg-[#1d1d1d] items-center flex justify-between h-28 top-0 sticky z-30">
                <p className='text-4xl px-10'>Portfolio </p>
          <button className="Modal__close-button" onClick={onClose}>X</button>
            </div>
          {children}
        </div>
      </div>
    </Animate>
    </div>
    </>
  );
}

export default Modal;
