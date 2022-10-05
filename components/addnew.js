import React, { useState } from 'react';
import {View, StyleSheet, TextInput , TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'


export default function Addnew({addtext}){

    const [textprice , setTextprice] = useState('');
    const [textname , setTextname] = useState('');


    const changeHandlername= (val , cal) => {
        if(textname==''){
            console.log('Nothing Input');
        }
        else
        {addtext(val , cal);}
        setTextname('');
        setTextprice('');
    }

    return(
        <View style={styles.footer} >
            <View style={styles.input} >
                <TextInput placeholder='Fruit... ' value={textname} onChangeText={(text)=> setTextname(text) } />
            </View>
            <View style={styles.input} >
                <TextInput placeholder='Price... ' value={textprice} onChangeText={(price)=> setTextprice(price) } />
            </View>
            <TouchableOpacity onPress={()=>changeHandlername(textname , textprice)} >
                <View style={styles.icon} >
                    <AntDesign name='plus' color={'#101010'} size={39} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles =StyleSheet.create({
    footer:{
        bottom:15,
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
        height: 70,
        width:70,
        backgroundColor: '#999777',
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        marginTop:20,
    }
})