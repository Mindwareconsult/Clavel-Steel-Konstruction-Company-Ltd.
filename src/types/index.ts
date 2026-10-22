export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Structural' | 'Industrial' | 'Commercial' | 'Specialized' | 'Materials & Training';
  iconName: string;
  heroImage: string;
  additionalImages?: string[];
  capabilities: string[];
  typicalApplications: string[];
  technicalSpecs?: { label: string; value: string }[];
  considerations: string[];
  relatedServiceIds: string[];
  faqs: { question: string; answer: string }[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Structural' | 'Industrial' | 'Canopies' | 'Roofing' | 'Tanks' | 'Security' | 'Fabrication';
  clientType: 'Commercial' | 'Industrial' | 'Residential' | 'Institutional' | string;
  location: string;
  image: string;
  galleryImages: string[];
  summary: string;
  scope: string[];
  specifications: { [key: string]: string };
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Structural' | 'Industrial' | 'Canopies' | 'Roofing' | 'Tanks' | 'Security' | 'Welding Training' | 'Welding & Workshop';
  image: string;
  caption: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  category: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  code: string;
  level: string;
  durationNote: string;
  description: string;
  modules: string[];
  targetAudience: string[];
  safetyTopics: string[];
}
