import ContentField from '@/components/admin/fields/content';
import TextField from '@/components/admin/fields/text';
import AccordionForm from '@/components/admin/forms/accordion-form';
import { useForm } from '@inertiajs/react';

export type StatsCardProps = {
    block?: { text: string | null; content: string | null };
    slug: string;
    label: string;
};

export default function StatsCard({ block, slug, label }: StatsCardProps) {
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
            toastMessage="Пункт успешно обновлен!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <TextField
                label="Заголовок"
                value={data.text}
                onChange={(val) => setData('text', val)}
                error={errors.text}
            />

            <ContentField
                label="Содержание"
                value={data.content}
                onChange={(val) => setData('content', val)}
                error={errors.content}
            />

        </AccordionForm>
    );
}
