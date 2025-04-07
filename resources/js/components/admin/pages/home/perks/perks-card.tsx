import ContentField from '@/components/admin/fields/content';
import ImageField from '@/components/admin/fields/image';
import TextField from '@/components/admin/fields/text';
import AccordionForm from '@/components/admin/forms/accordion-form';
import { useForm } from '@inertiajs/react';

export type PerksCardProps = {
    block?: { text: string | null; content: string | null; image: File | string | null };
    slug: string;
    label: string;
};

export default function PerksCard({ block, slug, label }: PerksCardProps) {
    const { data, setData, post, processing, errors } = useForm({
        text: block?.text || '',
        content: block?.content || '',
        image: block?.image || null,
        page_slug: 'home',
        block_slug: slug,
    });

    return (
        <AccordionForm
            label={label}
            post={post}
            toastMessage="Карточка успешно обновлена!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <TextField
                label="Заголовок карточки"
                value={data.text}
                onChange={(val) => setData('text', val)}
                error={errors.text}
            />

            <ContentField
                label="Подзаголовок карточки"
                value={data.content}
                onChange={(val) => setData('content', val)}
                error={errors.content}
            />

            <ImageField
                blockSlug={slug}
                pageSlug="home"
                image={data.image}
                onChange={(file) => setData('image', file)}
                error={errors.image}
                routeName={route('admin.image.destroy', slug)}
            />

        </AccordionForm>
    );
}
