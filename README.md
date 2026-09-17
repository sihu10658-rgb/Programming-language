# Programming-language
# 🚀 MyLang (언어 이름)

> **LaTeX 수식을 지원하며, 저장 즉시 AOT 컴파일되어 C/LLVM 급 속도를 내는 초고속 프로그래밍 언어**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)

---

## 🌟 주요 특징 (Key Features)

* **⚡ AOT 최적화 컴파일:** 파일 저장(Ctrl+S) 직후 백그라운드에서 C/LLVM 기반으로 최적화되어 C언어 체급의 실행 속도를 제공합니다.
* **📐 LaTeX 수식 내장 지원:** `Math.\frac{a}{b}`, `Math.\sqrt{x}` 등 LaTeX 수식을 코드 표현식으로 직접 다룹니다.
* **🪶 극도로 적은 메모리 사용:** 가상 머신(VM)이나 무거운 JIT 엔진 없이 순수 기계어로 동작합니다.
* **🌐 UTF-8 완벽 지원:** 변수명, 주석, 문자열에 한글 및 이모지를 원활하게 사용할 수 있습니다.

---

## 📝 코드 예시 (Syntax Example)

```javascript
// UTF-8 및 한글 변수 지원
let 반지름 = 5;

// LaTeX 기반 수학 연산
let 원의넓이 = Math.PI * Math.x^{2}(반지름);
let 제곱근계산 = Math.\sqrt{16};
let 분수연산 = Math.\frac{10}{2};

print("계산 결과:", 원의넓이);
