import React, { createContext, useState } from 'react';
//entendi quase nada do que fiz aqui, honestamente.

//Esse cara é usado nos locais onde precisamos usar o contexto para acessar alguma varável
export const MyContext = createContext();

//Esse cara é usado na hora de passar o contexto para os filhos, aqui usado na App
//O que ele está definindo abaixo é que todos os componentes filhos dele, poderão acessar uma função chamada
//updateResult. Por isso definimos ele como o pai de quem quer que queiramos que tenha acesos ao estado
const MyContextProvider = ({ children }) => {
    const [result, setResult]     = useState('')
    const [calculo, setCalculo]   = useState('')
    const [numero, setNumero]     = useState('')
    const [numero2, setNumero2]   = useState('')
    const [operacao, setOperacao] = useState('')

    const updateResult = (value) => {
      setResult(value);
    };

    const updateCalculo = (value) => {
      setCalculo(value);
    };

    return (
      <MyContext.Provider value={{ result, updateResult, calculo, updateCalculo, numero, setNumero, numero2, setNumero2, operacao, setOperacao }}>
        {children}
      </MyContext.Provider>
    );
  };

  export default MyContextProvider;
