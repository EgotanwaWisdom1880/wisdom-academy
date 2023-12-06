import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='footer'>
      <div className='med-wrap'>
        <div className='media-align'>
        <a className='media' href="https://www.facebook.com/profile.php?id=100070857103680"><FaFacebook /> </a>
        <a className='media' href="https://instagram.com/egotanwa_wisdom?igshid=MzNlNGNkZWQ4Mg=="><FaInstagram /></a>
        <a className='media' href="https://www.linkedin.com/in/egotanwa-wisdom-300a97229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        <a className='media' href="https://wa.me/2348133691880"><FaWhatsapp /></a>
        </div>
      </div>
      <nav className='develop'> 
          <h3 className='dev-text'>@2023 Developed and maintain by Egotanwa Chidera</h3>
        </nav>
    </div>
    </>
  )
}

export default Footer