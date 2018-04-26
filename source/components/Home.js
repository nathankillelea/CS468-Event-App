import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import HomeCard from './HomeCard.js';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
        header: null,
    };

    constructor() {
        super();
    }

    render() {
        const dealList = [
            {
                deal: '$5 OFF STUDENT TICKET',
                title: 'Fighting Illini Athletics',
                description: 'Support your team and save $5 on a student ticket to any game this month!',
                timeRemaining: '2h remaining',
                img: require('../assets/fightingillinibasketball.jpg'),
                color: '#E5461F',
                key: '1'
            },
            {
                deal: '10% OFF CONCERT TICKET',
                title: 'Krannert Center for the Performing Arts',
                description: 'Experience the music live at the Krannert Center for the Performing Arts and save 10% off of a concert ticket.',
                timeRemaining: '4 days remaining',
                img: require('../assets/krannert.jpg'),
                color: '#E5461F',
                key: '2'
            },
            {
                deal: 'FREE COOKING CLASS',
                title: 'ARC Instructional Kitchen',
                description: 'Learn how to cook through a free course at the ARC Instructional Kitchen.',
                timeRemaining: '5 days remaining',
                img: require('../assets/cooking.jpg'),
                color: '#E5461F',
                key: '3'
            }
        ];
        return(
            <View style={{backgroundColor: '#FFF', flex: 1}}>
                <View style={{height: 60, borderBottomWidth: 4, borderBottomColor: '#E5461F', width: '100%', flexDirection: 'row'}}>
                    <Text style={{marginTop: 20, marginLeft: 30, fontSize: 24, fontFamily: 'quicksand-bold'}}>DEALS</Text>
                    <Text style={{marginTop: 20, marginLeft: 40, fontSize: 24, fontFamily: 'quicksand-bold'}}>EXPERIENCES</Text>
                    <View style={{marginTop: 10, flex: 1, justifyContent: 'flex-end', flexDirection: 'row', marginRight: 30}}>
                        <Icon type={'feather'} name={'search'} />
                    </View>
                </View>
                <List containerStyle={{ borderTopWidth: 0, width: '100%', marginTop: 0, paddingTop: 0 , flex: 1, marginBottom: 30}}>
                    <FlatList
                        style={{height: '100%', paddingTop: 30}}
                        data={dealList}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeDetail', {deal: item.deal, img: item.img, title: item.title, color: item.color, description: item.description})}>
                                <HomeCard
                                    deal={item.deal}
                                    img={item.img}
                                    title={item.title}
                                    color={item.color}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.key}
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