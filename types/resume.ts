export interface Resume {
  id: number;
  created_at: Date;
  user_id: string;
  summary: string;
  technical_skills_title: string;
  resume_name: string;
  display_user_name: string;
  technical_categories?: TechnicalCategory[];
}

export interface TechnicalCategory {
  id: number;
  created_at: Date;
  name: string;
  resume_id: number;
  skills: string[];
}
