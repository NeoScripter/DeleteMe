import { useForm } from '@inertiajs/react';
import TextField from '../../fields/text';
import TextsField from '../../fields/texts';
import AccordionForm from '../../forms/accordion-form';

export type FooterProps = {
    block?: { text: string | null; texts: string[] | null };
    slug: string;
    label: string;
};

export default function FooterTitle({ block, slug, label }: FooterProps) {
    const { data, setData, post, processing, errors } = useForm({
        text: block?.text || '',
        texts: block?.texts || [],
        page_slug: 'shared',
        block_slug: slug,
    });

    return (
        <AccordionForm
            label={label}
            post={post}
            toastMessage="Информация подвала успешно изменена!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <TextField label="Заголовок" value={data.text} onChange={(val) => setData('text', val)} error={errors.text} />

            <TextsField label="Контактные данные" texts={data.texts} onChange={(updated) => setData('texts', updated)} errors={errors} />
        </AccordionForm>
    );
}
