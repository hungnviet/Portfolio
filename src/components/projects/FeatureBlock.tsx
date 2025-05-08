import Image from 'next/image';
import { Feature } from '@/types/project';

interface FeatureBlockProps {
  feature: Feature;
  index: number;
}

export function FeatureBlock({ feature, index }: FeatureBlockProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center py-8">
      <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <h3 className="text-2xl font-semibold text-gray-100 dark:text-white mb-4">
          {feature.title}
        </h3>
        <p className="text-gray-300 dark:text-gray-300">
          {feature.description}
        </p>
      </div>
      
      {feature.image && (
        <div className={`flex-1 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
} 