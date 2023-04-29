import { View, Text, Pressable, StyleSheet } from "react-native";
import { React, useContext, useState } from "react";
import { MyContext } from "../MyContext";

export default function Botao({titulo})
{
    //Contexto global para ter acesso ao estado da tela de resultado
    const {result, updateResult} = useContext(MyContext)

    function verificaCor()
    {
        let estiloTexto = [styles.text];
        if (titulo=='C')
        {
            estiloTexto.push(styles.vermelho);
        }
        else if("()%/x-+".indexOf(titulo)!=-1)
        {
            estiloTexto.push(styles.verde);
        }
        else if(titulo=='=')
        {
            estiloTexto.push(styles.equals);
        }
        return estiloTexto;
    }

    function botaoPressionado(value) {
        // if (value && value.indexOf("+-*/")!=-1) {
            updateResult(eval(result+value))
        // }
        // else
        // {
            // updateResult(result+value)
        // }
    }

    return (
        <View style={styles.container}>         
            <Pressable style={styles.botao} onPress={(event)=>botaoPressionado(titulo)}>
                <Text style={verificaCor()} >{titulo}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#080808',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botao: {
        height:80,
        width: 80,
        backgroundColor:'#1f1f1f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    text: {
      color: 'white',
      fontSize: 50,
      textAlignVertical:"center",
      textAlign:"center",
    },
    vermelho:{
        color:'red',
    },
    verde:{
        color:'green',
    },
    equals:
    {

        padding:0,
        margin:0,
        borderRadius: 50,
        height:"100%",
        width: "100%",
        backgroundColor:"#477417",
    }

  });

  