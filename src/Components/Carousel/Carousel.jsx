import "./Carousel.css";
import { Children, cloneElement, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Carousel = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            return Math.min(currentOffset + windowWidth + (windowWidth * 3,4 / windowWidth) );
        });
    };

    const handleRightArrowClick = () => {
        const maxOffset = -(windowWidth * (pages.length - 1));
        setOffset((currentOffset) => {
            return Math.max(currentOffset - windowWidth + (windowWidth * 3,4) / windowWidth , maxOffset);
        });
    };

    useEffect(() => {
        setPages(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        maxWidth: '100%',
                        minWidth: '100%',
                    },
                })
            })
        )
    }, [children])

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    useEffect(() => {
        setOffset(0);
    }, [windowWidth]);

    return (
        <div className="main-container">
            <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
            <div className="window">
                <div className="all-items-container"
                     style={{
                         transform: `translateX( ${offset}px)`
                     }}
                >
                    {pages}
                </div>
            </div>
            <FaChevronRight className="arrow" onClick={handleRightArrowClick} />
        </div>
    );
}
