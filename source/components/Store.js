import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {List} from 'react-native-elements';
import StoreCard from './StoreCard.js';
import geolib from "geolib";

class Store extends React.Component {
    static navigationOptions = {
        title: 'Store',
        header: null,
    };

    constructor() {
        super();
        this.state = {
            userLatitude: 0,
            userLongitude: 0,
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
        return(
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('StoreDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description, isRedeemed: item.isRedeemed, isFavorited: item.isFavorited, index: item.index, timeRemaining: item.timeRemaining, latitude: item.latitude, longitude: item.longitude, pointsCost: item.pointsCost, type: item.type})}>
                <StoreCard
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
    };

    render() {
        return(
            <View style={{backgroundColor: '#FFF', flex: 1}}>
                <View style={{height: 65, width: '100%', borderBottomWidth: 1, borderBottomColor: '#f9d3c9'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={{marginTop: 30, marginLeft: 30, fontSize: 24, fontFamily: 'quicksand-bold', color: '#b6b7b6'}}>RETURN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30}}>
                    <View style={{marginTop: 30, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 32, fontFamily: 'quicksand-bold'}}>{this.props.userPoints} points</Text>
                    </View>
                    <View style={{marginTop: 30, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} />
                </View>
                <List containerStyle={{ borderTopWidth: 0, width: '100%', marginTop: 0, paddingTop: 0 , flex: 1}}>
                    <FlatList
                        contentContainerStyle={{ paddingBottom:30 }}
                        style={{height: '100%', paddingTop: 30}}
                        data={this.props.store}
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
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => ({
    userPoints: state.data.userPoints,
    store: state.data.store,
});

export default connect(mapStateToProps)(Store);