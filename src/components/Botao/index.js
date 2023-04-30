import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { React, useContext, useState } from "react";
import { MyContext } from "../MyContext";

export default function Botao({titulo})
{
    //Contexto global para ter acesso ao estado da tela de resultado

    const {result  , updateResult}  = useContext(MyContext)
    const {numero  , setNumero}  = useContext(MyContext)
    const {numero2 , setNumero2}  = useContext(MyContext)
    const {operacao, setOperacao}  = useContext(MyContext)


    function verificaCor()
    {
        let estiloTexto = [styles.text];
        if (titulo=='C')
        {
            estiloTexto.push(styles.vermelho);
        }
        else if("()%÷x-+".indexOf(titulo)!=-1)
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
        //apagar tudo
        if (value === 'C') {
            updateResult("")
            
            setNumero("")
            
            setNumero2("")
            
            setOperacao("")
            
            // updateResult(eval(result+value))
        }
        //identificar quando é uma operação
        else if("+-x÷".indexOf(value) != -1)
        {
            value ==='x' ? value='*' : null
            value ==='÷' ? value='/' : null

            setOperacao(value)
            updateResult(numero+value+numero2)
        }
        //Verifica se a operaçao tá preenchida pra preencher o numero 2
        else if(value==='=')
        {

            if (numero2!=0 )
            {
                let resultado = eval(result)
                 updateResult(resultado)
                 setNumero(resultado)
                 setNumero2("")
                 setOperacao("")
            }
            else
            {
                Alert.alert("Não se pode dividir por zero.")
                updateResult("")
                setNumero("")
                setNumero2("")
                setOperacao("")
            }
        }
        else if(operacao !== "")
        {
            setNumero2(numero2+value)
            updateResult(numero+operacao+numero2+value)
        }
        //preenche o primeiro número
        else if(operacao === "")
        {
            setNumero(result+value)
            updateResult(result+value+operacao+numero2)
        }
        console.log(value)
        
        //Na minha cabeça, só isso deveria dar conta, mas o estado não atualiza na mesma hora
        //e também, parece que cada botão tem um estado, desse jeito.
        // updateResult(result+operacao+numero2)

    }

    return (
        <View style={styles.container}>         
            <Pressable style={styles.botao} onPress={()=>botaoPressionado(titulo)}>
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
      fontSize: 40,
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

  