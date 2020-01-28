import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Exemple from './pages/Exemple';
import Table from './pages/Table';
import Buttons from './pages/Buttons';
import Cards from './pages/Cards';
import Form from './pages/Form';

import Create from './pages/Exemple/CrudExemple/create';
import Update from './pages/Exemple/CrudExemple/update';
import Delete from './pages/Exemple/CrudExemple/delete';


export default function Routes(){   
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/exemple' component={Exemple} />
            <Route path='/table' component={Table} />
            <Route path='/buttons' component={Buttons} />
            <Route path='/cards' component={Cards} />
            <Route path='/form' component={Form} />
            <Route path='/create' component={Create} />
            <Route path='/update' component={Update} />
            <Route path='/delete' component={Delete} />
        </Switch>
    )
};