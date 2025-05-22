import { StyleSheet } from "react-native";

export const viewStyles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center',
    }
})

export const textStyles = StyleSheet.create({
    text:{
        padding:10,
        fontSize:26,
        fontWeight:'600',
        color:'black'
    }
})

export const errorStyles = StyleSheet.create({
    error:{
        padding:10,
        fontSize:26,
        fontWeight:'400',
        color:'red',
    }
})

export const box_styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding : 20,
        backgroundColor:'#C0FFFF',

    },
    title:{
        fontSize:18,
        marginBottom:20,
    },
    boxContainer:{
        width:200,
        height:200,
        backgroundColor:'#289AFF',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 20,
    },
     box:{
        width:50,
        height:50,
        backgroundColor:'#28E7FF',
        justifyContent:'center',
        alignItems:'center',
        margin: 5,
    },
    boxText:{
        color:'#fff',
        fontSize:18,
    },
     buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
})