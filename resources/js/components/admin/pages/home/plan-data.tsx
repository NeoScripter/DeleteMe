import AccordionForm from '@/components/admin/forms/accordion-form';
import { useForm } from '@inertiajs/react';
import ContentsField from '../../fields/contents';
import TextField from '../../fields/text';

export type PlanDataProps = {
    block?: { contents: string[] | null; text: string | null };
    slug: string;
    label: string;
};

export default function PlanData({ block, slug, label }: PlanDataProps) {
    const { data, setData, post, processing, errors } = useForm({
        text: block?.text || '',
        contents: block?.contents || [],
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

            <ContentsField
                label="Перечисление тарифов"
                contents={data.contents}
                onChange={(updated) => setData('contents', updated)}
                errors={errors}
            />
        </AccordionForm>
    );
}
