import React from 'react'

export default function Gallery(props) {
    return (
        <div className="gallery">
            <div className="gallery__title">
                <h2>Awesome Gallery</h2>
            </div>
            <div className="gallery__images">
                <div className="gallery__images__image">
                    <img src={require('../../assets/images/gallery/1.jpg')} alt=""/>
                </div>
                <div className="gallery__images__image">
                    <img src={require('../../assets/images/gallery/2.jpg')} alt=""/>
                </div>
                <div className="gallery__images__image">
                    <img src={require('../../assets/images/gallery/3.jpg')} alt=""/>
                </div>
                <div className="gallery__images__image">
                    <img src={require('../../assets/images/gallery/4.jpg')} alt=""/>
                </div>
                <div className="gallery__images__image">
                    <img src={require('../../assets/images/gallery/5.jpg')} alt=""/>
                </div>
                <div className="gallery__images__image">
                    <img src={require('../../assets/images/gallery/6.jpg')} alt=""/>
                </div>
                <div className="gallery__images__image">
                    <img src={require('../../assets/images/gallery/7.jpg')} alt=""/>
                </div>
                <div className="gallery__images__image">
                    <img src={require('../../assets/images/gallery/8.jpg')} alt=""/>
                </div>
            </div>
            <div className="gallery__button">
                <button>check Out More</button>
            </div>
        </div>
    )
}
