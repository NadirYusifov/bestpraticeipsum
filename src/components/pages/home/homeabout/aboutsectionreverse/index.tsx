import Image from "next/image"
import Person2 from '/public/Content Image.svg'

function AboutSectionReverse() {
  return (
    <>
    <div className="home-about-reverse">
        <div className="container">
            <div className='home-about-reverse-wrapper grid grid-cols-1 md:grid-cols-2 place-items-center items-center mb-[100px]'>
          <div className='home-about-reverse-content-text max-sm:mt-5 max-sm:mb-[110px]'>
            <h1 className="text-[50px] tracking-widest leading-[50px] font-bold">In-depth metrics</h1>
            <p className="py-6 text-[20px] -tracking-tight">
            Accurate, real-time reporting at your fingertips. Getting data has never been easier.
            </p>
           <div className='btn-wrapper'>
            <p className="mr-10 text-indigo-500 cursor-pointer">Learn More</p>
           </div>
          </div>
          <div className='home-about-reverse-content-img max-sm:order-first'>
            <Image
              width={320}
              height={430}
              alt="heroimg"
              src={Person2} />
          </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutSectionReverse