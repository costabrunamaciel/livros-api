# 08 · Métricas e indicadores de qualidade

Indicadores usados para acompanhar a saúde do projeto e o progresso dos testes, consolidados ao final de cada ciclo (ver atividade AT11 do [[04 Plano de testes da API]]).

## Cobertura de testes

| Indicador | Fórmula | Valor atual |
|---|---|---|
| Cobertura de requisitos | requisitos com pelo menos 1 caso de teste / total de requisitos | 5/5 (100%) — RF01 a RF05 |
| Cobertura de casos planejados x automatizados | casos automatizados / casos planejados no [[06 Casos de testes em Gherkin]] | 16/16 (100%) |
| Cobertura de endpoints | endpoints exercitados / total de endpoints | 5/5 (100%) — IT01 a IT05 |

## Execução dos testes automatizados (Cypress)

| Indicador | Fórmula | Valor atual |
|---|---|---|
| Taxa de aprovação (pass rate) | testes passando / total de testes executados | 16/16 (100%) |
| Testes falhando | total de testes com status "failing" na última execução | 0 |
| Tempo total de execução | duração do `npm run cy:run` | ~0,8s (última execução local) |

> Atualize esta tabela sempre que rodar `npm run cy:run` e quiser registrar um novo ponto no tempo — dá para comparar evoluções entre ciclos.

## Densidade e distribuição de defeitos

Preenchido conforme os defeitos forem registrados em [[09 Gerenciamento de bugs]].

| Indicador | Fórmula | Valor atual |
|---|---|---|
| Densidade de defeitos | nº de defeitos / nº de requisitos (RF01–RF05) | — |
| Defeitos por severidade | contagem por Crítica / Alta / Média / Baixa | — |
| Defeitos por status | contagem por Aberto / Em correção / Fechado | — |
| Taxa de reabertura | defeitos reabertos / total de defeitos fechados | — |

## Regressão

| Indicador | Fórmula | Valor atual |
|---|---|---|
| Casos de regressão | casos marcados `@regressao` no [[06 Casos de testes em Gherkin]] | 1 (TC-LIVROS-API-016) |
| Regressões identificadas | defeitos reabertos após correção anterior | — |

## Relação com ISO/IEC 25010

Essas métricas dão visibilidade indireta sobre as características de qualidade do produto avaliadas no projeto:

| Característica ISO/IEC 25010 | Métrica relacionada |
|---|---|
| Adequação Funcional | Cobertura de requisitos/endpoints, taxa de aprovação |
| Confiabilidade | Densidade de defeitos, taxa de reabertura |
| Manutenibilidade | Tempo de execução dos testes, facilidade de regressão |

---
Veja também: [[04 Plano de testes da API]] · [[09 Gerenciamento de bugs]]
