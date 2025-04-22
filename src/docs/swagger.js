module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Gerenciador de Tarefas",
    version: "1.0.0",
    description: "API simples para gerenciar tarefas",
  },
  paths: {
    "/tasks": {
      get: {
        summary: "Listar tarefas",
        responses: {
          "200": {
            description: "Lista de tarefas"
          }
        }
      },
      post: {
        summary: "Criar nova tarefa",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  description: { type: "string" }
                },
                required: ["title", "description"]
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Tarefa criada com sucesso"
          }
        }
      }
    },
    "/tasks/{id}/done": {
      patch: {
        summary: "Marcar tarefa como concluída",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          "200": {
            description: "Tarefa marcada como concluída"
          }
        }
      }
    },
    "/tasks/{id}": {
      delete: {
        summary: "Excluir tarefa",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          "204": {
            description: "Tarefa excluída com sucesso"
          }
        }
      }
    }
  }
};
