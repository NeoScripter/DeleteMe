import ContentsField from '@/components/admin/fields/contents';
import { useForm } from '@inertiajs/react';
import AccordionForm from '../../../forms/accordion-form';

export type ReviewCardProps = {
    block?: { contents: string[] | null };
    slug: string;
    label: string;
};

export default function ReviewCard({ block, slug, label }: ReviewCardProps) {
    const { data, setData, post, processing, errors } = useForm({
        contents: block?.contents || [],
        page_slug: 'home',
        block_slug: slug,
    });

    return (
        <AccordionForm
            label={label}
            post={post}
            toastMessage="Отзыв успешно изменен!"
            routeName="admin.update"
            blockSlug={slug}
            disabled={processing}
        >
            <ContentsField
                label="Содержание отзыва"
                contents={data.contents}
                onChange={(updated) => setData('contents', updated)}
                errors={errors}
            />
        </AccordionForm>
    );
}
