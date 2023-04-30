import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyContext } from "../MyContext";

export default function Resultado() 
{
    const { result } = useContext(MyContext);

    return (
        <View style={styles.container}>
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
      padding:"10%",
      flexWrap: 'wrap',
    },
    texto:
    {
        fontSize: 50,
        color: 'white',
        textAlign: 'left',
        backgroundColor:"black",
    },
})