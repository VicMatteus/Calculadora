import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyContext } from "../MyContext";

export default function Resultado() 
{
    const { result } = useContext(MyContext);

    return (
            <View style={styles.container}>
                <View style={{padding:0, position:"absolute", margin:"10%", width:"100%", height:"100%" ,justifyContent:"flex-end", alignItems:"flex-start"}}>
                    <Text style={styles.texto}>Resultado:</Text>
                </View>
                <Text style={styles.texto}>{result}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      height:"100%",   
      flexDirection:'row',
      backgroundColor: 'red',
      justifyContent: 'flex-end',
      alignItems: 'space-between',
      width: "100%",
      padding:"10%"
    },
    texto:
    {
        fontSize: 20,
        color: 'white',
        textAlign: 'left',
        backgroundColor:"black",
    }
})