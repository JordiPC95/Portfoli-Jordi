import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AosElementDirective } from './aos-element.directive';

type LangCode = 'es' | 'ca' | 'en';

interface Project {
  id: string;
  title: string;
  techBadge: string;
  description: string;
  tags: string[];

  client?: string;
  role?: string;
  period?: string;
  context?: string;
  responsibilities?: string[];
  stack?: string[];
  results?: string[];

  screenshot?: string;
}

interface WideImage {
  id: string;
  src: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AosElementDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  navOpen = false;
  isDark = true;
 enlargedScreenshot: string | null = null;
  currentLang: LangCode = 'es';

  languages = [
    { code: 'ca' as LangCode, label: 'Català', flag: 'assets/img/flags/catalonia.svg' },
    { code: 'es' as LangCode, label: 'Español', flag: 'assets/img/flags/spain.svg' },
    { code: 'en' as LangCode, label: 'English', flag: 'assets/img/flags/uk.svg' },
  ];

  cvUrl = 'assets/cv/jordi-prunell-cv.pdf';
  zktecoCertUrl = 'assets/certificates/jordi-prunell-zkbio-cvsecurity.pdf';


  // ===================== HERO IMÁGENES =====================
  // Solo las VERTICALES en el hero
  heroImages: string[] = [
    'assets/img/jordi-dev.jpg',
    'assets/img/jordi-1.jpg',
  ];

  openScreenshot(src: string): void {
    this.enlargedScreenshot = src;
  }

  closeScreenshot(): void {
    this.enlargedScreenshot = null;
  }

  openCertification(certId: string): void {
  if (certId === 'zkteco') {
    window.open(this.zktecoCertUrl, '_blank');
  }
}

  // Imágenes HORIZONTALES en la galería
  wideImages: WideImage[] = [
    { id: 'cyber', src: 'assets/img/jordi-cyber.jpg' },
    { id: 'tech', src: 'assets/img/jordi-2.jpg' },
  ];

  // ===================== PROYECTOS =====================
  projects: Project[] = [
    {
    id: 'escubedo-fichajes',
    title: 'Plataforma de control de matrículas y fichajes',
    techBadge: 'Angular · .NET Web API · SQL Server · LPR',
    description:
      'Solución web para controlar en tiempo real los accesos de vehículos a una planta industrial: login de usuarios, tabla de movimientos con filtros avanzados e imagen asociada a cada lectura de matrícula.',
    tags: ['Full Stack', 'Control de accesos', 'LPR · Lectura de matrículas'],

    client: 'Gran empresa industrial del sector metalúrgico',
    role: 'Full Stack .NET & Angular · IT Systems',
    period: '2024 – Actualidad',
    context:
      'Proyecto para centralizar todos los accesos de vehículos (trabajadores, visitas y transportistas) usando una cámara LPR Quercus conectada a una API .NET, base de datos SQL Server y una web en Angular para explotación de los datos.',

    responsibilities: [
      'Diseño del modelo de datos en SQL Server para movimientos, matrículas, tipos de acceso e imágenes asociadas.',
      'Desarrollo de una API REST en .NET que recibe eventos JSON de la cámara LPR Quercus y los guarda en base de datos.',
      'Implementación del frontal en Angular con login, buscador, filtros por fecha, indicadores diarios y exportación a Excel.',
      'Visualización de la imagen capturada para cada movimiento y posibilidad de gestionar/borrar registros desde la web.',
      'Despliegue de la API y la web en IIS sobre servidor Windows, con configuración de HTTPS, logs y copias de seguridad.'
    ],

    stack: [
      'ASP.NET Web API',
      'C#',
      'Angular',
      'SQL Server',
      'Entity Framework',
      'Cámara LPR Quercus (SmartLPR)',
      'IIS · Windows Server',
      'Exportación a Excel'
    ],

    results: [
      'Control en tiempo real de los accesos de vehículos con histórico consultable desde cualquier puesto autorizado.',
      'Trazabilidad completa de cada movimiento gracias a la imagen asociada a la matrícula.',
      'Reducción de tareas manuales de validación para el acceso al recinto.'
    ],

    screenshot: 'assets/img/projects/matriculas-dashboard.png'
  },
    {
  id: 'amb-sap-marcajes',
  title: 'Servicios backend de marcajes para entorno SAP',
  techBadge: '.NET · Windows Services · SAP · SQL Server',
  description:
    'Servicios backend en .NET que generan, transforman y envían marcajes de presencia desde el sistema de control de accesos a SAP para su gestión en RRHH.',
  tags: ['Servicios Windows', 'Integración SAP', 'BioTime', 'Automatización'],
  client: 'Operador público de transporte metropolitano con entorno SAP',
  role: 'Backend & Integrations Developer',
  period: '2024',
  context:
    'Integración entre un sistema de control de accesos/presencia (BioTime) y el módulo de RRHH en SAP para automatizar el alta diaria de marcajes de empleados.',

  responsibilities: [
    'Diseño del modelo de datos intermedio en SQL Server para almacenar y normalizar los marcajes provenientes de BioTime.',
    'Desarrollo de servicios Windows en .NET que recogen los marcajes, aplican reglas de negocio y generan los ficheros/interfaz de entrada para SAP.',
    'Implementación de reglas de mapeo entre tipos de marcaje (entrada, salida, incidencias) y los códigos de tiempo/ausencia definidos por RRHH en SAP.',
    'Programación de tareas y jobs para la ejecución automática de los procesos en distintas franjas horarias.',
    'Implementación de trazas y logs detallados para poder auditar cada envío y reprocesar incidencias cuando SAP rechaza algún registro.'
  ],

  stack: [
    '.NET Framework',
    'C#',
    'Servicios Windows',
    'SQL Server',
    'BioTime',
    'SAP (RRHH)'
  ],

  results: [
    'Automatización del envío diario de marcajes desde el sistema de control de accesos a SAP.',
    'Reducción significativa de la carga manual de introducción de fichajes por parte de RRHH.',
    'Mayor trazabilidad y control de errores gracias a los logs y procesos de reintento implementados.'
  ],

  // Si más adelante quieres poner una imagen conceptual:
  // screenshot: 'assets/img/projects/sap-marcajes-backend.png',
},

    {
  id: 'hipra-biostar-biotime',
  title: 'Plataforma de integraciones BioStar / BioTime',
  techBadge: '.NET · BioStar 2 · BioTime · SQL Server',
  description:
    'Servicios backend y procesos de integración para unificar el control de accesos físico y la presencia de empleados en un campus con decenas de puertas y edificios.',
  tags: ['Control de accesos', 'Integraciones', 'Servicios Windows', 'Microservicios'],
  client: 'Multinacional del sector farmacéutico y biotecnológico',
  role: 'IT & Integrations · Access Control',
  period: '2023 – 2024',
  context:
    'Entorno corporativo con múltiples sedes, cientos de lectores de control de accesos y distintos sistemas de presencia (BioStar 2, BioTime) que necesitaban consolidar la información.',
  responsibilities: [
    'Análisis de las BBDD de BioStar 2 y BioTime para entender el modelo de datos de usuarios, tarjetas, plantillas biométricas y logs de acceso.',
    'Diseño y desarrollo de servicios Windows y microservicios .NET para sincronizar usuarios, tarjetas y grupos entre BioStar 2, BioTime y sistemas de RRHH.',
    'Implementación de procesos programados que consolidan marcajes y generan vistas de presencia adaptadas a las reglas de negocio del cliente.',
    'Optimización de consultas y procedimientos almacenados en SQL Server para trabajar con tablas de millones de registros de eventos.',
    'Migraciones controladas de bases de datos y cambios de servidor garantizando la integridad de los datos y la mínima parada de servicio.',
    'Instrumentación de logs detallados y alertas básicas para detectar incidencias de sincronización, caídas de servicios o dispositivos desconectados.'
  ],
  stack: [
    'C# · .NET',
    'Servicios Windows / microservicios',
    'SQL Server',
    'BioStar 2 API',
    'BioTime'
    
  ],
  results: [
    'Consolidación de los datos de accesos y presencia en un modelo único para reporting y auditoría.',
    'Reducción de errores manuales en altas/bajas de usuarios y tarjetas gracias a las sincronizaciones automáticas.',
    'Base técnica preparada para futuros cuadros de mando y análisis de seguridad física a nivel corporativo.'
  ]
},

    {
  id: 'iese-visitas',
  title: 'Aplicación de gestión de visitas y tarjetas de acceso',
  techBadge: '.NET · WinForms · SQL Server',
  description:
    'Aplicación de escritorio y servicios backend para registrar visitas, emitir tarjetas temporales e integrarlas con el sistema de control de accesos del campus.',
  tags: ['Aplicación de escritorio', 'Control de visitas', 'Accesos físicos'],
  client: 'Escuela de negocios internacional',
  role: 'Developer & Support · Access Control',
  period: '2023 – 2024',
  context:
    'Centro educativo con varios edificios y zonas restringidas donde es necesario controlar quién entra, cuánto tiempo permanece y qué tipo de acreditación utiliza (visitas, proveedores, alumnos invitados, etc.).',
  responsibilities: [
    'Mantenimiento evolutivo de la aplicación WinForms de gestión de visitas, corrigiendo errores y añadiendo nuevas funcionalidades según las necesidades del departamento de seguridad.',
    'Mejora de los flujos de alta de visitas: búsqueda rápida de contactos habituales, registro de vehículo, persona responsable y zona de acceso.',
    'Desarrollo de lógica para la emisión y devolución de tarjetas temporales, vinculadas a las puertas y horarios permitidos.',
    'Implementación de consultas y vistas SQL para facilitar listados de visitas, históricos y trazabilidad de accesos.',
    'Apoyo en la integración con el sistema físico de control de accesos, validando que las visitas registradas en la aplicación puedan abrir únicamente las puertas autorizadas.',
    'Soporte de segunda línea al personal de recepción y seguridad cuando aparecían incidencias relacionadas con visitas o tarjetas.'
  ],
  stack: [
    'C# · .NET Framework',
    'WinForms',
    'SQL Server',
    'Procedimientos almacenados y vistas',
    'Integración con sistema de control de accesos'
  ],
  results: [
    'Mayor trazabilidad de las visitas y de los movimientos dentro del campus gracias a un registro más completo y accesible.',
    'Reducción de tareas manuales de recepción y seguridad en la gestión de tarjetas temporales.',
    'Mejor alineación con las políticas de seguridad física y auditoría del centro.'
  ]
},

    {
  id: 'camara-lpr-events',
  title: 'Plataforma de gestión de muelles y flota de reparto',
  techBadge: '.NET · WinForms · SQL Server',
  description:
    'Suite interna para planificar la ocupación de muelles, asignar camiones y controlar en tiempo real el estado de carga y descarga en una plataforma logística de paquetería.',
  tags: ['Logística', 'Planning de muelles', 'Aplicación de escritorio'],
  client: 'Operador logístico internacional de paquetería',
  role: 'Full Stack · Backend & Desktop',
  period: '2024 – Actualidad',
  context:
    'Centro de cross-docking con múltiples muelles, rutas y turnos donde era necesario saber en cada momento qué camión está en cada puerta, cuánto tiempo lleva en muelle y si cumple las ventanas de carga pactadas.',

  responsibilities: [
    'Diseño del modelo de datos en SQL Server para muelles, camiones, rutas, slots horarios, incidencias y métricas operativas.',
    'Desarrollo de una aplicación WinForms para el equipo de almacén con vistas configurables: panel de muelles, cola de llegada de camiones, timeline de ventanas horarias y estado de carga/descarga.',
    'Implementación de lógica backend en .NET para la asignación automática de muelles en función de ruta, tipo de mercancía, prioridad y SLA de entrega.',
    'Creación de servicios Windows y tareas programadas para importar y consolidar datos desde sistemas externos (TMS/WMS) y desde el sistema de control de accesos de la nave.',
    'Construcción de informes operativos y exportaciones a Excel sobre tiempos de estancia, uso de muelles, puntualidad y productividad por turno.',
    'Soporte a operación en directo (turnos de mañana y noche), analizando logs, corrigiendo datos y afinando reglas de negocio según feedback del personal de muelle.'
  ],

  stack: [
    'C# · .NET Framework',
    'WinForms',
    'SQL Server',
    'Servicios Windows',
    'Integración con TMS/WMS',
    'Reporting y exportación a Excel'
  ],

  results: [
    'Visibilidad en tiempo real de la ocupación de muelles y del estado de cada camión en plataforma.',
    'Reducción de tiempos muertos y colas en el patio gracias a la asignación automática de muelles y a los paneles visuales para el personal de tráfico.',
    'Base histórica de datos robusta para análisis de productividad, dimensionamiento de recursos y negociación con clientes y transportistas.'
  ]
},

    {
  id: 'camara-lpr-events',
  title: 'Servidor de eventos LPR y automatización de matrículas',
  techBadge: '.NET · SQL Server · Docker · Python',
  description:
    'Servicio backend que recibe eventos en tiempo real de una cámara LPR, los normaliza y los persiste en SQL Server para usarlos en cuadros de mando y control de accesos.',

  tags: ['LPR', 'HTTP Webhooks', 'Servicios Windows', 'Automatización'],

  client: 'Planta industrial del sector metalúrgico',
  role: 'Backend & Infra · LPR',
  period: '2024 – 2025',

  context:
    'La planta necesitaba registrar todas las matrículas que entran y salen (empleados, visitas y transportistas) desde una cámara LPR instalada en el acceso principal, generando un histórico fiable para cruzarlo con fichajes, accesos y logística.',

  responsibilities: [
    'Diseño del modelo de datos en SQL Server para eventos LPR: matrícula, cámara, sentido, confianza, imagen asociada y metadatos de integración.',
    'Desarrollo de un servicio Windows en C# que expone un pequeño servidor HTTP para recibir peticiones POST de la cámara LPR y confirmarlas en tiempo real.',
    'Normalización y deserialización de los eventos JSON de la cámara (incluyendo URLs o binario de imagen) y persistencia en base de datos con control de duplicados.',
    'Implementación de tareas de mantenimiento (purga de imágenes antiguas, archivado de históricos) usando scripts de automatización en Python.',
    'Montaje de un entorno de desarrollo con Docker (SQL Server y herramientas auxiliares) para poder probar el servicio y los scripts sin afectar a producción.',
    'Exposición de vistas y consultas preparadas para una futura web en Angular: timeline de matrículas, filtros por cámara/fecha y posibilidad de enlazar con fichajes o accesos físicos.',
    'Monitorización básica mediante logs estructurados y contadores para detectar errores de comunicación con la cámara o problemas de rendimiento.'
  ],

  stack: [
    'C# · .NET',
    'Servicio Windows con HTTP Listener',
    'SQL Server',
    'Cámaras LPR (SmartLPR / similares)',
    'Python (scripts de automatización)',
    'Docker (entorno de desarrollo)',
    'Windows Task Scheduler / jobs de mantenimiento'
  ],

  results: [
    'Canal estable para registrar eventos LPR en tiempo real sin depender todavía de una web completa.',
    'Histórico de matrículas listo para cruzarse con fichajes, accesos y movimientos de vehículos en otros sistemas.',
    'Menos tareas manuales de revisión gracias a los scripts de mantenimiento y a la consolidación de datos en una única base de datos.'
  ]
}

  ];

  get featuredProjects(): Project[] {
    return this.projects.slice(0, 6);
  }

  selectedProject: Project | null = null;
  isProjectModalOpen = false;
  showAllProjects = false;

  // ===================== HERO / SLIDER =====================
    // ===================== HERO / SLIDER =====================
  currentHeroImageIndex = 0;
  private heroIntervalId?: number;

  heroRotateX = 0;
  heroRotateY = 0;

  // ===================== GALERÍA / SLIDER =====================
  currentWideImageIndex = 0;
  private wideIntervalId?: number;


  // ===================== TRADUCCIONES =====================
  private translations: Record<string, { es: string; ca: string; en: string }> = {
    // NAV
    'nav.home': { es: 'Inicio', ca: 'Inici', en: 'Home' },
    'nav.about': { es: 'Sobre mí', ca: 'Sobre mi', en: 'About' },
    'nav.experience': { es: 'Experiencia', ca: 'Experiència', en: 'Experience' },
    'nav.skills': { es: 'Skills', ca: 'Skills', en: 'Skills' },
    'nav.projects': { es: 'Proyectos', ca: 'Projectes', en: 'Projects' },
    'nav.contact': { es: 'Contacto', ca: 'Contacte', en: 'Contact' },
    'nav.menuOpen': { es: 'Menú', ca: 'Menú', en: 'Menu' },
    'nav.menuClose': { es: 'Cerrar', ca: 'Tancar', en: 'Close' },

    // THEME
    'theme.dark': { es: 'Oscuro', ca: 'Fosc', en: 'Dark' },
    'theme.light': { es: 'Claro', ca: 'Clar', en: 'Light' },
    'theme.switchToLight': {
      es: 'Cambiar a modo claro',
      ca: 'Canviar a mode clar',
      en: 'Switch to light mode',
    },
    'theme.switchToDark': {
      es: 'Cambiar a modo oscuro',
      ca: 'Canviar a mode fosc',
      en: 'Switch to dark mode',
    },

    // SECCIONES
    'section.about': { es: 'Sobre mí', ca: 'Sobre mi', en: 'About me' },
    'section.experience': { es: 'Experiencia', ca: 'Experiència', en: 'Experience' },
    'section.skills': { es: 'Habilidades', ca: 'Habilitats', en: 'Skills' },
    'section.gallery': { es: 'Galería', ca: 'Galeria', en: 'Gallery' },
    'section.projects': { es: 'Proyectos', ca: 'Projectes', en: 'Projects' },
    'section.contact': { es: 'Contacto', ca: 'Contacte', en: 'Contact' },

    // HERO
    'hero.available': {
      es: 'Disponible para nuevos proyectos',
      ca: 'Disponible per a nous projectes',
      en: 'Available for new projects',
    },
    'hero.hello': { es: 'Hola, soy', ca: 'Hola, soc', en: "Hi, I'm" },
    'hero.introBeforeHighlight': {
      es: 'Desarrollador',
      ca: 'Desenvolupador',
      en: 'Full Stack developer',
    },
    'hero.introAfterHighlight': {
  es: ', con una base muy sólida en sistemas e infraestructura. Diseño, implemento y mantengo soluciones completas que combinan backend .NET, Angular, bases de datos, servicios Windows, control de accesos, LPR y seguridad.',
  ca: ', amb una base molt sòlida en sistemes i infraestructures. Dissenyo, implemento i mantinc solucions completes que combinen backend .NET, Angular, bases de dades, serveis Windows, control d’accessos, LPR i seguretat.',
  en: ', with a strong background in systems and infrastructure. I design, build and run end-to-end solutions that bring together .NET backends, Angular frontends, databases, Windows services, access control, LPR and security.',
},

    'hero.downloadCv': {
      es: 'Descargar CV',
      ca: 'Descarregar CV',
      en: 'Download CV',
    },
    'hero.ctaProjects': {
      es: 'Ver proyectos',
      ca: 'Veure projectes',
      en: 'View projects',
    },
    'hero.ctaExperience': {
      es: 'Experiencia profesional',
      ca: 'Experiència professional',
      en: 'Professional experience',
    },
    'hero.ribbon.bottomTitle': {
      es: 'Ciberseguridad · Digital & Cloud',
      ca: 'Ciberseguretat · Digital & Cloud',
      en: 'Cybersecurity · Digital & Cloud',
    },
    'hero.ribbon.bottomSubtitle': {
      es: 'Barcelona · Eventos de tecnología e innovación',
      ca: 'Barcelona · Esdeveniments de tecnologia i innovació',
      en: 'Barcelona · Tech & innovation events',
    },
    'hero.ribbon.bottomStatus': {
      es: 'Presencial',
      ca: 'Presencial',
      en: 'On site',
    },
    'hero.photo.devAlt': {
      es: 'Jordi en el stand de Google Cloud',
      ca: 'Jordi a l’estand de Google Cloud',
      en: 'Jordi at the Google Cloud stand',
    },
    'hero.photo.portraitAlt': {
      es: 'Retrato profesional de Jordi como desarrollador',
      ca: 'Retrat professional d’en Jordi com a desenvolupador',
      en: 'Professional portrait of Jordi as a developer',
    },

    // RESUMEN RÁPIDO HERO
    'summary.stackTitle': { es: 'Stack', ca: 'Stack', en: 'Stack' },
    'summary.stackBody': {
      es: '.NET · C# · SQL Server · Angular',
      ca: '.NET · C# · SQL Server · Angular',
      en: '.NET · C# · SQL Server · Angular',
    },
    'summary.roleTitle': { es: 'Rol', ca: 'Rol', en: 'Role' },
    'summary.roleBody': {
      es: 'Full Stack · IT Support · Systems',
      ca: 'Full Stack · IT Support · Systems',
      en: 'Full Stack · IT Support · Systems',
    },
    'summary.specialtyTitle': {
      es: 'Especialidad',
      ca: 'Especialitat',
      en: 'Specialisation',
    },
    'summary.specialtyBody': {
      es: 'Integraciones BioStar / BioTime · Entra ID · servicios Windows',
      ca: 'Integracions BioStar / BioTime · Entra ID · serveis Windows',
      en: 'BioStar / BioTime integrations · Entra ID · Windows services',
    },

    // SOBRE MÍ
    'about.p1': {
      es: 'Soy un desarrollador que viene del mundo del soporte informático. Eso me ha dado algo muy valioso: entiendo tanto el código como los problemas reales de los usuarios y las empresas.',
      ca: 'Soc un desenvolupador que ve del món del suport informàtic. Això m’ha donat una cosa molt valuosa: entenc tant el codi com els problemes reals dels usuaris i de les empreses.',
      en: 'I am a developer who comes from the IT support world. That gives me something very valuable: I understand both the code and the real-world problems of users and companies.',
    },
    'about.p2': {
      es: 'Trabajo a diario con C#, .NET, SQL Server y Angular, montando servicios, APIs y webs para gestionar fichajes, control de acceso y procesos internos.',
      ca: 'Treballo diàriament amb C#, .NET, SQL Server i Angular, muntant serveis, APIs i webs per gestionar fitxatges, control d’accessos i processos interns.',
      en: 'I work daily with C#, .NET, SQL Server and Angular, building services, APIs and web apps to manage time tracking, access control and internal processes.',
    },
    'about.p3': {
      es: 'Además de programar, me encargo de la parte de sistemas: servidores Windows, IIS, SQL, backups, seguridad, identidades en Entra ID (Active Directory) y todo lo necesario para que lo que desarrollo sea estable en producción.',
      ca: 'A més de programar, m’encarrego de la part de sistemes: servidors Windows, IIS, SQL, còpies de seguretat, seguretat, identitats a Entra ID (Active Directory) i tot el necessari perquè el que desenvolupo sigui estable en producció.',
      en: 'Beyond coding, I also take care of systems: Windows servers, IIS, SQL, backups, security, Entra ID identities (Active Directory) and everything needed to keep my solutions stable in production.',
    },

    'about.quick.title': {
      es: 'Datos rápidos',
      ca: 'Dades ràpides',
      en: 'Quick facts',
    },
    'about.quick.locationLabel': {
      es: 'Ubicación',
      ca: 'Ubicació',
      en: 'Location',
    },
    'about.quick.locationValue': {
      es: 'Catalunya · España',
      ca: 'Catalunya · Espanya',
      en: 'Catalonia · Spain',
    },
    'about.quick.roleLabel': {
      es: 'Rol actual',
      ca: 'Rol actual',
      en: 'Current role',
    },
    'about.quick.roleValue': {
      es: 'IT & Full Stack Developer en Meibit',
      ca: 'IT & Full Stack Developer a Meibit',
      en: 'IT & Full Stack Developer at Meibit',
    },
    'about.quick.studiesLabel': {
      es: 'Estudios',
      ca: 'Estudis',
      en: 'Studies',
    },
    'about.quick.studiesValue': {
      es: 'Criminología · Máster Derecho Penal · DAM · ASIR',
      ca: 'Criminologia · Màster Dret Penal · DAM · ASIR',
      en: 'Criminology · Master in Criminal Law · DAM · ASIR',
    },

    'about.contact.title': {
      es: 'Contacto',
      ca: 'Contacte',
      en: 'Contact',
    },
    'about.contact.emailLabel': {
      es: 'Email',
      ca: 'Correu',
      en: 'Email',
    },
    'about.contact.linkedinLabel': {
      es: 'LinkedIn',
      ca: 'LinkedIn',
      en: 'LinkedIn',
    },
    'about.contact.githubLabel': {
      es: 'GitHub',
      ca: 'GitHub',
      en: 'GitHub',
    },

    // ESTUDIOS
    'about.studies.title': {
      es: 'Formación académica',
      ca: 'Formació acadèmica',
      en: 'Education',
    },
    'about.studies.criminology.title': {
      es: 'Grado en Criminología',
      ca: 'Grau en Criminologia',
      en: 'Degree in Criminology',
    },
    'about.studies.criminology.body': {
      es: 'Base jurídica y criminológica que me ayuda a entender el factor humano, la seguridad y el cumplimiento normativo.',
      ca: 'Base jurídica i criminològica que m’ajuda a entendre el factor humà, la seguretat i el compliment normatiu.',
      en: 'Legal and criminology background that helps me understand the human factor, security and compliance.',
    },
    'about.studies.master.title': {
      es: 'Máster en Derecho Penal',
      ca: 'Màster en Dret Penal',
      en: 'Master in Criminal Law',
    },
    'about.studies.master.body': {
      es: 'Profundización en marco legal, análisis de riesgos y visión rigurosa de la seguridad.',
      ca: 'Aprofundiment en el marc legal, anàlisi de riscos i una visió rigorosa de la seguretat.',
      en: 'Deep dive into legal frameworks, risk analysis and a rigorous approach to security.',
    },
    'about.studies.dam.title': {
      es: 'CFGS DAM · Desarrollo de Aplicaciones Multiplataforma',
      ca: 'CFGS DAM · Desenvolupament d’Aplicacions Multiplataforma',
      en: 'Higher VET DAM · Multiplatform Application Development',
    },
    'about.studies.dam.body': {
      es: 'Fundamentos sólidos de programación orientada a objetos, bases de datos y apps de escritorio/móvil.',
      ca: 'Fonaments sòlids de programació orientada a objectes, bases de dades i apps d’escriptori/mòbil.',
      en: 'Solid foundations in OOP, databases and desktop/mobile applications.',
    },
    'about.studies.asir.title': {
      es: 'CFGS ASIR · Administración de Sistemas Informáticos en Red',
      ca: 'CFGS ASIR · Administració de Sistemes Informàtics en Xarxa',
      en: 'Higher VET ASIR · Networked IT Systems Administration',
    },
    'about.studies.asir.body': {
      es: 'Administración de sistemas, redes, seguridad y servicios que complementan mi perfil de desarrollador.',
      ca: 'Administració de sistemes, xarxes, seguretat i serveis que complementen el meu perfil de desenvolupador.',
      en: 'Systems, networking, security and services that complement my developer profile.',
    },

    // EXPERIENCIA
    'exp.meibit.title': {
      es: 'Meibit · IT & Full Stack Developer',
      ca: 'Meibit · IT & Full Stack Developer',
      en: 'Meibit · IT & Full Stack Developer',
    },
    'exp.meibit.techLine': {
      es: 'C#, .NET, SQL Server, Angular, BioStar 2, BioTime, SmartLPR, Entra ID',
      ca: 'C#, .NET, SQL Server, Angular, BioStar 2, BioTime, SmartLPR, Entra ID',
      en: 'C#, .NET, SQL Server, Angular, BioStar 2, BioTime, SmartLPR, Entra ID',
    },
    'exp.meibit.period': {
      es: '2024 – Actualidad',
      ca: '2024 – Actualitat',
      en: '2024 – Present',
    },
    'exp.meibit.b1': {
      es: 'Diseño e implementación de APIs y servicios Windows para integrar control de accesos.',
      ca: 'Disseny i implementació d’APIs i serveis Windows per integrar control d’accessos.',
      en: 'Design and implementation of APIs and Windows services to integrate access control.',
    },
    'exp.meibit.b2': {
      es: 'Desarrollo de frontends en Angular para paneles de fichajes y reporting multiempresa.',
      ca: 'Desenvolupament de frontends en Angular per a panells de fitxatges i reporting multiempresa.',
      en: 'Frontend development in Angular for multi-company time-tracking and reporting dashboards.',
    },
    'exp.meibit.b3': {
      es: 'Migraciones de BBDD (Oracle → SQL Server), optimización de consultas y procedimientos almacenados.',
      ca: 'Migracions de BBDD (Oracle → SQL Server), optimització de consultes i procediments emmagatzemats.',
      en: 'Database migrations (Oracle → SQL Server), query optimisation and stored procedures.',
    },
    'exp.meibit.b4': {
      es: 'Administración de servidores Windows, IIS, SQL Server y mantenimiento de entornos de producción.',
      ca: 'Administració de servidors Windows, IIS, SQL Server i manteniment d’entorns de producció.',
      en: 'Administration of Windows servers, IIS, SQL Server and production environments.',
    },
    'exp.meibit.b5': {
      es: 'Gestión de identidades y seguridad en Entra ID (Azure AD), VPN, políticas y dispositivos.',
      ca: 'Gestió d’identitats i seguretat a Entra ID (Azure AD), VPN, polítiques i dispositius.',
      en: 'Identity and security management in Entra ID (Azure AD), VPN, policies and devices.',
    },
    'exp.meibit.b6': {
      es: 'Gestión completa de proyectos: análisis con cliente, coordinación con comercial y puesta en marcha.',
      ca: 'Gestió completa de projectes: anàlisi amb el client, coordinació amb comercial i posada en marxa.',
      en: 'End-to-end project management: client analysis, coordination with sales and go-live.',
    },

    'exp.mm.title': {
      es: 'MediaMarkt · Especialista informática & SAT',
      ca: 'MediaMarkt · Especialista informàtica & SAT',
      en: 'MediaMarkt · IT Specialist & Service',
    },
    'exp.mm.subtitle': {
      es: 'Soporte técnico · Atención al cliente',
      ca: 'Suport tècnic · Atenció al client',
      en: 'Technical support · Customer service',
    },
    'exp.mm.period': {
      es: '2022 - 2024',
      ca: '2022 - 2024',
      en: '2022 - 2024',
    },
    'exp.mm.b1': {
      es: 'Asesoramiento especializado en hardware, periféricos y soluciones informáticas.',
      ca: 'Assessorament especialitzat en hardware, perifèrics i solucions informàtiques.',
      en: 'Specialised advice on hardware, peripherals and IT solutions.',
    },
    'exp.mm.b2': {
      es: 'Puesta a punto y reparación básica de PCs, móviles y TVs.',
      ca: 'Posada a punt i reparació bàsica de PCs, mòbils i TVs.',
      en: 'Setup and basic repair of PCs, mobiles and TVs.',
    },
    'exp.mm.b3': {
      es: 'Trabajo de cara al público, soporte y gestión de incidencias.',
      ca: 'Treball de cara al públic, suport i gestió d’incidències.',
      en: 'Customer-facing work, support and incident management.',
    },

    // SKILLS
    'skills.fullstack.title': {
      es: 'Full Stack & Arquitectura',
      ca: 'Full Stack & Arquitectura',
      en: 'Full Stack & Architecture',
    },
    'skills.fullstack.b1': {
      es: 'Diseño de APIs REST en .NET para consumo por Angular y otros servicios.',
      ca: 'Disseny d’APIs REST en .NET per ser consumides per Angular i altres serveis.',
      en: 'Design of REST APIs in .NET for Angular and other services.',
    },
    'skills.fullstack.b2': {
      es: 'Modelado de BBDD en SQL Server, SP, índices y vistas para reporting.',
      ca: 'Modelat de BBDD a SQL Server, SP, índexs i vistes per a reporting.',
      en: 'Database modelling in SQL Server, SPs, indexes and views for reporting.',
    },
    'skills.fullstack.b3': {
      es: 'Patrones de capas, DTOs, clean-ish architecture y buenas prácticas de backend.',
      ca: 'Patrons de capes, DTOs, clean-ish architecture i bones pràctiques de backend.',
      en: 'Layered patterns, DTOs, “clean-ish” architecture and backend good practices.',
    },

    'skills.certs.title': {
  es: 'Certificaciones & vendors',
  ca: 'Certificacions & vendors',
  en: 'Certifications & vendors',
},
'skills.certs.subtitle': {
  es: 'Tecnologías y plataformas en las que estoy certificado o tengo formación específica.',
  ca: 'Tecnologies i plataformes en què tinc certificació o formació específica.',
  en: 'Technologies and platforms where I hold certifications or specific training.',
},


    'skills.systems.title': {
      es: 'Sistemas & Cloud',
      ca: 'Sistemes & Cloud',
      en: 'Systems & Cloud',
    },
    'skills.systems.b1': {
      es: 'Administración de Windows Server, IIS, SQL Server y servicios Windows.',
      ca: 'Administració de Windows Server, IIS, SQL Server i serveis Windows.',
      en: 'Administration of Windows Server, IIS, SQL Server and Windows services.',
    },
    'skills.systems.b2': {
      es: 'Configuración de VPN, firewall, redes internas, subredes y VLANs a nivel práctico.',
      ca: 'Configuració de VPN, firewall, xarxes internes, subxarxes i VLANs a nivell pràctic.',
      en: 'Practical configuration of VPN, firewalls, internal networks, subnets and VLANs.',
    },
    'skills.systems.b3': {
      es: 'Gestión de certificados, HTTPS, copias de seguridad y monitorización básica.',
      ca: 'Gestió de certificats, HTTPS, còpies de seguretat i monitorització bàsica.',
      en: 'Certificate management, HTTPS, backups and basic monitoring.',
    },

    'skills.security.title': {
      es: 'Identidad & Seguridad',
      ca: 'Identitat & Seguretat',
      en: 'Identity & Security',
    },
    'skills.security.b1': {
      es: 'Administración de Entra ID (Azure AD): usuarios, grupos, dispositivos y accesos.',
      ca: 'Administració d’Entra ID (Azure AD): usuaris, grups, dispositius i accessos.',
      en: 'Entra ID (Azure AD) administration: users, groups, devices and access.',
    },
    'skills.security.b2': {
      es: 'Políticas de seguridad, MFA, compliance básico y alineación con ISO 27001.',
      ca: 'Polítiques de seguretat, MFA, compliance bàsic i alineació amb ISO 27001.',
      en: 'Security policies, MFA, basic compliance and ISO 27001 alignment.',
    },
    'skills.security.b3': {
      es: 'Cifrado de dispositivos (BitLocker) y buenas prácticas de endpoint management.',
      ca: 'Xifrat de dispositius (BitLocker) i bones pràctiques d’endpoint management.',
      en: 'Device encryption (BitLocker) and endpoint management best practices.',
    },

    'skills.support.title': {
      es: 'Soporte IT sobre mis soluciones',
      ca: 'Suport IT sobre les meves solucions',
      en: 'IT support on my own solutions',
    },
    'skills.support.b1': {
      es: 'Despliegue, monitorización y mantenimiento de los servicios que yo mismo desarrollo.',
      ca: 'Desplegament, monitorització i manteniment dels serveis que jo mateix desenvolupo.',
      en: 'Deployment, monitoring and maintenance of the services I develop.',
    },
    'skills.support.b2': {
      es: 'Diagnóstico de problemas en producción: logs, BBDD, servicios, conectividad.',
      ca: 'Diagnòstic de problemes en producció: logs, BBDD, serveis, connectivitat.',
      en: 'Production troubleshooting: logs, databases, services, connectivity.',
    },
    'skills.support.b3': {
      es: 'Ajustes evolutivos según feedback real de usuarios y departamentos de RRHH.',
      ca: 'Ajustos evolutius segons feedback real d’usuaris i departaments de RRHH.',
      en: 'Evolutionary changes based on real feedback from users and HR.',
    },

    'skills.projects.title': {
      es: 'Gestión completa de proyectos',
      ca: 'Gestió completa de projectes',
      en: 'End-to-end project management',
    },
    'skills.projects.b1': {
      es: 'Reuniones con cliente para entender procesos, dolores y objetivos.',
      ca: 'Reunions amb el client per entendre processos, pains i objectius.',
      en: 'Client meetings to understand processes, pain points and goals.',
    },
    'skills.projects.b2': {
      es: 'Traducción de las necesidades a requisitos técnicos y backlog de tareas.',
      ca: 'Traducció de les necessitats a requisits tècnics i backlog de tasques.',
      en: 'Translating needs into technical requirements and a task backlog.',
    },
    'skills.projects.b3': {
      es: 'Coordinación con equipo comercial y con otros técnicos para cerrar la solución.',
      ca: 'Coordinació amb l’equip comercial i altres tècnics per tancar la solució.',
      en: 'Coordination with sales and other technicians to deliver the solution.',
    },

    'skills.tools.title': {
      es: 'Tooling & ecosistema',
      ca: 'Tooling & ecosistema',
      en: 'Tooling & ecosystem',
    },
    'skills.tools.b1': {
      es: 'Visual Studio, VS Code, SQL Server Management Studio.',
      ca: 'Visual Studio, VS Code, SQL Server Management Studio.',
      en: 'Visual Studio, VS Code, SQL Server Management Studio.',
    },
    'skills.tools.b2': {
      es: 'GitHub, Docker (básico), scriptado con PowerShell y bash.',
      ca: 'GitHub, Docker (bàsic), scripting amb PowerShell i bash.',
      en: 'GitHub, basic Docker, scripting with PowerShell and bash.',
    },
    'skills.tools.b3': {
      es: 'Trabajo con APIs de terceros: BioStar 2, BioTime, VisualTime, cámaras LPR, etc.',
      ca: 'Treball amb APIs de tercers: BioStar 2, BioTime, VisualTime, càmeres LPR, etc.',
      en: 'Working with third-party APIs: BioStar 2, BioTime, VisualTime, LPR cameras, etc.',
    },

    // GALERÍA
    'gallery.subtitle': {
      es: 'Algunos momentos relacionados con eventos de tecnología, ciberseguridad y cloud donde sigo formándome.',
      ca: 'Alguns moments relacionats amb esdeveniments de tecnologia, ciberseguretat i cloud on continuo formant-me.',
      en: 'A few moments from tech, cybersecurity and cloud events where I keep learning.',
    },
    'gallery.cyber.title': {
      es: 'Evento de ciberseguridad',
      ca: 'Esdeveniment de ciberseguretat',
      en: 'Cybersecurity event',
    },
    'gallery.cyber.caption': {
      es: 'Participando en charlas y demos sobre seguridad y defensa digital.',
      ca: 'Participant en xerrades i demos sobre seguretat i defensa digital.',
      en: 'Attending talks and demos on security and digital defence.',
    },
    'gallery.cyber.alt': {
      es: 'Jordi en un evento de ciberseguridad',
      ca: 'Jordi en un esdeveniment de ciberseguretat',
      en: 'Jordi at a cybersecurity event',
    },
    'gallery.tech.title': {
      es: 'Entorno tecnológico',
      ca: 'Entorn tecnològic',
      en: 'Tech environment',
    },
    'gallery.tech.caption': {
      es: 'Conectado al ecosistema cloud y a la innovación en Barcelona.',
      ca: 'Connectat a l’ecosistema cloud i a la innovació a Barcelona.',
      en: 'Connected to the cloud ecosystem and innovation in Barcelona.',
    },
    'gallery.tech.alt': {
      es: 'Jordi en un entorno tecnológico',
      ca: 'Jordi en un entorn tecnològic',
      en: 'Jordi in a technology environment',
    },

    // PROYECTOS
    'projects.subtitle': {
      es: 'Trabajo real en producción y proyectos personales relacionados con control de accesos e integraciones con APIs.',
      ca: 'Treball real en producció i projectes personals relacionats amb control d’accessos e integracions amb APIs.',
      en: 'Real production work and personal projects around access control and APIs integration.',
    },
    'projects.viewAll': {
      es: 'Ver todos los proyectos',
      ca: 'Veure tots els projectes',
      en: 'View all projects',
    },
    'projects.card.viewDetail': {
      es: 'Ver detalle',
      ca: 'Veure detall',
      en: 'View details',
    },

    // CONTACTO
    'contact.p1': {
      es: '¿Te encaja mi perfil para tu equipo o proyecto? Podemos hablar sin compromiso.',
      ca: 'T’encaixa el meu perfil per al teu equip o projecte? Podem parlar sense compromís.',
      en: 'Do you think my profile fits your team or project? Let’s talk with no obligation.',
    },
    'contact.p2': {
      es: 'Me interesan especialmente proyectos donde se mezclen backend .NET, Angular, bases de datos, sistemas y seguridad.',
      ca: 'M’interessen especialment projectes on es barregin backend .NET, Angular, bases de dades, sistemes i seguretat.',
      en: 'I am especially interested in projects combining .NET backend, Angular, databases, systems and security.',
    },
    'contact.emailCta': {
      es: 'Escríbeme por email',
      ca: 'Escriu-me per correu',
      en: 'Email me',
    },
    'contact.linkedinCta': {
      es: 'Ver perfil de LinkedIn',
      ca: 'Veure perfil de LinkedIn',
      en: 'View LinkedIn profile',
    },

    'contact.locationCard.title': {
      es: 'Ubicación',
      ca: 'Ubicació',
      en: 'Location',
    },
    'contact.locationCard.locationText': {
      es: 'Tordera · Barcelona, España',
      ca: 'Tordera · Barcelona, Espanya',
      en: 'Tordera · Barcelona, Spain',
    },
    'contact.locationCard.modePill': {
      es: 'Presencial / híbrido',
      ca: 'Presencial / híbrid',
      en: 'On-site / hybrid',
    },

    'contact.summary.title': {
      es: 'Resumen rápido',
      ca: 'Resum ràpid',
      en: 'Quick summary',
    },
    'contact.summary.l1': {
      es: 'Full Stack .NET & Angular',
      ca: 'Full Stack .NET & Angular',
      en: 'Full Stack .NET & Angular',
    },
    'contact.summary.l2': {
      es: 'Experiencia en control de accesos, APIs y páginas web Responsive',
      ca: 'Experiència en control d’accessos, APIs i pagines web Responsive',
      en: 'Experience in access control, APIs and Responsive Websites',
    },
    'contact.summary.l3': {
      es: 'Perfil híbrido desarrollo + sistemas + seguridad',
      ca: 'Perfil híbrid desenvolupament + sistemes + seguretat',
      en: 'Hybrid profile: development + systems + security',
    },
    'contact.summary.l4': {
      es: 'Disponibilidad para remoto o híbrido',
      ca: 'Disponibilitat per a remot o híbrid',
      en: 'Available for remote or hybrid work',
    },

        'contact.qr.title': {
      es: 'Escanéame desde el móvil',
      ca: "Escaneja’m des del mòbil",
      en: 'Scan me from your phone',
    },
    'contact.qr.subtitle': {
      es: 'Abre mi perfil de LinkedIn y guarda mi contacto en segundos.',
      ca: 'Obre el meu perfil de LinkedIn i desa el meu contacte en segons.',
      en: 'Open my LinkedIn profile and save my contact in seconds.',
    },


    // MODALES
    'modal.project.responsibilitiesTitle': {
      es: 'Responsabilidades',
      ca: 'Responsabilitats',
      en: 'Responsibilities',
    },
    'modal.project.resultsTitle': {
      es: 'Resultados',
      ca: 'Resultats',
      en: 'Results',
    },
    'modal.project.stackTitle': {
      es: 'Stack principal',
      ca: 'Stack principal',
      en: 'Main stack',
    },
    'modal.project.placeholder.main': {
      es: 'Espacio reservado para capturas del proyecto ✨',
      ca: 'Espai reservat per a captures del projecte ✨',
      en: 'Space reserved for project screenshots ✨',
    },
    'modal.project.placeholder.sub': {
      es: 'Añade una propiedad "screenshot" al proyecto para mostrar una imagen aquí.',
      ca: 'Afegeix una propietat "screenshot" al projecte per mostrar una imatge aquí.',
      en: 'Add a "screenshot" property to the project to show an image here.',
    },
    'modal.project.close': {
      es: 'Cerrar',
      ca: 'Tancar',
      en: 'Close',
    },

    'modal.allProjects.title': {
      es: 'Todos los proyectos',
      ca: 'Tots els projectes',
      en: 'All projects',
    },
    'modal.allProjects.subtitle': {
      es: 'Selecciona cualquier proyecto para ver el detalle.',
      ca: 'Selecciona qualsevol projecte per veure’n el detall.',
      en: 'Select any project to see its details.',
    },
    'modal.allProjects.close': {
      es: 'Cerrar',
      ca: 'Tancar',
      en: 'Close',
    },
  };

  constructor() {
  if (typeof window !== 'undefined') {
    const savedLang = window.localStorage.getItem('portfolio_lang') as LangCode | null;
    if (savedLang === 'es' || savedLang === 'ca' || savedLang === 'en') {
      this.currentLang = savedLang;
    }
  }

  // Por defecto siempre oscuro
  this.isDark = true;
  this.updateColorScheme();
}


    ngOnInit(): void {
    this.startHeroSlider();
    this.startWideSlider();
  }

    ngOnDestroy(): void {
    if (this.heroIntervalId != null && typeof window !== 'undefined') {
      window.clearInterval(this.heroIntervalId);
    }
    if (this.wideIntervalId != null && typeof window !== 'undefined') {
      window.clearInterval(this.wideIntervalId);
    }
  }


  // ===================== I18N =====================
  setLang(lang: LangCode): void {
    this.currentLang = lang;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('portfolio_lang', lang);
    }
  }

  t(key: string): string {
    const entry = this.translations[key];
    if (!entry) {
      return key;
    }
    return entry[this.currentLang] ?? entry.es;
  }

  // ===================== HERO =====================
  private startHeroSlider(): void {
    if (this.heroImages.length <= 1 || typeof window === 'undefined') {
      return;
    }

    this.heroIntervalId = window.setInterval(() => {
      this.currentHeroImageIndex =
        (this.currentHeroImageIndex + 1) % this.heroImages.length;
    }, 6000);
  }

    private startWideSlider(): void {
    if (this.wideImages.length <= 1 || typeof window === 'undefined') {
      return;
    }

    this.wideIntervalId = window.setInterval(() => {
      this.currentWideImageIndex =
        (this.currentWideImageIndex + 1) % this.wideImages.length;
    }, 7000); // cambia cada 7 segundos
  }


  get heroCardTransform(): string {
    return `perspective(1200px) rotateX(${this.heroRotateX}deg) rotateY(${this.heroRotateY}deg) scale(1.02)`;
  }

  onHeroMouseMove(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const percentX = (x / rect.width - 0.5) * 2;
    const percentY = (y / rect.height - 0.5) * 2;
    const maxTilt = 10;

    this.heroRotateY = percentX * maxTilt;
    this.heroRotateX = -percentY * maxTilt;
  }

  resetHeroTilt(): void {
    this.heroRotateX = 0;
    this.heroRotateY = 0;
  }

  // ===================== NAV / SCROLL =====================
  toggleNav(): void {
    this.navOpen = !this.navOpen;
  }

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.navOpen = false;
  }

  // ===================== TEMA =====================
  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.updateColorScheme();
  }

  private updateColorScheme(): void {
    if (typeof document !== 'undefined') {
      document.documentElement.style.colorScheme = this.isDark ? 'dark' : 'light';
    }
  }

  // ===================== MODALES PROYECTOS =====================
  openProject(project: Project): void {
    this.selectedProject = project;
    this.isProjectModalOpen = true;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeProject(): void {
    this.isProjectModalOpen = false;
    this.selectedProject = null;

    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  viewAllProjects(): void {
    this.showAllProjects = true;
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
