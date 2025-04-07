import { useForm } from '@inertiajs/react';
import TextField from '../../../fields/text';
import AccordionForm from '../../../forms/accordion-form';
import ContentField from '@/components/admin/fields/content';

export type PerksTitleProps = {
    block?: { text: string | null; content: string | null };
    slug: string;
    label: string;
};

export default function PerksTitle({ block, slug, label }: PerksTitleProps) {
    const { data, setData, post, processing, errors } = useForm({
        text: block?.text || '',
        content: block?.content || '',
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
            <ContentField label="Подзаголовок" value={data.content} onChange={(val) => setData('content', val)} error={errors.content} />

        </AccordionForm>
    );
}
