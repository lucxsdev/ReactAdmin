import React from 'react';
import '../../App.css';

import { Container, ContainerConfig, Item } from './styles';

export default function NavBar(){


    return(
        <>
            <Container>
                <ContainerConfig>
                    <Item href="#"><i className="fas fa-user "></i></Item>
                    <Item href="#"><i className="fas fa-wrench "></i></Item>

                </ContainerConfig>
            </Container>
        </>
    )
} 