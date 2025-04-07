import { useForm } from '@inertiajs/react';
import TextField from '../../../fields/text';
import AccordionForm from '../../../forms/accordion-form';

export type HeroProps = {
    block?: { text: string | null; content: string | null; color: string | null };
    slug: string;
    label: string;
};

export default function HeroBottom({ block, slug, label }: HeroProps) {
    const { data, setData, post, processing, errors } = useForm({
        text: block?.text || '',
        page_slug: 'home',
        block_slug: slug,
    });

    return (
        <AccordionForm
            label={label}
            post={post}
            toastMessage="Надпись внизу успешно изменена!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <TextField label="Надпись внизу" value={data.text} onChange={(val) => setData('text', val)} error={errors.text} />

        </AccordionForm>
    );
}
