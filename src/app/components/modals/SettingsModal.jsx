import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './../../../state';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';

import { AnimatePresence, motion } from 'framer-motion';

import {
    modalVariants,
    dropdownVariants
} from './../../tweaks/framerMotionVariants'

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

import Swal from 'sweetalert2';
import useTranslationHook from './../../tweaks/locales';

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

const SettingsModal = ({ isVisible, toggleSettingsModal }) => {
    const { changeLanguage, translations } = useTranslationHook();
    const dispatch = useDispatch();

    const {
        dataFromLocalStorage,
    } = bindActionCreators(actionCreators, dispatch);
    
    const dataLogin = useSelector((state) => state.dataLogin);
    const dataLocalStorage = useSelector((state) => state.dataFromLocalStorage);

    const [isLangOpen, setIsLangOpen] = useState(false);
    const [highlightedLang, setHighlightedLang] = useState(null);
    const [highlightedLangCode, setHighlightedLangCode] = useState(null);

    const toggleDropdown = () => setIsLangOpen(!isLangOpen);

    const handleItemClick = (langName, langCode) => {
        setIsLangOpen(false);
        setHighlightedLang(langName);
        setHighlightedLangCode(langCode);
    };

    const handleSaveSettings = () => {
        try {
            const language = saveLanguage(highlightedLang, highlightedLangCode);

            localStorage.setItem('language', JSON.stringify(language));

            const newDataLocalStorage = {
                ...dataLocalStorage
            }

            dataFromLocalStorage(newDataLocalStorage);
            changeLanguage(highlightedLangCode);
        } catch (error) {
            console.log('error', error);

            Swal.fire({
                title: "Error!",
                text: translations.error_save_settings,
                icon: "error"
            });
        }
    }

    const saveLanguage = (name, lang_name) => {
        const language = {
            name: name,
            lang_code: lang_name
        };

        const languageData = dataLocalStorage.languageData
        languageData.name = name;
        languageData.lang_code = lang_name;

        return language;
    }
    
    const resetSettingsForm = useCallback(() => {
        const languageData = dataLocalStorage.languageData;

        setHighlightedLang(languageData.name);
        setHighlightedLangCode(languageData.lang_code);
        setIsLangOpen(false);
    }, [dataLocalStorage]);

    useEffect(() => {
        if (isVisible === true) {
            resetSettingsForm();
        }
    }, [isVisible, resetSettingsForm])

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
                                            {translations.settings}
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
                                                <p className='setting-form-label'>{translations.language}</p>

                                                <DropdownContainer>
                                                    <DropdownButton onClick={toggleDropdown} className={ isLangOpen ? 'dropdown-active' : '' }>
                                                        {highlightedLang}
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
                                        <DefaultButton onClick={() => handleSaveSettings()}>
                                            {translations.save_changes}
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