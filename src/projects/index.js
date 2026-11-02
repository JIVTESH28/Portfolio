export const PROJECTS = [
  {
    id: "docarmor",
    title: "DocArmor",
    badge: "Open Source · 4,000+ PyPI Users",
    role: "Core Author & Maintainer",
    tagline: "Pre-LLM document ingestion & execution engine with zip-bomb protection and zero-leakage PII sanitization.",
    description:
      "A high-throughput, Rust-powered, PyO3-bound engine engineered to sanitize, inspect, and route untrusted documents prior to LLM/agent consumption. Implemented parallel extraction using Rayon work-stealing, deterministic token cost models with tiktoken-rs, and exposed native MCP tool runtimes for autonomous agents.",
    technologies: ["Rust", "Python", "PyO3", "Rayon", "tiktoken-rs", "MCP Runtime"],
    link: "https://github.com/JIVTESH28/docarmor",
    image: "/docarmor.jpg",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#06b6d4",
    stats: [
      { label: "Community", value: "4,000+ Installs" },
      { label: "Language", value: "Rust + PyO3" },
      { label: "Protocol", value: "Model Context Protocol (MCP)" }
    ]
  },
  {
    id: "arsenal",
    title: "ARSENAL — AI Personal Assistant",
    badge: "Autonomous Voice Agent",
    role: "Lead Architect",
    tagline: "Human-like conversational intelligence with real-time multi-tool intent orchestration.",
    description:
      "Engineered an autonomous voice agent capable of executing complex real-world workflows in sub-second latency. Integrates LiveKit real-time audio rooms with Gemini multi-modal reasoning and LangChain orchestration pipelines for bi-directional voice, task automation, and ambient workspace control.",
    technologies: ["LiveKit", "Google Gemini", "LangChain", "STT/TTS", "Python"],
    link: "https://github.com/JIVTESH28",
    image: "/arsenal.jpg",
    gradient: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    accentColor: "#8b5cf6",
    stats: [
      { label: "Latency", value: "Sub-second Voice" },
      { label: "Pipeline", value: "LiveKit + Gemini" },
      { label: "Orchestration", value: "LangChain" }
    ]
  },
  {
    id: "face-rec",
    title: "AI Attendance & Face Recognition",
    badge: "Computer Vision & Vector DB",
    role: "System Engineer",
    tagline: "Enterprise real-time face registration with sub-millisecond Qdrant vector semantic search.",
    description:
      "Designed an automated biometric tracking and audit system utilizing deep facial embeddings and vector similarity indexing in Qdrant. Paired with an interactive semantic natural language Q&A interface via LangChain to query complex attendance timelines, anomaly logs, and aggregated shift metrics.",
    technologies: ["Python", "OpenCV", "Qdrant Vector DB", "LangChain", "PyTorch"],
    link: "https://github.com/JIVTESH28",
    image: "/facerec.jpg",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#10b981",
    stats: [
      { label: "Index Engine", value: "Qdrant Vector DB" },
      { label: "Vision", value: "OpenCV Embeddings" },
      { label: "Interface", value: "Semantic RAG Q&A" }
    ]
  }
];