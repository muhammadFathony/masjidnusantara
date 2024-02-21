import React, { useEffect, useState } from "react"
import Banner from "../../components/Banner"
import Cardimage from "../../components/Cardimage"
import { useTextContext } from "../../context/TextContext"

const Component = () => {
    const { setShowText } = useTextContext()
    const [arrayImage, setArrayImage] = useState([]);
    useEffect(() => {
        setShowText(true)
        const data = [
            {
                id: 1,
                name: "Masjid1",
                title: "Masjid nomor 1",
                image: require("assets/img/mosque/ukhwah-potrait1.jpg"),
                body: "bla bala bala bla",
                date: "2024-01-01 08:00:00"
            },
            {
                id: 2,
                name: "Masjid2",
                title: "Masjid nomor 2",
                image: require("assets/img/mosque/ukhwah-potrait5.jpg"),
                body: "bla bala bala bla",
                date: "2024-01-01 08:00:00"
            },
            {
                id: 3,
                name: "Masjid3",
                title: "Masjid nomor 3",
                image: require("assets/img/mosque/ukhwah-potrait6.jpg"),
                body: "bla bala bala bla",
                date: "2024-01-01 08:00:00"
            },
        ];
        setArrayImage(data)
    },[setShowText]);
    
    return(
        <>
            <main>
                <Banner />
                <Cardimage arrayImage={arrayImage} />
            </main>
        </>
    )
}
export default Component;