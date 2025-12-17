import type { WorksProps } from "../../types/sections"
import { useState } from 'react';
import { ArrowTopRightOnSquareIcon, LinkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectCardProps {
    project: WorksProps
    className?: string
    style?: React.CSSProperties
}

export function ProjectCard({ project, className = "", style }: ProjectCardProps) {
  const [showProject, setShowProject] = useState(false);
  const getImageUrl = (path: string) => {
    return `/assets/${path.replace('images/', '')}`
  }
  const isProjectLeftAligned = project.alignLeft;
  return (
    <div className={`flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4 transition-opacity motion-reduce:transition-none duration-500 ${showProject ? 'opacity-100' : 'opacity-0'} ${className}`} style={style}>
        {!isProjectLeftAligned && (
          <div className="order-first pb-4 lg:pb-0 lg:order-none lg:block">
              <img
                  src={getImageUrl(project.imageLink)}
                  className="shadow-md"
                  loading="lazy"
                  onLoad={() => setShowProject(true)}
              />
          </div>
        )}
        <div className={`flex flex-col gap-8 ${project.alignLeft ? 'text-left' : 'lg:text-right'}`}>
            <p>{project.yearCompleted}</p>
            <h3 className="text-xl font-extrabold pb-2">{project.projectName}</h3>
            <p className="text-slate-500 dark:text-slate-300">{project.description}</p>
            <p className="text-slate-600">{project.techStack}</p>
            <div className={`flex !space-x-2 text-slate-400 ${!project.alignLeft ? 'lg:justify-end' : ''}`}>
                {project.links.map((link, index) => (
                  <a key={index} href={link.url} className="flex items-center space-x-2 hover:text-link-color focus:text-link-color active:text-link-color" target="_blank">
                      {link.type === 'git' && (
                        <span className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faGithub} className="h-7 w-7" />
                            <span>{link.label}</span>
                        </span>
                      )}
                      {link.type === 'external' && (
                        <span className="flex items-center space-x-2">
                            <ArrowTopRightOnSquareIcon className="h-7 w-7"/>
                            <span>{link.label}</span>
                        </span>
                      )}
                      {link.type !== 'git' && link.type !== 'external' && (
                        <span className="flex items-center space-x-2">
                            <LinkIcon className="h-6 w-6"/>
                            <span>{link.label}</span>
                        </span>
                      )}
                  </a>
                ))}
            </div>
        </div>
        {project.alignLeft && (
          <div className="order-first pb-4 lg:pb-0 lg:order-none lg:block">
              <img
                  src={getImageUrl(project.imageLink)}
                  className="shadow-md"
                  loading="lazy"
                  onLoad={() => setShowProject(true)}
              />
          </div>
        )}
    </div>
  )}
