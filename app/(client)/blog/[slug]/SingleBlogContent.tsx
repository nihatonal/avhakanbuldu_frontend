'use client';
import { useEffect, useRef } from "react";

const SingleBlogContent = ({ slug }: { slug: string }) => {
    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return; // Daha önce çalıştıysa çık
        hasRun.current = true;

        const updateView = async () => {
            try {
                await fetch(`/api/increment-view?slug=${slug}`);
            } catch (error) {
                console.error("Görüntülenme sayısı artırılamadı:", error);
            }
        };
        updateView();
    }, [slug]);

    return null;
};

export default SingleBlogContent;
