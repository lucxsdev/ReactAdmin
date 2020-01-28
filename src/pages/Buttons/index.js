import React, { Component } from 'react';
import '../../App.css';

import { Container, ButtonBlue, ButtonOrange, ButtonRed, ButtonGreen, ButtonBlack, ButtonGrey, ButtonPurple,
         ButtonBrown, ButtonMarin, ButtonClear, ButtonBlueInt, ButtonRedInt
       } from './styles';

class Buttons extends Component {

render(){
    return(
        <>
            <Container>
                <ButtonBlue className="button"><i className="fas fa-search "></i>Button Blue</ButtonBlue>
                <ButtonOrange className="button"><i className="fas fa-search "></i>Button Orange</ButtonOrange>
                <ButtonRed className="button"><i className="fas fa-search "></i>Button Red</ButtonRed>
                <ButtonGreen className="button"><i className="fas fa-search "></i>Button Green</ButtonGreen>
                <ButtonBlack className="button"><i className="fas fa-search "></i>Button Black</ButtonBlack>
                <ButtonGrey className="button"><i className="fas fa-search "></i>Button Grey</ButtonGrey>

                <ButtonPurple className="button"><i className="fas fa-search "></i>Button Purple</ButtonPurple>
                <ButtonBrown className="button"><i className="fas fa-search "></i>Button Brown</ButtonBrown>
                <ButtonMarin className="button"><i className="fas fa-search "></i>Button Marin</ButtonMarin>
                <ButtonClear className="button"><i className="fas fa-search "></i>Button Clear</ButtonClear>
                <ButtonBlueInt className="button"><i className="fas fa-search "></i>Button Blue</ButtonBlueInt>
                <ButtonRedInt className="button"><i className="fas fa-search "></i>Button Red</ButtonRedInt>

            </Container>

        </>

    )
    }
} 

export default Buttons;
 



