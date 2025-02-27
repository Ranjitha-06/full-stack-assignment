import React from 'react'

export const Contact = () => {
    return (
      
        <section class="mb-4">

   
    <h2 class="h1-responsive font-weight-bold text-center my-4 text-white">Contact us</h2>
    
    <p class="text-center w-responsive mx-auto mb-5 text-white">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

        
        <div class="">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="text-white">Your name</label>
                        </div>
                    </div>
                   
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="text-white">Your email</label>
                        </div>
                    </div>
                 

                </div>
                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control "/>
                            <label for="subject" class="text-white">Subject</label>
                        </div>
                    </div>
                </div>
               
                <div class="row">

                  
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message" className="text-white">Your message</label>
                        </div>

                    </div>
                </div>
               

            </form>

            <div class="text-center text-md-center">
                <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
      
        
        

    </div>

</section>

    )
}

export default Contact
