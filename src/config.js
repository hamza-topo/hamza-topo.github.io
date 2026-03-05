/**
 * AYOUR - Portfolio Template Configuration
 * ==========================================
 * 
 * This is the main configuration file for the portfolio template.
 * Modify these values to customize the portfolio for your needs.
 * 
 * FOR BUYERS:
 * - Update personal information
 * - Update social links
 * - Replace the CV file in public/ folder
 * - Update the image assets in src/assets/
 * 
 * FOR DEVELOPERS:
 * - This file exports all config for easy imports
 * - Theme and SEO settings are centralized here
 */

// ==================== MAIN CONFIG ====================
export const CONFIG = {
  // ---------------------
  // Personal Information
  // ---------------------
  personal: {
    name: "John Doe",
    title: "Software Engineer",
    tagline: "I build things that actually work.",
    email: "hello@example.com",
    location: "United States",
    availability: "Available for freelance work",
    // Short bio for about section
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  // ---------------------
  // Social Links
  // ---------------------
  social: {
    linkedin: "https://www.linkedin.com/in/yourprofile/",
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourusername/",
    devto: "https://dev.to/yourhandle",
    youtube: "", // Optional
    codepen: "", // Optional
  },

  // ---------------------
  // Hero Section
  // ---------------------
  hero: {
    kicker: "👋 hi, i'm {name}", // {name} will be replaced
    title: "i'm not a robot. i build things that actually work.",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ctaText: "View My Work",
    ctaLink: "#projects",
    ctaSecondaryText: "Get In Touch",
    ctaSecondaryLink: "#contact",
    // Image path - replace src/assets/me-work.png
    imagePath: "me-work.png",
    imageAlt: "Portfolio owner portrait",
  },

  // ---------------------
  // Timeline Section (Experience)
  // ---------------------
  timeline: {
    enableDownload: true,
    cvFileName: "CV_TEMPLATE.pdf", // Replace with your CV file in public/
    // Experience data is in data/timeline.data.js
  },

  // ---------------------
  // Skills Section
  // ---------------------
  skills: {
    title: "What I do.",
    subtitle: "Areas of expertise and focus.",
    // Skills data is in data/skills.data.js
  },

  // ---------------------
  // Toolbox Section
  // ---------------------
  toolbox: {
    title: "Toolbox.",
    subtitle: "Tools and technologies I use to ship real systems.",
    // Toolbox data is in data/toolbox.data.js
  },

  // ---------------------
  // Projects Section
  // ---------------------
  projects: {
    title: "i build in public.",
    subtitle: "Visual proof. Short descriptions. Links when shareable.",
    // Project data is in data/projects.data.js
  },

  // ---------------------
  // Social Section
  // ---------------------
  socialSection: {
    title: "i'm using social media.",
    subtitle: "find me here — i reply when i'm not shipping.",
  },

  // ---------------------
  // Contact Section
  // ---------------------
  contact: {
    title: "Let's work together",
    subtitle: "Have a project in mind? Let's talk.",
    buttonText: "Send Message",
    email: "hello@example.com",
    // Form configuration (optional)
    enableForm: false,
    formEndpoint: "", // Formspree, Netlify Forms, etc.
    successMessage: "Thank you! Your message has been sent.",
    errorMessage: "Oops! Something went wrong. Please try again.",
  },

  // ---------------------
  // Footer
  // ---------------------
  footer: {
    showVersion: true,
    showLastUpdate: false,
    copyrightName: "Your Name",
    // Set to false to remove your name if you want buyer to add theirs
  },

  // ---------------------
  // SEO Configuration
  // ---------------------
  seo: {
    siteUrl: "https://yourdomain.com",
    ogImage: "/og-image.png", // 1200x630px recommended
    keywords: "software engineer, full-stack developer, portfolio, web developer",
    author: "Your Name",
  },

  // ---------------------
  // Theme Configuration
  // ---------------------
  theme: {
    defaultMode: "system", // "light", "dark", or "system"
    showToggle: true,
    // Color customization (advanced)
    // colors: {
    //   primary: "#3b82f6",
    //   accent: "#10b981",
    // }
  },

  // ---------------------
  // Analytics (Optional)
  // ---------------------
  analytics: {
    googleAnalytics: "", // UA-XXXXX-X
    plausible: "", // yourdomain.com
    // Privacy-friendly: leave empty to disable
  },

  // ---------------------
  // Performance
  // ---------------------
  performance: {
    lazyLoadImages: true,
    preloadHeroImage: true,
  }
};

// ==================== EXPORTS ====================
// Convenience exports for individual configs
export const PERSONAL = CONFIG.personal;
export const SOCIAL = CONFIG.social;
export const HERO = CONFIG.hero;
export const TIMELINE = CONFIG.timeline;
export const SKILLS = CONFIG.skills;
export const TOOLBOX = CONFIG.toolbox;
export const PROJECTS = CONFIG.projects;
export const SOCIAL_SECTION = CONFIG.socialSection;
export const CONTACT = CONFIG.contact;
export const FOOTER = CONFIG.footer;
export const SEO = CONFIG.seo;
export const THEME = CONFIG.theme;
export const ANALYTICS = CONFIG.analytics;

export default CONFIG;
