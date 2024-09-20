import Image from 'next/image'
import HeroImg from '/public/Hero 3D.svg'
import DownArrow from '/public/Down Arrow.svg'

function HeroSection() {
  return (
    <>
      <div className="hero-section mt-[60px] mb-[130px]">
        <div className="container">
          <div className='hero-section-wrapper grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-content-center items-center'>
          <div className='hero-content-text'>
            <h1 className="text-[70px] tracking-thight leading-[77px] font-bold lg:text-[80px]">Grow your subscription business</h1>
            <p className="py-6 text-[20px] font-normal -tracking-tight text-left leading-8 mt-5 mb-7">
            Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.
            </p>
           <div className='btn-wrapper flex'>
            <button className="btn place-content-center px-10 py-6 mr-10 hover:bg-indigo-700 text-white bg-indigo-500 leading-5">Get Started</button>
            <Image width={45} height={45} alt='downarrow' src={DownArrow} className='cursor-pointer'/>
           </div>
          </div>
          <div className='hero-content-img'>
            <Image
              width={610}
              height={640}
              alt="heroimg"
              src={HeroImg}
              className=" rounded-lg max-sm:hidden max-md:hidden" />
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection