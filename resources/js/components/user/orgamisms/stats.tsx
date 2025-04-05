import { v4 as uuidv4 } from 'uuid';

export default function Stats() {
    return <div className="mb-10 sm:mb-21 xl:mb-14 grid gap-7 sm:grid-cols-3 sm:gap-10 place-content-center">
        {stats.map(stat => (
            <StatCard key={stat.id} title={stat.title} content={stat.content} />
        ))}
    </div>;
}

type StatCardProps = {
    title: string;
    content: string;
};

function StatCard({ title, content }: StatCardProps) {
    return (
        <div className='max-w-82.75 xl:max-w-77.75'>
            <p className='font-bold text-4xl mb-3 sm:mb-5 sm:text-5xl'>{title}</p>
            <p>{content}</p>
        </div>
    );
}

type StatCardType = {
    id: string;
    title: string;
    content: string;
};

const stats: StatCardType[] = [
    {
        id: uuidv4(),
        title: '100M+',
        content: 'успешно удалённых нашими экспертами персональных данных',
    },
    {
        id: uuidv4(),
        title: '54+',
        content: 'года усилий сэкономили для клиентов (при личном удалении данных, это более 20 000 часов)',
    },
    {
        id: uuidv4(),
        title: '2,389+',
        content: 'cреднее количество раскрытых персональных данных, обнаруженных у брокеров данных за двухлетнюю подписку на наш сервис',
    },
];
