import { type Job } from "@/types/jobs";
import { JobCards } from "@/components/job/job-cards";

export const revalidate = 5;

export default async function HomePage() {
  const response = await fetch(`${process.env.API_URL}/jobs`);
  const jobs: Job[] = await response.json();

  return <JobCards job={jobs} />;
}
