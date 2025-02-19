import { SessionData } from "@auth0/nextjs-auth0/types";
import { trackEvent } from "./amplitude";

type SessionType = SessionData | null;

export const trackPageView = (session: SessionType | null, page: string) => {
  trackEvent(session, "Page View", { page });
};

export const trackUserLogin = (session: SessionType, userId: string) => {
  trackEvent(session, "User Login", { userId });
};

export const trackUserSignup = (session: SessionType, userId: string) => {
  trackEvent(session, "User Signup", { userId });
};

export const trackUserLogout = (session: SessionType, userId: string) => {
  trackEvent(session, "User Logout", { userId });
};

export const trackButtonClick = (session: SessionType, buttonName: string) => {
  trackEvent(session, "Button Click", { button: buttonName });
};

export const trackPreferenceChanged = (session: SessionType, preference: string) => {
  trackEvent(session, "Favorite house changed", { preference });
};

export const trackSearch = (session: SessionType, searchTerm: string) => {
  trackEvent(session, "Search performed", { searchTerm });
};

export const trackFollow = (session: SessionType, socialMedia: string) => {
  trackEvent(session, "User Followed", { socialMedia });
};

export const trackScrollList = (session: SessionType, listName: string) => {
  trackEvent(session, "Scrolled list", { listName });
};
