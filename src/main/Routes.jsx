import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from'../components/Home/Home'
import UserCrud from '../components/user/UserCrud'
import Info from '../components/Informacao/Info'


export default props=>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCrud}/>
        <Route path='/Informacao' component={Info}/>
        <Redirect from='*' to='/' />
    </Switch>