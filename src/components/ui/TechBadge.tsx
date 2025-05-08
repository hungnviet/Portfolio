import { cn } from '@/lib/utils';

interface TechBadgeProps {
  tech: string;
}

export function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="skill-badge">
      {tech}
    </span>
  );
} 