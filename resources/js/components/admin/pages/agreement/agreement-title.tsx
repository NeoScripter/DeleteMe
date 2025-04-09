import { useForm } from '@inertiajs/react';
import AccordionForm from '../../forms/accordion-form';
import TextField from '../../fields/text';

export type AgreementTitleProps = {
    block?: { text: string | null };
    slug: string;
    label: string;
};

export default function AgreementTitle({ block, slug, label }: AgreementTitleProps) {
    const { data, setData, post, processing, errors } = useForm({
        text: block?.text || '',
        page_slug: 'agreement',
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
