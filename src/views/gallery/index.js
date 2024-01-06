import React, { useEffect } from "react"
import Banner from "../../components/Banner"
import Cardimage from "../../components/Cardimage"
import { useTextContext } from "../../context/TextContext"

const Component = () => {
    const { setShowText } = useTextContext()
    useEffect(() => {
        setShowText(true)
    },[setShowText])
    return(
        <>
            <main>
                <Banner />
                <Cardimage />
            </main>
        </>
    )
}
export default Component;