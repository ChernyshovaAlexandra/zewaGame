import React from 'react'
import './index.scss'
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'


const images = [
    img1
]


export default class Materials extends React.Component {


    render() {
        const { image } = this.props
        // let images = Array.from(image)
        console.log(this.props)
        return (
            <div className="materials row">
                <div className="col-lg-12">
                    <div className="row justify-content-center">
                        <div className="col-md-12 img-container">
                                <a data-fancybox="gallery" href={image}  >
                                    <img src={image} alt='' className="animate__animated animate__fadeIn animate__delay-" />
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}