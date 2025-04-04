type FooterSocialProps = {
    html: string | TrustedHTML;
    link: string;
};
export default function FooterSocial({ html, link }: FooterSocialProps) {
    return (
        <a
            href={link}
            target="_blank"
            className="block aspect-square rounded-full border border-white/7 bg-white/10 p-2 hover:opacity-70 transition-opacity duration-200 ease-in-out"
            dangerouslySetInnerHTML={{ __html: html }}
        ></a>
    );
}
