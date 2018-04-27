import React from 'react';
import { StyleSheet, Text, View, AppRegistry, ActivityIndicator } from 'react-native';
import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Font } from 'expo';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './source/reducers/AppReducer.js';

import Home from './source/components/Home.js';
import Calendar from './source/components/Calendar.js';
import Map from './source/components/Map.js';
import Favorites from './source/components/Favorites.js';
import Profile from './source/components/Profile.js';
import HomeDetail from './source/components/HomeDetail.js';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: componentWillUpdate is deprecated',
]);

/**
 * Creates a tab bar navigator for easy navigation between screens.
 */
export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="home" size={35} color={tintColor} />)
        }
    },
    Calendar: {
        screen: Calendar,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="calendar-o" size={35} color={tintColor} />)
        }
    },
    Map: {
        screen: Map,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="map-marker" size={35} color={tintColor} />)
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="heart-o" size={35} color={tintColor} />)
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (<FontAwesome name="user-o" size={35} color={tintColor} />)
        }
    }
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#E5461F',
        inactiveTintColor: '#C8C9C8',
        showLabel: false,
        style: {
            borderTopWidth: 0,
        }
    }
});

export const Navigation = StackNavigator({
    Tabs: { screen: Tabs },
    HomeDetail: { screen: HomeDetail },
}, {
    headerMode: 'screen'
});

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fontLoading: true,
        }
    }
    async componentDidMount() {
        await Font.loadAsync({
            'quicksand-bold': require('./source/assets/fonts/Quicksand-Bold.ttf'),
            'Intro': require('./source/assets/fonts/Intro.ttf')
        });
        this.setState({ fontLoading: false});
    }

    store = createStore(AppReducer);

    render() {
        if(this.state.fontLoading === true) {
            return(
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <Provider store={this.store}>
                <Navigation />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('App', () => App);