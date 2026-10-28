window.APP_CONFIG={
  "repo": "ow-improvement-roadmap",
  "title": "OW Improvement Roadmap",
  "fields": [
    {
      "key": "objective",
      "label": "Objetivo do plano",
      "kind": "text",
      "max": 75,
      "required": true,
      "placeholder": "Ex.: melhorar posicionamento"
    },
    {
      "key": "task",
      "label": "Tarefa ou exercício",
      "kind": "text",
      "max": 85,
      "required": true,
      "placeholder": "Ex.: revisar 1 replay"
    },
    {
      "key": "week",
      "label": "Semana (1–4)",
      "kind": "number",
      "min": 1,
      "max": 4,
      "required": true
    },
    {
      "key": "frequency",
      "label": "Frequência sugerida",
      "kind": "select",
      "options": [
        "1x por semana",
        "2x por semana",
        "3x por semana",
        "Diariamente"
      ],
      "required": true
    },
    {
      "key": "priority",
      "label": "Prioridade",
      "kind": "select",
      "options": [
        "Alta",
        "Média",
        "Baixa"
      ],
      "required": true
    },
    {
      "key": "date",
      "label": "Data de revisão",
      "kind": "date",
      "required": true
    },
    {
      "key": "evidence",
      "label": "Evidência e aprendizado",
      "kind": "textarea",
      "max": 500,
      "required": true,
      "placeholder": "O que você observou na prática?"
    },
    {
      "key": "status",
      "label": "Estado da tarefa",
      "kind": "select",
      "options": [
        "A fazer",
        "Em treino",
        "Concluído"
      ],
      "required": true
    }
  ],
  "titleField": "task",
  "groupBy": "objective",
  "states": [
    "A fazer",
    "Em treino",
    "Concluído"
  ],
  "demo": [
    {
      "objective": "Posicionamento",
      "task": "Rever uma luta por replay",
      "week": 1,
      "frequency": "2x por semana",
      "priority": "Alta",
      "date": "2026-10-27",
      "evidence": "Exemplo fictício: anotar se havia cobertura.",
      "status": "Em treino"
    },
    {
      "objective": "Posicionamento",
      "task": "Treinar rotas de escape",
      "week": 2,
      "frequency": "3x por semana",
      "priority": "Média",
      "date": "2026-10-27",
      "evidence": "Exemplo fictício: marcar uma rota segura por mapa.",
      "status": "A fazer"
    },
    {
      "objective": "Comunicação",
      "task": "Fazer uma chamada objetiva",
      "week": 1,
      "frequency": "Diariamente",
      "priority": "Baixa",
      "date": "2026-10-27",
      "evidence": "Exemplo fictício: registrar se a chamada foi clara.",
      "status": "Concluído"
    }
  ]
};
