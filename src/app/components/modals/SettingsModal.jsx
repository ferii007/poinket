import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import {
    ModalBackdrop,
    ModalContainer
} from './../../styled_components/globalStyled';

const SettingsModal = ({ isVisible, onClose }) => {
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
                    <ModalBackdrop>
                        <motion.div
                            variants={modalVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            onClick={onClose}
                        >
                            <ModalContainer>
                                
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