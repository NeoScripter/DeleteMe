import FooterSocial from "../atoms/footer-social";
import FacebookSvg from "@/assets/svgs/facebook.svg?raw";
import XSvg from "@/assets/svgs/x.svg?raw";
import LinkendinSvg from "@/assets/svgs/linkendin.svg?raw";


export default function Footer() {
    return (
        <footer className="bg-primary-bg px-3 pt-7.5 pb-12 text-white sm:px-10 sm:pb-5.5 xl:px-25 xl:pt-20 xl:pb-14 sm:flex sm:justify-between xl:block">
            <div className="mb-6 sm:mb-0 xl:flex xl:justify-between xl:items-center xl:mb-7">
                <div className="mb-5 text-xl font-bold xl:text-4xl xl:mb-0">Delete.name</div>

                <div className="flex items-center gap-3.5">
                    <FooterSocial html={FacebookSvg} link="/" />
                    <FooterSocial html={XSvg} link="/" />
                    <FooterSocial html={LinkendinSvg} link="/" />
                </div>
            </div>

            <nav className="sm:mt-auto sm:mb-2 xl:mb-0">
                <ul className="opacity-70 items-end flex flex-col gap-2 text-sm sm:flex-row sm:justify-end sm:gap-10 xl:flex-col xl:gap-4">
                    <li>
                        <a href="" className="underline underline-offset-4 hover:opacity-50 transition-opacity duration-200 ease-in-out">Политика конфиденциальности</a>
                    </li>
                    <li>
                        <a href="" className="underline underline-offset-4 hover:opacity-50 transition-opacity duration-200 ease-in-out">Правила сервиса</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
