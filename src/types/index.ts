// src/types/index.ts
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FeedbackData {
  rating: number;
  comment: string;
}

export interface InsuranceService {
  title: string;
  description: string;
  icon: string;
}