import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import '../../App.css';


import { Container, Button, ButtonBlue, InputItem, Form, Input, Head, GridItem, Item } from './styles';

export default function Home(){

    const [funcionarios, setFuncionarios] =  useState([]); 


    useEffect(() => {
        
    async function load(){

        const result = await api.get('/index');

        setFuncionarios(result.data)

    };

    load();

    }, []);

    return(
        <>
        <Container>

            <h3 className="h3">Filtros de Funcionários</h3>

                <Form>
                    <InputItem>
                        <p>Nome</p>
                        <Input type="text" placeholder="Fulano de Tal" />
                    </InputItem>

                    <InputItem>
                        <p>CPF</p>
                        <Input type="text" placeholder="123.456.789-09" />
                    </InputItem>

                    <InputItem>
                        <p>Data de Cadastro</p>
                        <Input type="text" placeholder="26/06/2019" />
                    </InputItem>

                    <InputItem>
                        <p>Cargo</p>
                        <Input type="text" placeholder="Dev Pl" />
                    </InputItem>

                    <InputItem>
                        <p>Salário Mínimo</p>
                        <Input type="text" placeholder="10,00" />
                    </InputItem>

                    <InputItem>
                        <p>Salário Máximo</p>
                        <Input type="text" placeholder="10000,00" />
                    </InputItem>

                    <InputItem>
                    <p>Status</p>
                        <select>
                            <option value="">Selecione...</option>
                            <option value="volvo">Bloqueado</option>
                            <option value="saab">Ativo</option>
                            <option value="mercedes">Inativo</option>
                        </select>
                    </InputItem>

                </Form>

                <div>
                    <ButtonBlue href="#" className="button"><i className="fas fa-search "></i>Pesquisar</ButtonBlue>
                </div>
                

       </Container>

       
       <Container>

           <Button href="/new"><i className="fas fa-plus "></i>Adicionar</Button>

           <Head>
               <p>Data</p>
               <p>Cargo</p>
               <p>CPF</p>
               <p>Nome</p>
               <p>UF</p>
               <p>Salário</p>
               <p>Status</p>
               <p>Actions</p>
           </Head>

            {funcionarios.map(item => (

                <GridItem key={item._id}>
                    
                    <Item>
                        <p>{item.DataCad}</p>
                    </Item>

                     <Item>
                         <p>{item.Cargo}</p>
                    </Item>

                     <Item>
                       <p>{item.Cpf}</p>
                    </Item>

                     <Item>
                        <p>{item.Nome}</p>
                    </Item>

                     <Item>
                        <p>{item.UfNasc}</p>
                    </Item>

                     <Item>
                        <p>{item.Salario}</p>
                    </Item>

                     <Item>
                       <p>{item.Status}</p>
                    </Item>

                    <span>
                        <a href={'/update?id=' + item._id}><i className="fas fa-edit orange" ></i></a>
                        <a href={'/remove?id=' + item._id}><i className="fas fa-times red" ></i></a>
                    </span>

                </GridItem>

            ))}
            
       </Container>
    </>
    )
} 