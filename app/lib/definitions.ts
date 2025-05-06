export type Project = {
    title: string;
    description: string;
    image: string;
  };
  
export type ProjectItemProps = {
    project: Project;
    index: number;
  };
  
export type ProjectsSectionProps = {
    className?: string;
  };