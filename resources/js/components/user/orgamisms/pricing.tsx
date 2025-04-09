import { BlockType } from '@/lib/types/cmsBlock';
import { cn } from '@/lib/utils/cn';
import { cbk } from '@/lib/utils/pick-block';
import { DURATION, PLANS, selectPricePlan } from '@/lib/utils/select-price-plan';
import { CircleCheck } from 'lucide-react';
import { useState } from 'react';

type PricingProps = {
    shared: BlockType;
};
export default function Pricing({ shared }: PricingProps) {
    const [duration, setDuration] = useState(DURATION.ONE);
    const [plan, setPlan] = useState(PLANS.SINGLE);

    const currentPlanData = selectPricePlan(duration, plan);
    const montlyPrice = duration === DURATION.ONE ? Math.floor(currentPlanData.fullTermPrice / 12) : Math.floor(currentPlanData.fullTermPrice / 24);

    return (
        <section id="pricing" className="px-4 pt-12 pb-5 sm:px-11 sm:pt-18 sm:pb-14 xl:pt-15 xl:pb-23">
            {cbk(shared, 'header_title', 'text') && (
                <h2 className="mb-6 text-center text-[2rem] font-bold sm:mb-12 sm:text-5xl xl:mb-16">Тарифы {shared.header_title.text}</h2>
            )}

            <div className="sm:shadow-plan-card sm:bg-primary-btn-bg mx-auto max-w-220 overflow-clip sm:rounded-3xl">
                <header className="sm:bg-primary-btn-bg mb-4 flex items-center justify-center gap-2.5 sm:gap-9 sm:p-5 sm:pb-2.5 xl:gap-10">
                    <div className="flex items-center gap-1.5 rounded-full bg-white p-0.5 sm:basis-2/5 sm:gap-0">
                        <PlanBtn value={DURATION.ONE} isActive={duration === DURATION.ONE} onClick={() => setDuration(DURATION.ONE)} />
                        <PlanBtn value={DURATION.TWO} isActive={duration === DURATION.TWO} onClick={() => setDuration(DURATION.TWO)} />
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-white p-0.5 sm:basis-3/5 sm:gap-0">
                        <PlanBtn value={PLANS.SINGLE} isActive={plan === PLANS.SINGLE} onClick={() => setPlan(PLANS.SINGLE)} />
                        <PlanBtn value={PLANS.FAMILY} isActive={plan === PLANS.FAMILY} onClick={() => setPlan(PLANS.FAMILY)} />
                    </div>
                </header>

                {currentPlanData != null && (
                    <div className="shadow-plan-card divide-y-2 divide-gray-300 rounded-xl bg-white px-7.5 pt-7.5 pb-13 sm:flex sm:items-center sm:divide-y-0 sm:pt-8 sm:pr-12 sm:pb-12 sm:pl-14 sm:shadow-none">
                        <div className="pb-10 text-center sm:basis-2/5 sm:pt-5 sm:pr-4 sm:pb-15 sm:text-left">
                            <p className="mb-5 text-3xl font-bold sm:mb-9 sm:text-4xl">{currentPlanData.planName}</p>
                            <p className="text-xl text-gray-500">{`${duration}, ${currentPlanData.persons} ${currentPlanData.persons > 1 ? 'человека' : 'человек'}`}</p>
                            <div className="text-primary-text my-7 text-3xl font-bold sm:my-5 sm:mt-7 sm:text-4xl xl:mt-16">
                                {`${montlyPrice}р`}
                                <span className="text-xs font-normal text-gray-400 sm:text-base sm:font-medium">/мес</span>
                            </div>
                            <p className="text-sm text-gray-500">{`Полная сумма ${currentPlanData.fullTermPrice}р/${duration}`}</p>
                        </div>

                        <ul className="grid gap-6 pt-9 sm:basis-3/5 sm:border-l sm:border-gray-400 sm:pt-6 sm:pb-7 sm:pl-6 xl:pl-9">
                            <CheckItem content="Удаление неограниченного количество псевдонимов и адресов электронной почты" />
                            <CheckItem content="Удаление неограниченного количество псевдонимов и адресов электронной почты" />
                            <CheckItem content="Удаление неограниченного количество псевдонимов и адресов электронной почты" />
                            <CheckItem content="Удаление неограниченного количество псевдонимов и адресов электронной почты" />
                        </ul>
                    </div>
                )}
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
            className={cn(
                'cursor-pointer rounded-full px-[0.75em] py-[0.5em] text-xs font-medium whitespace-nowrap transition-colors duration-300 ease-in-out hover:bg-gray-100/75 sm:flex-1 sm:py-[0.75em] sm:text-base',
                isActive && 'bg-gray-200 text-blue-900',
            )}
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
            <p className="text-gray-600">{content}</p>
        </li>
    );
}
