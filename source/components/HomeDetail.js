import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground} from "react-native";


export default class HomeDetail extends React.Component {
    static navigationOptions = {
        title: 'HomeDetail',
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            deal: this.props.navigation.state.params.deal,
            img: this.props.navigation.state.params.img,
            title: this.props.navigation.state.params.title,
            color: this.props.navigation.state.params.color,
            description: this.props.navigation.state.params.description,
        }
    }

    render() {
        return(
            <View style={{ backgroundColor: '#FFF', flex: 1 }}>
                <View style={{height: 60, width: '100%'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={{marginTop: 20, marginLeft: 30, fontSize: 24, fontFamily: 'quicksand-bold'}}>RETURN</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 40, backgroundColor: this.state.color, justifyContent: 'center',}}>
                    <Text style={{paddingLeft: 12, color: '#FFF', fontFamily: 'quicksand-bold', fontSize: 22}}>{this.state.deal}</Text>
                </View>
                <ImageBackground
                    style={{width: '100%', height: 235.294117647}}
                    source={this.state.img}
                />
                <View style={{flex: 1}}>
                    <Text style={{marginLeft: 30, marginTop: 20, fontFamily: 'quicksand-bold', fontSize: 16}}>{this.state.title}</Text>
                    <Text style={{marginLeft: 30, marginRight: 30, marginTop: 8, fontFamily: 'quicksand-bold', fontSize: 14}}>{this.state.description}</Text>
                    <TouchableOpacity style={{marginTop: 20, backgroundColor: this.state.color, alignSelf: 'center', borderRadius: 5, paddingVertical: 10, paddingHorizontal: 25}}>
                        <Text style={{color: '#FFF', fontFamily: 'quicksand-bold', fontSize: 16}}>REDEEM</Text>
                    </TouchableOpacity>
                </View>
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