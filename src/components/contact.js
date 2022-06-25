import Contactform from './contactform'

function Contact() {
    return (
        <section class="contact" id="contact">
        <div class="contact-message" data-aos="fade-in">
        <h3>Ready to work with me?</h3>
        <h6>Hit me up on the form below!</h6>
        </div>
        <Contactform />
    </section>
    );
  }

export default Contact