import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../../App.css';


import { Container, ButtonRed, ButtonGreen } from './styles';

class Delete extends Component {
   
    render () {

        return(

            <Container>
                <h3 className="h3">Want to delete this item ?</h3>

                        <Link to="/exemple">
                            <ButtonGreen>
                                <i className="fas fa-chevron-left"></i>
                                Yes
                            </ButtonGreen>
                        </Link>

                        <Link to="/exemple">
                            <ButtonRed>
                                <i className="fas fa-chevron-right"></i>
                                No
                            </ButtonRed>
                        </Link>
                    <div>
                    </div>
            </Container>

    )

    }
}

export default Delete;