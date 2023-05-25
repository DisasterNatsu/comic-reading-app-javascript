export const pageview = (url) => {
  if (window !== undefined) {
    window.gtag("config", process.env.GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export const event = ({ action, params }) => {
  if (window !== undefined) {
    window.gtag("event", action, params);
  }
};
