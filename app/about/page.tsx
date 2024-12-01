'use client';

import { useEffect, useState } from 'react';

export default function AboutPage() {
  // Use state to control initial render
  const [isClient, setIsClient] = useState(false);

  // After mount, mark as client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If not yet client-side, render a placeholder or the same content
  if (!isClient) {
    return <div className="max-w-4xl mx-auto py-12 px-4">Loading...</div>;
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-4" suppressHydrationWarning>
      <h1 className="text-4xl font-bold mb-6">About Andrew Peters</h1>
      
      <section className="prose lg:prose-xl">
        <p>
          Andrew Peters is a [profession/role] with expertise in [key areas]. 
          With [X] years of experience, he specializes in [specific skills or interests].
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Background</h2>
        <p>
          [Add background information, education, career highlights]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Experience</h2>
        <p>
          [Add professional experience, achievements, projects]
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <p>
          [Add contact information or links to social profiles]
        </p>
      </section>
    </main>
  );
}
