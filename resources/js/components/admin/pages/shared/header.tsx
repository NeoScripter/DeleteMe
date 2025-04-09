import { useForm } from '@inertiajs/react';
import AccordionForm from '../../forms/accordion-form';
import TextField from '../../fields/text';

export type HeaderProps = {
    block?: { text: string | null; content: string | null; color: string | null };
    slug: string;
    label: string;
};

export default function HeaderTitle({ block, slug, label }: HeaderProps) {
    const { data, setData, post, processing, errors } = useForm({
        text: block?.text || '',
        page_slug: 'shared',
        block_slug: slug,
    });

    return (
        <AccordionForm
            label={label}
            post={post}
            toastMessage="Заголовок успешно изменен!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <TextField label="Заголовок" value={data.text} onChange={(val) => setData('text', val)} error={errors.text} />

        </AccordionForm>
    );
}
