export async function getJobs() {
  const res = await fetch("http://localhost:8000/api/jobs");

  return await res.json();
}

export async function fetchSingleJob(id) {
  const res = await fetch("http://localhost:8000/api/jobs/" + id);

  return await res.json();
}

export async function searchJobs(searchData) {
  const res = await fetch(
    "http://localhost:8000/api/jobs?keyword=" + searchData
  );

  return await res.json();
}

export async function searchJobsByLocation(searchData) {
  const res = await fetch(
    "http://localhost:8000/api/jobs?location=" + searchData
  );

  return await res.json();
}
