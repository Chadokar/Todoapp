import { Modal, Dimensions, View, Text ,FlatList } from "react-native";
import React from "react";
import FinalFlatlist from "./finalFlatlist";

const deviceHeight = Dimensions.get("window").height

export class FinalList extends React.Component {
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

    rederTitle = () =>{
        const {title} = this.props
        return (
            <View style={{height:70,alignItems:'center', justifyContent:'center',elevation:5,backgroundColor:'white',width:'100%',marginBottom:10}} >
                <Text style={{
                    color: '#182E44',
                    fontSize:25,
                    fontWeight: '500',
                    marginTop:15,
                    marginBottom:15,
                    
                }} >
                    {title}
                </Text>
            </View>
        )
    }


    render(){

        let {show} = this.state
        const {onTouchOutside, data } = this.props

        return(
            <Modal 
            animationType={'fade'}
            transparent={true}
            visible={show}
            onRequestClose={this.close}
             >
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width:'100%',
                        borderTopRightRadius:10,
                        borderTopLeftRadius:10,
                        height: deviceHeight,
                    }} >
                        {this.rederTitle()}
                        <View style={{width:'100%',padding:10,flex:1}} >
                            <View style={{backgroundColor:'#DFD5E0',borderRadius:10,justifyContent:'center',padding:10,width:'100%'}} >
                            <Text >{'[ '} </Text>
                            <FlatList
                                data={data}
                                renderItem={({ item })=> (
                                    <FinalFlatlist item={item}  data={data}/>
                                )}
                            />
                            <Text>{' ]'} </Text>
                            </View>
                        </View>
                    </View>
            </Modal>
        )
    }

}