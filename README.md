# Hi, I'm Bhanu Prakash Putta

**AI Engineer.** I build LLM applications, AI agents and RAG systems that hold up on real, messy data, and I measure them so you know they work.

Lead AI Engineer at **[Effulgent](https://www.effulgenttech.com)** (member of the OpenAI, Anthropic and Google Cloud partner programs). M.S. in Applied Data Science, Clarkson University. 6+ years of Python and software engineering.

[![Portfolio](https://img.shields.io/badge/Portfolio-1f5f4a?style=flat&logo=githubpages&logoColor=white)](https://bprakashputta.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bprakashputta/)
[![Upwork](https://img.shields.io/badge/Upwork-14A800?style=flat&logo=upwork&logoColor=white)](https://www.upwork.com/freelancers/~01ba1048297cfaf8b2)
[![Medium](https://img.shields.io/badge/Medium-000000?style=flat&logo=medium&logoColor=white)](https://medium.com/@bprakashputta)

---

## What I build

- **AI agents and agentic workflows**: LangGraph, tool/function calling, MCP servers, human-in-the-loop approvals
- **RAG and document intelligence**: hybrid search (vectors + full text), reranking, answers that cite their sources
- **LLM integrations**: Claude, OpenAI and Vertex AI with structured outputs, guardrails and cost controls
- **Evaluation**: test sets, LLM-as-judge, regression checks, so changes are measured instead of guessed
- **Production plumbing**: FastAPI, Postgres/pgvector, job queues, Docker, CI/CD with rollback, monitoring

## Featured work

### [Placewise](https://github.com/bprakashputta/placewise): AI recruiting layer · [case study](https://bprakashputta.github.io/work/placewise.html) · [live demo](https://placewise.bprakashputta.workers.dev)
Turns résumés and job notes into evidence-backed shortlists for an A/E/C staffing workflow, on top of an existing ATS.

- LangGraph ingest per résumé: dedupe → parse and screen → Claude structured extraction → code validation → Voyage embeddings, with a Postgres job queue and workers
- Hard filters + hybrid retrieval (pgvector + Postgres full text) + rerank: **recall@10 48% → 89% at 98% precision@10**
- Evidence-backed match scoring, where every claim is checked against a quoted résumé line: **97.6% submit precision**, about **$0.02 per résumé**
- Evaluated on a 597-résumé test set, including scanned, corrupt, duplicate and prompt-injection files
- Deployed on Google Cloud with Docker, GitHub Actions auto-deploy and rollback, LLM spend caps and LangSmith tracing

`Python` `LangGraph` `LangChain` `Claude` `Voyage AI` `pgvector` `FastAPI` `Next.js` `n8n` `Docker` `GCP`

### [predmarket-mcp](https://github.com/bprakashputta/predmarket-mcp): live market data for AI agents · [case study](https://bprakashputta.github.io/work/predmarket-mcp.html)
An MCP server that lets Claude or any MCP client search, quote and compare **Kalshi and Polymarket** markets: order books, recent trades, price history, and cross-venue pairs ranked by price gap.

- 6 read-only tools on one venue-neutral data model (every price is a YES probability; NO-side quotes and fills converted)
- Built for agent traffic: per-venue rate limiting, retries that honor `Retry-After`, a de-duplicating TTL cache, inverted-index search
- Cross-venue matching that rejects look-alikes (different thresholds, above vs touch, cut vs hike, negation), with regression tests from real title pairs
- 12 regression-tested look-alike rules; 0.3 s search, zero rate-limit errors; a [live cross-venue board](https://bprakashputta.github.io/predmarket-mcp/) rebuilt every 6 hours

`Python` `MCP` `httpx` `asyncio` `pydantic`

### More production-grade AI systems
Each one is a public repo with Docker, CI, design decisions and an evaluation on a public benchmark, with every number from a real run.

| Project | What it does | Measured on |
|---|---|---|
| [contract-review-ai](https://github.com/bprakashputta/contract-review-ai) · [case study](https://bprakashputta.github.io/work/contract-review-ai.html) | Extracts 12 key clauses with quotes verified against the document by code, playbook risk flags, cited Q&A | CUAD, 102 held-out contracts: **micro-F1 0.821 → 0.893**, 44% fewer tokens, $0.0015/contract |
| [sql-analyst-agent](https://github.com/bprakashputta/sql-analyst-agent) · [case study](https://bprakashputta.github.io/work/sql-analyst-agent.html) | LangGraph text-to-SQL agent: read-only by construction, self-correcting, charts and explains results | BIRD mini-dev: **62.7% → 71.8%** execution accuracy (Haiku, N=400), **87%** with Sonnet; 0 writes from 25 hostile prompts |
| [support-desk-agent](https://github.com/bprakashputta/support-desk-agent) · [case study](https://bprakashputta.github.io/work/support-desk-agent.html) | Support agent that changes real orders: policy enforced in code, human approval for big refunds, exactly-once writes | τ-bench retail, all 115 test tasks: policy-violating writes **6.1% → 0%** at **73.9%** task success; red team 16/16 |
| [assaygate](https://github.com/bprakashputta/assaygate) · [case study](https://bprakashputta.github.io/work/assaygate.html) | CI gate for LLM apps: blocks PRs when quality, cost or latency regresses, using paired CIs; calibrates LLM judges against humans | Caught a **−6.0 pt** regression (p = 0.005) hidden in a prompt that halved cost; MT-Bench human judgments, N=400 |

### [NER Document Extractor](https://github.com/bprakashputta/NER-Document-Extractor): legal document data extraction
PDF → text → custom spaCy NER that extracts sales, address and tax-parcel data from legal documents (**92% accuracy on 500+ documents**), with per-entity precision/recall/F1 evaluation. Built during my graduate research at Clarkson.

`Python` `spaCy` `pdfminer` `NLP`

### [IMC Prosperity 2025](https://github.com/bprakashputta/order-of-the-trade-imcprosperity2025): algorithmic trading competition
Entry in IMC's global trading competition: order-book strategies for three products (fair-value market making, a price-forecast strategy and position-capped sizing), using only numpy/pandas per the competition rules.

`Python` `numpy` `pandas`

## Experience highlights

The code for this work belongs to the companies, so it isn't public. Happy to walk through the design.

- **Real-time data platform:** unified Polymarket and Kalshi feeds into one ML-ready stream at **40M+ messages/hour** (Kafka, WebSockets, Protobuf), with MCP servers giving AI agents live market data as tools
- **LLM-as-judge evaluation:** a GPT-4 judging framework across 5+ question types that raised agreement with human reviewers from **60% to 90%**
- **Autonomous trading agent:** real-time data → ML models → execution in under 1 second, with risk limits and a kill switch in deterministic code

## Tech stack

| Area | Tools |
|---|---|
| LLMs and agents | Claude API, OpenAI API, Vertex AI, LangGraph, LangChain, LlamaIndex, MCP, LangSmith |
| Retrieval | pgvector, Pinecone, Voyage AI embeddings and rerank, hybrid search, rank fusion |
| ML | PyTorch, TensorFlow, scikit-learn, XGBoost, spaCy |
| Backend and data | Python, FastAPI, PostgreSQL, TimescaleDB, Kafka, WebSockets, n8n |
| Infra | Docker, GitHub Actions, GCP, AWS, Azure, Terraform |

---

**Have an AI project in mind?** See case studies at **[bprakashputta.github.io](https://bprakashputta.github.io)**, or message me on [LinkedIn](https://www.linkedin.com/in/bprakashputta/) or [Upwork](https://www.upwork.com/freelancers/~01ba1048297cfaf8b2) with what you're trying to build, and I'll suggest the simplest approach that works.
