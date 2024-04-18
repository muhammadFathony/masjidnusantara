import React, {createContext, useContext, useState, useEffect} from 'react'
import axiosRequest from 'helpers/axiosHelper'

const TextContext = createContext()

export const BannerProvider = ({children}) => {
    const [bannerData, setBannerData] = useState({imageUrl: "", altText: ""})
    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await axiosRequest("http://localhost:8000/cms_kerjabersih/api/slider/branch/banner?branch_id=ad877114-b35d-4baf-bfd3-553e236af058", 
                "GET", null, {
                    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YmMwZmM0NS1kYjMwLTQ0NTItYWVkZi1mMWYyNjgzMWMyOTYiLCJqdGkiOiIxMTRiYzliNTU5MTdhZDg5MjAwMTNjNWM2YWNiNTBhMjFjZDk2OGM5YmE4NzBhMTE3YzhmNzAzYTQ0ODQ2YzczYmNhYTEyNzA2ZjUwZDg3NCIsImlhdCI6MTcxMzA0NzMwNy4wNDc4MTcsIm5iZiI6MTcxMzA0NzMwNy4wNDc4MjQsImV4cCI6MTcyODg1ODUwNi4wOTM0OTEsInN1YiI6ImNhM2RjYzFmLTNlODktNGVmZi05YzQ1LWNkZGRiZTk0MTU1MiIsInNjb3BlcyI6W119.OOsG-OLF5qchxrN7V8UoBHJybS3AByPBAdVlYusUtoPA3QuiWP84PuYQ37_a6TSg2uP_kFZkLEomLF2z4WZIyHH9PhIFOOOFvwNQFKhYar9UI6gjD-gyJtwxnUlfbHwi0NUDdDCqRnO37wYr7a_jO6nmj4aCl7EKW6njr5uc42iZIucDTSVCsk9i_qbrMCUujm6LR7yGpxnEM3-uHCUnMCZrRPX7GAIWHbSDAR6pGcwtpM6KlHMwenNQY-IFUclnTNPcRegTDnoPqkvBFah36ibS-okhwOjqNnN6PcqWPRvW72jks-q5QoY145FqLSJOZB9EEsx-YJJFz-icyyZ3oeNXzaxP7cttzO7RpVdLzJH6gFSslluNfifcbsm9ovMCxXjt0gXYSC9a2BD3Z5xrcMGRBWYx67r7UIGpQKuFjoXbSHthBN1QOnS3I0O_OgHUn1HCDm1F2YGf0iPuXi0VK5qlc5ZGN2nHB8YWCzrhk1Lqk8Pck7FmfOBWQAiM_tcuCorkC-AATXChXDbS8wVJk9kPbKZQ7O8TM0PAzXPsdGnlS1G4HV7wFe-HnxXtdYFKX5_zKMXKLFlJ6HUlB3BVDbCwHHn2G0MmB2SeZqjBHVUnYe1Hr8hPDdhDQ0_5zNiRHLDeJR_m-AL1UYgtFueEEGK3VEIe_5pXf_vu9gdtO0Y"
                });
                setBannerData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching banner data: ", error);
            }
        };

        fetchBannerData();
    }, [])
    return (
        <TextContext.Provider value={{bannerData, setBannerData}}>
            {children}
        </TextContext.Provider>
    )
}

export const useTextContext = () => useContext(TextContext)
export default TextContext;

