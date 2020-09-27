import React from 'react'
import './index.scss'
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'


const images = [
    img1, img2, img3
]


export default class Materials extends React.Component {
    filterMass = () => {

    }
    render() {
        return (
            <div className="materials row">
                <div className="col-lg-12">
                    {/* <h2>materials</h2> */}
                    <div className="row justify-content-center">
                        <div className="col-md-12 img-container">
                            {images.map((item, index) => (
                                <img src={item} alt='' key={index} className={"animate__animated animate__fadeIn animate__delay-" + index + 's'} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}