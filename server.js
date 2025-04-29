
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./src/docs/swagger');

const taskRoutes = require('./src/routes/tasks.routes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('src/views'));

app.use('/tasks', taskRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
