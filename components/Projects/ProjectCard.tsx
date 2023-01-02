import React from "react";
import Image from "next/image";
import type { Project } from "./Projects";
import { ProjectCardWrapper } from "./styles";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  if (!project) return null;

  const { link, thumbnail, title } = project;

  return (
    <ProjectCardWrapper href={link} target="_blank">
      <Image src={thumbnail} alt={title || ""} />
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
