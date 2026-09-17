document.addEventListener("DOMContentLoaded", () => {
    const codeInput = document.getElementById("code-input");
    const outputBox = document.getElementById("output-box");
    const btnRun = document.getElementById("btn-run");
    const btnDownload = document.getElementById("btn-download");

    // 실행 및 최적화 버튼
    btnRun.addEventListener("click", () => {
        const rawCode = codeInput.value;
        if (!rawCode.trim()) {
            outputBox.innerText = "⚠️ 코드를 입력해 주세요!";
            return;
        }

        // AOTLaScript 파서 및 최적화기 구동
        const result = AOTLaScriptOptimizer.compile(rawCode);

        // 결과 출력
        outputBox.innerText = 
`[1. 원본 소스 코드]
${result.raw}

[2. LaTeX 구문 분석 (Parsing)]
${result.parsed}

[3. AOT 최적화 (유한소수 판정 및 상수 접기 완료)]
${result.optimized}`;
    });

    // 다운로드 버튼
    btnDownload.addEventListener("click", () => {
        alert("AOT 컴파일된 C/LLVM 기계어 바이너리 파일(.exe / .bin) 다운로드를 요청합니다.");
    });
});
