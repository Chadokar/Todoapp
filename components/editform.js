import React, { useState } from 'react';
import {View, StyleSheet, Text, FlatList, TextInput ,Button, TouchableOpacity } from 'react-native';


export default function EditForm({edditor , item}){

    const [textprice , setTextprice] = useState('');
    const [textname , setTextname] = useState('');


    const changeHandlername= (val , cal) => {
        if(textname==''){
            console.log('Nothing Input');
        }
        else
        {edditor(val , cal ,item );}
        setTextname('');
        setTextprice('');
    }

    return(
        <View style={styles.footer} >
            <View style={styles.input} >
                <TextInput placeholder='Fruit... ' value={textname}  onChangeText={(text)=> setTextname(text) } />
            </View>
            <View style={styles.input} >
                <TextInput placeholder='Price... ' value={textprice} onChangeText={(price)=> setTextprice(price) } />
            </View>
            <TouchableOpacity onPress={()=>changeHandlername(textname , textprice )} >
                <View style={styles.icon} >
                    <Text style={{fontSize:18}} >Save</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles =StyleSheet.create({
    footer:{
        color: '#fff',
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:5,
    },
    input: {
        backgroundColor: '#fff',
        elevation:10,
        justifyContent:'center',
        height: 50,
        marginVertical: 5,
        borderRadius: 3,
        width:'100%',
        paddingHorizontal: 20,
    },
    icon:{
        height: 50,
        width:100,
        backgroundColor:'white',
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginTop:20,
    }
})