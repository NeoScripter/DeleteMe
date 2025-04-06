import { cn } from '@/lib/utils/cn';
import { CircleCheck } from 'lucide-react';

export default function Pricing() {
    return (
        <section id="pricing" className="px-4 pt-12 pb-5 sm:px-11 sm:pt-18 sm:pb-14 xl:pt-15 xl:pb-23">
            <h2 className="mb-6 text-center text-[2rem] font-bold sm:mb-12 sm:text-5xl xl:mb-16">Тарифы DeleteMe</h2>

            <div className="sm:shadow-plan-card sm:rounded-3xl overflow-clip max-w-220 mx-auto sm:bg-primary-btn-bg">
                <header className="mb-4 flex items-center gap-2.5 justify-center sm:bg-primary-btn-bg sm:p-5 sm:pb-2.5 sm:gap-9 xl:gap-10">
                    <div className="flex items-center gap-1.5 rounded-full bg-white p-0.5 sm:basis-2/5 sm:gap-0">
                        <PlanBtn value="1 year" isActive={true} />
                        <PlanBtn value="2 years" isActive={false} />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-white p-0.5 sm:basis-3/5 sm:gap-0">
                        <PlanBtn value="1 человек" isActive={true} />
                        <PlanBtn value="Пара" isActive={false} />
                        <PlanBtn value="Семья" isActive={false} />
                    </div>
                </header>

                <div className="shadow-plan-card divide-y-2 sm:divide-y-0 sm:flex sm:items-center divide-gray-300 bg-white rounded-xl px-7.5 sm:pl-14 sm:pr-12 pt-7.5 pb-13 sm:pt-8 sm:pb-12 sm:shadow-none">
                    <div className="pb-10 sm:pb-15 sm:pt-5 text-center sm:text-left sm:basis-2/5 sm:pr-4">
                        <p className="mb-5 text-3xl sm:text-4xl font-bold sm:mb-9">Ультра защита</p>
                        <p className="text-xl text-gray-500">2 года, 1 человек</p>
                        <div className="text-primary-text my-7 sm:my-5 xl:mt-16 text-3xl sm:text-4xl font-bold">
                            790р
                            <span className="text-xs font-normal text-gray-400 sm:font-medium sm:text-base">/мес</span>
                        </div>
                        <p className="text-gray-500 text-sm">Полная сумма 19 100р/2 года</p>
                    </div>

                    <ul className="grid gap-6 pt-9 sm:pt-6 sm:pb-7 sm:basis-3/5 sm:pl-6 xl:pl-9 sm:border-l sm:border-gray-400">
                        <CheckItem content="Удаление неограниченного количество псевдонимов и адресов электронной почты" />
                        <CheckItem content="Удаление неограниченного количество псевдонимов и адресов электронной почты" />
                        <CheckItem content="Удаление неограниченного количество псевдонимов и адресов электронной почты" />
                        <CheckItem content="Удаление неограниченного количество псевдонимов и адресов электронной почты" />
                    </ul>
                </div>
            </div>
        </section>
    );
}

type PlanBtnProps = {
    onClick?: () => void;
    value: string;
    isActive: boolean;
};

function PlanBtn({ onClick = () => {}, value, isActive }: PlanBtnProps) {
    return (
        <button
            onClick={onClick}
            className={cn('cursor-pointer rounded-full px-[0.75em] py-[0.5em] sm:py-[0.75em] text-xs transition-colors duration-300 ease-in-out hover:bg-gray-100/75 font-medium sm:text-base sm:flex-1', isActive && 'bg-gray-200 text-blue-900')}
        >
            {value}
        </button>
    );
}

type CheckItemProps = {
    content: string;
};

function CheckItem({ content }: CheckItemProps) {
    return (
        <li className="flex items-start gap-4">
            <CircleCheck className="text-icon-violet mt-1 size-5 shrink-0" />
            <p className=" text-gray-600">{content}</p>
        </li>
    );
}
