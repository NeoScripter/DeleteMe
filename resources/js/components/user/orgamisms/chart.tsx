import ChartImg from '@/assets/images/chart/chart.webp';
import ChartTabletImg from '@/assets/images/chart/chart-tablet.webp';
import PrimaryBtn from '../atoms/primary-btn';


export default function Chart() {
    return (
        <section className="flex flex-col items-center gap-11 md:flex-row md:items-start md:gap-8 md:px-4 xl:px-0 xl:gap-19 xl:items-center mb-11 md:mb-15.5 xl:mb-0">
            <div className='md:hidden xl:block xl:w-135.75 xl:shrink-0'>
                <img src={ChartImg} alt="Различные изображения графиков удаления данных" />
            </div>

            <div className='hidden md:block xl:hidden w-[275px] shrink-0'>
                <img src={ChartTabletImg} alt="Различные изображения графиков удаления данных" />
            </div>

            <div className='sm:text-center md:text-left'>
                <p className='font-bold text-[1.75rem] mb-5.5 text-balance md:text-[2.5rem] leading-[120%] md:mb-12 md:relative md:-left-16 xl:static xl:mb-8'>DeleteMe готов защитить  вашу конфиденциальность</p>
                <p className='mb-6.5 md:mb-11 xl:mb-8'>Мы уже успешно удалили более 100 миллионов  персональных записей и являееся самым надёжным и проверенным решением для обеспечения конфиденциальности.</p>
                <PrimaryBtn className='sm:mx-auto md:mx-0'>Присоединиться прямо сейчас</PrimaryBtn>
            </div>
        </section>
    )
}
