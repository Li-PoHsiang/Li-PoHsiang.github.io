---
layout: lesson
title: 知识图谱构建：实体、关系与本体
navbar_name: Teaching
course: llm-rag-kg
module: Knowledge Graph Construction and Semantic Retrieval
module_key: kg
lesson_no: LLM-03
order: 3
duration: 120 min
level: Applied
permalink: /teaching/llm-rag-knowledge-graph/knowledge-graph-construction/
excerpt_text: Learn how to construct knowledge graphs from domain concepts, textual evidence, and structured relations.
---

## 1. What Is a Knowledge Graph?

知识图谱是一种用节点和边表示知识的结构化方式。节点通常表示实体、概念、事件或主题，边表示它们之间的关系。

一个基础三元组可以表示为：

```text
Entity A -- Relation --> Entity B
```

例如：

```text
RAG -- uses --> External Documents
Knowledge Graph -- contains --> Entities and Relations
Policy Text -- mentions --> Governance Instrument
```

## 2. Why Knowledge Graphs Matter for LLMs

知识图谱能为 LLM 提供更明确的语义结构。相比纯文本检索，图谱可以表达：

- 概念之间的层级关系。
- 实体之间的因果、引用、合作或隶属关系。
- 事件链和技术路径。
- 多跳关系和结构化推理路径。

## 3. Main Components

知识图谱通常包括：

1. **Entities**：人、组织、地点、技术、疾病、政策工具、文献主题等。
2. **Relations**：合作、引用、包含、影响、属于、导致、支持等。
3. **Attributes**：年份、地区、来源、频次、强度、类别等。
4. **Ontology**：概念类别和关系类别的规范化设计。
5. **Triples**：实体—关系—实体的基本表达单元。

## 4. Construction Methods

知识图谱可以通过多种方式构建：

- 人工定义本体和规则。
- 从结构化数据库导入。
- 从文本中抽取实体和关系。
- 使用 LLM 辅助抽取概念、事件和关系。
- 将已有分类体系、主题模型和引用网络转化为图结构。

## 5. LLM-assisted Extraction

LLM 可以作为知识图谱构建中的辅助工具，用于：

- 实体识别。
- 关系抽取。
- 事件抽取。
- 概念归一化。
- 同义词合并。
- 三元组生成。

但 LLM 抽取结果必须经过 schema 约束和人工/规则校验，否则容易出现关系泛化、实体误配和概念漂移。

## 6. Example: Research Knowledge Graph

在学术文献分析中，可以构建如下图谱：

- Paper → uses → Method
- Paper → studies → Topic
- Topic → belongs_to → Research Domain
- Author → affiliated_with → Institution
- Paper → cites → Paper

这种图谱可以用于研究主题演化、学科交叉、知识扩散和作者合作网络分析。

## 7. Learning Outcomes

完成本节后，学习者应能够：

- 解释知识图谱的基本结构。
- 设计实体、关系和本体类型。
- 使用文本证据构造三元组。
- 理解 LLM 辅助知识图谱构建的优势和风险。
