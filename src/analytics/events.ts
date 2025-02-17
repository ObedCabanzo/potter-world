import { trackEvent } from './amplitude';

export const trackPageView = (page: string) => {
  trackEvent('Page View', { page });
};

export const trackUserLogin = (userId: string) => {
  trackEvent('User Login', { userId });
};

export const trackButtonClick = (buttonName: string) => {
  trackEvent('Button Click', { button: buttonName });
};
