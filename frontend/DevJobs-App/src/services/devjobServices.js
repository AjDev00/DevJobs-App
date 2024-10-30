export default async function getJobs() {
  const res = await fetch("http://localhost:8000/api/jobs");

  return await res.json();
}
