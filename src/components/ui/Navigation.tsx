'use client';

import Link from 'next/link';


const sections = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/#education' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Certifications', href: '/#certifications' },
  { name: 'Projects', href: '/#projects' },
];

export function Navigation() {
 

  
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-xl font-bold text-gray-200 dark:text-white"
            >
              NVHung
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {sections.map((section) => (
                <Link
                  key={section.name}
                  href={section.href}
                  className="text-gray-100 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {section.name}
                </Link>
              ))}
              
            </div>

            
          </div>
        </div>
      </nav>

     
    </>
  );
} 