'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { TechBadge } from '@/components/ui/TechBadge';

interface ProjectRowProps {
  project: Project;
  index: number;
}

export function ProjectRow({ project, index }: ProjectRowProps) {
  // Check if the image is a mobile screenshot (you can add this to your Project type)
  const isMobileScreenshot = project.thumbnail.includes('mobile') || project.thumbnail.includes('phone');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card group relative overflow-hidden mb-6 last:mb-0"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left side - Project Image */}
        <div className={`relative w-full md:w-2/5 ${isMobileScreenshot ? 'h-64 md:h-80' : 'h-48 md:h-64'}`}>
          <div className="relative w-full h-full">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={`transition-transform duration-500 group-hover:scale-105 ${
                isMobileScreenshot 
                  ? 'object-contain' 
                  : 'object-contain md:object-cover'
              }`}
              style={{
                objectPosition: 'center',
                backgroundColor: 'var(--background)',
                padding: isMobileScreenshot ? '1rem' : '0',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent hidden group-hover:block transition-opacity duration-300" />
          </div>
        </div>

        {/* Right side - Project Info */}
        <div className="w-full md:w-3/5 p-6 flex flex-col justify-center relative">
          {/* Static Info */}
          <div className="relative z-10 group-hover:hidden transition-all duration-300">
            <h3 className="card-title text-xl md:text-2xl mb-2">
              {project.title}
            </h3>
            
            <p className="card-description text-base mb-4 line-clamp-2">
              {project.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
              {project.techStack.length > 4 && (
                <span className="text-sm text-muted-foreground">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          </div>

          {/* Hover overlay with buttons */}
          <div className="absolute inset-0 bg-background/95 hidden group-hover:flex items-center justify-center transition-all duration-300 z-20">
            <div className="flex flex-col items-center gap-4">
              <Link
                href={`/projects/${project.slug}`}
                className="modern-button text-base px-6 py-2"
              >
                View Project Details
              </Link>

              {/* {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                  View on GitHub
                </a>
              )} */}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
