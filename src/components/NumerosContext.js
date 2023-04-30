import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const NumerosContext = React.createContext()

export default function NumerosContext({children})
{
    const [numero, setNumero]     = useState('')
    const [numero2, setNumero2]   = useState('')
    const [operacao, setOperacao] = useState('')

    return (
        <NumerosContext.Provider value={children}>
            {children}
        </NumerosContext.Provider>
    )
}