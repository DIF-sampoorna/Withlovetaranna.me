export interface HeroFeather {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  extendedText: string;
}

export interface AboutBlock {
  id: string;
  title: string;
  text: string;
}

export interface WorkInitiative {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  caseStudy: {
    headline: string;
    subheadline: string;
    stats: string[];
    description: string;
  };
}

export interface MagazineArticle {
  id: string;
  num: string;
  title: string;
  image: string;
  readTime: string;
  excerpt: string;
}

export interface SpeakingSession {
  id: string;
  type: "Keynote Topic" | "Interactive Session";
  title: string;
  description: string;
}
