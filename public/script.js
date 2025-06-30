function addProject() {
  const name = document.getElementById('projectName').value;
  fetch('/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  }).then(() => location.reload());
}
fetch('/api/projects')
  .then(res => res.json())
  .then(projects => {
    const list = document.getElementById('projectList');
    projects.forEach(p => {
      const div = document.createElement('div');
      div.className = 'project';
      div.innerHTML = `<strong>${p.name}</strong>`;
      list.appendChild(div);
    });
  });