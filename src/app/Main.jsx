import { useEffect } from "react";
import SidebarMenu from "./components/layout_components/SidebarMenu";
import ProductComponent from "./components/ProductComponent";

import {
    dataOutlet
} from "./services/dummyAPI";


const Main = () => {
    const handleDataOutlet = async () => {
        const data = await dataOutlet(
            (onSuccess) => {
              console.log('Success! Data fetched:', onSuccess);
            },
            (onError) => {
              console.error('Failed to fetch data:', onError);
            }
        );

        return data;
    };

    useEffect(() => {
        const fetchData = async () => {
            await handleDataOutlet();
            
            console.log('hello world');
        };
        
        fetchData();
    }, [])

    return (
        <>
            <main>
                <div>
                    <SidebarMenu />
                </div>
                
                {/* <ProductComponent /> */}
            </main>
        </>
    )
}

export default Main