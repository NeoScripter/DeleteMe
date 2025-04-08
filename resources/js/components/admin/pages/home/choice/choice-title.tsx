import TextField from '@/components/admin/fields/text';
import AccordionForm from '@/components/admin/forms/accordion-form';
import { useForm } from '@inertiajs/react';

export type ChoiceTitleProps = {
    block?: { text: string | null; content: string | null };
    slug: string;
    label: string;
};

export default function ChoiceTitle({ block, slug, label }: ChoiceTitleProps) {
    const { data, setData, post, processing, errors } = useForm({
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

        </AccordionForm>
    );
}
