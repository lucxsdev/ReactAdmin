import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

import { Container, Thead, Table, Tbody, Th, Td, Tr } from './styles';

class TableComponent extends Component {

render(){
        return(
            <> 
                <Container>
                    <h3 className="h3">Tables</h3>

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

                            <Tr>
                                <Td>5</Td>
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
                                <Td>6</Td>
                                <Td>Nick</Td>
                                <Td>Place Street</Td>
                                <Td>123</Td>
                                <Td>nick@email.com</Td>
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
                                <Td>7</Td>
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
                                <Td>8</Td>
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

                            <Tr>
                                <Td>9</Td>
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
                                <Td>10</Td>
                                <Td>Nick</Td>
                                <Td>Place Street</Td>
                                <Td>123</Td>
                                <Td>nick@email.com</Td>
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
                                <Td>11</Td>
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
                                <Td>12</Td>
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

export default TableComponent;
 



