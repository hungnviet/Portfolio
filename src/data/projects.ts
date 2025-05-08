import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'factory-maintenance',
    title: 'Factory Machine Maintenance Management System',
    description: 'Developed a comprehensive system for managing factory machines and maintenance workflows. Implemented features for machine record management, maintenance scheduling, and customizable form templates.',
    shortDescription: 'A system for managing factory machines and maintenance workflows.',
    thumbnail: '/images/projects/factory-maintenance/10.png',
    isMobile: false,
    images: [
      '/images/projects/factory-maintenance/10.png',
      '/images/projects/factory-maintenance/1.png',
      '/images/projects/factory-maintenance/2.png',
      '/images/projects/factory-maintenance/3.png',
      '/images/projects/factory-maintenance/4.png',
      '/images/projects/factory-maintenance/5.png',
      '/images/projects/factory-maintenance/6.png',
      '/images/projects/factory-maintenance/7.png',
      '/images/projects/factory-maintenance/8.png',
      '/images/projects/factory-maintenance/9.png',
      

    ],
    techStack: ['JavaScript', 'NextJS', 'MongoDB'],
    features: [
      {
        title: 'Dashboard',
        description: 'A dashboard for managing factory machines and upcomingmaintenance.',
        image: '/images/projects/factory-maintenance/1.png',
      },
      {
        title: 'Machine Management',
        description: 'Manage machines with detailed information and status.',
        image: '/images/projects/factory-maintenance/2.png',
      },
      {
        title: 'Sparepart Management',
        description: 'User can manage spareparts with detailed information and status, they also can add new sparepart.',
        image: '/images/projects/factory-maintenance/5.png',
      },
      {
        title: 'Maintenance Planning',
        description: 'User can create maintenance plan for machines and view the plan of all machines in the factory.',
        image: '/images/projects/factory-maintenance/7.png',
      },
      {
        title: 'Maintenance Record',
        description: 'User can create maintenance record for machines and view the record of all machines in the factory.',
        image: '/images/projects/factory-maintenance/8.png',
      },
      
      
      
    ],
    date: '2023-09-01',
    githubLink: 'https://github.com/hungnviet/factory-maintenance',
    liveLink: 'https://factory-maintenance.example.com',
  },
  {
    slug: 'medifind',
    title: 'Medifind: Antibiotic Support Healthcare Application',
    description: 'Led the software team in developing a healthcare application to support antibiotic use, featuring drug information lookup, usage tracking, a reminder calendar, and prescription scanning for automatic scheduling.',
    shortDescription: 'A healthcare application for antibiotic support and medication management.',
    thumbnail: '/images/projects/medifind/1.jpeg',
    isMobile: true,
    images: [
      '/images/projects/medifind/2.jpeg',
      '/images/projects/medifind/3.jpeg',
      '/images/projects/medifind/4.jpeg',
      '/images/projects/medifind/5.jpeg',
      '/images/projects/medifind/6.jpeg',

      
    ],
    techStack: ['TypeScript', 'React Native', 'NativeWind', 'ExpressJS', 'MongoDB'],
    features: [
      {
        title: 'Drug Information Lookup',
        description: 'Comprehensive database of antibiotics with detailed information about usage, side effects, and interactions.',
        image: '/images/projects/medifind/6.jpeg',
      },
      {
        title: 'Usage Tracking',
        description: 'Track medication schedules and adherence with intuitive interface.',
        image: '/images/projects/medifind/5.jpeg',
      },
      {
        title: 'Prescription Scanner',
        description: 'AI-powered prescription scanning for automatic medication scheduling.',
        image: '/images/projects/medifind/3.jpeg',
      },
    ],
    date: '2024-01-01',
    githubLink: 'https://github.com/hungnviet/medifind',
    liveLink: 'https://medifind.example.com',
  },
  // {
  //   slug: 'ielts-platform',
  //   title: 'IELTS Management Platform',
  //   description: 'Developed a comprehensive platform for IELTS exam management, handling student-teacher interactions, exam creation, and evaluation. Built features for admins to create and manage accounts, and for teachers to create and evaluate exams.',
  //   shortDescription: 'A comprehensive platform for IELTS exam management and evaluation.',
  //   thumbnail: '/images/projects/ielts-thumb.jpg',
  //   images: [
  //     '/images/projects/ielts-1.jpg',
  //     '/images/projects/ielts-2.jpg',
  //     '/images/projects/ielts-3.jpg',
  //   ],
  //   techStack: ['TypeScript', 'ReactJS', 'Tailwind CSS', 'ExpressJS', 'Redux', 'FireBase'],
  //   features: [
  //     {
  //       title: 'Exam Management',
  //       description: 'Create and manage reading, listening, and writing exams with detailed evaluation criteria.',
  //       image: '/images/projects/ielts-exam.jpg',
  //     },
  //     {
  //       title: 'Student-Teacher Interface',
  //       description: 'Schedule speaking sessions and manage student-teacher interactions efficiently.',
  //       image: '/images/projects/ielts-schedule.jpg',
  //     },
  //     {
  //       title: 'Admin Dashboard',
  //       description: 'Comprehensive admin interface for user management and activity tracking.',
  //       image: '/images/projects/ielts-admin.jpg',
  //     },
  //   ],
  //   date: '2023-12-01',
  //   githubLink: 'https://github.com/hungnviet/ielts-platform',
  //   liveLink: 'https://ielts-platform.example.com',
  // },
  // {
  //   slug: 'farm-ecommerce',
  //   title: 'Farm-to-Consumer E-commerce Platform',
  //   description: 'Designed and implemented a full-featured e-commerce platform connecting farmers directly with consumers. Developed services for customers, farmers, and admins with features including product management, cart system, and order processing.',
  //   shortDescription: 'A farm-to-customer e-commerce platform with multi-role support.',
  //   thumbnail: '/images/projects/farm-thumb.jpg',
  //   images: [
  //     '/images/projects/farm-1.jpg',
  //     '/images/projects/farm-2.jpg',
  //     '/images/projects/farm-3.jpg',
  //   ],
  //   techStack: ['JavaScript', 'NextJS', 'AWS-RDS', 'AWS-S3', 'AWS-Cognito'],
  //   features: [
  //     {
  //       title: 'Multi-role System',
  //       description: 'Separate interfaces for customers, farmers, and administrators with role-specific features.',
  //       image: '/images/projects/farm-roles.jpg',
  //     },
  //     {
  //       title: 'Product Management',
  //       description: 'Comprehensive product listing and management system for farmers.',
  //       image: '/images/projects/farm-products.jpg',
  //     },
  //     {
  //       title: 'Order Processing',
  //       description: 'Streamlined order management and tracking system.',
  //       image: '/images/projects/farm-orders.jpg',
  //     },
  //   ],
  //   date: '2024-02-01',
  //   githubLink: 'https://github.com/hungnviet/farm-ecommerce',
  //   liveLink: 'https://farm-ecommerce.example.com',
  // },

]; 