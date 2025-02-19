import { trackEvent } from './amplitude';

export const trackPageView = (page: string) => {
  trackEvent('Page View', { page });
};

export const trackUserLogin = (userId: string) => {
  trackEvent('User Login', { userId });
};

export const trackUserSignup = (userId: string) => {
  trackEvent('User Signup', { userId });
}

export const trackUserLogout = (userId: string) => {
  trackEvent('User Logout', { userId });
};

export const trackButtonClick = (buttonName: string) => {
  trackEvent('Button Click', { button: buttonName });
};

export const trackPreferenceChanged = (preference: string) => {
  trackEvent('Favorite house changed', { preference });
}

export const trackSearch = (searchTerm: string) => {
  trackEvent('Search performed', { searchTerm });
}

export const trackFollow = (socialMedia: string) => {
  trackEvent('User Followed', { socialMedia });
}

export const trackScrollList = (listName: string) => {
  trackEvent('Scrolled list', { listName });
}
