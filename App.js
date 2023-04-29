import { StyleSheet, Text, View } from 'react-native';
import Linha from './src/components/Linha';
import Resultado from './src/components/Resultado';
import MyContextProvider from './src/components/MyContext';

export default function App() {
    return (
        <MyContextProvider>
            <View style={styles.container}>
                <View style={styles.resultado}>
                    <Resultado />
                </View>
                <View style={styles.teclado}>
                    <Linha cols={['C'  , '()',  '%',  '/']} />
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
    flex:1,
    backgroundColor:"purple",
    justifyContent: 'center',
    alignItems: 'center',
    width:"100%",
  },
  teclado: {
    flex: 2,
    backgroundColor:"white",
    width:"100%",
    height:"100%",
  },
});
