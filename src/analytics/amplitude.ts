import { AMPLITUDE_API_KEY } from "../data/environment";
import * as amplitude from "@amplitude/analytics-browser";

const configurations = {
  defaultTracking: {
    sessions: true,
  },
  autocapture: true
};

export const initializeAmplitude = () => {
  if (typeof window !== "undefined") { // ✅ Solo ejecuta en cliente
    if (AMPLITUDE_API_KEY) {
      amplitude.init(AMPLITUDE_API_KEY, {
        autocapture: true,
      });
    } else {
      console.error("AMPLITUDE_API_KEY is not defined");
    }
  }
};

export const trackEvent = (
  eventName: string,
  properties: Record<string, any> = {}
) => {
  if (typeof window !== "undefined") { // ✅ Evita ejecutar en el servidor
    amplitude.track(eventName, properties);
  }
};

export const setUserProperties = (
  userId: string,
  properties: Record<string, any>
) => {
  if (typeof window !== "undefined") { // ✅ Evita error en servidor
    amplitude.setUserId(userId);
    //amplitude.setUserProperties(properties);
  }
};
