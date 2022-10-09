import React from "react";
import {Container,Gradient, Tanya, Leftlist, RightList, LeftListYellow, RightListYellow} from "./style";

interface IHeaderBackgroundProps {
    image: string;
}

const HeaderBackground = ({ image }: IHeaderBackgroundProps) => {
    return(
        <Container>
            <Gradient/>
            <Tanya src="../таня.svg" alt="Alt" />
            <Leftlist src="../листокСлева.svg" alt="Alt" />
            <RightList src="../RightList.svg" alt="Alt" />
            <LeftListYellow src="../LeftListYellow.svg" alt="Alt" />
            <RightListYellow src="../RightListYellow.svg" alt="Alt" />
        </Container>
    )
}

export default HeaderBackground;