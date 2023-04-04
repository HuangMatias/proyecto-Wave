
import React from 'react'

const PayshipsList = ({source}) => {
    return (
        source.map ((img) =>(
            <div>
                
                <img src={img} alt={"img_"} key={"img_"} width="60" />
            </div>
        ))
    )
}
export default PayshipsList;
