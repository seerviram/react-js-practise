import * as React from 'react';
import "./style.css"

import ImageCarousel from "./ImageCarousel"

const images = [
  {
    src: 'https://picsum.photos/id/600/600/400',
    alt: 'Forest',
  },
  {
    src: 'https://picsum.photos/id/100/600/400',
    alt: 'Beach',
  },
  {
    src: 'https://picsum.photos/id/200/600/400',
    alt: 'Yak',
  },
  {
    src: 'https://picsum.photos/id/300/600/400',
    alt: 'Hay',
  },
  {
    src: 'https://picsum.photos/id/400/600/400',
    alt: 'Plants',
  },
  {
    src: 'https://picsum.photos/id/500/600/400',
    alt: 'Building',
  },
];

export default function App2() {
  const [imageIndex, setImageIndex] = React.useState(0);
  let total = images.length;

  const leftClick = () => {
    let rightIndex = imageIndex;
    if(imageIndex===0){
        rightIndex = total-1
    } else {
        rightIndex = imageIndex-1;
    }
    setImageIndex(rightIndex)
  }

  const rightClick = () => {
    let rightIndex = imageIndex;
    if(imageIndex===total-1){
        rightIndex = 0
    } else {
        rightIndex = imageIndex+1;
    }
    setImageIndex(rightIndex)
  }

  return (
    <div className={'container'}>
        <div>
            <div className={"imageContainer"}>
                <button  className="btn" onClick={leftClick}>Left</button>
                {images.map((image, index)=> (
                    <ImageCarousel
                    active = {index === imageIndex}
                    image={image}
                    />
                ))}
                <button  className="btn" onClick={rightClick}>Right</button>
            </div>
        </div>
        <div className='indexContainer'>
            {Array.from({length: total}).map((ele, index)=> (
                <div className={`box ${ index === imageIndex? "addcolor": ""}`} onClick={()=> setImageIndex(index)}/>
            ))}
        </div>
    </div>
  );
}
