'use client'

import Image from "next/image"
import Logo1 from '/public/Group (5).svg'
import Logo2 from '/public/Group (6).svg'
import Logo3 from '/public/Group (7).svg'
import Logo4 from '/public/Group (8).svg'
import Logo5 from '/public/Group (9).svg'

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

function SponsorLogo() {
    const [ref] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            mode: "free-snap",
            slides: {
              perView: 3,
              spacing: 15,
            },
          }
    )
    return (
        <>
            <section className="sponsor-logo mb-[100px]">
                <div className="container">
                    <div className="row">
                        <div className="sponsor-logo-img">
                        <div ref={ref} className="keen-slider">
                            <div className="keen-slider__slide number-slide1 flex items-center justify-center">
                                <Image width={120} height={25} src={Logo1} alt="logoimg5"/>
                            </div>
                            <div className="keen-slider__slide number-slide2 flex items-center justify-center">
                                <Image width={120} height={25} src={Logo2} alt="logoimg6" />
                            </div>
                            <div className="keen-slider__slide number-slide3 flex items-center justify-center">
                                <Image width={120} height={25} src={Logo3} alt="logoimg7" />
                            </div>
                            <div className="keen-slider__slide number-slide4  flex items-center justify-center">
                                <Image width={120} height={25} src={Logo4} alt="logoimg8" />
                            </div>
                            <div className="keen-slider__slide number-slide5 flex items-center justify-center">
                                <Image width={120} height={25} src={Logo5} alt="logoimg9" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default SponsorLogo