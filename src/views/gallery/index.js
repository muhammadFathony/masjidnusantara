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
                name: "Gambar 1",
                title: "Masjid nomor 1",
                image: require("assets/img/mosque/ukhwah-potrait1.jpg"),
                body: "Halaman masjid memiliki peran yang penting",
                date: "01-02-2024 08:00:00"
            },
            {
                id: 2,
                name: "Gambar 2",
                title: "Masjid nomor 2",
                image: require("assets/img/mosque/ukhwah-potrait5.jpg"),
                body: "suara gemercik air dari pancuran wudhu mengalir di sepanjang tepian halaman",
                date: "01-02-2024 08:00:00"
            },
            {
                id: 3,
                name: "Gambar 3",
                title: "Masjid nomor 3",
                image: require("assets/img/mosque/ukhwah-potrait6.jpg"),
                body: "Seiring berjalannya waktu, halaman masjid menjadi tempat bermain yang ramai bagi anak-anak yang gembira",
                date: "01-02-2024 08:00:00"
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