---
layout: lesson
title: GraphRAG、评估与研究应用
navbar_name: Teaching
course: llm-rag-kg
module: GraphRAG, Evaluation, and Research Applications
module_key: graphrag
lesson_no: LLM-04
order: 4
duration: 120 min
level: Advanced
permalink: /teaching/llm-rag-knowledge-graph/graphrag-evaluation/
excerpt_text: Combine vector retrieval and knowledge graphs, evaluate grounded generation, and apply GraphRAG to research scenarios.
---

## 1. From RAG to GraphRAG

传统 RAG 主要依赖向量检索，在语义相似度层面寻找相关文本。GraphRAG 则进一步引入知识图谱，使系统能够利用实体关系、概念结构和多跳路径组织证据。

简单来说：

- RAG 更擅长找到相关文本片段。
- Knowledge Graph 更擅长表示结构化关系。
- GraphRAG 试图同时利用文本证据和图结构关系。

## 2. Why GraphRAG Is Useful

GraphRAG 对以下任务尤其有帮助：

- 需要多跳推理的问题。
- 需要比较多个实体关系的问题。
- 需要解释主题演化或知识扩散的问题。
- 需要从大量文献中形成宏观结构的问题。
- 需要结合局部证据与全局结构的问题。

## 3. Basic GraphRAG Workflow

一个 GraphRAG 系统通常包括：

1. 文档收集与切分。
2. 实体和关系抽取。
3. 知识图谱构建。
4. 图社区或主题结构识别。
5. 用户问题解析。
6. 相关实体、子图和文本片段检索。
7. 证据压缩和 prompt 组织。
8. LLM 生成答案。
9. 引用、路径和一致性检查。

## 4. Evaluation Dimensions

LLM-RAG-KG 系统不能只看回答是否流畅，还需要从多个维度评估：

- **Retrieval relevance**：检索证据是否相关。
- **Faithfulness**：回答是否忠实于证据。
- **Completeness**：回答是否覆盖关键点。
- **Traceability**：能否追溯到原始文档或图谱路径。
- **Robustness**：不同问法是否得到稳定答案。
- **Usefulness**：对研究或决策是否真正有帮助。

## 5. Research Applications

GraphRAG 可以用于多种研究任务：

- 学术文献综述：从论文中抽取主题、方法和理论关系。
- 专利情报分析：连接技术主题、申请人、行业和应用场景。
- 政策文本分析：构建政策工具、治理目标和区域对象之间的关系。
- 在线健康社区：关联症状、情绪、信息需求和支持行为。
- 企业知识管理：整合年报、公告、专利和新闻信息。

## 6. Design Principles

构建可靠的 LLM-RAG-KG 系统时，应遵循：

- 先定义任务，再选择技术。
- 先建立证据边界，再生成答案。
- 先设计 schema，再抽取知识。
- 先评估检索质量，再评估生成质量。
- 保留来源、引用和图谱路径。

## 7. Learning Outcomes

完成本节后，学习者应能够：

- 解释 GraphRAG 与传统 RAG 的差异。
- 设计一个结合向量库和知识图谱的问答系统。
- 选择合适的评估指标。
- 将 LLM-RAG-KG 系统应用到实际研究场景中。
