import React from 'react';
import '../../App.css';

import { Container, ButtonBlue, ButtonRed, InputItem, Form, Input } from './styles';

export default function New(){

    return(
    <>
        <Container>

            <h3 className="h3">Forms</h3>

                <Form>
                    <InputItem>
                        <p>Name</p>
                        <Input 
                        type="text" 
                        id="Name"
                        placeholder="Type your name" 
                        />
                    </InputItem>

                    <InputItem>
                        <p>Address</p>
                        <Input 
                        type="text" 
                        id="Address"
                        placeholder="Type your address"         
                        />
                    </InputItem>

                    <InputItem>
                        <p>Number</p>
                        <Input 
                        type="text" 
                        id="Number"
                        placeholder="Type your number"                        
                        />
                    </InputItem>

                    <InputItem>
                        <p>E-mail</p>
                        <Input 
                        type="text" 
                        id="Email"
                        placeholder="Type your e-mail"                       
                        />
                    </InputItem>
                    
                    <ButtonBlue type="submit" className="button">
                        <i className="fas fa-plus "></i>
                        Submit
                    </ButtonBlue>

                    <ButtonRed href="/" className="button">
                        back
                    </ButtonRed>

                </Form>

    
       </Container>
    </>
    )
};