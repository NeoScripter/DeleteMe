import ImageField from '@/components/admin/fields/image';
import AccordionForm from '@/components/admin/forms/accordion-form';
import { useForm } from '@inertiajs/react';

export type HeroDektopImageProps = {
    block?: { image: File | string | null };
    slug: string;
    label: string;
};

export default function HeroDektopImage({ block, slug, label }: HeroDektopImageProps) {
    const { data, setData, post, processing, errors } = useForm({
        image: block?.image || null,
        page_slug: 'home',
        block_slug: slug,
    });

    return (
        <AccordionForm
            label={label}
            post={post}
            toastMessage="Фото успешно обновлено!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
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
