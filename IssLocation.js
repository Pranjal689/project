import {React, Component } from 'react';
import { Text, View, SafeAreaView,StyleSheet,ImageBackground,StatusBar, Alert } from 'react-native';
import {MapView,Marker} from 'react-native-maps'
export default class IssLocationScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            location:{}
        }
    }componentDidMount(){
        this.issLocation()
    }
    issLocation=()=>{
        axios.get('https://api.wheretheiss.at/v1/satellites/25544.').then(response=>{
            this.setState({location:response.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    render() {
        if(Object.keys(this.state.location.length==0)){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>Loading</Text>
                </View>
            )
        }
        else{

        

        return (
            <View
            style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground source={require('../assets/iss_bg.jpg')} style={styles.backgroundImage}
            ><View style = {styles.titleContainer}>
                <Text style={styles.titleText}>Iss Space Location</Text>
                </View>
                <View style={styles.mapContainer}><MapView style={styles.map} region={{
                    latitude:this.state.location.latittude,
                    longitude:this.state.location.longitude,
                    latitudeDelta:100,
                    longitudeDelta:100
                }}>
                     
                    </MapView><Marker coordinate={{
                          latitude:this.state.location.latittude,
                          longitude:this.state.location.longitude,
                    }}><Image source={require('../assets/iss_icon.png')} style={{height:50,width:50}}></Image></Marker></View>
                </ImageBackground>                
             

            </View>
        )
                }
    }
}
const styles = StyleSheet.create({
    container:{flex:1},
    droidSafeArea:{marginTop:Platform.OS==="android"?StatusBar.currentHeight:0},
    titleBar:{flex:0.15,justifyContent:"center",alignItems:"center"},
    rootcard:{flex:0.25,marginLeft:50,marginRight:50,marginTop:50,borderRadius:30,backgroundColor:'white'},
    titleText:{fontSize:40,fontWeight:'bold',color:'black'},
    rootText:{fontSize:35,fontWeight:'bold',color:'black',marginTop:75,paddingLeft:30},
    backgroundImage:{flex:1,resizeMode:'cover'},
    knowMore:{paddingLeft:30,color:'red',fontSize:18},
    iconImage:{position:'abosolute',height:200,width:200,right:20,top:-80,resizeMode:'contain'},
    map:{width:'100%',height:'100%'}
})