import React, { useState } from 'react';
import {View, StyleSheet, Text,  TouchableOpacity } from 'react-native';

export default function FinalFlatlist({item, data }) {
    
    return(
        <View style = {styles.item} >
            <Text>{'{'} </Text>
            <Text>      name:   "{item.name}", </Text>
            <Text>      price:  "{item.price}  " </Text>
            <Text>{'},'}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    item:{

        alignItems:'flex-start',
        width:'100%',
        margin:5,
    },
})