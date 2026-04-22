// ============================================
// DATOS DEL SITIO
// ============================================

const timelineData = [
    {
        year: 1956,
        title: "Fundación del Cuartel",
        description: "Nace la Sociedad de Bomberos Voluntarios de Colón en el Mercado Municipal."
    },
    {
        year: 1957,
        title: "Primer Incendio",
        description: "Sucedió el 2 de febrero de 1957 en una propiedad de precario estado de un tal Arandía"
    },
    {
        year: 1959,
        title: "Primer Equipo",
        description: "Se adquiere el primer equipo de bomberos, Camion Morris Modelo 1946, que sirve fielmente al cuartel."
    },
    {
        year: 1961,
        title: "Nuevo Cuartel",
        description: "La Sociedad pudo contar con un edificio propio el 24 de Septiembre de 1961."
    },
    {
        year: 1975,
        title: "Primer incendio de gran magnitud",
        description: "El incendio de Bolsarpil el 25 de junio de 1975 que demando una actuación de 39 horas."
    },
    {
        year: 1995,
        title: "50º Aniversario",
        description: "Se celebra el 50º aniversario con una gran ceremonia comunitaria."
    },
    {
        year: 2003,
        title: "Accidente de gran magnitud",
        description: "El 14 de septiembre se registró una colisión frontal de gran repercusión nacional entre dos ómnibus de larga distancia, con un balance de 15 víctimas mortales y 26 heridos."
    },
    {
        year: 2020,
        title: "Pandemia - Servicio Continuo",
        description: "Durante la pandemia, el cuartel continúa prestando servicios esenciales a la comunidad."
    },
    {
        year: 2025,
        title: "Cuartel actual",
        description: "El cuartel dispone de una flota de 8 unidades móviles y se mantiene a la vanguardia mediante la constante incorporación de innovaciones tecnológicas."
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
        { LEG: "60-05", NOMBRE: "ACTIS HECTOR OMAR", JERARQUIA: "Comandante" },
        { LEG: "60-03", NOMBRE: "SALGADO MARCELO ANDRES", JERARQUIA: "Sub Comandante" },
        { LEG: "60-06", NOMBRE: "MAULIN WALTER HUGO", JERARQUIA: "Oficial Auxiliar de Dotación" },
        { LEG: "60-08", NOMBRE: "SERRA DANIEL OMAR", JERARQUIA: "Oficial Auxiliar de Dotación" },
        { LEG: "60-15", NOMBRE: "SOLE CLAUDIO MARCELO", JERARQUIA: "Oficial Auxiliar de Dotación" },
        { LEG: "60-09", NOMBRE: "DELL ANTONIO ALBERTO GUILLERMO", JERARQUIA: "Oficial Auxiliar de Escuadra" },
        { LEG: "60-13", NOMBRE: "GARCIA GUILLERMO DANIEL", JERARQUIA: "Oficial Auxiliar de Escuadra" },
        { LEG: "60-17", NOMBRE: "VEZZONI FABIO ARTEMIO", JERARQUIA: "Oficial Auxiliar de Escuadra" },
        { LEG: "60-19", NOMBRE: "VELASCO SEBASTIAN", JERARQUIA: "Oficial Auxiliar de Escuadra" },
        { LEG: "60-11", NOMBRE: "YERKOVICH NESTOR ESTEBAN", JERARQUIA: "Oficial Auxiliar" },
        { LEG: "60-10", NOMBRE: "RAVAGNI GERMÁN DARIO", JERARQUIA: "Oficial Auxiliar" },
        { LEG: "60-21", NOMBRE: "ACTIS DIEGO MARTIN", JERARQUIA: "Oficial Auxiliar" },
        { LEG: "60-12", NOMBRE: "POLLINI JAVIER JESUS", JERARQUIA: "Sub Oficial Ayudante Mayor" },
        { LEG: "60-04", NOMBRE: "SPAGNUOLO DANIEL OSCAR", JERARQUIA: "Sub Oficial Ayudante Principal" },
        { LEG: "60-30", NOMBRE: "GAUNA MIGUEL ANGEL", JERARQUIA: "Sub Oficial de Primera" },
        { LEG: "60-02", NOMBRE: "VELASCO JUAN CARLOS", JERARQUIA: "Sub Oficial Ayudante" },
        { LEG: "60-38", NOMBRE: "SUPPO MARTÍN OCTAVIO", JERARQUIA: "Sub Oficial Sub Ayudante" },
        { LEG: "60-27", NOMBRE: "CORTASA JOSE MARIA", JERARQUIA: "Bombero" }
    ],
    "Comisión Directiva": [
        { LEG: "60-905", NOMBRE: "ROMERO GUSTAVO ALEJANDRO", JERARQUIA: "Presidente" },
        { LEG: "60-916", NOMBRE: "CODINA RUBEN JOSÉ", JERARQUIA: "Vicepresidente" },
        { LEG: "60-917", NOMBRE: "PICAPIETRA JUAN PABLO", JERARQUIA: "Secretario General" },
        { LEG: "60-904", NOMBRE: "ALVAREZ WALTER RAUL", JERARQUIA: "Pro Secretario General" },
        { LEG: "60-903", NOMBRE: "HANON ARIEL CEFERINO", JERARQUIA: "Tesorero" },
        { LEG: "60-909", NOMBRE: "PASCUAL MIGUEL ANGEL", JERARQUIA: "Pro Tesorero" },
        { LEG: "60-907", NOMBRE: "LUJAN FERNANDO JAVIER", JERARQUIA: "Vocal Titular 1°" },
        { LEG: "60-908", NOMBRE: "PRIANO NORBERTO EDUARDO", JERARQUIA: "Vocal Titular 2°" },
        { LEG: "60-912", NOMBRE: "OLIVERO SEGIO ROBERTO", JERARQUIA: "Vocal Titular 3°" },
        { LEG: "60-914", NOMBRE: "BARROSO SERGIO HUMBERTO", JERARQUIA: "Vocal Suplente 1°" },
        { LEG: "60-906", NOMBRE: "ROMERO PABLO HORACIO", JERARQUIA: "Vocal Suplente 2°" },
        { LEG: "60-913", NOMBRE: "ROMANO FEDERICO LUIS", JERARQUIA: "Vocal Suplente 3°" },
        { LEG: "60-918", NOMBRE: "SALMONS GRISELDA ALICIA", JERARQUIA: "Revisor de Cuentas Titular" },
        { LEG: "60-919", NOMBRE: "YERKOVICH ESTELA ROSA", JERARQUIA: "Revisor de Cuentas Suplente" }
    ]
};

