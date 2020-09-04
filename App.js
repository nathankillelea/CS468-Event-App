navigator.geolocation = require('@react-native-community/geolocation');

import React from 'react';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import AppReducer from './source/reducers/AppReducer.js';

import Home from './source/components/Home.js';
import Calendar from './source/components/Calendar.js';
import Map from './source/components/Map.js';
import Favorites from './source/components/Favorites.js';
import Profile from './source/components/Profile.js';
import HomeDetail from './source/components/HomeDetail.js';
import Store from './source/components/Store.js';
import StoreDetail from './source/components/StoreDetail.js';

/**
 * Creates a tab bar navigator for easy navigation between screens.
 */
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          }
          else if (route.name === 'Calendar') {
            iconName = 'calendar-o';
          }
          else if (route.name === 'Map') {
            iconName = 'map-marker';
          }
          else if (route.name === 'Favorites') {
            iconName = 'heart-o';
          }
          else if (route.name === 'Profile') {
            iconName = 'user-o';
          }

          return <FontAwesome name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#E5461F',
        inactiveTintColor: '#C8C9C8',
        showLabel: false,
        style: {
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{title: 'Calendar'}}
      />
      <Tab.Screen name="Map" component={Map} options={{title: 'Map'}} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{title: 'Favorites'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appLoading: true,
    };
  }

  /*async componentDidMount() {
    await Font.loadAsync({
      'Quicksand-Bold': require('./source/assets/fonts/Quicksand-Bold.ttf'),
      'Intro': require('./source/assets/fonts/Intro.ttf'),
      ...MaterialCommunityIcons.font,
      ...Feather.font,
      ...FontAwesome.font
    });
    await Asset.loadAsync([
      require('./source/assets/cooking.jpg'),
      require('./source/assets/fightingillinibasketball.jpg'),
      require('./source/assets/fightingillinifootball.jpg'),
      require('./source/assets/japanhouse.jpg'),
      require('./source/assets/krannert.jpg'),
      require('./source/assets/yoga.jpg'),
      require('./source/assets/seasonticket.jpg'),
      require('./source/assets/megaphonix.jpg'),
      require('./source/assets/illusionists.jpg'),
    ]);
    this.setState({ appLoading: false});
  }*/

  store = createStore(AppReducer);

  render() {
    /*if (this.state.appLoading === true) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }*/
    return (
      <Provider store={this.store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen
              name="HomeDetail"
              component={HomeDetail}
              options={{title: 'HomeDetail'}}
            />
            <Stack.Screen
              name="Store"
              component={Store}
              options={{title: 'Store'}}
            />
            <Stack.Screen
              name="StoreDetail"
              component={StoreDetail}
              options={{title: 'StoreDetail'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
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

export default App;
