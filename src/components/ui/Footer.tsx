'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <a href="mailto:hung.nguyen100904@hcmut.edu.vn" className="footer-link">
            hung.nguyen100904@hcmut.edu.vn
          </a>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Social</h3>
          <div className="flex flex-col gap-2">
            <a
              href="https://github.com/hungnviet"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nguy%E1%BB%85n-vi%E1%BA%BFt-h%C3%B9ng-292b4022a/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <Link href="#education" className="footer-link">
              Education
            </Link>
            <Link href="#experience" className="footer-link">
              Experience
            </Link>
            <Link href="#projects" className="footer-link">
              Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Nguyen Viet Hung. All rights reserved.</p>
      </div>
    </footer>
  );
} 