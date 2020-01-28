import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import { Container, ButtonGreen, ButtonBlue, InputItem, Form, Input, Thead, Table, Tbody, Th, Td, Tr } from './styles';

class Exemple extends Component {

render(){
        return(
            <>
                <Container>

                    <h3 className="h3">Filters</h3>
                        
                        <Form>
                            <InputItem>
                                <p>Name</p>
                                <Input 
                                type="text" 
                                placeholder="Filter by name..." 
                                />
                            </InputItem>

                            <InputItem>
                                <p>Address</p>
                                <Input 
                                type="text" 
                                placeholder="Filter by address..." 
                                />
                            </InputItem>

                                <InputItem>
                                <p>Number</p>
                                <Input 
                                type="text" 
                                placeholder="Filter by number..." 
                                />
                            </InputItem>

                            <InputItem>
                                <p>E-mail</p>
                                <Input 
                                type="text" 
                                placeholder="Filter by e-mail..." 
                                />
                            </InputItem>

                        </Form>
                        
                        <div>
                            <ButtonBlue className="button"><i className="fas fa-search "></i>Filter</ButtonBlue>
                        </div>

                </Container>

                
                <Container>

                    <Link to="/create">
                        <ButtonGreen><i className="fas fa-plus "></i>Add</ButtonGreen>
                    </Link>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th colspan="1">#</Th>
                                    <Th colspan="1">Name</Th>
                                    <Th colspan="1">Address</Th>
                                    <Th colspan="1">Number</Th>
                                    <Th colspan="1">E-mail</Th>
                                    <Th colspan="1">Actions</Th>
                                </Tr>
                                
                            </Thead>

                            <Tbody>
                              
                                <Tr>
                                    <Td>1</Td>
                                    <Td>Josh</Td>
                                    <Td>Place Street</Td>
                                    <Td>123</Td>
                                    <Td>josh@email.com</Td>
                                    <Td>
                                        <span>
                                            <Link to="/update">
                                                <i className="fas fa-edit orange" ></i>
                                            </Link>
                                            <Link to="/delete">
                                                <i className="fas fa-times red" ></i>
                                            </Link>
                                        </span>
                                    </Td>
                                </Tr>

                                 <Tr>
                                    <Td>2</Td>
                                    <Td>Nick</Td>
                                    <Td>Place Street</Td>
                                    <Td>123</Td>
                                    <Td>nick@email.com</Td>
                                    <Td>
                                        <Link to="/update">
                                                <i className="fas fa-edit orange" ></i>
                                        </Link>
                                        <Link to="/delete">
                                            <i className="fas fa-times red" ></i>
                                        </Link>
                                    </Td>
                                </Tr>

                                 <Tr>
                                    <Td>3</Td>
                                    <Td>Mia</Td>
                                    <Td>Place Street</Td>
                                    <Td>123</Td>
                                    <Td>mia@email.com</Td>
                                    <Td>
                                        <span>
                                            <Link to="/update">
                                                <i className="fas fa-edit orange" ></i>
                                            </Link>
                                            <Link to="/delete">
                                                <i className="fas fa-times red" ></i>
                                            </Link>
                                        </span>
                                    </Td>
                                </Tr>

                                 <Tr>
                                    <Td>4</Td>
                                    <Td>Bia</Td>
                                    <Td>Place Street</Td>
                                    <Td>123</Td>
                                    <Td>bia@email.com</Td>
                                    <Td>
                                        <span>
                                            <Link to="/update">
                                                <i className="fas fa-edit orange" ></i>
                                            </Link>
                                            <Link to="/delete">
                                                <i className="fas fa-times red" ></i>
                                            </Link>
                                        </span>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                </Container>
            </>

       )
    }
} 

export default Exemple;
 



