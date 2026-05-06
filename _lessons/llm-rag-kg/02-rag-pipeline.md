---
layout: lesson
title: RAG 流程：切分、向量化与检索
navbar_name: Teaching
course: llm-rag-kg
module: RAG Pipeline and Vector Retrieval
module_key: rag
lesson_no: LLM-02
order: 2
duration: 120 min
level: Applied
permalink: /teaching/llm-rag-knowledge-graph/rag-pipeline/
excerpt_text: Learn how to build a retrieval-augmented generation pipeline from raw documents to grounded answers.
---

## 1. What Is RAG?

RAG，即 Retrieval-Augmented Generation，是一种将信息检索与大语言模型生成结合起来的技术路线。它的基本思想是：在回答问题之前，先从外部知识库中检索相关证据，再把证据作为上下文提供给 LLM。

RAG 的优势在于：

- 可以使用最新或私有知识。
- 可以减少模型凭空生成。
- 可以提供可追溯证据。
- 可以面向具体领域构建知识问答系统。

## 2. Core Pipeline

一个基础 RAG 系统通常包括以下步骤：

1. **Document collection**：收集文档，如论文、政策、专利、报告。
2. **Document cleaning**：去除噪声、页眉页脚、重复文本和格式错误。
3. **Chunking**：将长文档切分为语义片段。
4. **Embedding**：将文本片段转化为向量表示。
5. **Vector indexing**：将向量存储到向量数据库中。
6. **Retrieval**：根据用户问题检索相关片段。
7. **Reranking**：重新排序检索结果，提高证据相关性。
8. **Prompt construction**：把问题和证据组织成 prompt。
9. **Generation**：由 LLM 生成答案。
10. **Citation and checking**：返回引用、来源和一致性检查。

## 3. Chunking Strategy

Chunking 决定了系统能否检索到合适证据。常见策略包括：

- 固定长度切分。
- 按段落切分。
- 按标题层级切分。
- 滑动窗口切分。
- 语义切分。

研究型系统通常更适合使用标题层级切分或语义切分，因为它们能保留论证结构和上下文边界。

## 4. Embedding and Vector Retrieval

Embedding 模型把文本转化为向量，使语义相近的文本在向量空间中更接近。检索时，系统计算用户问题向量与文档片段向量之间的相似度，返回最相关内容。

常见向量检索指标包括：

- Cosine similarity
- Dot product
- Euclidean distance

## 5. Reranking

初始向量检索结果不一定最适合回答问题，因此常使用 reranker 进行二次排序。Reranking 可以提高证据准确性，尤其适合专业文献、政策文本和专利分析。

## 6. Common Problems

RAG 系统常见问题包括：

- 检索不到相关证据。
- 检索结果过长，超出上下文窗口。
- chunk 太碎，丢失语义背景。
- chunk 太长，包含过多无关信息。
- 答案引用了证据，但解释超过证据边界。

## 7. Learning Outcomes

完成本节后，学习者应能够：

- 解释 RAG 的基本流程。
- 设计文档切分和向量化方案。
- 理解 embedding、向量数据库和 reranking 的作用。
- 识别 RAG 系统中的常见失败模式。
