import Logo from '../asserts/Miniti.png'

function Header() {
  return (
    <header>
        <div className='logo'>
            <img src={Logo}  alt='Miniti'/>
            <span>Miniti TO-DO</span>
            </div>

            <div className='themeSelector'>
                <span className='light'></span>
                <span className='medium'></span>
                <span className='dark'></span>
                <span className='gOne'></span>
                <span className='gTwo'></span>
                <span className='gThree'></span>
            </div>
    </header>
  )
}

export default Header
