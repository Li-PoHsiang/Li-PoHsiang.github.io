---
layout: lesson
title: LLM 与知识 grounding
navbar_name: Teaching
course: llm-rag-kg
module: LLM Foundations and Knowledge Grounding
module_key: foundations
lesson_no: LLM-01
order: 1
duration: 90 min
level: Foundations
permalink: /teaching/llm-rag-knowledge-graph/llm-grounding/
excerpt_text: Understand the limits of parametric knowledge and why LLM systems need external evidence, retrieval, and structured constraints.
---

## 1. From Language Generation to Knowledge-grounded Systems

大语言模型能够生成流畅文本，但流畅性并不等于可靠性。模型回答往往来自参数化知识、上下文提示和概率生成过程，因此在面对最新事实、专业知识、细粒度证据和可追溯推理时容易出现不确定性。

知识 grounding 的核心目标，是让模型回答建立在明确的外部证据之上，而不是完全依赖模型内部记忆。

## 2. Why Hallucination Happens

LLM 幻觉并不只是“模型出错”，它往往来自以下机制：

- 参数知识过时或不完整。
- 提示词没有提供足够上下文。
- 任务要求超出模型已有知识边界。
- 模型倾向于生成连贯答案，而不是主动表达未知。
- 缺少证据约束和输出校验机制。

## 3. Three Forms of External Knowledge

在构建可靠 LLM 应用时，可以引入三类外部知识：

1. **Document knowledge**：论文、政策、专利、报告、网页、病历文本等。
2. **Structured knowledge**：数据库、表格、指标体系、字段定义等。
3. **Graph knowledge**：实体、关系、概念层级、事件链、知识图谱等。

RAG 主要处理文档知识，知识图谱主要处理结构化语义关系，二者可以结合形成 GraphRAG。

## 4. Basic Architecture

一个知识增强 LLM 系统通常包括：

- 用户问题理解。
- 查询改写与检索规划。
- 文档检索或图谱检索。
- 证据筛选与排序。
- Prompt 组装。
- LLM 生成回答。
- 引用、校验与反馈。

## 5. Learning Outcomes

完成本节后，学习者应能够：

- 解释为什么 LLM 需要外部知识。
- 区分参数知识、检索知识和图谱知识。
- 说明 RAG 与知识图谱在知识 grounding 中的不同角色。
- 设计一个基础的知识增强 LLM 系统框架。
