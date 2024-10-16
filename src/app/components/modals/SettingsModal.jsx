import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';

import { AnimatePresence, motion } from 'framer-motion';

import {
    ModalBackdrop,
    ModalContainer,
    ModalBody,
    ModalBox,
    ModalFooter,
    ModalHeader
} from './../../styled_components/globalStyled';

import { 
    SettingsInfoContainer
 } from '../../styled_components/modals_styled/SettingsModalStyled';

const SettingsModal = ({ isVisible, toggleSettingsModal }) => {
    const dataLogin = useSelector((state) => state.dataLogin);

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
                                        <SettingsInfoContainer>
                                            <div className='setting-outlet-icon'>
                                                <img src={dataLogin.outlet_icon} alt="Oultet Icon" />
                                            </div>

                                            <div className='setting-outlet-info'>
                                                <h1 className='setting-outlet-header'>
                                                    {/* <span className='setting-outlet-name'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit iure delectus error. Modi libero ullam aperiam asperiores non itaque animi laudantium rerum quo enim voluptatibus iste veniam ipsum ex culpa illo doloribus quis harum tempore velit, eius suscipit qui! Reprehenderit, tempora, fuga temporibus quisquam assumenda quam nisi repudiandae magni esse facere velit, nam voluptas vel sed corrupti amet est praesentium veniam distinctio iure ut ex ratione aliquid! Ullam facere, eveniet sequi doloremque aperiam fuga sapiente minus enim mollitia temporibus maiores obcaecati accusantium dicta nisi itaque recusandae blanditiis voluptatum. Amet ipsam, veniam velit assumenda facilis quia rem, ducimus doloribus laboriosam nulla quibusdam dicta quam quidem consectetur a accusamus perspiciatis eveniet soluta. Voluptate nihil totam, velit ad mollitia iure ab dolorem debitis error qui alias ea quae corrupti, amet praesentium illum ratione! Sapiente vel itaque porro ipsa laudantium, excepturi, aliquam accusamus iste maxime tempore assumenda ipsum neque. Impedit expedita architecto aperiam dolores iste odio voluptas rem voluptatem? Tempora assumenda explicabo, sit quam culpa cum magnam fuga ad aspernatur inventore dolor aperiam beatae laborum voluptate amet? Doloribus officia aperiam quia commodi laudantium velit distinctio placeat rerum facilis corporis quasi veritatis quisquam nesciunt harum dolore, tempora ab quis sed dolor quibusdam sint ad at tempore saepe. Non, distinctio. Distinctio fuga inventore possimus totam at unde voluptate, ad et labore eveniet nesciunt aliquid, ipsam accusamus blanditiis, minima vel consectetur ex iusto officia nostrum quas qui nemo amet. Laudantium vero nisi aliquam molestias, maiores porro explicabo id quae asperiores cum! Modi nobis, animi quaerat id soluta reprehenderit consequuntur eveniet aliquid suscipit nesciunt accusamus, repellat temporibus quibusdam voluptatum obcaecati et. Necessitatibus fugiat nobis repellendus sint temporibus eius sequi, at exercitationem quod aut corporis beatae explicabo nihil ducimus dolores ipsum illum. Vel natus facilis nostrum eum adipisci consequatur ut, provident accusantium est! Rem optio, ipsam beatae architecto voluptates necessitatibus, veniam ratione iure explicabo doloribus ipsum aliquam! Iusto eum earum soluta numquam accusantium, mollitia excepturi minus cupiditate facere ipsum beatae voluptas quos ex assumenda neque expedita corrupti hic. A perferendis iure asperiores harum veniam nobis enim, eos sequi possimus saepe soluta velit praesentium vero incidunt fugit nostrum distinctio qui maiores et animi aliquid iste! Voluptates possimus expedita facere sapiente? Nam, voluptates quam. Doloribus facilis temporibus delectus pariatur blanditiis, accusantium ab esse velit odit nisi quasi magni explicabo animi culpa vitae beatae eius a sequi voluptatibus nemo sunt saepe corporis veniam provident. Illum, earum, itaque optio quibusdam omnis enim quos, quia voluptatem provident recusandae nulla vero. Recusandae veniam perferendis ea facilis nemo molestias aspernatur corrupti dolorum, inventore pariatur quaerat similique quis suscipit animi minima illum fugit soluta cupiditate laborum! Accusamus tempora pariatur tempore architecto atque. Nobis delectus repellendus accusamus iusto nesciunt dolore minus reprehenderit. Nam ut molestiae in nulla enim quod ad impedit veniam quae porro incidunt expedita ipsa asperiores minus, error quia! Repellat, molestias. Nemo deleniti ex officiis itaque omnis fuga ratione inventore dolor consequuntur. Doloremque neque blanditiis quisquam minima facilis at magni eius minus molestiae, deserunt, possimus expedita pariatur, consectetur quasi quod quae suscipit voluptas eum labore obcaecati?</span> */}

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
                                                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa labore obcaecati velit dolorum dolorem similique, in temporibus et nostrum voluptatem veritatis asperiores, repudiandae minus commodi itaque. Qui impedit voluptate, natus placeat commodi quia sapiente obcaecati exercitationem corrupti debitis dolore pariatur reiciendis expedita enim quidem ullam necessitatibus, eius quaerat quam mollitia tempora labore accusamus aliquid repellat. Consequatur, eum, expedita facere sed ex pariatur voluptatem ab, fuga hic doloremque natus vero vitae eaque reiciendis! Odio qui dolor quae. Libero error adipisci amet quia quod, porro architecto rerum illum optio ab, possimus sequi, blanditiis iure. Deleniti dolorum dignissimos magnam hic quam, quis labore provident alias nesciunt asperiores, sapiente, dolore doloribus corporis! Fugit soluta molestias quis in libero! Exercitationem, ratione. Ipsa quos deserunt doloremque aliquam optio dolores quae possimus repellendus ex voluptatum quas quibusdam, dolore molestiae! Obcaecati omnis impedit cumque perferendis! Totam officia ducimus excepturi non praesentium! Eum, repellendus velit, explicabo at beatae hic amet aperiam tempore labore nulla saepe quae obcaecati dolore doloremque. Dignissimos voluptatum ex veritatis. Laudantium voluptatum aut sunt, dignissimos illo esse deserunt nostrum accusamus impedit sequi corrupti repellendus pariatur eaque, iste labore molestias exercitationem ipsa unde! Autem molestiae debitis rem quia. Tenetur dignissimos et suscipit earum, at laboriosam doloremque libero? */}
                                                </h4>
                                            </div>
                                        </SettingsInfoContainer>
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