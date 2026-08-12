# 09 · Gerenciamento de bugs

Processo de registro, classificação e acompanhamento de defeitos encontrados durante os testes manuais e exploratórios (ver [[05 Cartas de teste exploratório]]) ou automatizados (ver [[06 Casos de testes em Gherkin]] e [[07 Automação com Cypress]]).

## Template de registro de defeito

Todo defeito encontrado deve ser registrado com os seguintes campos (conforme item 11.5 do [[04 Plano de testes da API]]):

```
ID: BUG-LIVROS-API-0XX
Título:
Descrição:
Ambiente: (local / porta 3000 / versão do Node)
Endpoint: (ex.: POST /api/books)
Pré-condições:
Passos para reprodução:
  1.
  2.
  3.
Resultado atual:
Resultado esperado:
Evidências: (print, log, resposta JSON)
Severidade:
Prioridade:
Status:
Requisito relacionado: (RFxx)
Caso de teste relacionado: (TC-LIVROS-API-0XX, se aplicável)
```

## Escala de severidade

Impacto técnico do defeito no funcionamento da API.

| Severidade | Descrição | Exemplo |
|---|---|---|
| **Crítica** | API fora do ar, endpoint inacessível, perda de dados | `POST /api/books` derruba o servidor |
| **Alta** | Funcionalidade principal não funciona conforme especificado | `DELETE` não remove o livro, mas retorna 204 |
| **Média** | Comportamento incorreto em cenário específico, com contorno possível | Campo `pageCount` aceita valor negativo |
| **Baixa** | Problema cosmético ou de mensagem, sem impacto funcional | Mensagem de erro com texto confuso |

## Escala de prioridade

Urgência de correção, do ponto de vista do projeto.

| Prioridade | Descrição |
|---|---|
| **Alta** | Corrigir antes de continuar os testes desse requisito |
| **Média** | Corrigir no ciclo atual |
| **Baixa** | Corrigir quando houver disponibilidade |

## Fluxo de status

```
Aberto → Em análise → Em correção → Em validação → Fechado
                                          │
                                          └──→ Reaberto → Em correção
```

| Status | Significado |
|---|---|
| Aberto | Defeito registrado, ainda não analisado |
| Em análise | Em investigação para confirmar causa e reprodução |
| Em correção | Correção sendo desenvolvida |
| Em validação | Correção implementada, aguardando reteste |
| Fechado | Reteste confirmou que o defeito foi corrigido |
| Reaberto | Reteste mostrou que o problema persiste |

## Registro de defeitos

| ID | Título | Severidade | Prioridade | Status | Requisito |
|---|---|---|---|---|---|
| _(nenhum defeito registrado até o momento)_ | | | | | |

> Conforme novos defeitos forem encontrados (testes exploratórios, Gherkin ou Cypress), adicione uma linha nesta tabela e, se quiser, um bloco detalhado usando o template acima.

---
Veja também: [[04 Plano de testes da API]] · [[08 Métricas e indicadores de qualidade]]
