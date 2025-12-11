// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba",
    textSub: "#FF0000",
    textSubUnline: "#0FFF50"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Olá, meu nome é",
    name: "Leandro Belfor",
    message: "Sou estudande de Análise e Desenvolvimento de Sistemas, cai de paraquedas nesse mundo digital e olha que até que meu pouso foi bem, que tal conhecer-lo?",
    basedLocation: "São Paulo, SP",
    resumeLink: "https://drive.google.com/file/d/1Vse_fBm4BNYFDmmWuHdPVZCVyq1zQG50/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        // link: "images/logo1.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/eufundo3.png'
}

const socialMediaLinks = {
    github: "https://github.com/belforz",
    linkedin: "https://www.linkedin.com/in/leandro-belfor-ba3640143/",
    photography: "https://belforzphotography.vercel.app/"
    // medium: "https://medium.com/@mimaishel",
    // stackoverflow: "",
    // xtwitter: "https://twitter.com/mimaishel"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "Uma paixão por códigos, letras e problemas seja em Python, JavaScript e outras. ",
        "Responsável, comunicativo, proativo, conciso nas palavras e amante de cinema viu? Estou estudando e trabalhando dentro do mundo do Desenvolvimento por mais de 1 ano e meio, atualmente estou na busca de um estágio ou vaga junior que adentre no mundo da Tecnologia."
    ], // Separated items are paragraphs
    techStack: [
        "Python",
        "Java",
        "JavaScript",
        "Frameworks JS",
        "SQL Language",
        "No-SQL"
    ],
    photo1Link: "images/azul.jpg",
    photo2Link: "images/azul2.jpg",


}

const iconsImages = {
    userImage: "/user-me.png",
    botImage: "/bot-me-vegeta.png",
}

// --💪🤝--- Skills Section ---


const skills = {
    hardSkills: [
        "JavaScript",
        "HTML",
        "CSS",
        "Python",
        "React",
        "ReactNative",
        "Vue.js",
        "Node,js",
        "PHP",
        "Java",
        "Noções de C & C++ & Ruby",
        "Springboot",
        "IntelliJeA",
        "Android Studio",
        "SQL Language",
        "No-SQL",
        "Ingles",
        "Espanhol"
    ], softSkills: [
        "Sociabilidade",
        "Comunicação",
        "Trabalho em Grupo",
        "Inovação",
        "Curiosidade",
        "Proatividade"
    ]
}

// --- 🛡️ Experience Section ---
const experiences = [

    {
        position: "Estágiario em Inteligência Artificial",
        company: {
            name: "Vivo(Telefônica Brasil).",

        },
        duration: "Set 2024 - (Atualmente)",
        bulletPoints: [
            "Manuntenção e Ampliação de Novos Negócios envolvendo Inteligência Artificial",
            "Comunicando-se com tecnologias como Python, Node.js, React e outras",
            "Integração com diversas áreas dentro da Vivo, aplica-se comunicação de áreas e versionamento de projetos"
        ],
        hashtags: [
            "JavaScript",
            "React",
            "Node.js",
            "Argo",
            "Python", "Docker", "Postman", "Github"


        ]
    },

    {
        position: "Técnico em Infraestrutura de Redes Freelancer",
        company: {
            name: "iT Solutions Zona Sul.",

        },
        duration: "Jun 2024 - Set 2024",
        bulletPoints: [
            "Manuseamento de cabos na rede fixa/portable;",
            " Manutenção de redes físicas e virtuais, além de teste pós vendas",

        ],
        hashtags: [
            "Redes",
            "Cabeamentos",
            "Protocolos",
            "Manunteção",



        ]
    },

    {
        position: "Desenvolvedor Freelancer",
        company: {
            name: "Grupo R&M Administração.",

        },
        duration: "Mai 2024 - Mai 2024",
        bulletPoints: [
            "Construção e Desenvolvimento de um site que atualiza a nova imagem e estrutura da empresa",
            "De acordo com os designs elaborados, com seu aspectos minimalistas",
            "Através de tecnologias como PHP, JS e CSS."
        ],
        hashtags: [
            "PHP",
            "locaweb",
            "JS",
            "CSS",
            "HTML",

        ]
    },
    {
        position: "Desenvolvedor Freelancer",
        company: {
            name: "Time Solutions LTDA.",

        },
        duration: "Dez 2023 - Março 2024",
        bulletPoints: [
            "Planejamento e Estruturação de sites para a limpeza de nome de pessoas em inadimplência com utilização de tecnologia JavaScript, HTML e CSS com mascaramento de rotas além de um serviço para o cancelamentode CPNJ, seguindo as boas práticas do mercado.",
            "Estilo em landing page ecom utilização das tecnologias SCSS, JavaScript e HTML",
            "Hospedagem de contéudo e UX Design"
        ],
        hashtags: [
            "Laravel",
            "PHP",
            "JavaScript",
            "Vue.js",
            "HTML",

        ]
    },
    {
        position: "Garçom",
        company: {
            name: "AGA CARNEIRO RESTAURANTE",
        },
        duration: "Jun 2022 - Maio 2024",
        bulletPoints: [
            "Atendimento ao Cliente, Recepção",
            "Comunicação em Inglês para Estrangeiros.",
        ],
        hashtags: [
            "Inglês",
            "Comunicação",
            "Trabalho em Grupo",
            "Dinâmica Social"
        ]
    }, {
        position: "Garçom",
        company: {
            name: "Madero Industria & Comércio",
        },
        duration: "Dez 2019 - Fev 2022",
        bulletPoints: [
            "Atendimento ao Cliente, Recepção",
            "Comunicação em Inglês para Estrangeiros.",
        ],
        hashtags: [
            "Inglês",
            "Comunicação",
            "Trabalho em Grupo",
            "Dinâmica Social"
        ]
    },

    {
        position: "Assistente",
        company: {
            name: "AISEC no Brasil",
        },
        duration: "Ago 2018 - Dez 2018",
        bulletPoints: [
            "Acompanhamento de intercambistas na região de Belém",
            "Lidar com suas rotinas nos projetos sociais da cidade",
            "Uso continuo do Inglês para sua sustenção"
        ],
        hashtags: [
            "Inglês",
            "Comunicação",
            "Trabalho em Grupo",
            "Dinâmica Social"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Mini Leandro",
        yearCompleted: "2025",
        "description": "🤖 Mini Leandro é um agente inteligente desenvolvido para interagir de forma natural e dinâmica, utilizando IA generativa. Com um design minimalista e responsivo, ele combina Vue.js e Python para oferecer conversas fluidas e personalizadas. Ele evoluiu para atender intenções através de NLP e agir de maneira independente.",
        techStack: "Generative AI, Python, Vue.js, Redis, Mongo",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/mini-leandro-back-end"
            }
        ],
        imageLink: "images/noovo.png",
        alignLeft: true,
        isImportant: false
    },
      {
        projectName: "MusicSom",
        yearCompleted: "2025",
        "description": "🎧 Musicsom é um sistema inteligente de recomendação musical criado para estimular descobertas fora da zona de conforto. Focado nas características técnicas e sensoriais dos álbuns, ele permite que o usuário escolha o que deseja ouvir com base em instrumentos, BPM, vocais e atmosfera — sem depender de gênero ou artista. o Musicsom é o seu curador musical técnico e personalizado. 🎶",
        techStack: "SQL, BrModel",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/projeto-musicsomj"
            }
        ],
        imageLink: "images/musicsom.png",
        alignLeft: false,
        isImportant: false
    },

    {
        projectName: "Obranet",
        yearCompleted: "2024",
        description: "🚧 Gestor de Obras: Projeto acadêmico que automatiza a gestão de clientes, funcionários e obras no Excel. Com cadastro, edição, pesquisa e exclusão, une teoria e prática para simplificar processos.",
        techStack: "Excel, Visual Basic Application (VBA)",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/projeto-final-pmi"
            }
        ],
        imageLink: "images/obranet.png",
        alignLeft: true,
        isImportant: false
    },
    {
        projectName: "Fotografias",
        yearCompleted: "2024",
        description: "Um olhar fotogênico e criativo sobre o mundo, este projeto visa atender a um almejo pessoal que inspira os meus conhecimentos técnicos dentro do mundo da Tecnologia",
        techStack: "JavaScript, Vue.js, TailwindCSS",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/portfoliophotos"
            },
            {
                label: "Website",
                type: "external",
                url: "https://belforzphotography.vercel.app"
            }
        ],
        imageLink: "images/Photographies.png",
        alignLeft: false,
        isImportant: false
    },
    {
        projectName: "R&M Administração",
        yearCompleted: "2024",
        description: "Com seus aspectos minimalistas, através de tecnologias como PHP, JS e CSS, uma atualização do site da empresa envolvendo práticas de UX design",
        techStack: "JavaScript, CSS, HTML & PHP",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/rmadministracao"
            },
            {
                label: "Website",
                type: "external",
                url: "https://remadministracao.com.br"
            }
        ],
        imageLink: "images/r&m.png",
        alignLeft: true,
        isImportant: false
    },
    {
        projectName: "BaixaCNPJ",
        yearCompleted: "2024",
        description: "Site de venda para a finalização de processos de CNPJ, diminuindo etapas com a utilização de UX design para atração de público.",
        techStack: "JavaScript, CSS, HTML & PHP",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/baixaCNPJ"
            }
        ],
        imageLink: "images/baixacnpj.png",
        alignLeft: false,
        isImportant: false
    },
    {
        projectName: "LimpaNome",
        yearCompleted: "2024",
        description: "Uma interface mais atraente para a limpeza de nome, abreviando processos.",
        techStack: "PHP, HTML, CSS, JS",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/LimpaNome"
            }
        ],
        imageLink: "images/Zaion.png",
        alignLeft: true,
        isImportant: false
    },
    {
        projectName: "Bom Vizinho",
        yearCompleted: "2023",
        description: "Um web aplicativo de serviços voluntários para idosos.",
        techStack: "HTML, CSS, JS, Java, PostgreSQL, Vercel, SwaggerUi",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/belforz/voluntariado-site"
            },
            {
                label: "Website",
                type: "external",
                url: "https://sistemas-bomvizinho.com.br"
            }
        ],
        imageLink: "images/BomVizinho.png",
        alignLeft: false,
        isImportant: true
    }
];


const archiveLink = "https://github.com/belforz?tab=repositories"

// --- 📭 Contact Section ---

const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Atualmente no estágio dentro da Vivo(Telefônica Brasil)",
            "Estou aberto para joint adventures e projetos em time. "
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "macedobeiramar@hotmail.com", // email takes precedance

        },
        responseTimeMessage: "... e eu vou lhe responder em 24 horas"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact, skills, iconsImages

}