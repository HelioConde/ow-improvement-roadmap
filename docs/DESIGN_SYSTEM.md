# DESIGN_SYSTEM — OW Improvement Roadmap

## Produto
Organize um plano de duas a quatro semanas, pratique pequenas tarefas e acompanhe seus registros de revisão. Seu progresso é autodeclarado.

## Taste Skill — tokens
CSS `styles.css`: fundo `#17192b`, primária `#f3c69d`, secundária `#9ce9d4`, tipografia do sistema, foco amarelo de alto contraste, espaçamentos de 4–64 px e raios 10/18/30 px.

## Web Design Guidelines
- Navegação com skip link, formulário rotulado e botões semânticos, resultados em `aria-live`.
- Teclado e foco visível; alvos móveis com altura de pelo menos 44px; layout a partir de 320px.
- Respeito a `prefers-reduced-motion`; excluir/importar backup substitutivo exige confirmação.
- Texto de usuário sempre inserido via `textContent`, nunca HTML não confiável.

## Awesome Design / Image-to-Code
O repositório original era apenas um README, portanto esta identidade visual foi criada de forma própria (ilustração CSS, emblema SVG), sem alegar que havia imagens/capturas convertidas. UI com cartões e resumos acessíveis.

## Dados e segurança
Armazenamento local `ow-improvement-roadmap-local-v1`, schema `{version:1,product,entries}`, até 200 registros e importação JSON até 1 MiB. Validação de ID, data, strings, opções e inteiros. Sem API, chaves, sync, banco, login ou cookies de rastreamento. Backup deve ser guardado pelo usuário. Progresso é autodeclarado e dados fictícios só entram por escolha explícita.

## Revisão interpretativa
Conclusão de tarefas e progresso são autodeclarados; não há monitoramento do jogo.

## QA
Workflow GitHub Actions executa validação estática e Playwright 5 resoluções com capturas, teste de criação, edição, persistência LocalStorage, exportação, busca, filtros, exclusão e overflow. A publicação usa apenas assets estáticos em `gh-pages/(root)`.

## Experiência exclusiva de quadro Kanban
Três colunas reais para etapas A fazer, Em treino e Concluído, com cartões editáveis, indicadores por coluna, preservação de filtros e compatibilidade mobile. Identidade tática de planejamento em `identity.css`, distinta de páginas de diário.

## Kanban interativo
`Avançar etapa` e `Reabrir` movimentam registros entre A fazer, Em treino e Concluído sem abrir formulário. Indicadores por objetivo calculam tarefas concluídas/total e exibem barra acessível. O schema LocalStorage é preservado. Testes validam movimentação, recarregamento e indicadores.

## Visual QA mobile — 28/10/2026
Capturas reais Playwright 320/390px revisadas. Correção do skip link oculto por `clip-path` fora do foco e visível ao focar com teclado. Banner de apresentação reduzido em telas pequenas para priorizar os fluxos de treino. QA automatizado acrescenta validação de foco sem abrir APIs externas.

## Accessibility QA — 28/10/2026
Testes Playwright de Tab/Shift+Tab, skip link para a área principal, foco visível, rótulos e contraste dos inputs e placeholders (4,5:1), botões/links e campos com altura mínima de 44px. Layout e dados existentes preservados; teste automático direcionado não substitui auditoria WCAG integral.

## Menu móvel do Kanban
Menu com identidade tática laranja para acessar diretamente Quadro Kanban, Evolução das metas e Criar tarefa, até 650px. Navegação por teclado, Escape e fechamento por link/fora são testados em cinco resoluções. O armazenamento local e o esquema dos cards continuam intactos.

## Atalhos desktop por produto
Menu de desktop: Quadro Kanban, Objetivos, Criar tarefa. IDs e navegação auditados no Playwright; cabeçalho intermediário libera espaço ocultando badge decorativo. Identidade original preservada e menu móvel independente.
