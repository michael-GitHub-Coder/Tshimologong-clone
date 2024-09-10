import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const SlideShow = () => {

      
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }
    const slideImages = [
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0015_3d-modeling-4.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0016__DSC1272.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        },
        {
            url: "https://tshimologong.joburg/wp-content/uploads/2021/09/web__0010_05nov-yabasadiar-16.jpg"
        }
    ]
  return (
    <div className="slide-container mb-10">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              {/* <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url}), 'height':'20px'` }}> */}
              <div style={{ 
                ...divStyle, 
                backgroundImage: `url(${slideImage.url})`, 
                height: '400px',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }}  className="object-cover">
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default SlideShow