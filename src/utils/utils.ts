export function handleUnknown(value: string | undefined): string {
  return value ? value : "Unknown";
}

export function stringToNumber(value: string): number {
  return value ? parseInt(value) : Infinity;
}

type SocialMedia = {
  url: string;
  text: string;
};

export const socialMedia: { [key: string]: SocialMedia } = {
  twitter: {
    url: "https://twitter.com/",
    text: "Follow us on Twitter",
  },
  linkedin: {
    url: "https://www.linkedin.com/",
    text: "Follow us on Linkedin",
  },
  facebook: {
    url: "https://www.facebook.com/",
    text: "Follow us on Facebook",
  },
};
