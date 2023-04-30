import { StyleSheet, Text, View } from 'react-native';
import Linha from './src/components/Linha';
import Resultado from './src/components/Resultado';
import MyContextProvider from './src/components/MyContext';

print("hello world")

export default function App() {
    return (
        <MyContextProvider>
            <View style={styles.container}>
                <View style={styles.resultado}>
                    <Resultado />
                </View>
                <View style={styles.funcoes}>
                    <View style={styles.funcoesEsq}>
                        <Text style={styles.botoesFuncoes}>🕑</Text>
                        <Text style={styles.botoesFuncoes}>📏</Text>
                        <Text style={styles.botoesFuncoes}>🥼</Text>
                    </View>
                    <View style={styles.funcoesDir}>
                        <Text style={{fontSize:30}}>🗑️</Text>
                    </View>
                </View>
                <View style={styles.teclado}>
                    <Linha cols={['C'  , '()',  '%',  '÷']} />
                    <Linha cols={['7'  , '8' ,  '9',  'x']} />
                    <Linha cols={['4'  , '5' ,  '6',  '-']} />
                    <Linha cols={['1'  , '2' ,  '3',  '+']} />
                    <Linha cols={['+/-', '0' ,  ',',  '=']} />
                </View>
            </View>
        </MyContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    flexDirection:'column',
    backgroundColor: 'red',
    width: "100%",
  },
  resultado: {
    flex:2.3,
    backgroundColor:"purple",
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
    
  },
  funcoes: {
    flex:0.7,
    flexDirection:'row',
    backgroundColor: '#080808',
    // backgroundColor: '#2dd40f',
    borderBottomColor:'#282727',
    borderBottomWidth: 2,
    paddingTop:5,
    paddingBottom:5,
  },
  funcoesEsq:{
    flex:3,
    flexDirection:'row',
    // backgroundColor:"pink",
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  funcoesDir:{
    flex:1,
    // backgroundColor:"grey",
    justifyContent: 'center',
    alignItems: 'center',
  },
  botoesFuncoes:
  {
    fontSize:30,
    padding:10,
    margin:10,
    // backgroundColor:'brown'
  },
  teclado: {
    flex: 4,
    paddingTop:10,
    backgroundColor:"#080808",
    width:"100%",
    height:"100%",
  },
});
