import React, {useEffect,useState} from 'react'
import Unsplash from './Unsplash';
import Loader from './Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';


export const Scroll=()=>  {
        const [images,setImages]=useState([]);
        useEffect(()=>{
    
            fetchImages();
          },[])
          
          const fetchImages=()=>{
            const accessKey=process.env.REACT_APP_ACCESSKEY;
            const apiRoot="https://api.unsplash.com";
            axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=12`)
            .then(res=>setImages([...images,...res.data ]))
        
          }
        return (
            <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader/>}
    >
       <div className="images">
    {images.map(image=>(
      <Unsplash url={image.urls.thumb} key={image.id}/>
    ))}
    </div>
    </InfiniteScroll>
        )
    }

export default Scroll
