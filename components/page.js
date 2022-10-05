import React, { useState } from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import TodoItem from './Todoitem';
import { Newaditem } from './newaditem';
import { FinalList } from './finallist';


const Page = () => {

    const [list, setList] = useState([
        {name:"Banana" , price: "100" , id: 1},
        {name:"Apple" , price: "100", id: 2},
        // {name:"Banana" , price: "100" , id: 3},
        // {name:"Apple" , price: "100", id: 4},
        // {name:"Banana" , price: "100" , id: 5},
        // {name:"Apple" , price: "100", id: 6},
        // {name:"Banana" , price: "100" , id: 7},
        // {name:"Apple" , price: "100", id: 8},
        // {name:"Banana" , price: "100" , id: 9},
        // {name:"Apple" , price: "100", id: 10},
        // {name:"frapes" , price: "100" , id: 11},
        // {name:"Grapes" , price: "100", id: 12},
        
    ])

    const [newList,setNewlist] = useState([]);

    const pressHandler = (id) =>{
        console.log(id);
        setList((prevList) => {
            return prevList.filter(fruit => fruit.id != id)
        } );
    }

    const edditor = (text , rate , item) => {
        console.log(item.id);
        const newText = {
            name:text,
            price: rate,
            id:item.id,
        }

        setNewlist(newList);
        for(let i=1;i<list.length;i++){
            if(list[i] ===item){
                setNewlist([...newList ,newText]);
            }
            else{
                setNewlist([...newList, list[i]]);
            }
            pressHandler(list[i].id);
        }

        for(let i=0;i<newList.length;i++){
            let k = newList[i];
            changetext(k.name, k.price, k.id );
        }

    }

    const changetext = (text , rate , it)=>{
        const newText = {
            name: text,
            price: rate,
            id: it,
        };
        setList([...list, newText]);
    }

    const addtext = (text , rate)=>{
        const newText = {
            name: text,
            price: rate,
            id:Math.random(),
        };
        setList([...list, newText]);
    }

    let popupRef = React.createRef()

    const onShowPopup = () => {
        popupRef.show()
    }

    const onClosePopup = () => {
        popupRef.close()
    }

    let popupRefs = React.createRef()

    const onShowPopups = () => {
        popupRefs.show()
    }

    const onClosePopups = () => {
        popupRefs.close()
    }


    

    return(
        <>
        <View style={styles.container} >
            <FlatList
                data={list}
                renderItem={({ item })=> (
                    <TodoItem item={item} pressHandler={pressHandler} edditor={edditor} data={list}/>
                )}

            />
            {/* <Text>This is list</Text> */}
        </View>
        <View style={styles.footer} >
            <TouchableOpacity onPress={onShowPopup} >
                <View style={styles.icon} >
                    <AntDesign name='plus' color={'#101010'} size={33} />
                </View>
            </TouchableOpacity>
        </View>
        <Newaditem 
            title="Demo Popup"
            ref={(target) => popupRef = target }
            onTouchOutside={onClosePopup}
            data={list}
            addtext={addtext}
        />
        <View style={styles.footerr} >
            <TouchableOpacity onPress={onShowPopups} >
                <View style={styles.bottom}>
                    <Text style={{fontSize:15,fontWeight:'500',color:'#fff'}} >Final Food List</Text>
                </View>
            </TouchableOpacity>
        </View>
        <FinalList 
            title="Demo Popup"
            ref={(target) => popupRefs  = target }
            onTouchOutside={onClosePopups}
            data={list}
        />
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingHorizontal:10,
        paddingBottom:80,
    },
    footer:{
        width:'100%',
        position: 'absolute',
        bottom:75,
        color: '#fff',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingHorizontal:20,
    },
    icon:{
        height: 60,
        width:60,
        backgroundColor: '#999777',
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
    },
    footerr:{
        flex:1,
        width:'100%',
        position: 'absolute',
        bottom:13,
        color: '#fff',
        paddingVertical:4,
        paddingHorizontal:20,
      },
      bottom:{
        flex:1,
        height: 50,
        width:'100%',
        backgroundColor: '#1FB866',
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      }
})

export default Page;




