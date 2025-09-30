'use client';

import { Eye } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const SingleBlogContent = ({ slug }: { slug: string }) => {
    const [viewCount, setViewCount] = useState<number | null>(null);
    const hasIncremented = useRef(false); // 👈 sadece increment için

    useEffect(() => {
        const updateAndFetchView = async () => {
            try {
                // Sadece ilk mount'ta artır
                if (!hasIncremented.current) {
                    await fetch(`/api/increment-view?slug=${slug}`);
                    hasIncremented.current = true;
                }

                // Güncel view sayısını her zaman al
                const res = await fetch(`/api/view-count?slug=${slug}`);
                const data = await res.json();
                setViewCount(data.viewCount);
            } catch (error) {
                console.error("View count error:", error);
            }
        };

        updateAndFetchView();
    }, [slug]);

    if (viewCount === null) return null;

    return (
        <p className="flex items-center gap-1 text-muted-foreground relative group hover:cursor-pointer hover:text-shop_dark_green hoverEffect">
            <Eye size={14} /> {viewCount} okundu
            <span className="absolute left-0 -bottom-1.5 bg-muted-foreground/30 inline-block w-full h-[2px] group-hover:bg-shop_dark_green hoverEffect" />
        </p>
    );
};

export default SingleBlogContent;
