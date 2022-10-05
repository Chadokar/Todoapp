import React, { useState } from 'react';
import {View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { Feather, MaterialIcons  } from '@expo/vector-icons'; 
import Editext from './editext';

export default function TodoItem({item , pressHandler , edditor }) {

    const [modalVisible, setModalVisible] = useState(false);
    const openeditor = (val) =>{
        setModalVisible(val);
    }
    
    return(
        <View style = {styles.item} >
            <Text style={{fontSize:17,fontWeight:'500' , marginLeft:16,width:100}} >{item.name} </Text>
            <Text style={{fontSize:15,color:'#9EA3A3'}} >Price:</Text>
            <Text style={{fontSize:15,width:60}} >${item.price}</Text>
            <View style={{flexDirection:'row' ,borderLeftWidth:1,borderLeftColor:'#C0C2C2' ,height:60,alignItems:'center'}}>
                <TouchableOpacity onPress={()=>openeditor(true)}>
                    <View style={styles.edit} >
                    <Feather name="edit" size={24} color="#383B3B" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> pressHandler(item.id) } >
                    <View style={styles.edit} >
                    <MaterialIcons name="delete-outline" size={26} color="#383B3B" />
                    </View>
                </TouchableOpacity>
                <Editext
                    onTouchOutside={openeditor}
                    visbility= {modalVisible}
                    edditor={edditor}
                    item = {item}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    item:{
        flex:1,
        flexDirection:'row',
        width: '100%',
        height:60,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: '#eee',
        paddingRight:6,
        marginTop:13,
        borderRadius:10
    },
    edit:{
        height:35,
        width:35,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        margin:5,
    }
})