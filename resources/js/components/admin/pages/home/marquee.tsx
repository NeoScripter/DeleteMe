import { CmsImage } from '@/lib/types/cmsBlock';
import { useForm } from '@inertiajs/react';
import ContentsField from '../../fields/contents';
import ImagesField from '../../fields/images';
import AccordionForm from '../../forms/accordion-form';

export type MarqueeProps = {
    block?: { images: CmsImage[]; contents: string[] | null };
    slug: string;
    label: string;
};

type MarqueeFormType = {
    images: File[];
    contents: string[];
    page_slug: string;
    block_slug: string;
};

export default function Marquee({ block, slug, label }: MarqueeProps) {
    const { data, setData, post, processing, errors } = useForm<MarqueeFormType>({
        images: [],
        contents: block?.contents || [],
        page_slug: 'home',
        block_slug: slug,
    });

    return (
        <AccordionForm
            label={label}
            post={post}
            toastMessage="Фото успешно обновлены!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <ImagesField
                blockImages={block?.images}
                errors={errors}
                value={data.images}
                onChange={(imgs) => setData('images', imgs)}
                pageSlug="home"
                blockSlug={slug}
                reorderRouteName={route('admin.images.reorder')}
                deleteRouteName={route('admin.images.destroy')}
            />

            <ContentsField
                label="Альтернативный текст для фото"
                contents={data.contents}
                onChange={(updated) => setData('contents', updated)}
                errors={errors}
            />
        </AccordionForm>
    );
}
