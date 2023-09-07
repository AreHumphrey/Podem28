import React, {useState, useEffect} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import img_1 from "../../Components/Img/car_1.png";
import img_2 from "../../Components/Img/car_2.png";
import img_3 from "../../Components/Img/car_3.png";
import img_4 from "../../Components/Img/car_4.png";
import img_5 from "../../Components/Img/car_5.png";
import img_6 from "../../Components/Img/car_6.png";
import img_7 from "../../Components/Img/car_7.png";
import img_8 from "../../Components/Img/car_8.png";
import "./Carousel.css";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleLeftArrowClick = () => setCurrentSlide((prevSlide) => (prevSlide === 0 ? 7 : prevSlide - 1));
    const handleRightArrowClick = () => setCurrentSlide((prevSlide) => (prevSlide === 7 ? 0 : prevSlide + 1));

    const images = [
        img_1,
        img_2,
        img_3,
        img_4,
        img_5,
        img_6,
        img_7,
        img_8
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === 7 ? 0 : prevSlide + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">

            <div className="arrow arrow-left" onClick={handleLeftArrowClick}>
                <FaChevronLeft/>
            </div>

            <div className="image-container">
                <img src={images[currentSlide]} alt={`Image ${currentSlide + 1}`}/>
            </div>

            <div className="arrow arrow-right" onClick={handleRightArrowClick}>
                <FaChevronRight/>
            </div>

        </div>
    );
};

export default Slider;
