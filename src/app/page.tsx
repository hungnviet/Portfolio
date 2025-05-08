'use client';

import { motion } from 'framer-motion';
import { TechBadge } from '@/components/ui/TechBadge';
import { useRouter } from 'next/navigation';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const router = useRouter();
  const skills = {
    languages: ['C++', 'Python', 'JavaScript', 'TypeScript'],
    technologies: ['NodeJS', 'ExpressJS', 'NextJS', 'ReactJS', 'React Native', 'Apache Kafka'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'FireBase', 'Redis'],
    tools: ['Confluence', 'Jira', 'Trello', 'Figma', 'Whimsical'],
  };

  const awards = [
    {
      title: 'China – ASEAN Innovation and Entrepreneurship Competition',
      prize: 'Third Prize',
      date: 'May, 2024',
    },
    {
      title: 'Advanced Information Systems Contest 2023',
      prize: 'Second Runner-up',
      date: 'December, 2023',
    },
    {
      title: 'VietFuture 2023',
      prize: 'Innovation Prize',
      date: 'May, 2023',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.p variants={fadeInUp} className="text-primary mb-4">
            Hi, my name is
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            Nguyen Viet Hung.
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-secondary mb-6"
          >
            I build things for the web.
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-secondary max-w-2xl mb-8"
          >
            Computer Science student at HCMUT passionate about building impactful software. With experience in AI tools, backend systems, and full-stack development, I aim to deliver products that solve real-world problems.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex gap-4">
            <a
              href="mailto:hung.nguyen100904@hcmut.edu.vn"
              className="modern-button"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/hungnviet"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-vi%E1%BA%BFt-h%C3%B9ng-292b4022a/"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="section-header">
            Education
          </motion.h2>
          <motion.div variants={fadeInUp} className="glass-card p-6">
            <div className="card-content">
              <h3 className="card-title">Vietnam National University - Ho Chi Minh City University of Technology</h3>
              <p className="text-secondary">Bachelor of Engineering in Computer Science</p>
              <p className="text-secondary">Sept 2022 – Current</p>
              <p className="card-description">
                GPA: 3.1/4.0 - 7.66/10
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="glass-card p-6 mt-6">
            <div className="card-content">
              <h3 className="card-title">Luong The Vinh High School For the Gifted - Dong Nai</h3>
              <p className="text-secondary">Major in Physics</p>
              <p className="text-secondary">Sept 2019 – May 2022</p>
              <p className="card-description">
                Graduated with Excellence
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="section-header">
            Experience
          </motion.h2>
          <motion.div variants={fadeInUp} className="glass-card p-6">
            <div className="card-content">
              <h3 className="card-title">Software Engineer Intern, Grab</h3>
              <p className="text-secondary">Ho Chi Minh, Viet Nam • June 2024 – Aug 2024</p>
              <p className="card-description">
                • Researched and applied AI tools like LangChain and prompt engineering to solve real tasks
                <br />
                • Read document and implemented a solution to fix request tracking errors in the system
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="glass-card p-6 mt-6">
            <div className="card-content">
              <h3 className="card-title">Software Engineer, TPM Technology</h3>
              <p className="text-secondary">Ho Chi Minh, Viet Nam • February 2024 – May 2024</p>
              <p className="card-description">
                • Led end-to-end development of a Japanese e-commerce platform connecting farmers directly with consumers
                <br />
                • Designed and implemented a user-friendly UI tailored for Japanese users, focusing on simplicity and accessibility
                <br />
                • Built core features including product listing, cart, checkout, and order management
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="section-header">
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="card-title mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <TechBadge key={skill} tech={skill} />
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="card-title mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.technologies.map((skill) => (
                  <TechBadge key={skill} tech={skill} />
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="card-title mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <TechBadge key={skill} tech={skill} />
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <h3 className="card-title mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <TechBadge key={skill} tech={skill} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="section-header">
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <div className="card-content">
                <h3 className="card-title">IELTS</h3>
                <p className="text-secondary">Score: 6.0</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <div className="card-content">
                <h3 className="card-title">AWS Certified Cloud Practitioner</h3>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify credential
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="section-padding">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="section-header">
            Awards
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award) => (
              <motion.div key={award.title} variants={fadeInUp} className="glass-card p-6">
                <div className="card-content">
                  <h3 className="card-title">{award.title}</h3>
                  <p className="text-primary font-medium mb-2">{award.prize}</p>
                  <p className="text-secondary">{award.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="section-padding">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="section-header">
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Medifind Project */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <div className="card-content" onClick={() => router.push('/projects/medifind')}>
                <h3 className="card-title">Medifind: Antibiotic Support Healthcare App</h3>
                <p className="card-description">
                  Led development of a mobile healthcare app supporting responsible antibiotic use, with features like drug lookup, usage tracking, reminders, and prescription scanning.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <TechBadge tech="TypeScript" />
                  <TechBadge tech="React Native" />
                  <TechBadge tech="NativeWind" />
                  <TechBadge tech="ExpressJS" />
                  <TechBadge tech="MongoDB" />
                </div>
              </div>
            </motion.div>

            {/* IELTS Management Platform */}
            {/* <motion.div variants={fadeInUp} className="glass-card p-6">
              <div className="card-content" onClick={() => router.push('/projects/ielts-management-platform')}>
                <h3 className="card-title">IELTS Management Platform</h3>
                <p className="card-description">
                  Developed admin and teacher modules for account management, exam creation, test evaluation, and speaking session scheduling.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <TechBadge tech="TypeScript" />
                  <TechBadge tech="ReactJS" />
                  <TechBadge tech="Tailwind CSS" />
                  <TechBadge tech="ExpressJS" />
                  <TechBadge tech="Redux" />
                  <TechBadge tech="Firebase" />
                </div>
              </div>
            </motion.div> */}

            {/* Farm-to-Consumer E-commerce Platform */}
            {/* <motion.div variants={fadeInUp} className="glass-card p-6">
              <div className="card-content">
                <h3 className="card-title">Farm-to-Consumer E-commerce Platform</h3>
                <p className="card-description">
                  Designed UI/UX and built core features for a multi-role platform enabling customers to shop, farmers to sell, and admins to manage operations.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <TechBadge tech="JavaScript" />
                  <TechBadge tech="NextJS" />
                  <TechBadge tech="AWS RDS" />
                  <TechBadge tech="AWS S3" />
                  <TechBadge tech="AWS Cognito" />
                </div>
              </div>
            </motion.div> */}

            {/* Factory Maintenance Management System */}
            <motion.div variants={fadeInUp} className="glass-card p-6">
              <div className="card-content" onClick={() => router.push('/projects/factory-maintenance')}>
                <h3 className="card-title">Factory Maintenance Management System</h3>
                <p className="card-description">
                  Independently developed a system for managing machines and maintenance schedules, including dynamic form templates for efficient logging.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <TechBadge tech="JavaScript" />
                  <TechBadge tech="NextJS" />
                  <TechBadge tech="MongoDB" />
                </div>
              </div>
            </motion.div>
            
          </div>

        </motion.div>
        <div className="flex justify-center mt-8">
          <button className="modern-button text-white bg-blue-500 hover:bg-white hover:text-blue-500 px-4 py-2 rounded-md cursor-pointer" onClick={() => router.push('/projects')}>
            More Details
          </button>
        </div>
      </section>
    </main>
  );
}
