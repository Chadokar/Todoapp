import { Modal, Dimensions, TouchableWithoutFeedback, Stylesheet, View, Text ,FlatList } from "react-native";
import React from "react";
import Addnew from "./addnew";

const deviceHeight = Dimensions.get("window").height

export class Newaditem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false 
        }
    }

    show = () => {
        this.setState({show : true})
    }

    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex:1, width: '100%'}} />
        if(!onTouch) return view

        return(
            <TouchableWithoutFeedback onPress={onTouch} style={{flex:1 , width: '100%'}} >
                {view}
            </TouchableWithoutFeedback>
        )
    }

    rederTitle = () =>{
        const {title} = this.props
        return (
            <View style={{alignItems:'center'}} >
                <Text style={{
                    color: '#182E44',
                    fontSize:25,
                    fontWeight: '500',
                    marginTop:15,
                    marginBottom:30,
                }} >
                    {title}
                </Text>
            </View>
        )
    }

    renderSeparator = () => (
        <View 
            style={{
                opacity:0.1,
                backgroundColor:'#182E44',
                height:1,
            }}
        >

        </View>
    )

    render(){
        
        let {show} = this.state
        const {onTouchOutside , title, addtext} = this.props

        return(
            <Modal 
            animationType={'fade'}
            transparent={true}
            visible={show}
            onRequestClose={this.close}
             >
                <View style = {{
                    flex:1,backgroundColor:'#000000AA',justifyContent:'flex-end'
                }} >
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width:'100%',
                        borderTopRightRadius:10,
                        borderTopLeftRadius:10,
                        maxHeight: deviceHeight * 0.4,
                    }} >
                        {this.rederTitle()}
                        <Addnew addtext={addtext} />
                    </View>
                </View>
            </Modal>
        )
    }

}