// LaTeX 및 Math 수식을 C/AOT 실행 코드로 변환하는 전용 모듈
class AOTLaScriptParser {
    static parse(code) {
        console.log("[Parser] 입력된 코드 분석 시작:", code);
        
        let parsedCode = code;

        // 1. Math.\sqrt{x} -> Math.sqrt(x) 변환
        parsedCode = parsedCode.replace(/Math\\sqrt\{([^}]+)\}/g, 'Math.sqrt($1)');

        // 2. Math.\frac{a}{b} -> ((a) / (b)) 변환
        parsedCode = parsedCode.replace(/Math\\frac\{([^}]+)\}\{([^}]+)\}/g, '(($1) / ($2))');

        // 3. Math.x^{y} -> Math.pow(x, y) 변환
        parsedCode = parsedCode.replace(/Math\.([a-zA-Z0-9_]+)\^{([^}]+)\}/g, 'Math.pow($1, $2)');

        console.log("[Parser] 파싱 완료된 코드:", parsedCode);
        return parsedCode;
    }
}
