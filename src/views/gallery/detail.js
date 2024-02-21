import React from 'react'

const Component = ({ image }) => {
    return (
        <>
            <div>
                <h1>
                    Detail {image.name}
                </h1>
                <p>
                    {image.body}
                </p>
                <p>
                    {image.date}
                </p>
            </div>
        </>
    )
}
export default Component