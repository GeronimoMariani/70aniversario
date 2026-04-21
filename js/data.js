// ============================================
// DATOS DEL SITIO
// ============================================

const timelineData = [
    {
        year: 1956,
        title: "Fundación del Cuartel",
        description: "Nace la Sociedad de Bomberos Voluntarios de Colón en el Mercado Municipal, bajo la visión de José Picapietra."
    },
    {
        year: 1957,
        title: "Primer Equipo",
        description: "Se adquiere el primer equipo de bomberos, apodado 'Pobrecito Morris', que sirve fielmente al cuartel."
    },
    {
        year: 1965,
        title: "Expansión de Servicios",
        description: "Se amplían los servicios de rescate y se incorporan nuevas técnicas de intervención."
    },
    {
        year: 1980,
        title: "Modernización",
        description: "Se moderniza el cuartel con nuevos equipos y tecnología de última generación."
    },
    {
        year: 1995,
        title: "50º Aniversario",
        description: "Se celebra el 50º aniversario con una gran ceremonia comunitaria."
    },
    {
        year: 2000,
        title: "Nuevo Cuartel",
        description: "Se inaugura la nueva sede del cuartel con instalaciones modernas."
    },
    {
        year: 2010,
        title: "Capacitación Avanzada",
        description: "Se implementan programas de capacitación avanzada en rescate y emergencias."
    },
    {
        year: 2020,
        title: "Pandemia - Servicio Continuo",
        description: "Durante la pandemia, el cuartel continúa prestando servicios esenciales a la comunidad."
    },
    {
        year: 2024,
        title: "Modernización Tecnológica",
        description: "Se incorporan sistemas de comunicación y monitoreo de última generación."
    },
    {
        year: 2026,
        title: "70º Aniversario",
        description: "Se celebra el 70º aniversario de servicio continuo a la comunidad de Colón."
    }
];

const galleryData = [
    {
        image: "https://i.ibb.co/gnrYM6F/20260415-154236.jpg"
    },
    {
        image: "https://i.ibb.co/xKfLJ9X7/20260415-152348.jpg"
    },
    {
        image: "https://i.ibb.co/v67ZqpZZ/20260415-152416.jpg"
    },
    {
        image: "https://i.ibb.co/FL107nss/20260415-153253.jpg"
    },
    {
        image: "https://i.ibb.co/991vR3RG/20260415-153338.jpg"
    },
    {
        image: "https://i.ibb.co/tMPDNpQG/20260415-153445.jpg"
    }
];

const valuesData = [
    {
        title: "Valor",
        description: "Enfrentamos cada situación con coraje y determinación, sin importar el riesgo personal.",
        icon: "🛡️"
    },
    {
        title: "Compromiso",
        description: "Nos comprometemos con la comunidad a estar siempre disponibles en caso de emergencia.",
        icon: "🤝"
    },
    {
        title: "Profesionalismo",
        description: "Mantenemos los más altos estándares de capacitación y excelencia en nuestro trabajo.",
        icon: "⚙️"
    },
    {
        title: "Voluntad",
        description: "Actuamos con voluntad de servicio, dedicando nuestro tiempo y energía al bien común.",
        icon: "💪"
    },
    {
        title: "Solidaridad",
        description: "Trabajamos en equipo, apoyándonos mutuamente para lograr nuestros objetivos.",
        icon: "🤲"
    },
    {
        title: "Entrega",
        description: "Nos entregamos completamente a nuestra misión de proteger y servir a Colón.",
        icon: "🔥"
    }
];

const staffData = {
    "Cuerpo Activo": {
        "Jefe": [
            { LEG: "60-07", NOMBRE: "FRANCESCANGELI DANIEL LUIS", JERARQUIA: "Comandante" }
        ],
        "Segundo Jefe": [
            { LEG: "60-45", NOMBRE: "SALGADO MARCELO RODOLFO", JERARQUIA: "Oficial Auxiliar de Dotación" }
        ],
        "Oficiales Auxiliares": [
            { LEG: "60-14", NOMBRE: "RAVAGNI IGNACIO LUIS", JERARQUIA: "Oficial Auxiliar de Dotación" },
            { LEG: "60-18", NOMBRE: "CEJAS JOSE DANIEL", JERARQUIA: "Oficial Auxiliar de Dotación" },
            { LEG: "60-57", NOMBRE: "SERRA PABLO MATIAS", JERARQUIA: "Oficial Auxiliar de Escuadra" }
        ],
        "Sub Oficiales Ayudantes": [
            { LEG: "60-65", NOMBRE: "ACCASTELLO CRISTIAN DANIEL", JERARQUIA: "Sub Oficial Ayudante Mayor" },
            { LEG: "60-61", NOMBRE: "RIOS JUAN PABLO", JERARQUIA: "Sub Oficial Ayudante Mayor" },
            { LEG: "60-66", NOMBRE: "ARAGON EMILIANO ARIEL", JERARQUIA: "Sub Oficial Ayudante Mayor" },
            { LEG: "60-31", NOMBRE: "SERRA MARTIN DANIEL", JERARQUIA: "Sub Oficial Ayudante Mayor" },
            { LEG: "60-80", NOMBRE: "ANGELONI JORGE JAVIER", JERARQUIA: "Sub Oficial Ayudante Principal" },
            { LEG: "60-93", NOMBRE: "PORTA MARCOS AGUSTIN", JERARQUIA: "Sub Oficial Ayudante Principal" },
            { LEG: "60-70", NOMBRE: "SALAS AGUSTIN ADAN", JERARQUIA: "Sub Oficial Ayudante 1°" },
            { LEG: "60-79", NOMBRE: "TORRES SEBASTIAN ALBERTO", JERARQUIA: "Sub Oficial Ayudante" },
            { LEG: "60-53", NOMBRE: "CARDOSO CRISTIAN RAUL", JERARQUIA: "Sub Oficial Ayudante" }
        ],
        "Sub Oficiales": [
            { LEG: "60-71", NOMBRE: "MORENO CRISTIAN JAVIER", JERARQUIA: "Sub Oficial Sub Ayudante" },
            { LEG: "60-68", NOMBRE: "HANON ADRIAN", JERARQUIA: "Sub Oficial Sub Ayudante" },
            { LEG: "60-88", NOMBRE: "COLIQUEO MAXIMILIANO DAVID", JERARQUIA: "Sub Oficial Sub Ayudante" },
            { LEG: "60-91", NOMBRE: "TORAL NOEL", JERARQUIA: "Sub Oficial Sub Ayudante" },
            { LEG: "60-101", NOMBRE: "BALASSONE GUSTAVO JAVIER", JERARQUIA: "Sub Oficial Sub Ayudante" },
            { LEG: "60-104", NOMBRE: "SORIA RODRIGO DIONEL", JERARQUIA: "Sub Oficial Sub Ayudante" },
            { LEG: "60-99", NOMBRE: "VILLARROEL MATIAS SEBASTIAN", JERARQUIA: "Sub Oficial Sub Ayudante" },
            { LEG: "60-97", NOMBRE: "COMESAÑA BAUTISTA JOSE", JERARQUIA: "Sub Oficial Sub Ayudante" },
            { LEG: "60-106", NOMBRE: "VELAZCO LEANDRO VALENTIN", JERARQUIA: "Sub Oficial Sub Ayudante" }
        ],
        "Bomberos": [
            { LEG: "60-51", NOMBRE: "RODRIGUEZ LEONARDO LUIS", JERARQUIA: "Bombero" },
            { LEG: "60-108", NOMBRE: "LUGONES JOAQUIN", JERARQUIA: "Bombero" },
            { LEG: "60-73", NOMBRE: "SIMONELLA ALEJANDRO DANIEL", JERARQUIA: "Bombero" },
            { LEG: "60-98", NOMBRE: "GAUNA ALEJO MIGUEL", JERARQUIA: "Bombero" },
            { LEG: "60-105", NOMBRE: "SUAREZ FRANCO EMANUEL", JERARQUIA: "Bombero" },
            { LEG: "60-107", NOMBRE: "BLANCO JUAN FRANCO", JERARQUIA: "Bombero" },
            { LEG: "60-109", NOMBRE: "MARIANI GERONIMO", JERARQUIA: "Bombero" },
            { LEG: "60-110", NOMBRE: "DAL LAGO BRAIAN AGUSTIN", JERARQUIA: "Bombero" },
            { LEG: "60-111", NOMBRE: "FORTI GIULIANA LUCIA", JERARQUIA: "Bombero" },
            { LEG: "60-112", NOMBRE: "MATKOVIC JUAN FRANCISCO", JERARQUIA: "Bombero" },
            { LEG: "60-113", NOMBRE: "CORTASA DAIANA AYELEN", JERARQUIA: "Bombero" },
            { LEG: "60-114", NOMBRE: "RIVA VALENTINA", JERARQUIA: "Bombero" },
            { LEG: "60-115", NOMBRE: "ESPINOSA FELIPE", JERARQUIA: "Bombero" },
            { LEG: "60-116", NOMBRE: "SANSONE MENDEZ DANTE NICOLAS", JERARQUIA: "Bombero" },
            { LEG: "60-117", NOMBRE: "ARIMANY ALEJO GUSTAVO", JERARQUIA: "Bombero" },
            { LEG: "60-118", NOMBRE: "IROS ANRIQUEZ FRANCISCO NICOLAS", JERARQUIA: "Bombero" }
        ]
    },
    "Reserva Activa": [
        { LEG: "70-01", NOMBRE: "MARTINEZ CARLOS ALBERTO", JERARQUIA: "Oficial Auxiliar" },
        { LEG: "70-02", NOMBRE: "GONZALEZ LUIS FERNANDO", JERARQUIA: "Sub Oficial Ayudante" },
        { LEG: "70-03", NOMBRE: "LOPEZ SANTIAGO JAVIER", JERARQUIA: "Bombero" },
        { LEG: "70-04", NOMBRE: "HERNANDEZ PABLO MIGUEL", JERARQUIA: "Bombero" }
    ],
    "Comisión Directiva": [
        { LEG: "80-01", NOMBRE: "PEREZ JUAN CARLOS", JERARQUIA: "Presidente" },
        { LEG: "80-02", NOMBRE: "RODRIGUEZ MARIA FERNANDA", JERARQUIA: "Vicepresidente" },
        { LEG: "80-03", NOMBRE: "GARCIA SERGIO DANIEL", JERARQUIA: "Secretario" },
        { LEG: "80-04", NOMBRE: "TORRES ALEJANDRA BEATRIZ", JERARQUIA: "Tesorera" }
    ]
};

