import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import {
    SettingsModalBackdrop,
    SettingsModalContainer
} from './../../styled_components/modals_styled/SettingsModalStyled'

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
                    <SettingsModalBackdrop>
                        <motion.div
                            variants={modalVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            onClick={onClose}
                        >
                            <SettingsModalContainer>
                                
                            </SettingsModalContainer>
                        </motion.div>
                    </SettingsModalBackdrop>
                    )}
                </AnimatePresence>
        </>,
        document.body
    );
}

export default SettingsModal