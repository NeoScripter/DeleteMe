import ChartImg from '@/assets/images/chart/chart.webp';
import ChartTabletImg from '@/assets/images/chart/chart-tablet.webp';
import PrimaryBtn from '../atoms/primary-btn';


export default function Chart() {
    return (
        <section className="flex flex-col items-center gap-11 sm:flex-row sm:items-start sm:gap-8 sm:px-4 xl:px-0 xl:gap-19 xl:items-center">
            <div className='sm:hidden xl:block xl:w-135.75 xl:shrink-0'>
                <img src={ChartImg} alt="Различные изображения графиков удаления данных" />
            </div>

            <div className='hidden sm:block xl:hidden w-[275px] shrink-0'>
                <img src={ChartTabletImg} alt="Различные изображения графиков удаления данных" />
            </div>

            <div>
                <p className='font-bold text-[1.75rem] mb-5.5 text-balance sm:text-[2.5rem] leading-[120%] sm:mb-12 sm:relative sm:-left-16 xl:static xl:mb-8'>DeleteMe готов защитить  вашу конфиденциальность</p>
                <p className='mb-6.5 sm:mb-11 xl:mb-8'>Мы уже успешно удалили более 100 миллионов  персональных записей и являееся самым надёжным и проверенным решением для обеспечения конфиденциальности.</p>
                <PrimaryBtn>Присоединиться прямо сейчас</PrimaryBtn>
            </div>
        </section>
    )
}
