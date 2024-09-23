
function Pricing() {
  return (
    <>
      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16" id="pricing">
        <div className="container">

          <div className="flex justify-between items-center mb-[98px]">
            <div className="pricing-header font-dmsans">
              <h2 className="text-[60px] w-[570px] leading-[70px] font-bold text-black">Get the right plan for future product.</h2>
            </div>
            <div className="place-content-center font-dmsans pricing-header-btn h-[60px] bg-ghost-white rounded-lg px-2 py-2">
              <button className="bg-deep-blue text-white px-10d py-3 rounded-s-lg">Yearly</button>
              <button className="px-10 py-3 font-semibold">Mounth</button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 ">
            <div className="pricing-card-first bg-white-smoke rounded-2xl shadow-sm">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-lg text-dim-gray font-medium">
                  Starter
                </h2>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-[60px] font-bold sm:text-4xl text-black font-dmsans">Free</strong>
                </p>
              </div>


              <div className="px-6 pb-6 sm:px-8 text-center border-t-0">
                <ul className="text-dim-gray text-[17px] leading-[50px] space-y-3 flex flex-col justify-center items-center font-mulish">
                  <li className="flex items-center gap-1">
                    <span> 1 Website </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span> 2GB Hosting </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span > Limited support </span>
                  </li>
                </ul>
                <button type="submit" className="w-full mt-9">
                  <p className="py-4 rounded-lg cursor-pointer bg-white text-center text-[17px] font-semibold leading-5 text-indigo-500 hover:bg-indigo-600 hover:text-white active:text-indigo-500 transition-all ease-in-out font-dmsans">Get Started</p>
                </button>
              </div>
            </div>



            <div className="pricing-card-2 bg-precious-persimmon rounded-2xl shadow-sm">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-lg text-white/70 font-dmsans">
                  Premium
                </h2>
                <p className="mt-2 sm:mt-4 font-mulish">
                  <strong className="text-[60px] font-bold sm:text-4xl text-white font-dmsans">$29<span className="text-[28px]">/mounth</span></strong>
                </p>
              </div>
              <div className="px-6 pb-6 sm:px-8 text-center border-t-0">
                <ul className="text-white text-[17px] leading-[50px] space-y-3 flex flex-col justify-center items-center font-mulish">
                  <li className="flex items-center gap-1">
                    <span> 10 Website </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span> 15GB Hosting </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span > Premium Support </span>
                  </li>
                </ul>
                <button type="submit" className="w-full mt-9">
                  <p className="py-4 rounded-lg cursor-pointer bg-terrakotta text-center text-[17px] font-semibold leading-5 text-white hover:bg-orange-700 hover:text-white active:text-indigo-500 transition-all ease-in-out">Get Started</p>
                </button>
              </div>
            </div>


            <div className="pricing-card-3 bg-white-smoke rounded-2xl shadow-sm">
              <div className="p-6 sm:px-8 text-center">
                <h2 className="text-lg text-dim-gray font-dmsans">
                  Enterprise
                </h2>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-[60px] font-bold sm:text-4xl text-black font-dmsans">$49<span className="text-[28px]">/mounth</span></strong>
                </p>
              </div>
              <div className="px-6 pb-6 sm:px-8 text-center border-t-0">
                <ul className="text-dim-gray text-[17px] leading-[50px] space-y-3 flex flex-col justify-center items-center font-mulsih">
                  <li className="flex items-center gap-1">
                    <span> Unlimited Website </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span> 50GB Hosting </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span > Premium support </span>
                  </li>
                </ul>
                <button type="submit" className="w-full mt-9">
                  <p className="py-4 rounded-lg cursor-pointer bg-white text-center text-[17px] font-semibold leading-5 text-indigo-500 hover:bg-indigo-600 hover:text-white active:text-indigo-500 transition-all ease-in-out font-dmsans">Get Started</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing