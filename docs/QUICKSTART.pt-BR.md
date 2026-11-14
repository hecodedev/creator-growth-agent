# Guia Rápido — Creator Growth Agent (Community Edition)

Kit de marketing **nativo para Cursor** (reutilizável). Não é uma plataforma de marketing autônoma nem um SaaS hospedado.

Independente de indústria. Perfis no estilo Hub Clip / games são apenas **exemplos**, não a identidade do produto.

English: [QUICKSTART.md](./QUICKSTART.md).

## O que você precisa

- Cursor (ou host compatível com `.cursor/rules`)
- Um modelo de IA disponível no Cursor
- Fontes/listas do dono para prospecção — sem ferramentas de pesquisa, o agente **não** deve inventar contatos

## Em 7 passos

1. Copie a pasta `creator-growth-agent/` para o seu repositório.
2. Confirme que a regra `.cursor/rules/creator-growth-agent.mdc` está disponível no Cursor.
3. Copie `config/business-profile.example.yaml` para `config/business-profile.yaml`
   (ou para `private-profiles/meu-negocio.local.yaml`, que fica fora do Git).
4. Preencha só o que você sabe. Deixe o resto como `null`. **Não invente dados.**
5. Defina `output_language: pt-BR` no perfil para respostas em português.
6. No Cursor: `Execute o workflow 01 de onboarding com meu business profile.`
7. Siga os workflows `02`–`12`. Outreach é **somente rascunho** — você aprova e envia manualmente.

## Demo sintética

Tudo em `examples/` é **SYNTHETIC** (sintético). Não use como métrica real.

Perfis de indústria:

- SaaS B2B — `config/examples/saas-b2b.synthetic.yaml`
- Serviços locais — `config/examples/local-services.synthetic.yaml` (já com `output_language: pt-BR`)
- Games/creator — `config/examples/gaming-creator.synthetic.yaml`

## Regras de segurança (resumo)

- Não inventar contatos, depoimentos ou métricas ao vivo
- Fontes com data (ou `unknown`)
- Separar evidência de inferência
- Score 0–100 com pesos visíveis
- Nunca autoenviar mensagens
- Respeitar opt-out
- Sem credenciais na saída
- Perfil privado Hub Clip apenas em `*.local.yaml` ignorado pelo Git

## Validação

```bash
./scripts/run_evaluations.sh
```

## Community vs Pro

A edição Community não inclui cobrança, paywall ou SaaS. Roadmap Pro: veja `docs/LICENSE_STRATEGY.md`.
