// 다운로드 버튼 클릭 시 aotla.exe 다운로드
document.getElementById('btn-download').addEventListener('click', () => {
    // 저장소의 bin/aotla.exe 또는 Releases 파일 주소
    const downloadUrl = "https://github.com/sihu10658-rgb/Programming-language/raw/main/bin/aotla.exe";
    
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = "aotla.exe";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
