import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { ItemDetail, ProductFeed } from './components/screens';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class NavigationCenter extends Component {
    render() {
        return <MainStack />;
    }
}

const MainStack = createStackNavigator(
    {
        main: {screen: ProductFeed },
        itemDetail: {screen: ItemDetail }
    },

    {
        onTransitionEnd: () => {
            
        }
    }
);

export default MainStack;