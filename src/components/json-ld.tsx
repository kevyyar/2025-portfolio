export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kevin Barreto',
    url: 'https://www.kevyyar.com',
    jobTitle: 'Software Developer',
    sameAs: ['https://github.com/kevyyar', 'https://www.linkedin.com/in/kevyyar/'],
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
