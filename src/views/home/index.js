import React, { useEffect, useState } from "react"
import Banner from "../../components/Banner"
import Download from "../../components/Download"
import Carousel from "../../components/Carousel"
import Cardimage from "../../components/Cardimage"
import { useTextContext } from "../../context/TextContext"
import { useBannerContext } from "../../context/BannerContext"
import { useGalleryContext } from "context/GalleryContext"
import axiosRequest from "helpers/axiosHelper"
import Cookies from "js-cookie";
const Component = () => {
    const { setShowText } = useTextContext()
    const [bannerData, setLocalBannerData] = useState({ imageUrl: "", altText: "" })
    const [gallerData, setLocalGalleryData] = useState([]);
    const { setBannerData } = useBannerContext();
    const { setGalleryData } = useGalleryContext()
    useEffect(() => {
        const fetchBannerData = async () => {
            const accessToken = process.env.REACT_APP_ACCESS_TOKEN
            try {
                const response = await axiosRequest(`${process.env.REACT_APP_BASE_URL}api/slider/banner`,
                    "GET", null, {
                    Authorization: `Bearer ${accessToken}`
                });
                if (response.metadata.code === 200) {
                    const imageUrl = `${process.env.REACT_APP_BASE_URL}${response.data[0].path}/${response.data[0].image}`
                    setLocalBannerData({ imageUrl: imageUrl, altText: 'banner' });
                    setBannerData({ imageUrl: imageUrl, altText: 'banner' })
                } else {
                    setLocalBannerData({ imageUrl: require("assets/img/mosque/ali-arif-soydas-uwzPks8CE3k-unsplash.jpg"), altText: 'banner' });
                    setBannerData({ imageUrl: require("assets/img/mosque/ali-arif-soydas-uwzPks8CE3k-unsplash.jpg"), altText: 'banner' })
                }

                console.log(bannerData)
            } catch (error) {
                console.error("Error fetching banner data: ", error);
            }
        };

        const fetchGalleryData = async () => {
            const accessToken = process.env.REACT_APP_ACCESS_TOKEN
            try {
                const response = await axiosRequest(`${process.env.REACT_APP_BASE_URL}api/slider/data`,
                    "GET", null, {
                    Authorization: `Bearer ${accessToken}`
                });
                if (response.metadata.code === 200) {
                    const arr = response.data.map((value, key) => {
                        const imageUrl = `${process.env.REACT_APP_BASE_URL}${value.path}/${value.image}`
                        return {
                            src: imageUrl,
                            altText: `image${key}`,
                            caption: "",
                            header: "",
                        }
                    })
                    console.log(arr, 'ok');
                    setLocalGalleryData(arr);
                    setGalleryData(arr)
                } else {
                    setLocalBannerData([]);
                    setBannerData([])
                }

            } catch (error) {
                console.error("Error fetching banner data: ", error);
            }
        }

        fetchBannerData();
        fetchGalleryData();
        setShowText(true)
    }, [])
    return (
        <>
            <main>
                <Banner data={bannerData} />
                <Download />
                <Carousel data={gallerData} />
                <Cardimage />
            </main>
        </>
    )
}
export default Component