import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TouchableWithoutFeedback} from "react-native";
import EditForm from "./editform";

export class Editext extends React.Component{

    renderOutsideTouchable() {
        const {onTouchOutside , visbility} = this.props
        const view = <View style={{flex:1, width: '100%',backgroundColor:'#393939AA'}} />
        if(!visbility) return view

        return(
            <TouchableWithoutFeedback onPress={()=> onTouchOutside(false) } style={{flex:1 , width: '100%'}} >
                {view}
            </TouchableWithoutFeedback>
        )
    }

    render(){
    const {onTouchOutside , visbility,edditor , item} = this.props
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visbility}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            onTouchOutside(false);
            }}
        >
            {this.renderOutsideTouchable()}
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <EditForm edditor={edditor} item={item} />
                </View>
            </View>
            {this.renderOutsideTouchable()}
        </Modal>
    );
    }
};

const styles = StyleSheet.create({
  centeredView: {
    padding:20,
    marginTop:-0.01,
    backgroundColor:'#393939AA',
  },
  modalView: {
    backgroundColor: "#eee",
    width:'100%',
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Editext;