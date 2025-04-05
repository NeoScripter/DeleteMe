import ChoiceImg from '@/assets/images/choice/choice.webp';

export default function Choice() {
    return (
        <section className="text-primary-text px-6 pt-12.5 pb-18 sm:px-17 sm:pt-35.5 sm:pb-23.5 xl:px-32 xl:pt-0 xl:pb-22">

            <div className='relative max-w-76.75 mx-auto sm:max-w-164 xl:max-w-full'>
                <div className="bg-marquee-bg absolute left-0 right-0 -top-70 z-10 overflow-clip px-6 pt-8 text-center text-balance xl:text-left sm:-top-72 sm:px-10.5 sm:pt-12 xl:-top-50 xl:flex xl:items-center xl:gap-14 xl:pr-30 xl:pt-0">
                    <div className='xl:order-1 mb-4'>
                        <p className="mb-5 text-[2rem] font-bold sm:text-4xl xl:mb-7">Узнайте свой цифровой след</p>
                        <p>
                            Когда вы введете свое имя, город и дату рождения в поисковую систему, вы удивитесь, сколько вашей личной информации находится
                            в общем доступе!
                        </p>
                    </div>
                    <img src={ChoiceImg} alt="Поисковое окно Яндекс поиска" className="object-contain object-bottom xl:w-132 xl:shrink-0 mx-auto xl:mx-0" />
                </div>
            </div>

            <div className='pt-70 sm:pt-100 xl:pt-65'>
                <h3 className='font-bold text-[2rem] text-center mb-15 xl:mb-9 sm:text-4xl xl:text-5xl'>Почему DeleteMe?</h3>

                <div>

                </div>
            </div>
        </section>
    );
}
