export interface AboutContent {
    about: {
      title: string;
      description: {
        text: string;
        cta: string;
      };
      timeline: {
        description: string;
        month: string;
        year: string;
        color: string;
      }[];
      stacks: {
        name: string;
        title: string;
        description: string;
      }[];
      cta: {
        text: string;
        cta: string;
      };
    };
  }
  