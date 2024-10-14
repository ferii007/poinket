import Lottie from 'react-lottie';
import contentLoaderAnimationData from "./../../src/lotties/content-loader-animation.json";
import { LoaderAnimationContainer } from '../../styledComponents/globalStyled';

const ContentLoaderAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contentLoaderAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <LoaderAnimationContainer>
            <Lottie 
                options={defaultOptions}
                height={400}
                width={300}
            />
        </LoaderAnimationContainer>
    );
};

export default ContentLoaderAnimation