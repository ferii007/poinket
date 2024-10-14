import {
    HeaderMenuContainer
} from "./../../styledComponents/HeaderMenuStyled"

const HeaderMenu = () => {
    return(
        <>
            <HeaderMenuContainer>
                <h1 className="header-outlet-name">
                    Warung Abah 
                </h1>

                <h4 className="header-outlet-time">
                    Sunday, June 20 2021
                </h4>
            </HeaderMenuContainer>
        </>
    )
}

export default HeaderMenu