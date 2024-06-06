import './Banner.css'
import banner from '../../assets/banner.png'

export default function Bannner() {
  return (
    <header className='banner'>
      <img src={banner} alt="banner" />
    </header>
  )
}