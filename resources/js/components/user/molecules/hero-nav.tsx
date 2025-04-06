export default function HeroNav() {
    return (
        <nav className="hidden font-normal xl:block">
            <ul className="flex items-center gap-8">
                <li>
                    <a href="#perks" className="underline-offset-2 hover:underline">
                        Как это работает
                    </a>
                </li>
                <li>
                    <a href="#reviews" className="underline-offset-2 hover:underline">
                        Отзывы
                    </a>
                </li>
                <li>
                    <a href="#choice" className="underline-offset-2 hover:underline">
                        Почему мы
                    </a>
                </li>
                <li>
                    <a href="#pricing" className="underline-offset-2 hover:underline">
                        Тарифы
                    </a>
                </li>
            </ul>
        </nav>
    );
}
