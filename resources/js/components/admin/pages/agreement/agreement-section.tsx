import ContentsField from '@/components/admin/fields/contents';
import { useForm } from '@inertiajs/react';
import AccordionForm from '../../forms/accordion-form';

export type AgreementCardProps = {
    block?: { contents: string[] | null };
    slug: string;
    label: string;
};

export default function AgreementCard({ block, slug, label }: AgreementCardProps) {
    const { data, setData, post, processing, errors } = useForm({
        contents: block?.contents || [],
        page_slug: 'agreement',
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
            <ContentsField
                label="Содержание секции"
                contents={data.contents}
                onChange={(updated) => setData('contents', updated)}
                errors={errors}
            />
        </AccordionForm>
    );
}
