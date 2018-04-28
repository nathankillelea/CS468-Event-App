import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { List, Icon } from 'react-native-elements';
import HomeCard from './HomeCard.js';
import { connect } from 'react-redux';

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
        }
    }

    renderItem = ({ item }) => {
        if(this.state.isDealPressed) {
            if(item.type === 'deal') {
                return(
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description, isRedeemed: item.isRedeemed, isFavorited: item.isFavorited, index: item.index})}>
                        <HomeCard
                            deal={item.deal}
                            img={item.img}
                            title={item.title}
                            color={item.color}
                            isFavorited={item.isFavorited}
                            index={item.index}
                        />
                    </TouchableOpacity>
                );
            }
        }
        else if(this.state.isExperiencesPressed) {
            if(item.type === 'experience') {
                return(
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description, isRedeemed: item.isRedeemed, isFavorited: item.isFavorited, index: item.index})}>
                        <HomeCard
                            deal={item.deal}
                            img={item.img}
                            title={item.title}
                            color={item.color}
                            isFavorited={item.isFavorited}
                            index={item.index}
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
            isDealPressed: false,
            isExperiencesPressed: false,
            isSearchPressed: true,
        })
    }

    render() {
        if(this.state.isDealPressed) {
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
        else if(this.state.isSearchPressed) {
            return null;
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