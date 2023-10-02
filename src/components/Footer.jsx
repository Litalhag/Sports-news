import FooterForm from './FooterForm'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer id="main-footer" className="py-2">
      <div className="container footer-container">
        <div>
          <img src="img/logo_light.png" alt="NewsGrid" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum
            vitae.
          </p>
        </div>

        <FooterForm />

        <FooterLinks />

        <div>
          <h2>Join Our Club</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            nesciunt!
          </p>
          <a href="#" className="btn btn-secondary">
            Join Now
          </a>
        </div>
        <div>
          <p>Copyright © 2019, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
