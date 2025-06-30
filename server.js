const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = 3001;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const filePath = path.join(__dirname, 'data.json');
app.get('/api/projects', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  res.json(data.projects);
});
app.post('/api/projects', (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const newProject = { name: req.body.name };
  data.projects.push(newProject);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.status(201).send('Project added');
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));