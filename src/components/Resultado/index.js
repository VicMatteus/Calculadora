import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyContext } from "../MyContext";


export default function Resultado() 
{
    const { result } = useContext(MyContext);
    // function formatarResultado() {
    //     let indiceOperador =  "+-x÷".indexOf(result)
    //     if (indiceOperador !== -1) 
    //     { 
    //         console.log("entrou no operador")
    //         let num1 = result.slice(0, indiceOperador);
    //         let num2 = result.slice(indiceOperador+1, )
    //         let operador = result.slice(indiceOperador, indiceOperador+1)

    //         return(
    //         <>
    //             <Text style={styles.num1}>
    //                 {num1}
    //             </Text>
    //             <Text style={styles.operador}>
    //                 {operador}
    //             </Text>
    //             <Text style={styles.num2}>
    //                 {num2}
    //             </Text>
    //         </>
    //         )
    //     }
    //     else
    //         return(
    //             <Text style={styles.texto}>{result}</Text>
    //         )
    // }
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
      backgroundColor: '#22252e',
      justifyContent: 'flex-end',
      alignItems: 'space-between',
      width: "100%",
      padding:"10%",
      flexWrap: 'wrap',
    },
    texto:
    {
        fontSize: 64,
        color: 'white',
        textAlign: 'left',
        fontWeight:"bold",
        backgroundColor:"#22252e",
    },
    operador:{
        color: 'red',
    }
})