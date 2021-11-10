function Contactform() {
    return (
        <form class="form" action="https://formsubmit.co/pbggraphicsph@gmail.com" method="POST">

            <label for="firstname" class="label-text">First Name:</label><br/>
            <input type="text" id="firstname" name="firstname" class="input-style" required></input><br/>
                

            <label for="lastname" class="label-text">Last Name:</label><br/>
            <input type="text" id="lastname" name="lastname" class="input-style" required></input><br/>
            

            <label for="email" class="label-text">Email Address</label><br/>
            <input type="email" id="email" name="email" class="input-style" required></input><br/>
            

            <label for="email" class="label-text">Message</label><br/>
            <textarea class="textarea-style" required></textarea><br/>

            <div class="terms-checkbox">
            <input type="checkbox" id="agree" name="agree" required></input>
            <label for="agree" class="label-text">By checking, you agree to our <a href="/privacypolicy.html">privacy policy</a>.</label><br/>
            
            </div>

            <input type="submit" id="submit" name="submit" class="btn-default button-text"></input><br/>
            
            
        </form>                
    );
  }

export default Contactform