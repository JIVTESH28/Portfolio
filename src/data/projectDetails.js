export const PROJECT_DETAILS = {
  docarmor: {
    slug: 'docarmor',
    title: 'DocArmor',
    subtitle: 'High-Throughput Pre-LLM Security & Document Ingestion Engine',
    category: 'System Architecture · Security · Open Source',
    heroImage: '/docarmor.jpg',
    badge: '4,000+ PyPI Installs',
    github: 'https://github.com/JIVTESH28/docarmor',
    pypi: 'https://pypi.org/project/docarmor/',
    overview:
      'DocArmor is an independent open-source security engine engineered in Rust with PyO3 native bindings. It acts as a defensive pre-guard sitting between raw untrusted enterprise documents and LLMs or autonomous agents, mitigating prompt injection, zip bombs, data poisoning, and PII leakage before data reaches model inference.',
    problem:
      'Enterprise LLM pipelines routinely ingest untrusted external files (PDFs, DOCX, Spreadsheets, HTML). Without an isolated pre-execution guard, systems are vulnerable to catastrophic memory exhaustion from decompression bombs, confidential data exfiltration via unmasked PII, and exorbitant API token costs from corrupt or redundant documents.',
    architecture: [
      {
        phase: '01. Zero-Allocation Security Barrier',
        detail:
          'Validates compression ratios before extraction. Rejects nested archives exceeding depth thresholds, detects byte corruption, and prevents denial-of-service payloads from ever touching system RAM.'
      },
      {
        phase: '02. Native Multi-Format Parsing Core',
        detail:
          'Utilizes memory-efficient Rust parsers for PDF, DOCX, XLSX, TXT, JSON, and HTML. Converts multi-table spreadsheets and rich documents into pristine structured markdown while maintaining spatial context.'
      },
      {
        phase: '03. Zero-Leakage PII Scrubbing',
        detail:
          'Executes vectorized regular expressions and named-entity redaction to identify and mask credit cards, social security numbers, emails, and API keys with sub-millisecond execution times.'
      },
      {
        phase: '04. Deterministic Token & Budget Estimation',
        detail:
          'Runs tiktoken-rs to compute exact model token footprints across context windows (GPT-4o, Claude 3.5, Gemini 1.5) prior to dispatch, preventing context-overflow errors and unpredictable billing.'
      },
      {
        phase: '05. Rayon Multi-Core Concurrency',
        detail:
          'Saturates available CPU cores using Rayon work-stealing parallelism. Bypasses the Python Global Interpreter Lock (GIL) via PyO3, achieving up to 14x faster batch extraction compared to native Python implementations.'
      },
      {
        phase: '06. Model Context Protocol (MCP) Integration',
        detail:
          'Exposes tools natively over the standard MCP protocol, allowing agents in Claude Desktop, Cursor, or custom multi-agent swarms to safely inspect and extract documents via remote procedure calls.'
      }
    ],
    techStack: [
      'Rust (Edition 2021)',
      'PyO3 Native Python Bindings',
      'Rayon (Work-Stealing Parallelism)',
      'tiktoken-rs (Tokenization)',
      'Model Context Protocol (MCP Server)',
      'PyPI Distribution Package'
    ],
    metrics: [
      { label: 'Community Adoption', value: '4,000+ Downloads' },
      { label: 'Decompression Defense', value: '100% Protection' },
      { label: 'Token Estimation Speed', value: '< 2ms / 10k tokens' },
      { label: 'Multi-Core Speedup', value: '14x Over Pure Python' }
    ]
  },

  arsenal: {
    slug: 'arsenal',
    title: 'ARSENAL — AI Personal Assistant',
    subtitle: 'Human-like Conversational Intelligence & Real-Time Voice Agent',
    category: 'Autonomous Agents · Speech Intelligence · Multi-Modal',
    heroImage: '/arsenal.jpg',
    badge: 'Real-Time Voice Agent',
    github: 'https://github.com/JIVTESH28',
    overview:
      'ARSENAL is an autonomous personal AI assistant built for fluid, bi-directional conversational interaction and intelligent task execution. It bridges ultra-low-latency audio transport with multimodal reasoning models, orchestrating multi-step actions across workspaces in sub-second voice latency.',
    problem:
      'Traditional voice assistants are rigid, command-based, and suffer from high turn-taking delays. Users require human-like conversation that can handle interruptions, preserve long-term context, and orchestrate complex real-world actions across connected services without synthetic robotic speech.',
    architecture: [
      {
        phase: '01. Sub-Second Real-Time Audio Transport',
        detail:
          'Integrated LiveKit WebRTC audio rooms with client-side Voice Activity Detection (VAD). Streams raw microphone frames directly to speech-to-text engines with zero buffer delay, enabling natural speech interruptions.'
      },
      {
        phase: '02. Multi-Modal Contextual Reasoning',
        detail:
          'Employs Google Gemini and high-throughput LLM pipelines to interpret user intent, extract structured parameters, and generate conversational responses with dynamic cadence and emotion.'
      },
      {
        phase: '03. Agentic Tool Orchestration',
        detail:
          'Constructed using LangChain to route intents to specific tool executors (calendar scheduling, codebase queries, system telemetry, email drafting) through dynamic function calling.'
      },
      {
        phase: '04. Natural Audio Synthesis',
        detail:
          'Synthesizes neural audio via low-latency streaming TTS endpoints, buffering audio chunks in parallel with LLM token generation for instant playback.'
      }
    ],
    techStack: [
      'LiveKit (WebRTC Audio Rooms)',
      'Google Gemini (Multimodal LLM)',
      'LangChain (Agentic Orchestration)',
      'Google STT / Neural TTS',
      'Python',
      'Voice Activity Detection (VAD)'
    ],
    metrics: [
      { label: 'Voice Turnaround Latency', value: '< 850ms End-to-End' },
      { label: 'Interruption Handling', value: 'Real-Time VAD' },
      { label: 'Action Success Rate', value: '98% Tool Execution' }
    ]
  },

  'attendance-ai': {
    slug: 'attendance-ai',
    title: 'AI Attendance & Face Recognition',
    subtitle: 'Biometric Registration with Vector Similarity Search & Semantic RAG Q&A',
    category: 'Computer Vision · Vector Databases · Semantic Search',
    heroImage: '/facerec.jpg',
    badge: 'Vector DB + Vision',
    github: 'https://github.com/JIVTESH28',
    overview:
      'A production-grade biometric attendance and anomaly auditing platform utilizing deep facial embeddings, sub-millisecond vector indexing in Qdrant, and an interactive natural language query interface powered by LangChain.',
    problem:
      'Manual and legacy biometric systems suffer from slow lookups during peak shift hours, inaccurate recognition in varying lighting, and a total lack of natural language querying for audit logs and attendance anomalies.',
    architecture: [
      {
        phase: '01. Real-Time Facial Feature Extraction',
        detail:
          'Utilizes OpenCV and PyTorch deep neural models to detect faces, extract 512-dimensional facial embeddings, and perform quality checks on sharpness, pose angle, and lighting.'
      },
      {
        phase: '02. Sub-Millisecond Vector Search in Qdrant',
        detail:
          'Stores high-dimensional facial vectors in Qdrant Vector Database with HNSW indexing. Executes sub-millisecond similarity matching against thousands of enrolled records with cosine similarity thresholds.'
      },
      {
        phase: '03. Conversational Attendance Intelligence',
        detail:
          'Integrated LangChain RAG pipeline allowing HR managers to query logs naturally: "Who arrived late on Tuesday in Section B?" or "Show attendance variance for team engineering."'
      }
    ],
    techStack: [
      'Python',
      'OpenCV (Computer Vision)',
      'Qdrant Vector Database',
      'PyTorch (Deep Embeddings)',
      'LangChain (RAG Q&A)',
      'FastAPI'
    ],
    metrics: [
      { label: 'Search Latency', value: '< 15ms in Qdrant' },
      { label: 'Recognition Accuracy', value: '99.4% Verification' },
      { label: 'Natural Language Query', value: 'Full RAG Support' }
    ]
  }
};
