import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import PrimaryBtn from '../atoms/primary-btn';
import BrokerImg1 from '@/assets/images/broker/broker-1.webp';
import BrokerImg2 from '@/assets/images/broker/broker-2.webp';
import BrokerImg3 from '@/assets/images/broker/broker-3.webp';
import BrokerImg4 from '@/assets/images/broker/broker-4.webp';
import BrokerImg5 from '@/assets/images/broker/broker-5.webp';


export default function Brokers() {
    return (
        <section className="bg-primary-bg px-6 pt-7 pb-10 text-white sm:px-14 sm:pt-13 sm:pb-15 xl:px-20 xl:pt-21.5 xl:pb-11">
            <h3 className="mb-7 text-center text-[2rem] font-bold text-balance sm:text-4xl sm:mb-10 xl:text-5xl xl:mb-12">Мы удаляем персональную информацию из 750+ баз брокеров даных</h3>
            <PrimaryBtn className="flex items-center gap-2 mx-auto mb-9 sm:mb-12 xl:mb-17">
                Подключить защиту на год
                <ArrowLongRightIcon className="size-6" />
            </PrimaryBtn>

            <div className='flex flex-wrap items-center gap-5 sm:gap-10 justify-center xl:justify-between xl:flex-nowrap'>
                <div className='basis-[45%] xl:basis-41.25'>
                    <img src={BrokerImg1} alt="лого Google" className='w-1/2 xl:w-auto ml-auto xl:ml-0 object-contain' />
                </div>
                <div className='basis-[45%] xl:basis-42'>
                    <img src={BrokerImg2} alt="лого Яндекса" className='w-1/2 xl:w-auto object-contain' />
                </div>
                <div className='w-[28%] xl:basis-57'>
                    <img src={BrokerImg3} alt="лого Eye of God" className='object-contain' />
                </div>
                <div className='w-[28%] xl:basis-48'>
                    <img src={BrokerImg4} alt="лого Truecaller" className='object-contain' />
                </div>
                <div className='w-[28%] xl:basis-60'>
                    <img src={BrokerImg5} alt="лого Getcontact" className='object-contain' />
                </div>
            </div>
        </section>
    );
}
