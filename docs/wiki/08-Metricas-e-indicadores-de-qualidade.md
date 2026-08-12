# 08 · Métricas e indicadores de qualidade

Indicadores usados para acompanhar a saúde do projeto e o progresso dos testes, consolidados ao final de cada ciclo (ver atividade AT11 do [[04 Plano de testes da API]]).

## Fontes de dados

| Fonte | Alimenta |
|---|---|
| Relatório de execução do Cypress (Mochawesome) | Métricas automatizadas: pass rate, falhas, duração |
| [[04 Plano de testes da API]] e [[03 Regras de negócio]] | Cobertura de requisitos e endpoints |
| [[09 Gerenciamento de bugs]] | Densidade e distribuição de defeitos |
| [[06 Casos de testes em Gherkin]] | Casos de regressão |

## Cobertura de testes

*(manual — muda pouco, revisar quando novos requisitos forem adicionados)*

| Indicador | Fórmula | Valor atual |
|---|---|---|
| Cobertura de requisitos | requisitos com pelo menos 1 caso de teste / total de requisitos | 5/5 (100%) — RF01 a RF05 |
| Cobertura de casos planejados x automatizados | casos automatizados / casos planejados no [[06 Casos de testes em Gherkin]] | 16/16 (100%) |
| Cobertura de endpoints | endpoints exercitados / total de endpoints | 5/5 (100%) — IT01 a IT05 |

## Métricas automatizadas (relatório Mochawesome)

*(extraídas automaticamente a cada execução — não precisa calcular na mão)*

O relatório [Mochawesome](https://github.com/adamgruber/mochawesome) gera, a cada `npm run cy:run`, um resumo em HTML/JSON com o resultado da suíte. Os indicadores abaixo vêm direto de lá:

| Indicador | De onde vem no relatório |
|---|---|
| Taxa de aprovação (pass rate) | `stats.passPercent` |
| Testes passando / falhando / pendentes | `stats.passes`, `stats.failures`, `stats.pending` |
| Duração total da suíte | `stats.duration` |
| Duração por spec (RF01–RF05) | seção de cada `describe` no relatório |
| Evidência de falha (quando houver) | stack trace + screenshot anexados automaticamente pelo Cypress |

> 📎 Quando o Mochawesome estiver configurado, referencie aqui o caminho onde os relatórios são salvos (ex.: `cypress/reports/mochawesome/`) e, se publicar o HTML em algum lugar acessível, linke a versão mais recente.

## Histórico de execuções

Registre um snapshot toda vez que quiser comparar a evolução entre ciclos — copie os números do resumo do Mochawesome (ou do `npm run cy:run`, enquanto o relatório não estiver pronto).

| Data | Total de testes | Passando | Falhando | Taxa de aprovação | Duração | Observações |
|---|---|---|---|---|---|---|
| 2026-08-12 | 16 | 16 | 0 | 100% | ~0,8s | Execução local, sem relatório Mochawesome ainda |

## Densidade e distribuição de defeitos

*(manual — preenchido conforme os defeitos forem registrados em [[09 Gerenciamento de bugs]])*

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
| Manutenibilidade | Tempo de execução dos testes (Mochawesome), facilidade de regressão |

---
Veja também: [[04 Plano de testes da API]] · [[07 Automação com Cypress]] · [[09 Gerenciamento de bugs]]
