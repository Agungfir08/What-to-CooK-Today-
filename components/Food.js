import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import { Ionicons } from "@expo/vector-icons";
import colors from '../config/colors';
const { width } = Dimensions.get("window");
const ITEM_WIDTH = width/2 - 10 * 2.3;

const Food = (props) => {

    const [selected, setSelected] = useState(false);

    return (
        <TouchableOpacity style={styles.itemWrapper}>
            <Image style={styles.itemImage} source={props.image}/>
            <TouchableOpacity activeOpacity={0.75} onPress={() => setSelected(!selected)} style={styles.bookmark}>
                <Ionicons 
                    name={selected ? 'bookmark' : 'bookmark-outline'}
                    color={selected ? colors.mainGreen : colors.black} 
                    size={30}/>
            </TouchableOpacity>
            <View style={styles.titleWrapper}>
            <Text style={styles.itemName}>{props.name}</Text>
                <View style={{alignItems: "center", left: 5, top: 5}}>
                    <Ionicons name="star" color="gold" style={{marginTop: 5, top: 5}} size={15}></Ionicons>
                    <Text style={styles.ratingText}>{props.rating}</Text>
                </View>
            </View>
            <Text style={styles.itemIngredient}>{props.ingredient}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemWrapper: {
        width: '100%',
        marginBottom: 20,
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingBottom: 30,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        elevation: 9,
    },
    itemImage: {
        width: '100%',
        height: ITEM_WIDTH + 10 * 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    bookmark: {
        position: 'absolute',
        top: 15,
        right: 13,
        backgroundColor: colors.white,
        opacity: 0.75,
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 4
    },
    titleWrapper: {
        marginRight: 10,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingTop: 5,
        paddingHorizontal: 20,
    },
    ratingText: {
        fontSize: 15,
        color: colors.darkGrey,
        top: 4
    },
    itemName: {
        fontSize: 20,
        fontWeight: "500",
        top: 10,
    },
    itemIngredient: {
        fontSize: 14,
        color: colors.darkGrey,
        fontWeight: "400",
        marginTop: 10,
        top: 5,
        left: 15,
    },
})

export default Food;