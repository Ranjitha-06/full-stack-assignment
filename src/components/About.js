import React from 'react'
import Footer from './Footer'
import ImageZoom from 'react-medium-image-zoom';

export const About = () => {
    return (
        <div class="row">
           <div class="col s6 " ><p class="flow-text white-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet pharetra nisl. Vestibulum sollicitudin leo non purus vestibulum placerat. Curabitur ac erat sollicitudin, blandit quam vitae, rutrum diam. Aenean non gravida velit, eu consectetur neque. Nullam in volutpat massa. Duis scelerisque urna non lectus fringilla suscipit. Phasellus lacinia facilisis massa, pellentesque consectetur nunc. Nullam elit metus, condimentum nec libero quis, dapibus malesuada enim. Morbi semper condimentum pellentesque."</p></div>

            <div class="col s6 ">
           
                <div
                  class="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://mdbootstrap.com/img/new/fluid/city/113.jpg"
                    class="w-100 h-100"
                  />
                
                </div>
              
           </div>
      </div>
    
    )
}

export default About;
