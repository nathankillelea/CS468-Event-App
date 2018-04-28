import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { List } from 'react-native-elements';
import HomeCard from './HomeCard.js';
import { connect } from 'react-redux';
import geolib from "geolib";

class Favorites extends React.Component {
    static navigationOptions = {
        title: 'Favorites',
        header: null,
    };

    constructor() {
        super();
        this.state = {
            userLatitude: 0,
            userLongitude: 0
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    userLatitude: position.coords.latitude,
                    userLongitude: position.coords.longitude,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    renderItem = ({ item }) => {
        let dist = geolib.getDistance(
            {latitude: this.state.userLatitude, longitude: this.state.userLongitude},
            {latitude: item.latitude, longitude: item.longitude}
        );
        dist = dist * 0.000621371192;
        dist = Math.round( dist * 10 ) / 10;
        if(item.isFavorited === true) {
            return(
                <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description, isRedeemed: item.isRedeemed, isFavorited: item.isFavorited, index: item.index, timeRemaining: item.timeRemaining})}>
                    <HomeCard
                        deal={item.deal}
                        img={item.img}
                        title={item.title}
                        color={item.color}
                        isFavorited={item.isFavorited}
                        index={item.index}
                        distance={dist}
                        timeRemaining={item.timeRemaining}
                    />
                </TouchableOpacity>
            );
        }
    };

    render() {
        return(
            <View style={{backgroundColor: '#FFF', flex: 1}}>
                <View style={{height: 65, borderBottomWidth: 2, borderBottomColor: '#f9d3c9', width: '100%', flexDirection: 'row'}}>
                    <Text style={{marginTop: 30, marginLeft: 30, fontSize: 24, fontFamily: 'quicksand-bold'}}>FAVORITES</Text>
                </View>
                <List containerStyle={{ borderTopWidth: 0, width: '100%', marginTop: 0, paddingTop: 0 , flex: 1}}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom:30 }}
                        style={{height: '100%', paddingTop: 30}}
                        data={this.props.data}
                        showsVerticalScrollIndicator={false}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.description}
                    />
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

const mapStateToProps = (state) => ({
    data: state.data.data
});

export default connect(mapStateToProps)(Favorites);