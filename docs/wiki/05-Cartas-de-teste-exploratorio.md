# 05 · Cartas de teste exploratório

| | |
|---|---|
| **Identificador do conjunto** | CH-LIVROS-API |
| **Origem** | Subprocesso ST04 — Testes exploratórios (ver [[04 Plano de testes da API]]) |
| **Técnica** | Teste exploratório baseado em sessão (*Session-Based Test Management*), técnica baseada em experiência — categorizada pela **ISO/IEC/IEEE 29119-1** (cláusula sobre técnicas baseadas em experiência) |
| **Modelo de qualidade de referência** | ISO/IEC 25010 (cada carta indica a característica de qualidade prioritária investigada) |
| **Base funcional** | [Especificação Funcional](./especificacao-funcional.md) |

Cada carta segue o formato padrão de *charter* (missão, foco, técnica, tempo alocado) e deve ser preenchida pelo testador durante a sessão, nos campos **Notas** e **Defeitos encontrados**.

---

## CH-LIVROS-API-001 — Fluxo completo do CRUD

- **Missão:** Explorar o ciclo completo *cadastrar → buscar → atualizar → remover → buscar novamente* para descobrir inconsistências entre as operações.
- **Requisitos relacionados:** RF01, RF02, RF03, RF04, RF05
- **Endpoints:** IT01–IT05
- **Característica ISO/IEC 25010:** Adequação Funcional (*Functional Suitability*)
- **Duração alocada:** 45 min
- **Técnicas de apoio:** Error guessing
- **Riscos relacionados:** RC01, RC03
- **Fora do foco desta sessão:** validação isolada de campos (ver CH-003)
- **Notas da sessão:** _(preencher durante a execução)_
- **Defeitos encontrados:** _(preencher durante a execução)_

---

## CH-LIVROS-API-002 — Valores de fronteira no campo `id`

- **Missão:** Explorar o campo `id` em `GET/PUT/DELETE /api/books/{id}` com valores de fronteira e tipos inválidos, para descobrir tratamento de erro inconsistente ou falhas não mapeadas.
- **Requisitos relacionados:** RF02, RF04, RF05
- **Endpoints:** IT02, IT04, IT05
- **Característica ISO/IEC 25010:** Confiabilidade (*Reliability*) — tolerância a falhas
- **Duração alocada:** 30 min
- **Técnicas de apoio:** Análise de valores limite, particionamento de equivalência (id existente, inexistente, negativo, zero, decimal, textual, vazio, muito grande)
- **Riscos relacionados:** RC03
- **Notas da sessão:** _(preencher durante a execução)_
- **Defeitos encontrados:** _(preencher durante a execução)_

---

## CH-LIVROS-API-003 — Payloads inválidos e malformados no cadastro

- **Missão:** Explorar `POST /api/books` enviando corpos inválidos (vazio, JSON malformado, tipos incorretos, campos desconhecidos, campos nulos) para descobrir falhas de validação de entrada.
- **Requisitos relacionados:** RF03
- **Endpoints:** IT03
- **Característica ISO/IEC 25010:** Adequação Funcional / Segurança (*Security* — robustez de entrada)
- **Duração alocada:** 40 min
- **Técnicas de apoio:** Error guessing
- **Riscos relacionados:** RC05
- **Notas da sessão:** _(preencher durante a execução)_
- **Defeitos encontrados:** _(preencher durante a execução)_

---

## CH-LIVROS-API-004 — Valores extremos em campos numéricos e textuais

- **Missão:** Explorar os campos `pageCount`, `title`, `author` e `description` com valores extremos (números negativos, números muito grandes, strings muito longas ou vazias) para descobrir ausência de validação ou comportamento inesperado.
- **Requisitos relacionados:** RF03, RF04
- **Endpoints:** IT03, IT04
- **Característica ISO/IEC 25010:** Adequação Funcional
- **Duração alocada:** 30 min
- **Técnicas de apoio:** Análise de valores limite, error guessing
- **Riscos relacionados:** RC05
- **Notas da sessão:** _(preencher durante a execução)_
- **Defeitos encontrados:** _(preencher durante a execução)_

---

## CH-LIVROS-API-005 — Persistência em memória e reinicialização

- **Missão:** Cadastrar, atualizar e remover livros, reiniciar a API e verificar se o comportamento observado condiz com a restrição documentada (dados voltam ao estado inicial de exemplo).
- **Requisitos relacionados:** Restrição 8.2 da Especificação Funcional / Plano de Testes
- **Endpoints:** IT01–IT05
- **Característica ISO/IEC 25010:** Confiabilidade (*Recoverability*)
- **Duração alocada:** 20 min
- **Técnicas de apoio:** Observação de estado
- **Riscos relacionados:** RC06
- **Notas da sessão:** _(preencher durante a execução)_
- **Defeitos encontrados:** _(preencher durante a execução)_

---

## CH-LIVROS-API-006 — Consistência entre Swagger e comportamento real

- **Missão:** Explorar a documentação interativa (`/docs`) comparando os schemas, parâmetros e respostas descritos com o comportamento real de cada endpoint, para descobrir divergências de contrato.
- **Requisitos relacionados:** RF01–RF05
- **Endpoints:** IT01–IT05
- **Característica ISO/IEC 25010:** Compatibilidade (*Interoperability* — consistência de contrato)
- **Duração alocada:** 30 min
- **Técnicas de apoio:** Teste de contrato exploratório
- **Riscos relacionados:** RC02
- **Notas da sessão:** _(preencher durante a execução)_
- **Defeitos encontrados:** _(preencher durante a execução)_

---

## CH-LIVROS-API-007 — Clareza e padronização das mensagens de erro

- **Missão:** Explorar as respostas de erro (400 e 404) em todos os endpoints para avaliar clareza da mensagem, padronização do formato `{ "message": "..." }` e ausência de vazamento de informações internas (stack trace, caminhos de arquivo, etc.).
- **Requisitos relacionados:** RF02, RF03, RF04, RF05
- **Endpoints:** IT02, IT03, IT04, IT05
- **Característica ISO/IEC 25010:** Usabilidade (*Usability*) / Segurança (*Security*)
- **Duração alocada:** 25 min
- **Técnicas de apoio:** Error guessing
- **Riscos relacionados:** RC05
- **Notas da sessão:** _(preencher durante a execução)_
- **Defeitos encontrados:** _(preencher durante a execução)_

---

## CH-LIVROS-API-008 — Unicidade e sequência do `id` gerado

- **Missão:** Cadastrar múltiplos livros em sequência (incluindo após exclusões) para verificar se o `id` gerado permanece único, sequencial e sem reaproveitamento indevido.
- **Requisitos relacionados:** RF03, RF05
- **Endpoints:** IT03, IT05
- **Característica ISO/IEC 25010:** Adequação Funcional (*Functional Correctness*)
- **Duração alocada:** 20 min
- **Técnicas de apoio:** Observação de estado, error guessing
- **Riscos relacionados:** RC03
- **Notas da sessão:** _(preencher durante a execução)_
- **Defeitos encontrados:** _(preencher durante a execução)_

---

## Resumo das cartas

| ID | Título | Característica ISO/IEC 25010 | Duração |
|---|---|---|---|
| CH-LIVROS-API-001 | Fluxo completo do CRUD | Adequação Funcional | 45 min |
| CH-LIVROS-API-002 | Valores de fronteira no `id` | Confiabilidade | 30 min |
| CH-LIVROS-API-003 | Payloads inválidos/malformados | Adequação Funcional / Segurança | 40 min |
| CH-LIVROS-API-004 | Valores extremos em campos | Adequação Funcional | 30 min |
| CH-LIVROS-API-005 | Persistência em memória | Confiabilidade | 20 min |
| CH-LIVROS-API-006 | Consistência Swagger x real | Compatibilidade | 30 min |
| CH-LIVROS-API-007 | Mensagens de erro | Usabilidade / Segurança | 25 min |
| CH-LIVROS-API-008 | Unicidade/sequência do `id` | Adequação Funcional | 20 min |

**Tempo total estimado:** 4h (compatível com a estimativa AT05 — Testes exploratórios do [[04 Plano de testes da API]]).

---
Veja também: [[04 Plano de testes da API]] · [[06 Casos de testes em Gherkin]]
