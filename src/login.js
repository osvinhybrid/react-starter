import React from 'react';

import { StackNavigator } from 'react-navigation';
import HomeScreen from './home';

const nav = StackNavigator({

    HomeScreen: { screen: HomeScreen}

})

export default nav;
