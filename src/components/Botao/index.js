import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { React, useContext, useState, useEffect } from "react";
import { MyContext } from "../MyContext";
import { Ionicons } from '@expo/vector-icons'; 

export default function Botao({titulo})
{
    //Contexto global para ter acesso ao estado da tela de resultado

    const {result  , updateResult}  = useContext(MyContext)
    const {numero  , setNumero}     = useContext(MyContext)
    const {numero2 , setNumero2}    = useContext(MyContext)
    const {operacao, setOperacao}   = useContext(MyContext)
    const [botaoAC , setBotaoAC  ]  = useState("AC")

    useEffect(() => {
        if (numero!=="") {
            setBotaoAC("C")
        }
        else
        {
            setBotaoAC("AC")
        }
    }, [result]);

    function verificaCor()
    {
        let estiloTexto = [styles.text];
        if ("÷x-+=".indexOf(titulo)!=-1)
        {
            estiloTexto.push(styles.vermelho);
        }
        else if("C%".indexOf(titulo)!=-1 || titulo==='+/-')
        {
            estiloTexto.push(styles.verde);
        }
        // else if(titulo=='=')
        // {
        //     estiloTexto.push(styles.equals);
        // }
        return estiloTexto;
    }

    function botaoPressionado(value) {
        let temVirgula;
        //apagar tudo

        if (value === 'C') {
            updateResult("")
            
            setNumero("")
            
            setNumero2("")
            
            setOperacao("")
        }
        else if(result.length>8 && value !== '↺' && value !== "=")
        {
            console.log('atingiu')
            alert("Quantidade máxima de caracteres atingida!")
            return
        }
        //identificar quando é uma operação
        else if("+-x÷".indexOf(value) != -1)
        {
            value ==='x' ? value='*' : null
            value ==='÷' ? value='/' : null

            setOperacao(value)
            updateResult(numero+value+numero2)
        }
        else if(value === '↺')
        {
            if (numero2!=='') {
                //número 2 tá preenchido e deve ser subtraído
                resultado = numero2.substring(0, numero2.length-1)
                setNumero2(resultado)
                updateResult(numero+operacao+resultado)
            } 
            else if(operacao!=="") {
                //operação tá chei a e num 2 vazio, então tem que apagar operacao
                resultado = operacao.substring(0, operacao.length-1)
                setOperacao("")
                updateResult(numero+""+numero2)
            }
            else
            {
                //só tem o num 1, apaga ele
                resultado = numero.substring(0, numero.length-1)
                setNumero(resultado)
                updateResult(resultado+operacao+numero2)
            }
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
            //como a operação tá preenchida, a vírgula vai no segundo número
            temVirgula = numero2.indexOf(".") !== -1
            if (value === ',' && !temVirgula) {
                setNumero2(numero2+".")
                updateResult(numero+operacao+numero2+".")
                return
            }
            else if (value === ',' && temVirgula)
            {
                return
            }
            //Se não for vírgula, só adiciono no segundo n´mero
            setNumero2(numero2+value)
            updateResult(numero+operacao+numero2+value)
        }
        //preenche o primeiro número
        else if(operacao === "")
        {
            temVirgula = numero.indexOf(".") !== -1
            console.log(temVirgula);
            if (value === ',' && !temVirgula) {
                setNumero(result+'.')
                updateResult(result+'.'+operacao+numero2)
                return
            }
            else if (value === ',' && temVirgula)
            {
                return
            }
            setNumero(result+value)
            updateResult(result+value+operacao+numero2)
        }
        // console.log(resultado)
        
        //Na minha cabeça, só isso deveria dar conta, mas o estado não atualiza na mesma hora
        //e também, parece que cada botão tem um estado, desse jeito.
        // updateResult(result+operacao+numero2)

    }

    //condição para carregamento do botão de +/- estilizado
    if (titulo==='+/-') {
        return (
            <View style={styles.container}>         
                <Pressable style={styles.botao} onPress={()=>botaoPressionado(titulo)}>
                    <Text style={verificaCor()}>{signal()}</Text>
                </Pressable>
            </View>
        )
    }
    else if(titulo==='↺')
    {
        return (
            <View style={styles.container}>         
                <Pressable style={styles.botao} onPress={()=>botaoPressionado(titulo)}>
                    {/* <Text style={verificaCor()}>{signal()}</Text> */}
                    <Ionicons name="ios-return-down-back-outline" size={24} color="white" />
                </Pressable>
            </View>
        )
        
    }
    return (
        <View style={styles.container}>         
            <Pressable style={styles.botao} onPress={()=>botaoPressionado(titulo)}>
                <Text style={verificaCor()}>{titulo==='C' ? botaoAC : titulo}</Text>
            </Pressable>
        </View>
    )
}

function signal() {
    return(
        <Pressable onPress={()=>botaoPressionado(titulo)}>
            <Text style={styles.plus}>
                +
            </Text>
            <Text style={styles.barra}>
                /
            </Text>
            <Text style={styles.minus}>
                -
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    botao: {
        width: 65,
        height:65,
        backgroundColor:'#242730',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
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
        color:'#33f0c6',
    },
    equals:
    {
        padding:0,
        margin:0,
        borderRadius: 50,
        height:"100%",
        width: "100%",
        backgroundColor:"#477417",
    },
    barra:{
        // fontSize: "50",
        fontSize:50,
        color:'#33f0c6',
        transform: [{rotate: '15deg'}],
    },
    plus: {
        position: 'absolute',
        fontSize: 30,
        right: 12,
        top: 5,
        color:'#33f0c6',
        
    },
    minus: {
        position: "absolute",
        fontSize: 35,
        left: 12,
        bottom: 3,
        color:'#33f0c6',
        
    },
  });

  