'use client'

import React from 'react'

export function CustomPreview({ document }: any) {
    const slug = document?.displayed?.slug?.current

    if (!slug) return <div style={{ padding: '2rem' }}>No slug found</div>

    return (
        <iframe
            src={`http://localhost:3000/blog/${slug}?preview=true`}
            style={{ width: '100%', height: '100vh', border: 'none' }}
        />
    )
}
