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
                            
                        >
                            <ModalContainer>
                                <ModalBox>
                                    <ModalHeader>
                                        <span className='title'>
                                            Settings
                                        </span>

                                        <span className='icon' onClick={onClose}>
                                            <HighlightOffIcon />
                                        </span>
                                    </ModalHeader>

                                    <ModalBody>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores consequuntur minima doloribus quas dolor. Ipsa voluptatum est soluta culpa vero, ex, quos corrupti commodi qui doloribus, non fugiat nostrum laboriosam aliquam quod. Ratione voluptatem magnam, maxime quisquam unde dolorem nobis sed optio sequi minima expedita excepturi vel sunt, dolor quae exercitationem? Maxime adipisci enim obcaecati officia nisi itaque sunt suscipit, quis dolorem? Quas sapiente expedita reiciendis pariatur minus dignissimos placeat blanditiis unde facilis veritatis molestias optio nemo deleniti quaerat provident amet voluptates iste perferendis eligendi, harum adipisci eaque, obcaecati ab maiores? Ducimus sequi aliquid eos nam dignissimos consequuntur aperiam itaque quibusdam, et quia voluptate assumenda dolorum iure recusandae expedita, voluptatem, accusantium minima nesciunt aut pariatur. Voluptates ad corporis cupiditate distinctio sunt? Asperiores quasi error labore laboriosam aut deserunt harum rerum laudantium rem necessitatibus illo, ut obcaecati placeat! Itaque ullam architecto eaque dignissimos repellendus qui, aperiam tempora quas illum ex quasi at autem nisi, ratione harum molestias culpa voluptas odio blanditiis. Porro quod rerum dignissimos impedit dolorum consequuntur laboriosam ullam sunt placeat? Sapiente, a quibusdam autem voluptas optio corporis sed porro dicta, obcaecati in recusandae atque voluptate odit repudiandae ab at enim error. Numquam necessitatibus itaque ullam nisi? Provident exercitationem, ratione quos esse, omnis ut quia aperiam inventore laudantium odit est tempore. Quos nostrum, et distinctio veniam inventore mollitia possimus numquam quis nobis fugiat enim placeat, deserunt adipisci laborum architecto, expedita corrupti omnis cum. Tempore consequuntur, nam ea vitae aut corporis libero, perferendis nisi doloremque vel rerum molestiae voluptatibus debitis, perspiciatis ad impedit eius quo cumque. Vero fugit exercitationem expedita iure reprehenderit minus consectetur voluptatibus, iste, quia accusantium assumenda amet neque sapiente eos repellat totam, praesentium soluta aperiam veritatis aut ipsam quos. Debitis maiores, eius veniam sit dignissimos consequatur quis voluptatibus deleniti exercitationem. Ullam eaque quae quidem. Explicabo, sit hic.
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