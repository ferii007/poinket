import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';

import { AnimatePresence, motion } from 'framer-motion';

import {
    DefaultButton,
    ModalBackdrop,
    ModalContainer,
    ModalBody,
    ModalBox,
    ModalFooter,
    ModalHeader,
    DropdownContainer,
    DropdownButton,
    DropdownMenu,
    DropdownItem
} from './../../styled_components/globalStyled';

import { 
    SettingsFormContainer,
    SettingsFormGroup,
    SettingsInfoContainer
 } from '../../styled_components/modals_styled/SettingsModalStyled';
import { useState } from 'react';

const SettingsModal = ({ isVisible, toggleSettingsModal }) => {
    const dataLogin = useSelector((state) => state.dataLogin);

    const [isLangOpen, setIsLangOpen] = useState(false);
    const [highlightedLang, setHighlightedLang] = useState(null);

    const toggleDropdown = () => setIsLangOpen(!isLangOpen);

    const handleItemClick = (langName, langCode) => {
        console.log(`${langName} - ${langCode} clicked`);
        setIsLangOpen(false);
        setHighlightedLang(langName)
    };

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

    const dropdownVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
    };

    const languages = [
        {
            name: 'Bahasa Indonesia',
            lang_code: 'id',
        },
        {
            name: 'English',
            lang_code: 'en',
        }
    ]

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
                                        <SettingsInfoContainer>
                                            <div className='setting-outlet-icon'>
                                                <img src={dataLogin.outlet_icon} alt="Oultet Icon" />
                                            </div>

                                            <div className='setting-outlet-info'>
                                                <h1 className='setting-outlet-header'>
                                                    <span className='setting-outlet-name'>
                                                        {dataLogin.outlet_name}
                                                    </span>
                                                    
                                                    <span className='setting-staff-name'>
                                                        <span>{dataLogin.staff_name}</span>

                                                        <ChangeCircleOutlinedIcon style={{ fontWeight: 'normal', opacity: 0.7 }} />
                                                    </span>
                                                </h1>

                                                <h4 className='setting-outlet-address'>
                                                    {dataLogin.outlet_address}
                                                </h4>
                                            </div>
                                        </SettingsInfoContainer>

                                        <SettingsFormContainer>
                                            <SettingsFormGroup>
                                                <p className='setting-form-label'>Language</p>

                                                <DropdownContainer>
                                                    <DropdownButton onClick={toggleDropdown} className={ isLangOpen ? 'dropdown-active' : '' }>
                                                        Select Language
                                                    </DropdownButton>

                                                    <AnimatePresence>
                                                        {isLangOpen && (
                                                            <motion.div
                                                                variants={dropdownVariants}
                                                                initial="hidden"
                                                                animate="visible"
                                                                exit="exit"
                                                                
                                                            >
                                                                <DropdownMenu>
                                                                    {languages.map((language, index) => (
                                                                        <DropdownItem
                                                                            key={index}
                                                                            className={highlightedLang === language.name ? 'highlighted' : ''}
                                                                            onClick={() => handleItemClick(language.name, language.lang_code)}
                                                                        >
                                                                            {language.name}
                                                                        </DropdownItem>
                                                                    ))}
                                                                </DropdownMenu>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </DropdownContainer>
                                            </SettingsFormGroup>
                                        </SettingsFormContainer>
                                    </ModalBody>

                                    <ModalFooter position="right">
                                        <DefaultButton>
                                            Save changes
                                        </DefaultButton>
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