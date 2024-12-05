export default interface Projet {
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