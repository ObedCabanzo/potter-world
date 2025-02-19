import { AMPLITUDE_API_KEY } from "../data/environment";
import * as amplitude from "@amplitude/analytics-browser";
import { SessionData } from "@auth0/nextjs-auth0/types";

const configurations = {
  defaultTracking: {
    sessions: true,
  },
  autocapture: {
    pageViews: true,
    session: true,
    formInteractions: false,
  },
};

export const initializeAmplitude = () => {
  if (typeof window !== "undefined") {
    if (AMPLITUDE_API_KEY) {
      amplitude.init(AMPLITUDE_API_KEY, configurations);
    } else {
      console.error("AMPLITUDE_API_KEY is not defined");
    }
  }
};

export const trackEvent = (
  session: SessionData | null,
  eventName: string,
  properties: Record<string, any> = {}
) => {
  if (typeof window !== "undefined") {
    if (session) {
      amplitude.setUserId(session.user.sub);
    }
    amplitude.track(eventName, properties);
  }
};

export const setUserProperties = (
  userId: string,
  properties: Record<string, any>
) => {
  if (typeof window !== "undefined") {
    amplitude.setUserId(userId);
    const identify = new amplitude.Identify();
    Object.keys(properties).forEach((key) => {
      identify.set(key, properties[key]);
    });
    amplitude.identify(identify);
  }
};

export const setUserId = (userId: string) => {
  if (typeof window !== "undefined") {
    console.log("Setting user id", userId);
    amplitude.setUserId(userId);
  }
};

export const resetUser = () => {
  if (typeof window !== "undefined") {
    amplitude.reset();
  }
};
