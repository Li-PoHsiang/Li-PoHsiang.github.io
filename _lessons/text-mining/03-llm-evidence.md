---
layout: lesson
title: LLM 辅助证据抽取
navbar_name: Teaching
course: text-mining
module: Research Design with Text Mining
module_key: applications
lesson_no: TM-03
order: 3
duration: 90 min
level: Applied
permalink: /teaching/text-mining/llm-evidence-extraction/
excerpt_text: Learn how to use large language models as theory-constrained evidence extractors rather than free-form summarizers.
---

## 1. From Summarization to Evidence Extraction

LLM 不应只被用来“总结文本”。在严谨研究中，更有价值的做法是把 LLM 设计为理论约束下的证据抽取器，使其按照预定义维度、证据类型和输出格式提取文本证据。

## 2. Schema-based Extraction

一个稳定的抽取任务通常包括：一级维度、二级证据类型、操作性定义、排除边界和 JSON 输出结构。这样可以减少自由发挥，提高可复现性。

## 3. Example Applications

- 在线健康社区中的用户情绪与信息需求识别。
- 政策文本中的工具类型和治理目标抽取。
- 企业年报中的战略信号和风险表达提取。
- 学术文献中的变量、理论和方法信息抽取。

## 4. Reproducibility

使用 LLM 做证据抽取时，应记录模型版本、prompt、temperature、输出格式、校验规则和人工复核方案。
