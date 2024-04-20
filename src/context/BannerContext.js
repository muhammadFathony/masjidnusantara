import React, {createContext, useContext, useState} from 'react'

const BannerContext = createContext()

export const BannerProvider = ({children}) => {
    const [bannerData, setBannerData] = useState({imageUrl: "", altText: ""})

    return (
        <BannerContext.Provider value={{bannerData, setBannerData}}>
            {children}
        </BannerContext.Provider>
    )
}

export const useBannerContext = () => useContext(BannerContext)

