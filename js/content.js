window.portfolioData = {
  profile: {
    name: 'Aashika Suresh',
    role: 'AI Engineer • FullStack Developer',
    location: 'Germany',
    intro: 'I’m an engineer working across AI, backend and full-stack development. My experience spans LLM based systems, backend services and APIs, databases and web applications. I especially enjoy working across multdisciplinary teams to build AI systems and applications that solve problems!'
  },
  skills: [
    {
      title: 'Languages',
      tools: ['Python', 'Java', 'C++', 'C', 'JavaScript', 'CSS', 'SQL', 'R']
    },
    {
      title: 'Backend & Full Stack',
      tools: ['REST APIs', 'Flask', 'Django', 'MySQL', 'React', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'Node.js']
    },
    {
      title: 'AI & LLM Engineering',
      tools: ['RAG', 'LangChain', 'LlamaIndex', 'Fine-Tuning', 'Prompt Engineering', 'OpenAI', 'Claude', 'Llama 3 / 3.1', 'Mistral AI', 'TruLens', 'Vector Databases', 'ChromaDB']
    },
    {
      title: 'Tools',
      tools: ['Docker', 'CI/CD', 'Git', 'Kubernetes', 'Bitbucket', 'Jira']
    }
  ],
  experience: [
    {
      period: 'Jul 2025 – Jul 2026',
      title: 'AI Engineer',
      company: 'Jülich Supercomputing Center, Jülich, Germany',
      description: 'Developed an automated LLM-based framework in CubeGUI for diagnosing and analyzing HPC load imbalance using structured performance metrics and token-efficient prompt engineering.',
      bullets: ['Designed AI reasoning pipelines for root-cause analysis of performance bottlenecks.', 'Built synthetic load imbalance simulations using parallel programming techniques for evaluation and benchmarking.', 'Worked with HPC profiling and performance-analysis tooling in a large-scale computing environment.']
    },
    {
      period: 'May 2024 – Nov 2024',
      title: 'GenAI Engineer',
      company: 'Fraunhofer IEM, Paderborn, Germany',
      description: 'Developed an AI-based search strategy to identify technologies for technical scouting.',
      bullets: ['Built Python backend services with LlamaIndex and LangChain for RAG-based LLM search.', 'Integrated OpenAlex and OpenWebUI with various LLMs.', 'Used MongoDB and ChromaDB for storage, retrieval and vector embedding workflows.', 'Created Figma mockups and Draw.io architecture workflows alongside React front-end development.']
    },
    {
      period: 'Dec 2020 – Jul 2022',
      title: 'Associate Software Engineer',
      company: 'Capgemini, Bangalore, India',
      description: 'Delivered scalable backend services and REST APIs for the web based Cisco network planner tool in an Agile environment.',
      bullets: ['Worked on a live network import tool with API optimization, data processing and integration services in a Git-based collaboration.', 'Contributed to code testing and UI development.']
    },
    {
      period: 'Mar 2020 – May 2020',
      title: 'Managerial Intern',
      company: 'emids Technologies, Bangalore, India',
      description: 'Assisted in UI wireframing and frontend mockup design, while exploring deep learning and AI-based application concepts.',
      bullets: []
    }
  ],
  education: [
    {
      period: '2023 – 2026',
      title: 'MSc. in Computer Science',
      institution: 'Paderborn University, Paderborn, Germany',
      description: 'Relevant areas include: Intelligent Systems, LLM applications and Software Engineering.',
      bullets: ['Project Experience: AI for Systems Engineering in collaboration with Fraunhofer IEM (10-2023 – 09-2024). LLM based Systems Engineering Maturity Planning of ASPICE Model and Rating Methods.']
    },
    {
      period: '2016 – 2020',
      title: 'Bachelor of Engineering in Information Science and Engineering',
      institution: 'New Horizon College of Engineering, Bangalore, India',
      description: 'Thesis: Developed an IoT and ML-integrated solar-powered smart vacuum cleaner system.',
      bullets: ['Built reinforcement-learning-based workflows and co-authored a paper on the topic.']
    }
  ],
  languages: {
    title: 'Language skills',
    items: [
      { name: 'English', level: 'C2/Bilingual' },
      { name: 'German', level: 'A2' }
    ]
  },
  projects: [
    {
      // icon: ['LLM', 'Prompt Engineering', 'HPC'],
      title: 'LLM in CubeGUI for HPC Performance Analysis',
      description: 'Created an automated reasoning framework that interprets structured high-performance data to identify load imbalances and summarize its likely root-cause.'
      // tags: ['Python', 'LLM', 'HPC', 'Prompt Engineering']
    },
    {
      //icon: ['GenAI', 'Search'],
      title: 'Credit Score Predictor',
      description: 'Developed a machine learning-based credit scoring system that predicts customer credit scores from behavioral and financial data. The system uses a compact set of interpretable features and compares customers with historical profiles to support credit evaluation.'
      // tags: ['LangChain', 'LlamaIndex', 'OpenAI', 'MongoDB']
    }
  ]
};
