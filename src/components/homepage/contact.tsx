import contactSVG from '@/assets/contact.svg';
import linkedinSVG from '@/assets/linkedin.svg';
import githubSVG from '@/assets/github.svg';
import devSVG from '@/assets/dev.svg';

import { Contact } from '@/styles/components/contact';

const ContactComponent: React.FC = () => {
  return (
    <Contact id="contact">
        <h2>CONTATO</h2>

        <div>
          <img src={contactSVG} />

          <div>
            <span>Rio de Janeiro, RJ</span>
            <h3>rafaelcodomingues@gmail.com</h3>
            <p>+55 21 99430-1916</p>

            <div>
              <a href="https://www.linkedin.com/in/rafaelcodomingues/" target="_blank">
                <img src={linkedinSVG} />
              </a>

              <a href="https://github.com/rafacdomin" target="_blank">
                <img src={githubSVG} />
              </a>

              <a href="https://dev.to/rafacdomin" target="_blank">
                <img src={devSVG} />
              </a>
            </div>
          </div>
        </div>
      
      </Contact>
  )
}

export default ContactComponent;