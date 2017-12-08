import React from 'react';
import Login from './components/Login/Login.js';
import Listings from './components/Listings/Listings.js';
import StepOne from './components/StepOne/StepOne.js';
import StepTwo from './components/StepTwo/StepTwo.js';
import StepThree from './components/StepThree/StepThree.js';
import StepFour from './components/StepFour/StepFour.js';
import StepFive from './components/StepFive/StepFive.js';


import { HashRouter as Router, Route } from 'react-router-dom';

export default(

           <Router>
               <div>
                   <Route component={Login} exact path='/' />
                   <Route component={Listings} path='/listings'/>
                   <Route component={StepOne} path='/step/1'/>
                   <Route component={StepTwo} path='/step/2'/>
                   <Route component={StepThree} path='/step/3'/>
                   <Route component={StepFour} path='/step/4'/>
                   <Route component={StepFive} path='/step/5'/>
                   
               </div>
           </Router>
)