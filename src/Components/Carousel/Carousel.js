import { useState, useEffect, Children, cloneElement } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function Carousel({ children }) {
const [pages, setPages] = useState([]);
const [offset, setOffset] = useState(0);
const iconStyle = {
    filter: 'invert(81%) sepia(49%) saturate(859%) hue-rotate(32deg) brightness(104%) contrast(99%)',
}


const WINDOW_WIDTH = window.screen.width;

function calcSliderSize(){
    if (WINDOW_WIDTH >= 799) {
        return true;
    } else {
        return false;
    }
}

const PAGE_WIDTH = calcSliderSize() ? 0.32 : 1;
const BLOCK_WIDTH = WINDOW_WIDTH * PAGE_WIDTH
console.log(PAGE_WIDTH);


function handleLeftArrowClick(){
    setOffset((currentOffset) => {
        const newOffset = currentOffset + BLOCK_WIDTH
        return Math.min(newOffset, 0)
    })
}

function handleRightArrowClick(){
    setOffset((currentOffset) => {
        const newOffset = currentOffset - BLOCK_WIDTH
        const maxOffset = -(BLOCK_WIDTH * (pages.length - 1))
        return Math.max(newOffset, maxOffset)
    })
}

useEffect(() => {
    setPages(
        Children.map(children, child => {
            return cloneElement(child, {
                style: {
                    height: '100%',
                    minWidth: `${BLOCK_WIDTH}px`,
                    maxWidth: `${BLOCK_WIDTH}px`,
                }
            })
        })
    );
}, [])

    return(
        <div className="carousel__container">
            <FaChevronLeft className='carouser__arrow' style={iconStyle} size={30} onClick={handleLeftArrowClick} />
            <div className="carousel__window"
                style={{
                    width: `${BLOCK_WIDTH}px`
                }}
            >
                <div className="carousel__all-pages-container"
                    style={{
                        transform: `translateX(${offset}px)`
                    }}   
                     >{pages}</div>
            </div>
            <FaChevronRight className='carouser__arrow' style={iconStyle} size={30} onClick={handleRightArrowClick} />
        </div>
    );
}

export default Carousel;