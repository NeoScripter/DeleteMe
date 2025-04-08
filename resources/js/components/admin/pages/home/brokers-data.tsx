import { CmsImage } from '@/lib/types/cmsBlock';
import { useForm } from '@inertiajs/react';
import ContentsField from '../../fields/contents';
import ImagesField from '../../fields/images';
import TextField from '../../fields/text';
import AccordionForm from '../../forms/accordion-form';

export type BrokersDataProps = {
    block?: { images: CmsImage[]; text: string | null; contents: string[] | null };
    slug: string;
    label: string;
};

type BrokersDataFormType = {
    images: File[];
    contents: string[];
    text: string;
    page_slug: string;
    block_slug: string;
};

export default function BrokersData({ block, slug, label }: BrokersDataProps) {
    const { data, setData, post, processing, errors } = useForm<BrokersDataFormType>({
        images: [],
        text: block?.text || '',
        contents: block?.contents || [],
        page_slug: 'home',
        block_slug: slug,
    });

    return (
        <AccordionForm
            label={label}
            post={post}
            toastMessage="Галерея успешно обновлена!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <TextField label="Заголовок" value={data.text} onChange={(val) => setData('text', val)} error={errors.text} />

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
