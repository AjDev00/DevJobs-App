export async function getJobs() {
  const res = await fetch("http://localhost:8000/api/jobs");

  return await res.json();
}

export async function fetchSingleJob(id) {
  const res = await fetch("http://localhost:8000/api/jobs/" + id);

  return await res.json();
}

export async function filterByTitle(position) {
  const res = await fetch("http://localhost:8000/api/filter-jobs/" + position);

  return await res.json();
}

export async function filterByTitleAndLocation(position, location) {
  const res = await fetch(
    "http://localhost:8000/api/filter-job/" + position + "/" + location
  );

  return await res.json();
}

export async function filterByContract(position, location) {
  const res = await fetch(
    "http://localhost:8000/api/filter-jobs/" +
      position +
      "/Full Time" +
      "/" +
      location
  );

  return await res.json();
}

export async function filterByLocation(location) {
  const res = await fetch(
    "http://localhost:8000/api/filter-jobs-via-location/" + location
  );

  return await res.json();
}

export async function filterByLocationAndContract(location) {
  const res = await fetch(
    "http://localhost:8000/api/filter-jobs-via-location/" +
      location +
      "/Full Time"
  );

  return await res.json();
}

export async function filterByOnlyContract() {
  const res = await fetch(
    "http://localhost:8000/api/filter-jobs-via-contract/full time"
  );

  return await res.json();
}

// export async function searchJobs(searchData) {
//   const res = await fetch(
//     "http://localhost:8000/api/jobs?keyword=" + searchData
//   );

//   return await res.json();
// }

// export async function searchJobsByLocation(searchData) {
//   const res = await fetch(
//     "http://localhost:8000/api/jobs?location=" + searchData
//   );

//   return await res.json();
// }
