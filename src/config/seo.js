export const seoConfig = {
  default: {
    title: "Narinder Singh - Software Engineer & Backend Developer",
    description: "Hey! I'm Narinder Singh, a software engineer with a focus on Backend Development along with having knowledge of full-stack development.",
    keywords: "Narinder Singh, software engineer, backend developer, full-stack developer, India, portfolio",
    author: "Narinder Singh",
    url: "https://www.anujraghuvanshi.site",
    image: "https://www.anujraghuvanshi.site/profile.jpeg",
    type: "website"
  },

  home: {
    title: "Narinder Singh - Software Engineer & Backend Developer | Home",
    description: "Hi! I'm Narinder Singh, a passionate software engineer specializing in Backend Development.",
    keywords: "Narinder Singh, software engineer, backend developer, portfolio, India, home"
  },

  about: {
    title: "Narinder Singh - Software Engineer & Backend Developer",
    description: "Learn more Narinder Singh, a passionate software engineer with expertise in backend development.",
    keywords: "Narinder Singh, software engineer background, backend developer experience"
  },

  skills: {
    title: "Skills & Technologies - Narinder Singh | Software Engineer",
    description: "Explore Narinder Singh's technical skills including JavaScript, Node.js, and backend development.",
    keywords: "Narinder Singh skills, backend developer, JavaScript developer, backend development skills"
  }
};

// Structured data for different sections
export const structuredData = {
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Narinder Singh",
    "jobTitle": "Software Engineer",
    "description": "A passionate software engineer specializing in Backend Development with full-stack technologies.",
    "url": "https://www.anujraghuvanshi.site",
    "image": "https://www.anujraghuvanshi.site/profile.jpeg",
    "sameAs": [
      "https://github.com/ernarinder23-prog",
      "https://www.linkedin.com/in/ernarinder23",
      "https://www.instagram.com/n.a.v.i_263",
      "https://www.threads.com/@n.a.v.i_263",
      "https://stackoverflow.com/users/32539891/narinder-singh"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsAbout": [
      "Backend Development",
      "Full-Stack Development",
      "JavaScript",
      "Node.js",
      "API Development",
      "Web Development"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Software Engineering"
    }
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Narinder Singh Portfolio",
    "description": "Personal portfolio website showcasing Narinder Singh's skills, experience, and projects in software development.",
    "url": "https://www.anujraghuvanshi.site",
    "author": {
      "@type": "Person",
      "name": "Narinder Singh"
    },
    "publisher": {
      "@type": "Person",
      "name": "Narinder Singh"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.anujraghuvanshi.site/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
};

// Meta tags configuration for different sections
export const getMetaTags = (section = 'default') => {
  const config = seoConfig[section] || seoConfig.default;

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    author: config.author,
    url: config.url,
    image: config.image,
    type: config.type,
    twitterHandle: config.twitterHandle,
    siteName: config.siteName
  };
};
