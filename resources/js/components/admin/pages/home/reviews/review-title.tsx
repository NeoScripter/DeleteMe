import { useForm } from '@inertiajs/react';
import TextField from '../../../fields/text';
import AccordionForm from '../../../forms/accordion-form';

export type ReviewTitleProps = {
    block?: { text: string | null };
    slug: string;
    label: string;
};

export default function ReviewTitle({ block, slug, label }: ReviewTitleProps) {
    const { data, setData, post, processing, errors } = useForm({
        text: block?.text || '',
        page_slug: 'home',
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
