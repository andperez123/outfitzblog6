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
    return <div className="mx-auto max-w-4xl px-4 py-12">Loading...</div>;
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12" suppressHydrationWarning>
      <h1 className="mb-6 text-4xl font-bold">About Andrew Peters</h1>
      
      <section className="prose lg:prose-xl">
        <p>
          Andrew Peters is a [profession/role] with expertise in [key areas]. 
          With [X] years of experience, he specializes in [specific skills or interests].
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Background</h2>
        <p>
          [Add background information, education, career highlights]
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Experience</h2>
        <p>
          [Add professional experience, achievements, projects]
        </p>

        <h2 className="mb-4 mt-8 text-2xl font-semibold">Contact</h2>
        <p>
          [Add contact information or links to social profiles]
        </p>
      </section>
    </main>
  );
}
