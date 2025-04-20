declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export const GA_TRACKING_ID = 'G-4R04J28MWS'

export const pageview = (url: string) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
}
