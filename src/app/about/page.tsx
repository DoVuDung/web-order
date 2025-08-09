import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Andy Do',
  description: 'Learn about Andy Do, the creator of Web Order. Passionate about web development and building useful applications.',
  keywords: ['Andy Do', 'web developer', 'about', 'creator', 'web order'],
  openGraph: {
    title: 'About Andy Do',
    description: 'Learn about Andy Do, the creator of Web Order. Passionate about web development and building useful applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Andy Do',
    description: 'Learn about Andy Do, the creator of Web Order. Passionate about web development and building useful applications.',
  },
}

function About() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <header>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            About Andy Do
          </h1>
        </header>
        <section className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Welcome to Web Order
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Hi, I&apos;m Andy Do, the creator of this site. I am passionate about web development 
              and building useful applications that make people&apos;s lives easier.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This food ordering application was built with modern web technologies including 
              Next.js, TypeScript, and Tailwind CSS to provide a seamless ordering experience.
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-3">
              Support My Work
            </h3>
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              If you find this application useful and would like to support my continued development work:
            </p>
            <a 
              href="https://buymeacoffee.com/andydo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              aria-label="Buy Andy Do a coffee to support his work"
            >
              ☕ Buy me a coffee
            </a>
          </div>
        </section>
      </article>
    </div>
  )
}

export default About