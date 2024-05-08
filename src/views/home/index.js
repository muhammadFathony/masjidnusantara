import React, { useEffect, useState } from "react"
import Banner from "../../components/Banner"
import Download from "../../components/Download"
import Carousel from "../../components/Carousel"
import Cardimage from "../../components/Cardimage"
import { useTextContext } from "../../context/TextContext"
import { useBannerContext } from "../../context/BannerContext"
import axiosRequest from "helpers/axiosHelper"
import Cookies from "js-cookie";
const Component = () => {
    const { setShowText } = useTextContext()
    const [ bannerData, setLocalBannerData ] = useState({ imageUrl: "", altText: "" })
    const { setBannerData } = useBannerContext();
    useEffect(() => {
        const fetchBannerData = async () => {
            const accessToken = Cookies.get("accessToken");
            console.log(accessToken)
            try {
                const response = await axiosRequest(`${process.env.REACT_APP_BASE_URL}api/slider/branch/banner?branch_id=ad877114-b35d-4baf-bfd3-553e236af058`, 
                "GET", null, {
                    Authorization: `Bearer ${accessToken}`
                });
                if(response.metadata.code === 200){
                    setLocalBannerData({ imageUrl: response.data[0].image, altText: 'banner' });
                    setBannerData({ imageUrl: response.data[0].image, altText: 'banner' })
                } else {
                    setLocalBannerData({ imageUrl: require("assets/img/mosque/ali-arif-soydas-uwzPks8CE3k-unsplash.jpg"), altText: 'banner' });
                    setBannerData({ imageUrl: require("assets/img/mosque/ali-arif-soydas-uwzPks8CE3k-unsplash.jpg"), altText: 'banner' })
                }
                
                console.log(bannerData)
            } catch (error) {
                console.error("Error fetching banner data: ", error);
            }
        };

        fetchBannerData();
        setShowText(true)
    },[])
    return (
        <>
        <main>
            <Banner data={bannerData} />
            <Download />
            <Carousel />
            <Cardimage />
        </main>
        </>
    )
}
export default Component