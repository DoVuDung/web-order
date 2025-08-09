import React from 'react'

function About() {
  return (
    <div>
      <section>
        <h2>Andy Do</h2>
        <p>
          Hi, I&#39;m Andy Do, the creator of this site. I am passionate about web development and building useful applications.
        </p>
        <p>
          If you like my work, you can <a href="https://buymeacoffee.com/andydo" target="_blank" rel="noopener noreferrer">buy me a coffee</a>!
        </p>
      </section>
    </div>
  )
}

export default About
export const metadata = {
  title: 'About Us',
  description: 'Learn more about our company and team.',
  keywords: 'about, company, team, information',
  openGraph: {
    title: 'About Us',
    description: 'Learn more about our company and team.',
    url: 'https://www.example.com/about',
    siteName: 'Example Site',
    images: [
      {
        url: 'https://www.example.com/images/about.jpg',
        width: 800,
        height: 600,
        alt: 'About Us Image',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us',
    description: 'Learn more about our company and team.',
    site: '@example',
    creator: '@example',
    images: [
      {
        url: 'https://www.example.com/images/about.jpg',
        width: 800,
        height: 600,
        alt: 'About Us Image',
      }
    ],      
    },
    robots: {
      index: true,
      follow: true,
    },  
    canonical: 'https://www.example.com/about',
    alternates: {
      canonical: 'https://www.example.com/about',
      languages: {
        'en-US': 'https://www.example.com/about',
        'es-ES': 'https://www.example.com/es/about',
      },
    },
    verification: {
      google: 'google-verification-code',
      bing: 'bing-verification-code',
      yandex: 'yandex-verification-code',
    },
    authors: [
      {
        name: 'Andy Do',
        url: 'https://www.example.com/authors/andy-do',
      },
    ],
    publisher: {
      name: 'Example Inc.',
      url: 'https://www.example.com',
    },
    copyright: {
      year: 2025,
      holder: 'Example Inc.',
    },
}