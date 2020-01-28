import React, { Component } from 'react';
import '../../App.css';

import { Container, ButtonRed, ButtonBlue,  ButtonOrange, ButtonGreen, ContainerCard, Form } from './styles';

class Cards extends Component {
   
    render () {

        return(
        <>
            <Container>
                <h3 className="h3">Do you want to perform this action ?</h3>
                    <Form>
                        <ButtonBlue>
                            <i className="fas fa-chevron-left"></i>
                            Yes
                        </ButtonBlue>
                        <ButtonRed>
                            <i className="fas fa-chevron-right"></i>
                            No
                        </ButtonRed>
                    </Form>
                    <div>
                    </div>
            </Container>

             <Container>
                <h3 className="h3">Do you want to perform this action ?</h3>
                    <Form>
                        <ButtonGreen>
                            <i className="fas fa-chevron-left"></i>
                            Yes
                        </ButtonGreen>
                        <ButtonOrange>
                            <i className="fas fa-chevron-right"></i>
                            No
                        </ButtonOrange>
                    </Form>
                  
            </Container>

            <ContainerCard>
                <h3 className="h3">Do you want to perform this action ?</h3>
                    <Form>
                       <ButtonBlue>
                            <i className="fas fa-chevron-left"></i>
                            Yes
                        </ButtonBlue>
                        <ButtonRed>
                            <i className="fas fa-chevron-right"></i>
                            No
                        </ButtonRed>
                    </Form>
                  
            </ContainerCard>

            <ContainerCard>
                <h3 className="h3">Do you want to perform this action ?</h3>
                    <Form>
                        <ButtonGreen>
                            <i className="fas fa-chevron-left"></i>
                            Yes
                        </ButtonGreen>
                        <ButtonOrange>
                            <i className="fas fa-chevron-right"></i>
                            No
                        </ButtonOrange>
                    </Form>
                  
            </ContainerCard>

        
        </>

    )

    }
}

export default Cards;