const API_URL = 'http://localhost:7070';

export function getNotes() {
  return fetch(`${API_URL}/notes`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch((error) => console.error('Error:', error));
}

export function createNote(note) {
  return fetch(`${API_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .catch((error) => console.error('Error:', error));
}

export function deleteNote(id) {
  return fetch(`${API_URL}/notes/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .catch((error) => console.error('Error:', error));
}
