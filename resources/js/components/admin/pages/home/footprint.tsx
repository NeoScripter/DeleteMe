import ImageField from '@/components/admin/fields/image';
import AccordionForm from '@/components/admin/forms/accordion-form';
import { useForm } from '@inertiajs/react';
import TextField from '../../fields/text';

export type FootPrintProps = {
    block?: { image: string | null; text: string | null };
    slug: string;
    label: string;
};

export default function FootPrint({ block, slug, label }: FootPrintProps) {
    const { data, setData, post, processing, errors } = useForm({
        image: null,
        text: block?.text || '',
        page_slug: 'home',
        block_slug: slug,
    });

    return (
        <AccordionForm
            label={label}
            post={post}
            toastMessage="Секция успешно обновлена!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <TextField label="Заголовок" value={data.text} onChange={(val) => setData('text', val)} error={errors.text} />

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
