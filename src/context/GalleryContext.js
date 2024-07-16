import React, {createContext, useContext, useState} from 'react'

const GalleryContext = createContext()

export const GalleryProvider = ({children}) => {
    const [galleryData, setGalleryData] = useState([])

    return (
        <GalleryContext.Provider value={{galleryData, setGalleryData}}>
            {children}
        </GalleryContext.Provider>
    )
}

export const useGalleryContext = () => useContext(GalleryContext)

