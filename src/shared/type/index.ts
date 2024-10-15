export type Timeout = ReturnType<typeof setTimeout>;

export interface Problem {
  title: string;
  problemId: number;
  link?: string;
  startDate: string;
  endDate: string;
  level: TierDetail;
  solved: boolean;
  submitMemberCount?: number;
  memberCount?: number;
  accuracy?: number;
  inProgress?: boolean;
}

export type tier =
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "diamond"
  | "ruby";

export type LanguageOption =
  | "C++"
  | "C99"
  | "C#"
  | "C"
  | "Python"
  | "node.js"
  | "Go"
  | "Java"
  | "Kotlin";

export type Comment = {
  commentId: number;
  writerNickname: string;
  writerProfileImage: string;
  content: string;
  createdAt: string;
};

export type TierDetail = `${tier} ${1 | 2 | 3 | 4 | 5}` | "master";
