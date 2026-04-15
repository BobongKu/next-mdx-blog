export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  github: string;
  tags: string[];
  highlights: string[];
  relatedPost?: { title: string; href: string };
}

export const TOOLS_DATA: Tool[] = [
  {
    slug: 'ghidra-agent-mcp',
    name: 'ghidra-agent-mcp',
    tagline: 'Ghidra를 Docker headless로 띄우고 MCP로 래핑한 크로스 바이너리 분석 도구',
    github: 'https://github.com/BobongKu/ghidra-agent-mcp',
    tags: [
      'MCP',
      'Ghidra',
      'Docker',
      'Reverse Engineering',
      'Binary Analysis',
      'Python',
    ],
    highlights: [
      'Docker headless Ghidra + FastAPI HTTP 브리지',
      '로드된 모든 프로그램에 걸친 크로스 바이너리 xref / deps_trace / callgraph_path',
      '40+개 분석 도구를 /schema 기반으로 MCP에 동적 등록',
      'path-return 패턴으로 대형 응답(수백 KB)도 1KB 미만 요약 반환',
      'QMD 결합 시 저장된 JSON을 의미 검색 대상으로 재활용',
    ],
    relatedPost: {
      title: 'ghidra-agent-mcp — LLM으로 하는 크로스 바이너리 의존성 탐색',
      href: '/post/development/ghidra_mcp_path_return',
    },
  },
  {
    slug: 'nodriver-proxy-mcp',
    name: 'nodriver-proxy-mcp',
    tagline: 'Chrome(nodriver) + mitmproxy를 MCP로 묶은 웹 펜테스팅 자동화 도구',
    github: 'https://github.com/BobongKu/nodriver-proxy-mcp',
    tags: [
      'MCP',
      'Web Pentesting',
      'Chrome DevTools',
      'mitmproxy',
      'nodriver',
      'Python',
    ],
    highlights: [
      'Cloudflare·DataDome 등 봇 탐지 우회 Chrome 세션',
      '프록시 트래픽 캡처 + 키워드·도메인·메서드·상태코드로 검색',
      '캡처된 플로우를 변수 치환해 Burp Repeater처럼 리플레이',
      '브라우저 CDP Fetch API로 헤더 인젝션·CSP 우회·응답 변조',
      '샌드박스 Python 실행 (`execute_security_code`) 으로 TOCTOU·블라인드 SQLi 같은 커스텀 PoC 체이닝',
    ],
  },
];
