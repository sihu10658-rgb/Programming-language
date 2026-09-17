// 웹 페이지 클릭 및 네트워크 통신 전용 모듈
document.addEventListener("DOMContentLoaded", () => {
    const codeInput = document.getElementById("code-input");
    const outputBox = document.getElementById("output-box");
    const btnRun = document.getElementById("btn-run");
    const btnDownload = document.getElementById("btn-download");

    // 실행하기 버튼 클릭
    btnRun.addEventListener("click", () => {
        const rawCode = codeInput.value;
        if (!rawCode.trim()) {
            outputBox.innerText = "⚠️ 코드를 입력해주세요!";
            return;
        }

        // 1. latex_math.js의 파서 호출
        const compiledCode = AOTLaScriptParser.parse(rawCode);

        // 2. 결과 출력 (실제 운영 시 컴파일 백엔드로 전송)
        outputBox.innerText = `[AOT 컴파일 최적화 완료]\n변환된 코드:\n${compiledCode}`;
    });

    // 다운로드 버튼 클릭
    btnDownload.addEventListener("click", () => {
        alert("최적화된 AOT 실행 파일(.exe/.bin) 다운로드를 요청합니다.");
    });
});
