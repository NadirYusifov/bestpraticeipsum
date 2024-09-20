import Image from 'next/image'
import Benchmarks from '../../../../../public/Icon 001.svg'
import PricingAudit from '../../../../../public/Icon 002.svg'
import Retention from '../../../../../public/Icon 003.svg'

function FAQ() {
    return (
        <>
            <section className='faq-section mb-[100px]' id='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='faq-wrapper grid grid-cols-1 md:grid-cols-3 gap-10'>
                            <div className='faq-benchmarks flex flex-col justify-center items-center'>
                                <div className='faq-benchmarks-image'>
                                    <Image width={150} height={30} alt='benchmarkslogo' src={Benchmarks} />
                                </div>
                                <div className='faq-benchmarks-content text-center max-sm:px-8'>
                                    <h2 className='text-[24px] mb-5 mt-3 font-semibold'>Benchmarks</h2>
                                    <p>See how you stack up against comparable companies in similar stages.</p>
                                </div>
                            </div>
                            <div className='faq-benchmarks flex flex-col justify-center items-center'>
                                <div className='faq-benchmarks-image'>
                                    <Image width={150} height={30} alt='benchmarkslogo' src={PricingAudit} />
                                </div>
                                <div className='faq-benchmarks-content text-center max-sm:px-8'>
                                    <h2 className='text-[24px] mb-5 mt-3 font-semibold'>Pricing Audit</h2>
                                    <p>Benchmark the health of your monetization and pricing strategy.</p>
                                </div>
                            </div>
                            <div className='faq-benchmarks flex flex-col justify-center items-center'>
                                <div className='faq-benchmarks-image'>
                                    <Image width={150} height={30} alt='benchmarkslogo' src={Retention} />
                                </div>
                                <div className='faq-benchmarks-content text-center max-sm:px-8'>
                                    <h2 className='text-[24px] mb-5 mt-3 font-semibold'>Retention Audit</h2>
                                    <p>Audit where revenue leakage exists and where you can increase retention.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FAQ