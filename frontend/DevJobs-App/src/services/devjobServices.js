export async function getJobs() {
  const res = await fetch("http://localhost:8000/api/jobs");

  return await res.json();
}

export async function fetchSingleJob(id) {
  const res = await fetch("http://localhost:8000/api/jobs/" + id);

  return await res.json();
}
