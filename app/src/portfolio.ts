import type {
    AboutContent,
    CertificationItem,
    ContactContent,
    EducationItem,
    ExperienceItem,
    GreetingContent,
    PhotusContent,
    ProjectItem,
    SkillGroup,
} from "./types/sections";

const gh = "https://github.com/belforz";

const greeting: GreetingContent = {
    intro: "Olá, meu nome é",
    name: "Leandro Belfor",
    role: "Engenheiro de Software · NLP e Machine Learning",
    location: "São Paulo, SP",
    summary:
        "Desenvolvo soluções de IA generativa, NLP e arquiteturas conversacionais na Vivo (Telefônica Brasil): modelos baseados em Transformers, APIs e pipelines de inferência em produção.",
    portraitLink: "assets/red.png",
    resumeLink:
        "https://drive.google.com/file/d/18Sa6gTbvJ0hBPNPacZst_8GzI4GJFaw7/view?usp=sharing",
};

const socialMediaLinks = {
    github: gh,
    linkedin: "https://www.linkedin.com/in/leandro-belfor-ba3640143/",
    photography: "https://belforzphotography.vercel.app/",
};

const about: AboutContent = {
    paragraphs: [
        "Trabalho há mais de dois anos com tecnologia, hoje em NLP e ML voltados à experiência conversacional de chatbots: ajuste de modelos, otimização de inferência, APIs em Python e integração com canais corporativos.",
        "Meu TCC na FATEC Ipiranga é o Photus, um sistema de curadoria de fotografias que combina visão computacional em C++ com classificação semântica de linguagem natural. Fora do código: cinema e fotografia.",
    ],
    facts: [
        { label: "Atual", value: "Vivo (Telefônica Brasil), NLP/ML" },
        { label: "Formação", value: "ADS na FATEC Ipiranga, previsão 2027" },
        { label: "Foco", value: "NLP, LLMs, MLOps, APIs" },
        { label: "Idiomas", value: "Português nativo, inglês avançado, espanhol básico" },
    ],
    photos: ["assets/eufundo-web.jpg", "assets/eufundo3-web.jpg"],
};

const experiences: ExperienceItem[] = [
    {
        company: "Vivo (Telefônica Brasil)",
        location: "São Paulo, SP · Home office",
        period: "09/2024 – atual",
        roles: [
            {
                title: "Engenheiro de Software Júnior · NLP/ML",
                period: "06/2026 – atual",
                bullets: [
                    "Desenvolvo e ajusto modelos baseados em Transformers e otimizo pipelines de inferência: latência 25% menor e menos consumo computacional em produção.",
                    "Empacoto e automatizo o deploy de serviços com Docker e VMs em Linux, com CI/CD no Azure DevOps, revisão de código, versionamento de modelos com MLflow e controle de acesso.",
                ],
                stack: ["Python", "PyTorch", "Hugging Face", "spaCy", "NLTK", "FastAPI", "Docker", "MLflow", "Azure DevOps", "scikit-learn", "Pytest"],
            },
            {
                title: "Engenheiro de Software Júnior · Engenharia de IA",
                period: "01/2026 – 05/2026",
                bullets: [
                    "Construí e evoluí chatbots e agentes integrando plataformas de Call Center e sistemas legados a motores de NLP e IA generativa via APIs REST e webhooks: 5 milhões de interações por mês.",
                    "Garanti 99% de disponibilidade com monitoramento contínuo, análise de logs, testes automatizados e pipelines de CI/CD.",
                ],
                stack: ["Python", "Node.js", "TypeScript", "FastAPI", "Bot Framework", "LLMs", "Docker", "RabbitMQ", "Prometheus", "Grafana", "MongoDB"],
            },
            {
                title: "Desenvolvedor (Estagiário) · IA Generativa",
                period: "09/2024 – 12/2025",
                bullets: [
                    "Implementei e orquestrei LLMs com arquitetura RAG e engenharia de prompts para automação de atendimento em Call Center: tempo médio de atendimento 50% menor.",
                    "Refatorei microsserviços de IA para baixa latência em produção (30 ms em média) e conectei regras de negócio e bases de dados aos motores de inferência.",
                ],
                stack: ["Python", "LangChain", "LlamaIndex", "LiteLLM", "OpenAI API", "Hugging Face", "FastAPI", "Docker", "MongoDB"],
            },
        ],
    },
    {
        company: "R&M Administração",
        location: "São Paulo, SP · Híbrido",
        period: "05/2024",
        roles: [
            {
                title: "Desenvolvedor Freelancer",
                period: "05/2024",
                bullets: [
                    "Site institucional em PHP, JavaScript e CSS a partir de layouts minimalistas definidos pelo design, entregue em 4 semanas com páginas carregando em menos de 2 s.",
                ],
                stack: ["PHP", "JavaScript", "CSS"],
            },
        ],
    },
    {
        company: "Time Solutions Ltda",
        location: "Atibaia, SP · Remoto",
        period: "12/2023 – 03/2024",
        roles: [
            {
                title: "Desenvolvedor Freelancer",
                period: "12/2023 – 03/2024",
                bullets: [
                    "Planejei e estruturei landing pages para regularização de nome e cancelamento de CNPJ, com mascaramento de rotas e boas práticas de frontend.",
                ],
                stack: ["JavaScript", "HTML", "SCSS"],
            },
        ],
    },
];

const skills: SkillGroup[] = [
    { label: "Linguagens", items: ["Python", "Node.js", "TypeScript", "Go", "Java", "C++"] },
    { label: "Frameworks e bibliotecas", items: ["uv", "scikit-learn", "PyTorch", "Hugging Face", "React", "Next.js", "Vue.js", "FastAPI", "OpenCV"] },
    { label: "Inteligência artificial", items: ["IA generativa", "Engenharia de prompt", "Machine learning", "RAG", "LLMs", "NLP"] },
    { label: "Dados e BI", items: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB", "Power BI"] },
    { label: "APIs e versionamento", items: ["APIs REST", "Git", "GitHub", "GitHub Copilot"] },
    { label: "Infra e DevOps", items: ["Docker", "GitHub Actions", "CI/CD", "Linux", "Kubernetes", "Azure DevOps", "AKS"] },
];

const photus: PhotusContent = {
    title: "Photus",
    context: "TCC na FATEC Ipiranga",
    summary:
        "Curadoria de fotografias assistida por IA. O usuário envia um lote de fotos e descreve em linguagem natural a estética que procura; o sistema categoriza a frase, mede a qualidade técnica de cada foto e devolve as três melhores. Cada etapa é um serviço independente.",
    pipeline: ["Photus System", "Photus B", "Pré-processador", "Photus A", "Top 3"],
    parts: [
        {
            name: "Photus System",
            kind: "Front e orquestração",
            description:
                "Interface Gradio que orquestra o pipeline completo: envio das fotos e da frase, acompanhamento do lote, resultado e histórico.",
            bullets: [
                "Cadastro, login e perfil com sessão JWT no navegador.",
                "Monitor do lote, diagnóstico por foto, Top 3, histórico e exclusão.",
                "Consome Photus B e Photus UC por HTTP.",
            ],
            stack: ["Python", "Gradio", "uv", "Docker"],
            links: [{ label: "GitHub", url: `${gh}/photus-system` }],
        },
        {
            name: "Photus UC",
            kind: "Backend de casos de uso",
            description:
                "API que concentra as regras de negócio: contas de usuário, lotes de avaliação, execução do pipeline em segundo plano e seleção do Top 3.",
            bullets: [
                "Arquitetura hexagonal: domínio, casos de uso, portas e adaptadores.",
                "Auth com bcrypt e JWT; migrações com Alembic; Postgres em Docker.",
                "Pipeline plugável: binários locais ou serviço HTTP (Photus Engine). Mais de 100 testes automatizados.",
            ],
            stack: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "Pytest", "Docker"],
            links: [{ label: "GitHub", url: `${gh}/photus-uc` }],
        },
        {
            name: "Photus A",
            kind: "Avaliação de qualidade de imagem",
            description:
                "Modelo de avaliação técnica em C++17 e OpenCV: extrai métricas de cada foto e decide com Random Forest e regras de fronteira.",
            bullets: [
                "Nitidez, exposição, densidade de bordas, contraste, saturação e detecção de face (YuNet).",
                "Thresholds calibrados por âncora estética, com fallback global.",
                "Saída em JSON: status (Aprovado, Reprovado, Indefinido, Revisão humana), score e métricas.",
            ],
            stack: ["C++17", "OpenCV", "Random Forest", "CMake", "nlohmann/json"],
            links: [{ label: "GitHub", url: `${gh}/photus-a` }],
        },
        {
            name: "Photus B",
            kind: "API de linguagem",
            description:
                "Transformer adaptado à estética computacional: traduz a frase do usuário para a âncora semântica mais próxima.",
            bullets: [
                "Embeddings multilíngues (Sentence Transformers) comparados a um grafo de âncoras de conhecimento.",
                "Fallback para LLM somente quando a classificação não é confiável.",
                "POST /v1/categorize; modelo carregado uma única vez na inicialização.",
            ],
            stack: ["Python", "PyTorch", "Sentence Transformers", "FastAPI", "uv", "Docker"],
            links: [{ label: "GitHub", url: `${gh}/photus-b` }],
            image: "assets/photus-b-anchors.png",
            imageCaption: "Photus B · matriz de colisão das âncoras semânticas",
        },
        {
            name: "Pré-processador",
            kind: "Preparação de imagens",
            description:
                "Ferramenta em C++ que valida e prepara as fotos antes da avaliação, e também gera datasets para treino.",
            bullets: [
                "Validação de integridade e formato, correção de orientação EXIF, redimensionamento e compressão.",
                "Miniaturas, conversão de espaço de cor (cinza, HSV) e normalização.",
                "Metadados com hash SHA-256 e relatório em JSON.",
            ],
            stack: ["C++17", "OpenCV", "OpenSSL", "CMake"],
            links: [{ label: "GitHub", url: `${gh}/ai-pre-process-images` }],
        },
        {
            name: "Photus Engine",
            kind: "Serviço de execução",
            description:
                "Empacota Pré-processador e Photus A numa única imagem Docker e os expõe por HTTP, para o Photus UC chamar sem depender de binários locais.",
            bullets: [
                "POST /v1/evaluate recebe o lote e devolve status, score e métricas por foto.",
                "Build multi-stage em Release; scores idênticos aos do binário local.",
            ],
            stack: ["Python", "FastAPI", "Docker", "C++17"],
            links: [{ label: "GitHub", url: `${gh}/photus-engine` }],
        },
    ],
};

const research: ProjectItem = {
    name: "Pesquisa em NLP",
    year: "FATEC Ipiranga",
    description:
        "Experimentos sobre confusão semântica em grandes modelos de linguagem, sob orientação do Prof. Dr. Manoel Aranha.",
    stack: ["Python", "NLP"],
    links: [],
};

const works: ProjectItem[] = [
    research,
    {
        name: "Mini Leandro",
        year: "2025",
        description:
            "Agente conversacional com IA generativa que responde sobre mim, com intenções via NLP. É o chat deste site.",
        stack: ["Python", "Vue.js", "Redis", "MongoDB"],
        links: [{ label: "GitHub", url: `${gh}/mini-leandro-back-end` }],
        image: "assets/noovo.png",
        imageCaption: "Mini Leandro",
    },
    {
        name: "NLP Classification Module",
        year: "2025",
        description:
            "Módulo de NLP com análise de tendências, extração de entidades nomeadas, classificação de texto e pontuação por matrizes de risco.",
        stack: ["Sentence Transformers", "spaCy", "NLTK", "Hugging Face"],
        links: [{ label: "GitHub", url: `${gh}/classification-nlp` }],
        image: "assets/NLP.jpg",
        imageCaption: "NLP Classification Module",
    },
    {
        name: "NLP Semantics Module",
        year: "2025",
        description:
            "Pré-pesquisa de uma futura iniciação científica: similaridade semântica e agrupamento de textos com modelos de linguagem.",
        stack: ["Sentence Transformers", "NumPy", "Hugging Face", "Similaridade de cosseno"],
        links: [{ label: "GitHub", url: `${gh}/classification-nlp` }],
        image: "assets/image2.png",
        imageCaption: "NLP Semantics Module",
    },
    {
        name: "Loja de Vinis",
        year: "2025",
        description: "E-commerce de discos de vinil, com interface minimalista e responsiva.",
        stack: ["React", "TypeScript", "Java", "MongoDB"],
        links: [
            { label: "GitHub", url: `${gh}/v-disk-interface` },
            { label: "Site", url: "https://v-disk-interface.vercel.app/" },
        ],
        image: "assets/v-disk.png",
        imageCaption: "Loja de Vinis",
    },
    {
        name: "MusicSom",
        year: "2025",
        description:
            "Recomendação musical por características técnicas dos álbuns (instrumentos, BPM, vocais, atmosfera), sem depender de gênero ou artista.",
        stack: ["SQL", "BrModelo"],
        links: [{ label: "GitHub", url: `${gh}/projeto-musicsomj` }],
        image: "assets/musicsom.png",
        imageCaption: "MusicSom",
    },
    {
        name: "Buscador de imagens da NASA",
        year: "2025",
        description: "App React Native que busca imagens na API pública da NASA.",
        stack: ["React Native", "Node.js", "NASA API"],
        links: [{ label: "GitHub", url: `${gh}/prova_pdmn_oficial` }],
        image: "assets/horrivel.png",
        imageCaption: "Buscador de imagens da NASA",
    },
    {
        name: "Mini Photoshop",
        year: "2025",
        description: "Editor de imagens leve em C, com recorte, redimensionamento e ajuste de cores.",
        stack: ["C", "GTK"],
        links: [{ label: "GitHub", url: `${gh}/mini-photoshop-app` }],
        image: "assets/photoshopC.png",
        imageCaption: "Mini Photoshop",
    },
    {
        name: "Loja de Adoção de Pets",
        year: "2025",
        description: "Plataforma que conecta abrigos e adotantes de animais.",
        stack: ["Java", "Python", "Tkinter", "MySQL"],
        links: [{ label: "GitHub", url: `${gh}/doacao_animal_app` }],
        image: "assets/pets.jpg",
        imageCaption: "Loja de Adoção de Pets",
    },
    {
        name: "Fotografias",
        year: "2024",
        description: "Portfólio fotográfico pessoal.",
        stack: ["Vue.js", "Tailwind CSS"],
        links: [
            { label: "GitHub", url: `${gh}/portfoliophotos` },
            { label: "Site", url: "https://belforzphotography.vercel.app" },
        ],
        image: "assets/Photographies.png",
        imageCaption: "Fotografias",
    },
    {
        name: "R&M Administração",
        year: "2024",
        description: "Site institucional da empresa, com foco em UX.",
        stack: ["PHP", "JavaScript", "CSS"],
        links: [
            { label: "GitHub", url: `${gh}/rmadministracao` },
            { label: "Site", url: "https://remadministracao.com.br" },
        ],
        image: "assets/r&m.png",
        imageCaption: "R&M Administração",
    },
    {
        name: "BaixaCNPJ",
        year: "2024",
        description: "Site de venda para finalização de processos de CNPJ, com menos etapas.",
        stack: ["PHP", "JavaScript", "CSS"],
        links: [{ label: "GitHub", url: `${gh}/baixaCNPJ` }],
        image: "assets/baixacnpj.png",
        imageCaption: "BaixaCNPJ",
    },
    {
        name: "LimpaNome",
        year: "2024",
        description: "Interface mais direta para regularização de nome.",
        stack: ["PHP", "JavaScript", "CSS"],
        links: [{ label: "GitHub", url: `${gh}/LimpaNome` }],
        image: "assets/Zaion.png",
        imageCaption: "LimpaNome",
    },
    {
        name: "Obranet",
        year: "2024",
        description: "Gestão de clientes, funcionários e obras em Excel, com cadastro, edição, busca e exclusão.",
        stack: ["Excel", "VBA"],
        links: [{ label: "GitHub", url: `${gh}/projeto-final-pmi` }],
        image: "assets/obranet.png",
        imageCaption: "Obranet",
    },
    {
        name: "Bom Vizinho",
        year: "2023",
        description: "Aplicação web de serviços voluntários para idosos.",
        stack: ["Java", "PostgreSQL", "JavaScript", "Swagger"],
        links: [
            { label: "GitHub", url: `${gh}/voluntariado-site` },
            { label: "Site", url: "https://sistemas-bomvizinho.com.br" },
        ],
        image: "assets/BomVizinho.png",
        imageCaption: "Bom Vizinho",
    },
];

const education: EducationItem[] = [
    {
        title: "Tecnologia em Análise e Desenvolvimento de Sistemas",
        place: "FATEC Ipiranga · São Paulo, SP",
        period: "2024 – previsão 2027",
    },
    {
        title: "Técnico em Desenvolvimento de Sistemas",
        place: "ETEC (Centro Paula Souza) · São Paulo, SP",
        period: "2022 – 2023",
    },
];

const certifications: CertificationItem[] = [
    { title: "Stanford CME295: Transformers & LLMs", detail: "Curso online · 12 h", year: "2026" },
    { title: "As Linguagens de NLP", detail: "Curso online · 40 h", year: "2025" },
    { title: "SQL Language", detail: "Curso online · 72 h", year: "2023" },
];

const extras =
    "Voluntário na AISEC Brasil (Belém, PA), 2018: apoio a intercambistas em projetos sociais de educação para comunidades vulneráveis.";

const contact: ContactContent = {
    note: "Aberto a conversas sobre Machine Learning, NLP, Visao Computacional e IA Genrativa e projetos em time.",
    email: "macedobeiramar@hotmail.com",
    responseTime: "Respondo em até 24 horas.",
    links: [
        { label: "GitHub", url: socialMediaLinks.github },
        { label: "LinkedIn", url: socialMediaLinks.linkedin },
        { label: "Fotografia", url: socialMediaLinks.photography },
    ],
};

export default {
    greeting,
    socialMediaLinks,
    about,
    experiences,
    skills,
    photus,
    works,
    education,
    certifications,
    extras,
    contact,
    archiveLink: `${gh}?tab=repositories`,
};
