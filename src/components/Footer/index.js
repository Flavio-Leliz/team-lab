import './Footer.css'
import fb from '../../assets/fb.png'
import x from '../../assets/x.png'
import ig from '../../assets/ig.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href='https://facebook.com' target='_bank'>
              <img src={fb} alt='Facebook' />
            </a>
          </li>
          <li>
            <a href='https://x.com' target='_bank'>
              <img src={x} alt='X' />
            </a>
          </li>
          <li>
            <a href='https://instagram.com' target='_bank'>
              <img src={ig} alt='Instagram' />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src={logo} alt='logo' />
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