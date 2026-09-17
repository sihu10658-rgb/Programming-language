// 나눗셈 및 유한소수 판정 전용 클래스
class DivisionOptimizer {
    static gcd(a, b) {
        return b === 0 ? Math.abs(a) : this.gcd(b, a % b);
    }

    // 분모 소인수분해 2^x * 5^y 판정법 (유한소수 여부 확인)
    static isTerminatingDecimal(denominator) {
        let d = Math.abs(denominator);
        if (d === 0) return false;

        while (d % 2 === 0) d /= 2;
        while (d % 5 === 0) d /= 5;

        return d === 1;
    }

    static optimizeFraction(numerator, denominator) {
        const num = parseFloat(numerator);
        const den = parseFloat(denominator);

        if (den === 0) return "CompileError(DivisionByZero)";

        const commonGcd = this.gcd(num, den);
        const simpNum = num / commonGcd;
        const simpDen = den / commonGcd;

        // 2^x * 5^y 판정 적용
        if (this.isTerminatingDecimal(simpDen)) {
            const result = simpNum / simpDen;
            console.log(`[AOT Opt] 유한소수 판정 통과: ${num}/${den} -> ${result}`);
            return result;
        } else {
            console.log(`[AOT Opt] 무한소수 판정: ${num}/${den} -> Fraction(${simpNum}, ${simpDen}) 보존`);
            return `Fraction(${simpNum}, ${simpDen})`;
        }
    }
}

// AOTLaScript 통합 컴파일 및 최적화 엔진
class AOTLaScriptOptimizer {
    
    // 1단계: LaTeX 수식 -> 표준 Math 표현식 파싱
    static parseLaTeX(code) {
        let parsed = code;

        // Math.\sqrt{x} -> Math.sqrt(x)
        parsed = parsed.replace(/Math\\sqrt\{([^}]+)\}/g, 'Math.sqrt($1)');

        // Math.x^{y} -> Math.pow(x, y)
        parsed = parsed.replace(/Math\.([a-zA-Z0-9_]+)\^{([^}]+)\}/g, 'Math.pow($1, $2)');

        return parsed;
    }

    // 2단계: AOT 핵심 - 상수 사전 연산 & 나눗셈 유한소수 최적화
    static optimize(code) {
        let optimized = code;

        // 1) Math.sqrt(상수) 최적화
        optimized = optimized.replace(/Math\.sqrt\(([0-9.]+)\)/g, (match, p1) => {
            return Math.sqrt(parseFloat(p1));
        });

        // 2) Math.pow(상수, 상수) 최적화
        optimized = optimized.replace(/Math\.pow\(([0-9.]+),\s*([0-9.]+)\)/g, (match, p1, p2) => {
            return Math.pow(parseFloat(p1), parseFloat(p2));
        });

        // 3) Math.\frac{a}{b} -> 2^x * 5^y 유한소수 판정 기반 AOT 최적화
        optimized = optimized.replace(/Math\\frac\{([0-9.]+)\}\{([0-9.]+)\}/g, (match, num, den) => {
            return DivisionOptimizer.optimizeFraction(num, den);
        });

        return optimized;
    }

    // 전체 파이프라인 컴파일 실행
    static compile(code) {
        const parsed = this.parseLaTeX(code);
        const optimized = this.optimize(parsed);

        return {
            raw: code,
            parsed: parsed,
            optimized: optimized
        };
    }
}
