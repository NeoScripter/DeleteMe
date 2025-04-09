import { BlockType } from '@/lib/types/cmsBlock';
import { cbk, pbk } from '@/lib/utils/pick-block';
import { range } from '@/lib/utils/range';
import { Link } from '@inertiajs/react';

type FooterProps = {
    blocks: BlockType;
};
export default function Footer({ blocks }: FooterProps) {
    return (
        <footer className="bg-primary-bg flex flex-col gap-4 px-6 py-7.5 text-white md:flex-row md:items-center md:justify-between md:px-12 xl:px-25 xl:py-20">
            {cbk(blocks, 'footer_title', 'text') && <div className="text-3xl font-bold xl:text-4xl">{blocks.footer_title.text}</div>}

            <div className="flex flex-col items-start gap-1 text-sm font-bold sm:text-base md:items-center md:gap-2 lg:text-lg xl:text-xl">
                {cbk(blocks, 'footer_title', 'texts') && blocks.footer_title.texts?.map((text, index) => (
                    <p key={`text-${index}`}>{text}</p>)
                )}
            </div>

            <nav className="mt-2 md:mt-0">
                <ul className="flex flex-col items-end gap-3 text-xs opacity-70 sm:text-sm md:items-start">
                    <li>
                        <Link
                            href={route('policy')}
                            className="underline underline-offset-4 transition-opacity duration-200 ease-in-out hover:opacity-50"
                        >
                            Политика конфиденциальности
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('rules')}
                            className="underline underline-offset-4 transition-opacity duration-200 ease-in-out hover:opacity-50"
                        >
                            Правила сервиса
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route('agreement')}
                            className="underline underline-offset-4 transition-opacity duration-200 ease-in-out hover:opacity-50"
                        >
                            Пользовательское соглашение
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
