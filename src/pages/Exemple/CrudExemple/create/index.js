import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../../App.css';

import { Container, ButtonGreen, Form, Input, InputItem, ButtonRed } from './styles';

class Create extends Component {

render(){
        return(
            <Container>

                <h3 className="h3">Create</h3>
                    
                    <Form>
                        <InputItem>
                            <p>Name</p>
                            <Input 
                            type="text" 
                            placeholder="Name..." 
                            />
                        </InputItem>

                        <InputItem>
                            <p>Address</p>
                            <Input 
                            type="text" 
                            placeholder="WallStreet..." 
                            />
                        </InputItem>

                            <InputItem>
                            <p>Number</p>
                            <Input 
                            type="text" 
                            placeholder="(xx) xxxx-xxxx" 
                            />
                        </InputItem>

                        <InputItem>
                            <p>E-mail</p>
                            <Input 
                            type="text" 
                            placeholder="email@email.com" 
                            />
                        </InputItem>

                    </Form>
                    
                    <Link to="/exemple">
                        <ButtonGreen type="submit" className="button"><i className="fas fa-search "></i>Create</ButtonGreen>
                    </Link>

                    <Link to="/exemple">
                        <ButtonRed type="submit" className="button">Back</ButtonRed>
                    </Link>

            </Container>
       )
    }
} 

export default Create;
 



