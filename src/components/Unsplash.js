
import ImageZoom from 'react-medium-image-zoom';
 export const Unsplash = ({url,key}) => {
    return  (
        <div className="cont">
                <ImageZoom
        image={{
          src: url,
          key:key,
          alt: '',
          className: 'single-photo',
          
        }}
        zoomImage={{
          src: 'bridge-big.jpg',
          alt: 'Golden Gate Bridge'
        }}
      />
       <div className="overlay">+See me</div>
            
        </div>
    )
}
export default  Unsplash;



