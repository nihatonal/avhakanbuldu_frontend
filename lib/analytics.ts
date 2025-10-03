declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const pageview = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: url,
      page_title: title || document.title,
      screen_name: title || document.title,
    });
  }
};

type EventParams = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const event = ({ action, category, label, value }: EventParams) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
