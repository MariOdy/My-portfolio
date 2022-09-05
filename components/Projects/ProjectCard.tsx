import React from "react";
import type { Project } from "./Projects";
import { ProjectCardWrapper } from "./styles";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project) return null;

  const { link, thumbnail, title } = project;

  return (
    <ProjectCardWrapper href={link}>
      <img src={thumbnail} alt={title || ""} />
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
