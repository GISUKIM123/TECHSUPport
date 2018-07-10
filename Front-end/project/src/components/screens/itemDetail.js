import React, { Component } from 'react'
import { StyleSheet, View, Dimensions, StatusBar, TouchableOpacity, Text } from 'react-native'
import { Carousel, DetailBoard } from '../containers'
import config from '../../config'

const { width, height } = Dimensions.get('window');

export default class ItemDetail extends Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.imageSlider}>
                <Carousel images ={ config.images } isItemCarousel ={ true } />
            </View>
            <View style={styles.buttonLayer}>
                <TouchableOpacity
                        style={styles.buyButton}
                        onPress={this.handleBuy}
                        underlayColor='#fff'>
                <Text style={styles.buyText}>Buy</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.deatilBoard}>
                <DetailBoard />
            </View>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },

    buttonLayer: {
        position: 'relative',
        backgroundColor: '#f1f8ff',
        width: width,
        height: 64,
    },

    buyButton:{
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        right: 10,
        width: width * 0.36,
        height: 44,
        backgroundColor:'#1E6738',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    },

    buyText:{
        color:'#fff',
        textAlign:'center',
        fontWeight: '900',
        paddingLeft : 10,
        paddingRight : 10
    },
    
    imageSlider: {
        width: width,
        height: height * 0.4,
        flex: 1,
        alignSelf: 'stretch',
        paddingTop: StatusBar.currentHeight,
    },
    
    deatilBoard: {
        width: width,
        height: height * 0.6 - 64,
        backgroundColor: '#f1f8ff',
    },
  });
  


