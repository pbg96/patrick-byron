import Contactform from './ContactForm'

function Contact() {
    return (
        <section class="contact" id="contact">
        <div class="contact-message" data-aos="fade-in">
        <h3>Don't be shy!</h3>
        <h6>Something's boggling your mind? Just HMU!</h6>
        </div>
        <Contactform />
    </section>
    );
  }

export default Contact