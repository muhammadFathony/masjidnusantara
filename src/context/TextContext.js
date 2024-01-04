import {createContext, useContext, useState} from 'react'

const TextContext = createContext();

export const TextProvider = ({children}) => {
    const [showText, setShowText] = useState(true)

    // const toggleText = () => {
    //     setShowText((prevShowText) => !prevShowText)
    // }

    return (
        <TextContext.Provider value={{showText, setShowText}}>
            {children}
        </TextContext.Provider>
    )
}

export const useTextContext  = () => {
    return useContext(TextContext)
}