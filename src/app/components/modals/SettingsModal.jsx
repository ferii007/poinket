import ReactDOM from 'react-dom';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { AnimatePresence, motion } from 'framer-motion';

import {
    ModalBackdrop,
    ModalContainer,
    ModalBody,
    ModalBox,
    ModalFooter,
    ModalHeader
} from './../../styled_components/globalStyled';

const SettingsModal = ({ isVisible, toggleSettingsModal }) => {
    const modalVariants = {
        initial: { opacity: 0, y: -50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { ease: "easeOut", duration: 0.15 },
        },
        exit: {
            opacity: 0,
            y: -50,
            transition: { ease: "easeIn", duration: 0.15 },
        },
    };

    return ReactDOM.createPortal(
        <>
            <AnimatePresence>
                {isVisible && (
                    <ModalBackdrop onClose={toggleSettingsModal}>
                        <motion.div
                            variants={modalVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            
                        >
                            <ModalContainer>
                                <ModalBox>
                                    <ModalHeader>
                                        <span className='title'>
                                            Settings
                                        </span>

                                        <span className='icon' onClick={toggleSettingsModal}>
                                            <HighlightOffIcon />
                                        </span>
                                    </ModalHeader>

                                    <ModalBody>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </ModalBody>

                                    <ModalFooter>
                                        <button>save</button>
                                    </ModalFooter>
                                </ModalBox>

                            </ModalContainer>
                        </motion.div>
                    </ModalBackdrop>
                )}
            </AnimatePresence>
        </>,
        document.body
    );
}

export default SettingsModal