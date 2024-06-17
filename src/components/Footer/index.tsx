import Icons from '../Icon'
import './Footer.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

interface FooterProps {
  github: string
  instagram: string
  linkedin: string
}

const Footer = ({
  github,
  instagram,
  linkedin
}: FooterProps) => {
  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href={github} target='_bank'>
              <Icons
                Icon={FaGithub}
                label='Github'
              />
            </a>
          </li>
          <li>
            <a href={linkedin} target='_bank'>
              <Icons
                Icon={FaLinkedin}
                label='Linkedin'
              />
            </a>
          </li>
          <li>
            <a href={instagram} target='_bank'>
              <Icons
                Icon={FaInstagram}
                label='Instagram'
              />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src='assets/logo.png' alt='logo' />
      </section>

      <section>
        <p>
          Desenvolvido por Flávio Leliz
        </p>
      </section>
    </footer>
  )
}

export default Footer