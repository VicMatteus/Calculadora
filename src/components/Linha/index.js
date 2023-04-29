import { View, Text, StyleSheet } from "react-native"
import Botao from "../Botao";

export default function Linha({cols})
{
    return (
        <View style={styles.linha}>
            {
                cols.map((col, index)=><Botao key={index} titulo={col}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    linha: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'blue',
      width:"100%",
    },
  });