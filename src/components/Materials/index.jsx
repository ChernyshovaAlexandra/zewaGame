import React from 'react'
import './index.scss'



export default class Materials extends React.Component {


    render() {
        const { image } = this.props
        return (
            <div className="materials row">
                <div className="col-lg-12">
                    <div className="row justify-content-center">
                        <div className="col-md-auto img-container">
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