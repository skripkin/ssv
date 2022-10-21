import React from "react";
import {Container,Gradient, Tanya, Leftlist, RightList, LeftListYellow, RightListYellow} from "./style";

interface IHeaderBackgroundProps {}

const HeaderBackground = ({}: IHeaderBackgroundProps) => {
    return(
        <Container>
            <Gradient/>
            <Tanya src="../Tanya.svg" alt="Alt" />
            <Leftlist src="../LeftList.svg" alt="Alt" />
            <RightList src="../RightList.svg" alt="Alt" />
            <LeftListYellow src="../LeftListYellow.svg" alt="Alt" />
            <RightListYellow src="../RightListYellow.svg" alt="Alt" />
        </Container>
    )
}

export default HeaderBackground;