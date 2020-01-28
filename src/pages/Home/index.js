import React, { Component } from 'react';

import '../../App.css';

import { Container, ButtonCircle } from './styles';

class Populate extends Component {


    render () {

         return(
        <>
            <Container>

                <h1>Welcome!</h1>
                <h2>Whenever a question arises, click the button</h2>
                <ButtonCircle>
                    <i className="fas fa-question"></i>
                </ButtonCircle>
                <h2>to open the documentation for the respective screen</h2>

            </Container>
        </>

    )

    }
}

export default Populate;