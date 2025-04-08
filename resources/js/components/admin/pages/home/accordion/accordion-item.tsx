import ContentField from '@/components/admin/fields/content';
import TextField from '@/components/admin/fields/text';
import { useForm } from '@inertiajs/react';
import AccordionForm from '../../../forms/accordion-form';

export type AccordionFaqItemProps = {
    block?: { text: string | null; content: string | null };
    slug: string;
    label: string;
};

export default function AccordionFaqItem({ block, slug, label }: AccordionFaqItemProps) {
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
            toastMessage="Секция успешно изменена!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <TextField label="Заголовок" value={data.text} onChange={(val) => setData('text', val)} error={errors.text} />

            <ContentField label="Содержание" value={data.content} onChange={(val) => setData('content', val)} error={errors.content} />
        </AccordionForm>
    );
}
