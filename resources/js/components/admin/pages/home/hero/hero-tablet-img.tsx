import ImageField from '@/components/admin/fields/image';
import AccordionForm from '@/components/admin/forms/accordion-form';
import { useForm } from '@inertiajs/react';

export type HeroTabletImageProps = {
    block?: { image: string | null };
    slug: string;
    label: string;
};


export default function HeroTabletImage({ block, slug, label }: HeroTabletImageProps) {
    const { setData, post, processing, errors } = useForm({
        image: null,
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
                image={block?.image || null}
                onChange={(file) => setData('image', file as unknown as null)}
                error={errors.image}
                routeName={route('admin.image.destroy', slug)}
            />

        </AccordionForm>
    );
}
