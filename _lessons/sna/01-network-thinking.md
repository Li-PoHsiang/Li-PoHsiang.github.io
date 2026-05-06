---
layout: lesson
title: 网络思维与关系数据
navbar_name: Teaching
course: sna
module: Network Thinking and Data Structures
module_key: foundations
lesson_no: SNA-01
order: 1
duration: 90 min
level: Introductory
permalink: /teaching/social-network-analysis/network-thinking/
excerpt_text: Understand networks as relational structures and learn how to define nodes, edges, directions, and weights.
---

## 1. Why Network Thinking?

社会网络分析首先要求我们把研究对象从“个体属性”转向“主体之间的关系”。在传统数据表中，行通常代表个体，列代表属性；而在网络分析中，研究重点是主体之间是否存在连接、连接强度如何、连接方向如何，以及这些关系如何形成整体结构。

## 2. Nodes and Edges

- **Node / Vertex**：网络中的主体，例如作者、机构、企业、专利、论文或关键词。
- **Edge / Tie**：主体之间的关系，例如合作、引用、共同出现、投资、转移或信息互动。
- **Directed network**：关系有方向，例如 A 引用 B。
- **Undirected network**：关系无方向，例如 A 与 B 合作发表论文。
- **Weighted network**：关系有强度，例如两个机构合作次数为 8。

## 3. Research Examples

在科研合作网络中，节点可以是作者，边可以是共同发表论文；在专利知识网络中，节点可以是技术主题，边可以是共现或引用关系；在企业创新网络中，节点可以是企业，边可以是合作申请专利或联合研发关系。

## 4. Learning Outcome

完成本节后，你应该能够把一个现实研究问题转化为网络数据结构，并清楚说明：节点是什么、边是什么、关系是否有方向、关系是否有权重。
