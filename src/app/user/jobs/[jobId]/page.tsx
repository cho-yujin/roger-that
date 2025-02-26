import { notFound } from "next/navigation"

export default async function Page({
    params,
  }: {
    params: Promise<{ jobId: string }>
  }) {
    const jobId = (await params).jobId.toLowerCase()
    const validJobs: string[] = ["coho", "unitrans", "wang"]

    if(!validJobs.includes(jobId)) return notFound()
      
    return (
      <div>
        <h1 className="font-bold text-4xl">{jobId}</h1>
      </div>
    );
  }
