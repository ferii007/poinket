import { useEffect, useState } from "react";
import ProductComponent from "./components/ProductComponent";
import ContentLoaderAnimation from "./components/layout_components/ContentLoaderAnimation";

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './../state';

import axios from 'axios';

import {
    HeaderMenu,
    SidebarMenu
} from "./components/layout_components/index";


const Main = () => {
    const dispatch = useDispatch();
    const { dataLogin } = bindActionCreators(actionCreators, dispatch);

    const [isContentLoaded, setIsContentLoaded] = useState(true);
    
    const contentStyle = {
        "contentLoaded": {
            height: 'auto', 
            overflow: 'visible', 
            position: 'relative',
            zIndex: '999',
            opacity: '100',
        },
        "contentNotLoaded": {
            height: '0', 
            overflow: 'hidden', 
            position: 'relative',
            zIndex: '-999',
            opacity: '0',
        },
    }

    const handleDataLogin = async () => {
        try {
            const response = await axios.get('/dummyAPI/dataLoginAPI.json');

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        const initData = async () => {
            try {
                const data = await handleDataLogin();
                
                dataLogin(data);
                
            } catch (error) {
                console.log('error', error);
            }
        };
        
        initData();
    }, [])

    return (
        <>
            <main>
                {/* <div style={contentStyle[isContentLoaded ? 'contentNotLoaded' : 'contentLoaded']}>
                    <ContentLoaderAnimation />
                </div> */}

                <div>
                    <div>
                        <SidebarMenu />
                    </div>

                    <div>
                        <HeaderMenu />
                    </div>

                    {/* <div style={{...contentStyle[isContentLoaded ? 'contentLoaded' : 'contentNotLoaded'], zIndex: '0 !important'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur iste unde libero molestiae facilis. Nesciunt, ex libero id suscipit magni assumenda aut consectetur voluptatum illum doloremque, accusamus facere accusantium aperiam, totam molestias quidem porro exercitationem fugiat aspernatur neque earum. Ex aspernatur quas odit facilis, perspiciatis reiciendis dolorum laudantium delectus, quo, aliquam temporibus libero minus nihil quidem corporis repellendus! Eius, culpa perspiciatis. Accusantium rem modi nemo qui nam non architecto ipsam officiis est veniam, laudantium ut, omnis reiciendis. Doloribus facilis beatae dolore asperiores repudiandae, blanditiis rerum commodi nostrum alias. Nostrum est hic natus quos voluptatibus ex, commodi deleniti impedit aliquam, veritatis cumque voluptatum perspiciatis sunt ea expedita porro vel. Dolorem quos et atque quidem qui? Voluptates omnis quidem, fugiat error aspernatur alias repudiandae, voluptas voluptatibus id nostrum veniam necessitatibus vitae recusandae? Facilis debitis ullam in sunt aperiam commodi ut, expedita architecto velit beatae, nulla perferendis cumque corrupti saepe sed quos aliquid unde a obcaecati exercitationem. Ea architecto odit doloremque quidem fuga omnis ipsa velit iure sunt, recusandae quo laboriosam, ratione iste! Quaerat, iste, quae consequuntur incidunt tempora, facere error cum quam doloremque fugit consequatur! Quaerat reprehenderit iste voluptates excepturi mollitia a, dolorum beatae, eaque non quasi ex distinctio ea nemo autem ad nam dolore unde recusandae nihil iure quia itaque laboriosam ut corrupti. Eligendi sed corrupti deserunt adipisci quas. Nostrum praesentium incidunt quia provident libero laborum nobis magni nesciunt. Dolorem omnis blanditiis esse doloribus eaque voluptas cumque cupiditate consequatur voluptatem exercitationem corrupti nam fugit laudantium aut magnam, molestiae vitae eum, minima ipsa asperiores maxime debitis inventore accusamus ducimus? Architecto laudantium commodi corrupti nobis doloribus voluptatibus et. Neque sint, laboriosam similique eius, est, deleniti eligendi in provident rem ab id. Molestias suscipit reiciendis minima praesentium iste possimus. Rerum esse amet similique nesciunt nostrum quas repellendus, quasi, deleniti officia maxime labore. Sequi delectus officia, placeat ipsam, eum odit voluptates sit voluptas architecto quo voluptatibus obcaecati quisquam velit dolorum nam iste rerum tempora eligendi adipisci. Officiis consectetur cum soluta quo tempora labore distinctio porro esse possimus aspernatur eum repudiandae maiores quibusdam nobis culpa quod debitis nisi sit omnis laboriosam, eveniet rerum architecto magni quisquam! At quidem vero est, quisquam natus perferendis reprehenderit modi inventore repellendus, ad laborum, numquam aliquam eaque? Recusandae voluptatum dolorum molestiae maiores, esse numquam necessitatibus aspernatur! Nesciunt non quam magnam. Quis vel officiis, cum a at voluptatum voluptatem cumque omnis necessitatibus minima fuga distinctio est, repudiandae doloremque amet nisi libero provident, reiciendis obcaecati praesentium qui eveniet pariatur. Reprehenderit, eius molestiae. Suscipit nisi facere nemo corporis! Ipsam eligendi tempora, similique sint blanditiis, sit error eos voluptatem praesentium possimus ducimus enim. Quasi earum ex ea, autem illo, dolorem molestias officiis magnam, veniam odit quam eius impedit iusto beatae maiores! Quibusdam reiciendis quidem quam mollitia modi officiis laboriosam nobis ab labore ipsam nam, officia aspernatur in illum dolorum deserunt sapiente possimus numquam distinctio illo nemo provident similique soluta neque. Ratione laboriosam facilis, nisi vel delectus aliquam consequuntur! Error, quidem dicta. Culpa, quae. Quo obcaecati vel nostrum error saepe labore quae tempora veniam nulla explicabo?</p>
                    </div> */}
                </div>

                
                {/* <ProductComponent /> */}
            </main>
        </>
    )
}

export default Main