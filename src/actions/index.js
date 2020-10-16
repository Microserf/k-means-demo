

export function setPersonaDetail(type, value) {
  return {
    type: type,
    payload: value
  }
}

export const setName = (name) => setPersonaDetail('name', name);
export const setConcern = (job) => setPersonaDetail('job', job);
