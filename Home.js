import {React,Component } from 'react';
import { Text, View, SafeAreaView,TouchableOpacity,Platform,StatusBar, Image,ImageBackground, StyleSheet } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
               
            style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.titleBar}>

                
            <Text style={styles.titleText}>isstrackerAP</Text>
            </View> 
            <TouchableOpacity style = {styles.rootcard}>
                <Text style={styles.rootText}>Iss Location</Text>
                <Text style={styles.knowMore}>Know More</Text>
                <Image source = {require ('../assets/iss_icon.png')} style={styles.iconImage}>
                    
                </Image>
                
            </TouchableOpacity>
            <TouchableOpacity style = {styles.rootcard}>
            <Text style={styles.rootText}>Meteors</Text>
                <Text style={styles.knowMore}>Know More</Text>
                <Image source = {require ('../assets/meteor_icon.png')} style={styles.iconImage}>
                    </Image>
            </TouchableOpacity>
            </View>
        )
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
    iconImage:{position:'abosolute',height:200,width:200,right:20,top:-80,resizeMode:'contain'}
})