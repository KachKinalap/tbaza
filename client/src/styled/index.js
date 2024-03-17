import styled from 'styled-components';

export const COLOURS = {
    BLUE: "#378CE3",
    BLUE_HOVER: "#116fc2",
    DARK_GREEN: "#379683",
    GREEN: "#5CDB95",
    LIGHT_BLUE: "#cde4f6",
    LIGHT_BLUE_HOVER: "#a2cdf3",
    BEJ: "#EDF5E1", //rgb(237, 245, 225)
    RED: "#F18D8D",
}

export const PageDiv = styled.div`
    width: 100%;
`;

export const ScreenDiv = styled.div`
    height: 100%;
    min-height: 500px;
    width: 100%;
    padding: 0 5%;
    //border: 3px solid red;
`;

export const HorFlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 50px 0;
    //border: 3px solid blue;
`;

export const HorFlexDivPrice = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 50px 0;
    //border: 3px solid blue;
`;

export const HorSliderItemCont = styled.div`
    min-width: 444px;
    width: 30%;
    min-height: 250px;
    height: 100%;
    //border: 3px solid green;
`;

export const ItemSliderCont = styled.div`
    width: 50%;
    border-radius: 10px;
    overflow: hidden;
    
    //border: 3px solid green;
`;

export const ScreenSeparatorCont = styled.div`
    height: 150px;
    font-size: 24px;
    background-color: ${COLOURS.BLUE};
    color: ${COLOURS.BEJ};
    display:flex;
    align-items: center;
    justify-content: center;
`;

// div with label on border

export const BorderTextCont = styled.div`
    border: solid ${COLOURS.BLUE};
    border-radius: 40px;
    background-color: ${COLOURS.LIGHT_BLUE};
    overflow: hidden;
`;

export const BorderTextContHeader = styled.div`
    position:absolute;
    margin-top:-25px;
    margin-left:10px;
    color:  ${COLOURS.BEJ};
    background: ${COLOURS.BLUE};
    border-radius:10px;
    padding:2px 10px;
    z-index: 3;
`;
// div with label on border - end
export const ItemHeader = styled.h2`
    color: black;
    font-size: 24px;
    margin-top: 15vh;
    margin-bottom: 5vh;
`;

export const FooterCont = styled.div`
    width: 100%;
    background-color: ${COLOURS.BLUE};
    margin-top: 100px;
    padding: 50px;
    display: flex;
    justify-content: space-around;
    align-items: start;
    text-align: left;
    flex-wrap: wrap;
    color: ${COLOURS.BEJ};
`;

export const FooterItem = styled.div`
    margin-top: 30px;
    
`


