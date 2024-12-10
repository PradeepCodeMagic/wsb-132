import React, { useEffect, useState } from 'react'
import "./SingleProduct.css"
import { useLocation, useParams } from 'react-router-dom'
import Magnifier from "react-magnifier";
// import yourImage from "./path/to/image";
import axios from 'axios'

export default function SingleProduct() {

    let Pid = useParams().id
    const [singleDataP, setSingleDataP] = useState([])
    const [smallImg, setSmallImg] = useState([])
    const [bigImg, setBigImg] = useState([])

    console.log(smallImg)

    let singleData = () => {
        axios.get(`https://dummyjson.com/products/${Pid}`)
            .then((res) => {
                setSingleDataP(res.data)
                setSmallImg(res.data.images)
                setBigImg(res.data.thumbnail)
            })
            .catch()
    }


    useEffect(() => {
        singleData()
    }, [])



    return (
        <div>
            <div className="detail-container">

                <nav className="breadcrumb">
                    <a href="#">Home</a> /
                    <a href="#">Electronics</a> /
                    <span>Noise-Cancelling Wireless Headphones</span>
                </nav>


                <div className="product-detail">

                    <div className="product-images">
                        {/* <img src={bigImg} alt="Main Product Image"
                            className="main-image" /> */}

                        <Magnifier src={bigImg}  />
                        <div className="thumbnail-images">
                            {smallImg.length > 0 ?
                                smallImg.map((v) => {
                                    return (
                                        <>
                                            <img src={v} onMouseOver={() => setBigImg(v)} alt="Thumbnail 1" />
                                        </>
                                    )
                                })
                                :
                                ""
                            }


                        </div>
                    </div>


                    <div className="product-info">
                        <h1> {singleDataP.title} </h1>
                        <p className="sku">SKU: 12345 | Mens Headphones</p>
                        <p className="price">$ {singleDataP.price} </p>
                        <p className="payment-info">4 interest-free payments with <a href="#">Klarna</a>.</p>


                        <div className="options">
                            <p className="option-label">Color Options:</p>
                            <div className="option-buttons">
                                <button className="active">Black</button>
                                <button>White</button>
                                <button>Blue</button>
                            </div>
                        </div>
                        <div className="options">
                            <p className="option-label">Connectivity:</p>
                            <div className="option-buttons">
                                <button className="active">Bluetooth</button>
                                <button>Wired</button>
                            </div>
                        </div>
                        <div className="actions_wrraper">

                            <div className="quantity-section">
                                <button>-</button>
                                <input type="text" className="quantity-input" value="1" />
                                <button>+</button>
                            </div>


                            <div className="actions">
                                <button className="add-to-cart">Add to Cart</button>
                                <button className="buy-now">Buy Now</button>
                            </div>
                        </div>

                        <div className="additional-info">
                            <p><strong>Free Shipping on Orders Over $50</strong></p>
                            <p><strong>24/7 Customer Support:</strong> +1-800-123-4567</p>
                            <p><strong>1-Year Manufacturer Warranty</strong></p>
                            <p><strong>Delivery:</strong> 3 - 5 Business Days</p>
                        </div>
                        <div className="tab-content">
                            <p>This wireless earphone combines sleek design with cutting-edge technology to deliver an
                                unparalleled audio experience. Featuring a lightweight and ergonomic build, it provides a
                                comfortable fit for extended wear. The advanced sound drivers ensure crisp highs and deep bass,
                                while the latest Bluetooth connectivity offers seamless pairing. Perfect for both work and play,
                                this wireless earphone is your ideal companion for on-the-go convenience and immersive
                                listening.</p>
                        </div>
                    </div>
                </div>



                <div className="tabs">
                    <button className="active">Description</button>
                    <button>Specifications</button>
                    <button>Shipping & Returns</button>
                    <button>Warranty</button>
                </div>

                <div className="tab-content">
                    <p>Experience the perfect combination of style, comfort, and advanced technology with this wireless
                        earphone. Crafted with a lightweight, ergonomic design, it provides a secure and comfortable fit,
                        ensuring you can wear it all day without discomfort. The earphone features state-of-the-art sound
                        drivers that deliver an exceptional audio experience, with crystal-clear highs, balanced mids, and
                        powerful bass for a truly immersive soundstage.

                        Seamless Bluetooth connectivity allows quick and stable pairing with your devices, so you can enjoy
                        uninterrupted music, calls, and media. Its long-lasting battery ensures hours of continuous playtime,
                        making it the ideal companion for busy workdays, intense workouts, or relaxing commutes. Intuitive touch
                        controls and a built-in microphone provide added convenience, allowing you to manage calls and audio
                        playback effortlessly.

                        Whether you’re on the go, working out, or relaxing at home, this wireless earphone offers a premium
                        blend of performance, practicality, and comfort, elevating your everyday listening experience.</p>
                </div>









            </div>
        </div>

    )
}
