'use client';

import { useEffect } from "react";

const SingleBlogContent = ({ slug }: { slug: string }) => {
    useEffect(() => {
        const updateView = async () => {
            try {
                await fetch(`/api/increment-view?slug=${slug}`);
            } catch (error) {
                console.error("Görüntülenme sayısı artırılamadı:", error);
            }
        };
        updateView();
    }, [slug]);


    return null; // sadece view artırmak için kullanılacak
};

export default SingleBlogContent;
