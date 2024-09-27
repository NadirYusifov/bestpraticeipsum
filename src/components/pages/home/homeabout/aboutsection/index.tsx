import Image from 'next/image'
import Person1 from '/public/Content Image 02.svg'

function AboutSection() {
  return (
    <>
    <section className="home-about" id='blog'>
        <div className="container">
            <div className='home-about-wrapper grid grid-cols-1 md:grid-cols-2 items-center mb-20'>
          <div className='home-about-content-img '>
            <Image
              width={320}
              height={430}
              alt="heroimg"
              src={Person1} />
          </div>
          <div className='home-about-content-text max-sm:mt-5 max-sm:mb-20'>
            <h1 className="text-[50px] tracking-widest leading-[50px] font-bold font-dmsans">Subscription index</h1>
            <p className="py-6 text-[20px] -tracking-tight font-mulish">
            A daily dataset to keep you up to date on subscription market trends and what&apos;s happening in your vertical.
            </p>
           <div className='btn-wrapper'>
            <p className="mr-10 text-indigo-500 cursor-pointer font-dmsans">Learn More</p>
           </div>
          </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection