export interface Projet {
  id: number;
  number: number;
  title: string;
  image: string;
  url: string | null;
  github: string | null;
  description: string;
  theme: string;
  technologie: string[] | null;
  responsive: boolean | null;
  category: string;
  state: string;
}

export interface Stack {
  title: string; 
  image: string; 
}
export interface StackCategory {
  skills?: Stack[];
  prochainement?: Stack[];
}

import React from "react";

declare module "react" {
  interface ImgHTMLAttributes<T> extends React.HTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}
