import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import config from '../../config'

const { width, height } = Dimensions.get('window');

class Product extends Component {
    constructor(props) {
        super(props);

        _selectProduct = this._selectProduct.bind(this)
        // alert(this.props.navigation)
        this.state = {}    
    }

    _selectProduct() {
        return this.props.navigation.navigate("itemDetail")
    }

    render() {
        const product = this.props.product;
        const imageHeight = Math.floor(this.state.screenWidth * 1.1)
        this.state.screenWidth;
        return (
            <TouchableOpacity 
                    style={styles.container}
                    activeOpacity = {0.3}
                    onPress={() => {
                        this._selectProduct();
                    }}>
                <View style={styles.infoContainer}>
                    <Image 
                        style={styles.productThumbnailImage}
                        source={{uri: this.props.product.imageUrl}}/>
                    <View style={styles.contentContainer}>
                        <Text style={styles.nameText}>{this.props.product.name}</Text>
                        <Text style={styles.priceText}>CND${this.props.product.price}</Text>
                        <Text style={styles.categoryText}>@ {this.props.product.category}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width,
        height: 200,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },

    infoContainer: {
        width,
        height: width * 0.4,
        flexDirection: 'row',
    },

    productThumbnailImage: {
        width: width * 0.4,
        height: width * 0.4,
        marginLeft: 16,
    },

    contentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    nameText: {
        marginLeft: 8,
        fontWeight: "900",
    },

    priceText: {
        marginTop: 4,
        marginLeft: 8,
        fontWeight: "700",
        color: 'rgb(242, 150, 39)'
    },

    categoryText: {
        marginLeft: 8,
        bottom: 0,
        fontWeight: "700",
    },
})


export default Product;