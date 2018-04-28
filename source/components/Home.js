import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native';
import { List, Icon } from 'react-native-elements';
import HomeCard from './HomeCard.js';
import { connect } from 'react-redux';
import geolib from "geolib";

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null,
    };

    constructor() {
        super();
        this.state = {
            isDealPressed: true,
            isExperiencesPressed: false,
            isSearchPressed: false,
            userLatitude: 0,
            userLongitude: 0,
            query: '',
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
        if(this.state.isSearchPressed) {
            if(item.deal.toLowerCase().includes(this.state.query.toLowerCase()) || item.title.toLowerCase().includes(this.state.query.toLowerCase())) {
                return(
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('HomeDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description, isRedeemed: item.isRedeemed, isFavorited: item.isFavorited, index: item.index, timeRemaining: item.timeRemaining, latitude: item.latitude, longitude: item.longitude})}>
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
        }
        else if(this.state.isDealPressed) {
            if(item.type === 'deal') {
                return(
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('HomeDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description, isRedeemed: item.isRedeemed, isFavorited: item.isFavorited, index: item.index, timeRemaining: item.timeRemaining, latitude: item.latitude, longitude: item.longitude})}>
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
        }
        else if(this.state.isExperiencesPressed) {
            if(item.type === 'experience') {
                return(
                    <TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('HomeDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description, isRedeemed: item.isRedeemed, isFavorited: item.isFavorited, index: item.index, timeRemaining: item.timeRemaining, latitude: item.latitude, longitude: item.longitude})}>
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
        }
    };

    dealPressedHandler() {
        this.setState({
            isDealPressed: true,
            isExperiencesPressed: false,
            isSearchPressed: false,
        })
    }

    experiencesPressedHandler() {
        this.setState({
            isDealPressed: false,
            isExperiencesPressed: true,
            isSearchPressed: false,
        })
    }

    searchPressedHandler() {
        this.setState({
            isSearchPressed: true,
        })
    }

    render() {
        if(this.state.isSearchPressed) {
            return(
                <View style={{backgroundColor: '#FFF', flex: 1}}>
                    <View style={{height: 65, borderBottomWidth: 4, borderBottomColor: '#dbdff0', width: '100%', flexDirection: 'row'}}>
                        <View style={{marginTop: 20, flex: 1, justifyContent: 'flex-start', flexDirection: 'row', marginLeft: 25}}>
                            <Icon type={'feather'} name={'search'} color={'#b6b7b6'}/>
                            <TextInput
                                placeholder={'SEARCH'}
                                placeholderTextColor={'#b6b7b6'}
                                onChangeText={(input) => this.setState({ query: input })}
                                style={{ fontFamily: 'quicksand-bold', fontSize: 24, color: '#b6b7b6', width: '80%', paddingLeft: 4 }}
                            />
                            <TouchableWithoutFeedback onPress={() => this.setState({ isSearchPressed: false, query: '' })}>
                                <Icon type={'feather'} name={'x'} color={'#b6b7b6'} />
                            </TouchableWithoutFeedback>
                        </View>
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
        else if(this.state.isDealPressed) {
            return(
                <View style={{backgroundColor: '#FFF', flex: 1}}>
                    <View style={{height: 65, borderBottomWidth: 2, borderBottomColor: '#f9d3c9', width: '100%', flexDirection: 'row'}}>
                        <TouchableWithoutFeedback onPress={() => this.dealPressedHandler()}>
                            <View style={{borderBottomWidth: 4, borderBottomColor: '#E5461F'}}>
                                <Text style={{marginTop: 30, marginLeft: 25, marginRight: 25, fontSize: 24, fontFamily: 'quicksand-bold'}}>DEALS</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.experiencesPressedHandler()}>
                            <View>
                                <Text style={{marginTop: 30, marginLeft: 25, marginRight: 25, fontSize: 24, fontFamily: 'quicksand-bold', color: '#b6b7b6'}}>EXPERIENCES</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.searchPressedHandler()}>
                            <View style={{marginTop: 20, flex: 1, justifyContent: 'flex-end', flexDirection: 'row', marginRight: 25}}>
                                <Icon type={'feather'} name={'search'} color={'#b6b7b6'}/>
                            </View>
                        </TouchableWithoutFeedback>
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
        else if(this.state.isExperiencesPressed) {
            return(
                <View style={{backgroundColor: '#FFF', flex: 1}}>
                    <View style={{height: 65, borderBottomWidth: 2, borderBottomColor: '#dbdff0', width: '100%', flexDirection: 'row'}}>
                        <TouchableWithoutFeedback onPress={() => this.dealPressedHandler()}>
                            <View>
                                <Text style={{marginTop: 30, marginLeft: 25, marginRight: 25, fontSize: 24, fontFamily: 'quicksand-bold', color: '#b6b7b6'}}>DEALS</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.experiencesPressedHandler()}>
                            <View style={{borderBottomWidth: 4, borderBottomColor: '#4B60B4'}}>
                                <Text style={{marginTop: 30, marginLeft: 25, marginRight: 25, fontSize: 24, fontFamily: 'quicksand-bold'}}>EXPERIENCES</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.searchPressedHandler()}>
                            <View style={{marginTop: 20, flex: 1, justifyContent: 'flex-end', flexDirection: 'row', marginRight: 25}}>
                                <Icon type={'feather'} name={'search'} color={'#b6b7b6'}/>
                            </View>
                        </TouchableWithoutFeedback>
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

export default connect(mapStateToProps)(Home);