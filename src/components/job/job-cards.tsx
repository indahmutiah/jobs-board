import Link from "next/link";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Job } from "@/types/jobs";

interface JobCardProps {
  job: Job[];
}

export function JobCards({ job }: JobCardProps) {
  return (
    <ul className="space-y-4">
      {job.map((job) => (
        <li key={job.id}>
          <Link href={`/jobs/${job.id}`}>
            <Card>
              <CardHeader>
                <CardTitle>
                  <h2 className="text-2xl font-bold">{job.title}</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{job.company}</p>
                <p>{job.location}</p>
              </CardContent>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}
