import { type Job } from "@/types/jobs";

export default async function HomePage() {
  const data = await fetch(`${process.env.API_URL}/jobs`);
  const jobs: Job[] = await data.json();
  return (
    <div className="container">
      <h2> Job Board</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
