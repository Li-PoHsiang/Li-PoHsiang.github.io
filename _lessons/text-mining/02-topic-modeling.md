---
layout: lesson
title: 主题建模与语义结构发现
navbar_name: Teaching
course: text-mining
module: Topic Modeling and Text Classification
module_key: modeling
lesson_no: TM-02
order: 2
duration: 90 min
level: Intermediate
permalink: /teaching/text-mining/topic-modeling/
excerpt_text: Understand topic modeling as a way to discover latent semantic structures in large-scale text collections.
---

## 1. Why Topic Modeling?

主题建模用于从大量文本中识别潜在语义结构。它适合回答“一个领域主要讨论什么”“主题如何演化”“不同群体关注点是否不同”等问题。

## 2. Classical and Neural Approaches

传统主题模型如 LDA 强调词项共现与概率分布；BERTopic 等方法结合句向量、降维和聚类，更适合处理语义表达复杂的文本材料。

## 3. Interpretation Matters

主题模型生成的结果不是最终答案。研究者需要根据关键词、代表文档、主题分布和理论框架对主题进行命名、归纳和解释。

## 4. Common Problems

- 主题过碎或过粗。
- 短文本语义不足。
- 聚类参数影响结果。
- 主题命名过度依赖主观判断。

解决这些问题需要结合参数敏感性检查、人工解释、代表文本阅读和理论约束。
