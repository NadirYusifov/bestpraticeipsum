import Link from 'next/link'
import LogoImage from '../../../../public/Logo Color (1).svg'
import Image from 'next/image'

function Header() {
  return (
    <nav>
      <div className='container'>
      <div className="navbar flex">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu flex flex-col justify-center items-center dropdown-content text-white text-lg bg-slate-600 rounded-box z-[1] mt-3 shadow">
                <li className='hover:underline hover:underline-offset-8'><Link href={'/'}>Home</Link></li>
                <li className='hover:underline hover:underline-offset-8'><Link href={'#section'}>Features</Link></li>
                <li className='hover:underline hover:underline-offset-8'><Link href={'#pricing'}>Pricing</Link></li>
                <li className='hover:underline hover:underline-offset-8'><Link href={'#blog'}>Blog</Link></li>

              </ul>
            </div>
            <Link href={'#'} className="btn btn-ghost text-xl"><Image width={200} height={40} alt='logoimage' src={LogoImage}/></Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className='hover:underline hover:underline-offset-8 underline-bg-blue-500'><Link href={'/'}>Home</Link></li>
              <li className='hover:underline hover:underline-offset-8'><Link href={'#section'}>Features</Link></li>
              <li className='hover:underline hover:underline-offset-8'><Link href={'#pricing'}>Pricing</Link></li>
              <li className='hover:underline hover:underline-offset-8'><Link href={'#blog'}>Blog</Link></li>
            </ul>
          </div>
          <div>
          </div>
          <div className="navbar-end">
            <Link href={'#'} className="btn px-10 bg-button text-white">Get Started</Link>
          </div>
      </div>
      </div>
    </nav>
  )
}

export default Header