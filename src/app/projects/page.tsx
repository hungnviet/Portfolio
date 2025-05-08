'use client';

import { ProjectRow } from '@/components/projects/ProjectRow';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my work in software development, showcasing my skills and experience in building modern web applications.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="mt-16 text-center space-y-3">
          <p className="text-lg text-muted-foreground">
            Interested in collaborating or have a project in mind?{" "}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              Let&apos;s talk about it!
            </Link>
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-muted-foreground/30"></div>
            <p className="text-sm text-muted-foreground/70 italic">More projects coming soon</p>
            <div className="h-px w-12 bg-muted-foreground/30"></div>
          </div>
        </div>
      </div>
    </main>
  );
}