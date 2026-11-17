// Archivo generado por scripts/build.py a partir de data/questions.json. No editar a mano.
window.QUESTIONS = [
 {
  "id": "D1-01",
  "domain": 1,
  "q": "Una empresa de venta de boletos tiene picos de tráfico impredecibles cuando anuncia eventos. Necesita que la capacidad de cómputo aumente sola durante cada pico y disminuya cuando la demanda baje, para no pagar recursos ociosos. ¿Qué capacidad de la nube describe mejor esto?",
  "options": [
   "Elasticidad: ajustar la capacidad a la demanda actual",
   "Escalabilidad: crecer para soportar un aumento sostenido de la carga",
   "Agilidad: aprovisionar recursos rápidamente para nuevas iniciativas",
   "Alta disponibilidad: distribuir la carga en ubicaciones aisladas"
  ],
  "answer": [
   0
  ],
  "explain": "Elasticidad es que la capacidad suba y baje automáticamente con la demanda. Escalabilidad es poder crecer; agilidad es aprovisionar rápido; alta disponibilidad es tolerar fallos.",
  "ref": "https://aws.amazon.com/what-is-cloud-computing/"
 },
 {
  "id": "D1-02",
  "domain": 1,
  "q": "Una empresa debe migrar 200 servidores on-premises a AWS en tres meses, porque el contrato de su centro de datos vence. No hay tiempo para modificar el código de las aplicaciones. Quiere el menor esfuerzo y riesgo en la migración y optimizar después. ¿Qué estrategia de migración es la mejor?",
  "options": [
   "Refactor",
   "Replatform",
   "Rehost",
   "Repurchase"
  ],
  "answer": [
   2
  ],
  "explain": "Rehost (lift-and-shift) mueve los servidores tal cual, sin cambiar código. Refactor rediseña la aplicación para la nube y exige tiempo que aquí no hay.",
  "ref": "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html"
 },
 {
  "id": "D1-03",
  "domain": 1,
  "q": "Al inventariar su portafolio, una empresa encuentra que el 20 % de sus aplicaciones lleva más de un año sin usuarios activos ni dependencias de otras aplicaciones. Decide eliminarlas para reducir costos de mantenimiento. ¿Qué estrategia de migración aplica?",
  "options": [
   "Retain",
   "Retire",
   "Repurchase",
   "Replatform"
  ],
  "answer": [
   1
  ],
  "explain": "Retire significa apagar lo que ya no se necesita. Retain es dejar la aplicación donde está (por ejemplo, on-premises) por ahora.",
  "ref": "https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html"
 },
 {
  "id": "D1-04",
  "domain": 1,
  "q": "Una empresa quiere evaluar su preparación organizacional para la nube en funciones de negocio y técnicas, alinear a las partes interesadas y planificar su transformación desde la estrategia hasta la adopción a escala. ¿Qué recurso es el más adecuado?",
  "options": [
   "AWS Well-Architected Framework",
   "AWS Artifact",
   "AWS Cloud Adoption Framework (AWS CAF)",
   "Modelo de responsabilidad compartida"
  ],
  "answer": [
   2
  ],
  "explain": "AWS CAF guía la transformación organizacional con seis perspectivas (negocio, personas, gobernanza, plataforma, seguridad y operaciones) y las fases envision, align, launch y scale.",
  "ref": "https://aws.amazon.com/cloud-adoption-framework/"
 },
 {
  "id": "D1-05",
  "domain": 1,
  "q": "Una empresa tiene una carga de trabajo ya desplegada y quiere revisar sus decisiones de arquitectura contra las mejores prácticas de AWS para identificar riesgos en áreas como seguridad, confiabilidad y costos. ¿Qué recurso es el más adecuado?",
  "options": [
   "AWS Cloud Adoption Framework (AWS CAF)",
   "AWS Well-Architected Framework",
   "AWS Artifact",
   "Modelo de responsabilidad compartida"
  ],
  "answer": [
   1
  ],
  "explain": "El Well-Architected Framework (y la herramienta Well-Architected Tool) revisa una carga de trabajo contra seis pilares. CAF es para planificar la transformación de la organización.",
  "ref": "https://aws.amazon.com/architecture/well-architected/"
 },
 {
  "id": "D1-06",
  "domain": 1,
  "q": "Un equipo de arquitectura decide seleccionar los tipos de recursos de cómputo adecuados para cada necesidad y evaluar periódicamente nuevos tipos de instancias y servicios para mantener el desempeño cuando cambia la demanda. ¿A qué pilar del AWS Well-Architected Framework corresponde principalmente esta práctica?",
  "options": [
   "Excelencia operativa",
   "Optimización de costos",
   "Eficiencia del rendimiento",
   "Confiabilidad"
  ],
  "answer": [
   2
  ],
  "explain": "Elegir los recursos correctos y revisarlos con el tiempo para sostener el desempeño es el pilar de Eficiencia del rendimiento. Los seis pilares son: excelencia operativa, seguridad, confiabilidad, eficiencia del rendimiento, optimización de costos y sostenibilidad.",
  "ref": "https://aws.amazon.com/architecture/well-architected/"
 },
 {
  "id": "D1-07",
  "domain": 1,
  "q": "Una empresa compara el costo de operar su propio centro de datos con el de usar AWS. Observa que AWS puede ofrecer precios por unidad más bajos de los que ella lograría por su cuenta, porque agrega el uso de cientos de miles de clientes y compra infraestructura a gran volumen. ¿Qué beneficio de la nube describe esto?",
  "options": [
   "Elasticidad",
   "Economías de escala",
   "Agilidad",
   "Alta disponibilidad"
  ],
  "answer": [
   1
  ],
  "explain": "Las economías de escala son los precios más bajos que resultan de que AWS agregue el uso de muchísimos clientes.",
  "ref": "https://aws.amazon.com/what-is-cloud-computing/"
 },
 {
  "id": "D1-08",
  "domain": 1,
  "q": "Una startup evita comprar servidores por adelantado y paga cada mes solo los recursos que realmente consume. ¿Qué beneficio de la nube describe mejor este cambio?",
  "options": [
   "Alcance global en minutos",
   "Cambiar gasto de capital (CapEx) por gasto variable (OpEx)",
   "Economías de escala",
   "Alta disponibilidad"
  ],
  "answer": [
   1
  ],
  "explain": "En vez de invertir en infraestructura por adelantado (CapEx), se paga por consumo (gasto variable).",
  "ref": "https://aws.amazon.com/what-is-cloud-computing/"
 },
 {
  "id": "D1-09",
  "domain": 1,
  "q": "Un arquitecto explica la infraestructura global de AWS a un equipo nuevo. ¿Qué DOS afirmaciones sobre las zonas de disponibilidad (AZ) son correctas?",
  "options": [
   "Cada AZ consta de uno o más centros de datos con energía, refrigeración y red independientes",
   "Las AZ de una misma región están separadas físicamente y conectadas con redes de baja latencia",
   "Una AZ es equivalente a una ubicación de borde de Amazon CloudFront",
   "Los recursos se replican automáticamente entre las AZ de una región para todos los servicios",
   "Toda región de AWS contiene exactamente dos zonas de disponibilidad"
  ],
  "answer": [
   0,
   1
  ],
  "explain": "Las AZ son centros de datos aislados y conectados con baja latencia. No todo se replica solo: en EC2 o EBS, por ejemplo, tú diseñas la redundancia. Y una región tiene varias AZ (normalmente tres o más), no exactamente dos.",
  "ref": "https://aws.amazon.com/about-aws/global-infrastructure/"
 },
 {
  "id": "D1-10",
  "domain": 1,
  "q": "Una empresa debe cumplir una ley que exige que los datos de sus clientes alemanes permanezcan dentro de la Unión Europea. ¿Qué factor debe pesar primero al elegir la región de AWS?",
  "options": [
   "El menor precio por hora de EC2",
   "El cumplimiento y la residencia de los datos",
   "La menor latencia hacia usuarios de otro continente",
   "El mayor número de servicios disponibles"
  ],
  "answer": [
   1
  ],
  "explain": "Un requisito legal de residencia de datos manda sobre el precio, la latencia o la disponibilidad de servicios: primero se eligen las regiones que lo permiten.",
  "ref": "https://aws.amazon.com/about-aws/global-infrastructure/"
 },
 {
  "id": "D1-11",
  "domain": 1,
  "q": "Amazon CloudFront entrega contenido estático desde ubicaciones cercanas a los usuarios finales para reducir la latencia. ¿Cómo se llaman esas ubicaciones?",
  "options": [
   "Zonas de disponibilidad",
   "Ubicaciones de borde (edge locations)",
   "Regiones",
   "AWS Outposts"
  ],
  "answer": [
   1
  ],
  "explain": "CloudFront usa ubicaciones de borde para almacenar contenido en caché cerca del usuario. Las AZ y las regiones alojan tus cargas de trabajo; Outposts lleva infraestructura de AWS a tu centro de datos.",
  "ref": "https://aws.amazon.com/about-aws/global-infrastructure/"
 },
 {
  "id": "D1-12",
  "domain": 1,
  "q": "Una auditoría pregunta quién es responsable de controlar el acceso físico a los servidores donde corren las instancias EC2 de la empresa. Según el modelo de responsabilidad compartida, ¿quién lo es?",
  "options": [
   "Ambos por igual, mediante security groups",
   "El cliente, si contrató el plan de soporte Business",
   "El cliente, porque es dueño de las instancias EC2",
   "AWS, porque es seguridad “de” la nube"
  ],
  "answer": [
   3
  ],
  "explain": "La seguridad física de los centros de datos es siempre de AWS (seguridad “de” la nube). El cliente solo responde por lo que configura “en” la nube; el plan de soporte no cambia el reparto.",
  "ref": "https://aws.amazon.com/compliance/shared-responsibility-model/"
 },
 {
  "id": "D1-13",
  "domain": 1,
  "q": "Se publica una vulnerabilidad crítica en el sistema operativo de las instancias EC2 de una empresa. ¿Quién debe aplicar el parche al sistema operativo invitado?",
  "options": [
   "AWS, porque administra los servidores físicos",
   "La empresa (cliente)",
   "Nadie: EC2 se parchea sola al ser un servicio administrado",
   "AWS, si la instancia está en una zona de disponibilidad con Multi-AZ"
  ],
  "answer": [
   1
  ],
  "explain": "En EC2 (IaaS) el cliente administra el SO invitado, sus parches y su firewall. Lo distinguirías de RDS o Lambda, donde AWS se encarga del SO subyacente.",
  "ref": "https://aws.amazon.com/compliance/shared-responsibility-model/"
 },
 {
  "id": "D1-14",
  "domain": 1,
  "q": "Un equipo quiere reducir el impacto ambiental de sus cargas: maximizar la utilización de los recursos aprovisionados y elegir hardware más eficiente en energía. ¿Qué pilar del AWS Well-Architected Framework aborda esto?",
  "options": [
   "Optimización de costos",
   "Excelencia operativa",
   "Sostenibilidad",
   "Eficiencia del rendimiento"
  ],
  "answer": [
   2
  ],
  "explain": "Sostenibilidad se centra en minimizar el impacto ambiental y la energía consumida. Optimización de costos también reduce desperdicio, pero su meta es el gasto, no el impacto ambiental.",
  "ref": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
 },
 {
  "id": "D1-15",
  "domain": 1,
  "q": "Un equipo de operaciones quiere definir toda su infraestructura como código, automatizar los despliegues y aprender de cada incidente para mejorar sus procedimientos. ¿Qué pilar del Well-Architected Framework describe mejor esto?",
  "options": [
   "Excelencia operativa",
   "Confiabilidad",
   "Eficiencia del rendimiento",
   "Seguridad"
  ],
  "answer": [
   0
  ],
  "explain": "Excelencia operativa cubre ejecutar y monitorear sistemas, automatizar cambios y mejorar procesos con base en lo aprendido. Confiabilidad trata de recuperarse de fallas, no de mejorar la operación.",
  "ref": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
 },
 {
  "id": "D1-16",
  "domain": 1,
  "q": "Una carga de trabajo debe recuperarse automáticamente de fallas de infraestructura y de interrupciones del servicio, y escalar para cubrir la demanda. ¿Qué pilar del Well-Architected Framework aborda esta capacidad?",
  "options": [
   "Optimización de costos",
   "Confiabilidad",
   "Eficiencia del rendimiento",
   "Excelencia operativa"
  ],
  "answer": [
   1
  ],
  "explain": "Confiabilidad es la capacidad de recuperarse de fallas y mitigar interrupciones. Eficiencia del rendimiento trata de elegir los recursos adecuados, no de la recuperación.",
  "ref": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
 },
 {
  "id": "D1-17",
  "domain": 1,
  "q": "Selecciona DOS principios de diseño del pilar de Confiabilidad del Well-Architected Framework.",
  "options": [
   "Administrar los cambios de forma manual para evitar errores",
   "Escalar horizontalmente para reducir el impacto de una falla individual",
   "Adivinar la capacidad necesaria y comprar por adelantado",
   "Probar los procedimientos de recuperación",
   "Usar un único recurso grande para simplificar la arquitectura"
  ],
  "answer": [
   1,
   3
  ],
  "explain": "Probar la recuperación y escalar horizontalmente (varios recursos pequeños) son principios de Confiabilidad. Adivinar capacidad es justo lo que la nube permite dejar de hacer.",
  "ref": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
 },
 {
  "id": "D1-18",
  "domain": 1,
  "q": "Una empresa necesita capacitar a sus empleados en habilidades de nube y rediseñar su estructura organizacional para soportar la adopción. ¿Qué perspectiva del AWS Cloud Adoption Framework (CAF) aborda esto?",
  "options": [
   "Plataforma",
   "Personas",
   "Operaciones",
   "Gobernanza"
  ],
  "answer": [
   1
  ],
  "explain": "Personas cubre cultura, capacitación y estructura organizacional. Gobernanza trata de gestionar riesgo, presupuesto y portafolio; Plataforma, de la arquitectura técnica.",
  "ref": "https://aws.amazon.com/cloud-adoption-framework/"
 },
 {
  "id": "D1-19",
  "domain": 1,
  "q": "Una empresa quiere diseñar la arquitectura de nube y aprovisionar ambientes con infraestructura como código, y además administrar el riesgo y el presupuesto de sus programas de TI. Selecciona las DOS perspectivas del CAF que cubren estas necesidades.",
  "options": [
   "Gobernanza",
   "Personas",
   "Operaciones",
   "Plataforma",
   "Negocio"
  ],
  "answer": [
   0,
   3
  ],
  "explain": "Plataforma cubre arquitectura y aprovisionamiento; Gobernanza cubre riesgo, presupuesto y gestión de programas. Negocio se enfoca en alinear la nube con resultados de negocio.",
  "ref": "https://aws.amazon.com/cloud-adoption-framework/"
 },
 {
  "id": "D1-20",
  "domain": 1,
  "q": "Una empresa quiere usar un CRM sin administrar servidores, sistema operativo ni actualizaciones del software; solo desea que sus usuarios lo utilicen. ¿Qué modelo de servicio de nube describe esto?",
  "options": [
   "Infraestructura como servicio (IaaS)",
   "Nube privada local",
   "Software como servicio (SaaS)",
   "Plataforma como servicio (PaaS)"
  ],
  "answer": [
   2
  ],
  "explain": "En SaaS el proveedor gestiona todo y el cliente solo usa la aplicación. En PaaS el cliente aún administra su aplicación y datos; en IaaS, además el SO.",
  "ref": "https://aws.amazon.com/types-of-cloud-computing/"
 },
 {
  "id": "D1-21",
  "domain": 1,
  "q": "Por regulación, una empresa debe mantener sus datos de clientes en su centro de datos local, pero quiere ejecutar sus aplicaciones web en AWS conectadas con ese centro de datos. ¿Qué modelo de implementación describe esto?",
  "options": [
   "Todo en la nube",
   "Nube privada en la nube",
   "Nube pública",
   "Nube híbrida"
  ],
  "answer": [
   3
  ],
  "explain": "Combinar infraestructura local con recursos en la nube conectados es nube híbrida. “Todo en la nube” implicaría migrar también los datos regulados.",
  "ref": "https://aws.amazon.com/types-of-cloud-computing/"
 },
 {
  "id": "D1-22",
  "domain": 1,
  "q": "Una aplicación debe seguir disponible si falla por completo un centro de datos, con el menor esfuerzo y latencia. ¿Cuál es la mejor opción?",
  "options": [
   "Desplegarla en varias zonas de disponibilidad de una Región",
   "Distribuir contenido con ubicaciones de borde",
   "Desplegarla en varias Regiones desde el inicio",
   "Usar una instancia EC2 más grande en una sola zona"
  ],
  "answer": [
   0
  ],
  "explain": "Las zonas de disponibilidad son uno o más centros de datos aislados dentro de una Región; varias AZ cubren la falla de un centro de datos. Multi-Región es mejor para desastres regionales y es más costoso y complejo.",
  "ref": "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"
 },
 {
  "id": "D1-23",
  "domain": 1,
  "q": "Un equipo de producto quiere lanzar un experimento: crear un ambiente de pruebas en minutos y eliminarlo si la idea fracasa, sin comprar hardware. ¿Qué ventaja de la nube describe esto?",
  "options": [
   "Beneficiarse de economías de escala masivas",
   "Aumentar la velocidad y la agilidad",
   "Dejar de adivinar la capacidad",
   "Llegar a ser global en minutos"
  ],
  "answer": [
   1
  ],
  "explain": "Agilidad es aprovisionar y descartar recursos rápido para experimentar. Dejar de adivinar la capacidad se refiere a no calcular de más o de menos la demanda futura.",
  "ref": "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html"
 },
 {
  "id": "D1-24",
  "domain": 1,
  "q": "Una empresa migra su base de datos MySQL instalada en servidores locales a Amazon RDS for MySQL, sin cambiar el diseño de la aplicación pero aprovechando un servicio administrado. ¿Qué estrategia de migración es?",
  "options": [
   "Rehost",
   "Repurchase",
   "Replatform",
   "Refactor"
  ],
  "answer": [
   2
  ],
  "explain": "Replatform es hacer pequeños ajustes para aprovechar la nube (por ejemplo, pasar a un servicio administrado) sin rediseñar. Rehost mueve tal cual; Refactor rediseña la aplicación.",
  "ref": "https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/"
 },
 {
  "id": "D1-25",
  "domain": 1,
  "q": "Una empresa reemplaza su CRM instalado en servidores propios por un producto SaaS comercial. ¿Qué estrategia de migración es?",
  "options": [
   "Rehost",
   "Repurchase",
   "Retain",
   "Replatform"
  ],
  "answer": [
   1
  ],
  "explain": "Repurchase es cambiar a un producto distinto, normalmente SaaS. Rehost y Replatform conservan la misma aplicación.",
  "ref": "https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/"
 },
 {
  "id": "D1-26",
  "domain": 1,
  "q": "Una aplicación en un mainframe depende de equipos que no pueden moverse todavía. La empresa decide no migrarla por ahora y revisarla más adelante. ¿Qué estrategia aplica?",
  "options": [
   "Relocate",
   "Refactor",
   "Retain",
   "Retire"
  ],
  "answer": [
   2
  ],
  "explain": "Retain es dejar la aplicación donde está. Retire sería apagarla porque ya no se necesita.",
  "ref": "https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/"
 },
 {
  "id": "D1-27",
  "domain": 1,
  "q": "Una empresa quiere mover sus cargas de VMware locales a VMware Cloud on AWS sin cambiar el hipervisor ni adquirir hardware nuevo. ¿Qué estrategia de migración es?",
  "options": [
   "Relocate",
   "Replatform",
   "Repurchase",
   "Rehost"
  ],
  "answer": [
   0
  ],
  "explain": "Relocate mueve cargas (por ejemplo, VMware) a la nube sin cambios en el hipervisor ni en las operaciones. Rehost reinstala las aplicaciones en EC2.",
  "ref": "https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/"
 },
 {
  "id": "D1-28",
  "domain": 1,
  "q": "Una empresa quiere migrar servidores físicos y virtuales a instancias EC2 mediante lift-and-shift, replicando los servidores de forma continua hasta el corte. ¿Qué servicio es el más adecuado?",
  "options": [
   "AWS Application Migration Service",
   "AWS DataSync",
   "AWS Snowball Edge",
   "AWS Database Migration Service"
  ],
  "answer": [
   0
  ],
  "explain": "Application Migration Service replica servidores completos hacia EC2. Database Migration Service mueve bases de datos, y DataSync mueve archivos y datos.",
  "ref": "https://aws.amazon.com/application-migration-service/"
 },
 {
  "id": "D1-29",
  "domain": 1,
  "q": "Una empresa migra una base de datos Oracle local a Amazon Aurora PostgreSQL y necesita que la base de origen siga operando durante la migración. ¿Qué servicio debería usar?",
  "options": [
   "Amazon S3 Transfer Acceleration",
   "AWS Database Migration Service (AWS DMS)",
   "AWS DataSync",
   "AWS Application Migration Service"
  ],
  "answer": [
   1
  ],
  "explain": "AWS DMS migra bases de datos (incluso heterogéneas) con el origen operativo. DataSync transfiere archivos, no bases de datos transaccionales.",
  "ref": "https://aws.amazon.com/dms/"
 },
 {
  "id": "D1-30",
  "domain": 1,
  "q": "Un equipo revisa su arquitectura para identificar instancias subutilizadas y apagar recursos que no generan valor. ¿Qué pilar del Well-Architected Framework guía esta revisión?",
  "options": [
   "Eficiencia del rendimiento",
   "Optimización de costos",
   "Excelencia operativa",
   "Confiabilidad"
  ],
  "answer": [
   1
  ],
  "explain": "Optimización de costos busca evitar gasto innecesario y ajustar recursos al consumo real. Eficiencia del rendimiento trata de escoger recursos que cumplan la demanda, no de reducir gasto.",
  "ref": "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html"
 },
 {
  "id": "D2-01",
  "domain": 2,
  "q": "Una empresa usa Amazon RDS for MySQL. Según el modelo de responsabilidad compartida, ¿qué DOS tareas son responsabilidad del cliente?",
  "options": [
   "Aplicar parches al sistema operativo de la instancia de base de datos",
   "Configurar las reglas de los grupos de seguridad que controlan el acceso a la base de datos",
   "Reemplazar el hardware del servidor que aloja la instancia",
   "Administrar los usuarios de la base de datos y los permisos sobre los datos",
   "Mantener la seguridad física del centro de datos"
  ],
  "answer": [
   1,
   3
  ],
  "explain": "En RDS, AWS se encarga del hardware, el centro de datos y los parches del sistema operativo; el cliente configura el acceso de red (grupos de seguridad), los usuarios y los permisos, y protege sus datos.",
  "ref": "https://aws.amazon.com/compliance/shared-responsibility-model/"
 },
 {
  "id": "D2-02",
  "domain": 2,
  "q": "Una empresa sigue las mejores prácticas de IAM y usa el usuario raíz solo cuando es estrictamente necesario. ¿Cuál de estas tareas requiere credenciales del usuario raíz?",
  "options": [
   "Crear usuarios y roles de IAM",
   "Lanzar instancias de Amazon EC2 en cualquier región",
   "Cerrar la cuenta de AWS",
   "Configurar alertas de AWS Budgets"
  ],
  "answer": [
   2
  ],
  "explain": "Cerrar la cuenta es de las pocas tareas exclusivas del usuario raíz (también cambiar ciertos ajustes de la cuenta o restaurar permisos de IAM). Administrar IAM o lanzar recursos se hace con usuarios o roles de IAM.",
  "ref": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html"
 },
 {
  "id": "D2-03",
  "domain": 2,
  "q": "Una empresa revisa la seguridad de su cuenta de AWS recién creada. ¿Qué DOS acciones siguen las mejores prácticas para proteger el usuario raíz?",
  "options": [
   "Habilitar la autenticación multifactor (MFA) en el usuario raíz",
   "Crear claves de acceso para el usuario raíz y guardarlas cifradas en AWS Secrets Manager",
   "Usar el usuario raíz para las tareas administrativas diarias, ya que tiene todos los permisos",
   "No crear claves de acceso para el usuario raíz, y eliminarlas si ya existen",
   "Compartir la contraseña del usuario raíz con los administradores para casos de emergencia"
  ],
  "answer": [
   0,
   3
  ],
  "explain": "El usuario raíz se protege con MFA y sin claves de acceso, que son de larga duración y con privilegios totales. No se usa para el trabajo diario ni se comparte su contraseña.",
  "ref": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html"
 },
 {
  "id": "D2-04",
  "domain": 2,
  "q": "Una aplicación en una instancia de Amazon EC2 debe llamar a la API de Amazon S3. El equipo quiere evitar guardar claves de acceso en el código o en la instancia. ¿Cuál es la mejor práctica?",
  "options": [
   "Guardar las claves de acceso en variables de entorno cifradas",
   "Asociar un rol de IAM a la instancia mediante un perfil de instancia",
   "Crear un usuario de IAM compartido y rotar sus claves cada mes",
   "Guardar las claves en un bucket de S3 privado"
  ],
  "answer": [
   1
  ],
  "explain": "Un rol de IAM entrega credenciales temporales que se rotan solas. Cualquier opción que guarde claves de larga duración sigue siendo un riesgo.",
  "ref": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html"
 },
 {
  "id": "D2-05",
  "domain": 2,
  "q": "Un equipo de seguridad explica cómo funcionan los roles de AWS IAM. ¿Qué DOS afirmaciones sobre los roles de IAM son correctas?",
  "options": [
   "Entregan credenciales temporales a quien los asume",
   "Tienen una contraseña permanente y claves de acceso de larga duración",
   "Pueden ser asumidos por servicios de AWS, como Amazon EC2 o AWS Lambda",
   "Solo pueden ser asumidos por usuarios humanos de la misma cuenta",
   "Eliminan la necesidad de definir políticas de permisos"
  ],
  "answer": [
   0,
   2
  ],
  "explain": "Los roles dan credenciales temporales y pueden asumirlos servicios, aplicaciones y usuarios (incluso de otras cuentas). Siguen necesitando políticas que definan sus permisos.",
  "ref": "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html"
 },
 {
  "id": "D2-06",
  "domain": 2,
  "q": "Una empresa con 25 cuentas en AWS Organizations quiere que sus empleados inicien sesión una sola vez con las credenciales de su directorio corporativo y accedan a varias cuentas y aplicaciones asignadas a su rol, sin crear usuarios de IAM en cada cuenta. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon Cognito",
   "Grupos de IAM en cada cuenta",
   "AWS IAM Identity Center",
   "AWS Secrets Manager"
  ],
  "answer": [
   2
  ],
  "explain": "IAM Identity Center da inicio de sesión único (SSO) a múltiples cuentas y aplicaciones para la fuerza laboral. Cognito es para los usuarios finales de tus propias aplicaciones.",
  "ref": "https://aws.amazon.com/iam/identity-center/"
 },
 {
  "id": "D2-07",
  "domain": 2,
  "q": "Una empresa quiere detectar de forma continua comportamientos sospechosos en sus cuentas, como credenciales de IAM usadas desde ubicaciones inusuales o instancias de EC2 que se comunican con servidores de minería de criptomonedas. No quiere instalar agentes ni administrar infraestructura. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon Inspector",
   "Amazon Macie",
   "Amazon GuardDuty",
   "AWS Config"
  ],
  "answer": [
   2
  ],
  "explain": "GuardDuty detecta amenazas analizando registros como CloudTrail, VPC Flow Logs y DNS, sin agentes. Inspector busca vulnerabilidades; Macie, datos sensibles; Config, cambios de configuración.",
  "ref": "https://aws.amazon.com/guardduty/"
 },
 {
  "id": "D2-08",
  "domain": 2,
  "q": "Una empresa quiere escanear de forma automática y continua sus instancias de Amazon EC2, imágenes de contenedor y funciones de AWS Lambda para detectar vulnerabilidades de software conocidas y exposición de red no intencionada. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon GuardDuty",
   "Amazon Macie",
   "Amazon Inspector",
   "AWS Config"
  ],
  "answer": [
   2
  ],
  "explain": "Amazon Inspector es el servicio de gestión de vulnerabilidades. GuardDuty detecta comportamiento sospechoso, no vulnerabilidades de software.",
  "ref": "https://aws.amazon.com/inspector/"
 },
 {
  "id": "D2-09",
  "domain": 2,
  "q": "Una empresa quiere descubrir y proteger de forma automática datos sensibles, como números de tarjeta y datos personales, almacenados en cientos de buckets de Amazon S3. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon Inspector",
   "Amazon Macie",
   "AWS Config",
   "Amazon GuardDuty"
  ],
  "answer": [
   1
  ],
  "explain": "Macie usa aprendizaje automático para descubrir y clasificar datos sensibles (PII) en S3.",
  "ref": "https://aws.amazon.com/macie/"
 },
 {
  "id": "D2-10",
  "domain": 2,
  "q": "Una empresa recibió una alerta de GuardDuty sobre actividad sospechosa de un rol de IAM. El equipo de seguridad necesita investigar la causa raíz analizando las relaciones entre usuarios, roles, direcciones IP y recursos a lo largo del tiempo, con visualizaciones basadas en grafos. ¿Qué servicio es la mejor opción?",
  "options": [
   "AWS CloudTrail Lake",
   "Amazon Detective",
   "AWS Security Hub",
   "Amazon Inspector"
  ],
  "answer": [
   1
  ],
  "explain": "Detective construye grafos de relaciones para investigar la causa raíz de un hallazgo. Security Hub solo centraliza y prioriza hallazgos.",
  "ref": "https://aws.amazon.com/detective/"
 },
 {
  "id": "D2-11",
  "domain": 2,
  "q": "Una empresa quiere identificar qué buckets de S3, roles de IAM y claves de KMS están compartidos con entidades externas a su organización, para detectar accesos no intencionados. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon Macie",
   "AWS IAM Access Analyzer",
   "Amazon Inspector",
   "Amazon GuardDuty"
  ],
  "answer": [
   1
  ],
  "explain": "Access Analyzer analiza las políticas para encontrar recursos compartidos con entidades externas. GuardDuty detecta actividad sospechosa, no revisa quién tiene acceso por política.",
  "ref": "https://aws.amazon.com/iam/access-analyzer/"
 },
 {
  "id": "D2-12",
  "domain": 2,
  "q": "Una auditoría descubre que un bucket de Amazon S3 fue eliminado ayer. El equipo de seguridad necesita saber qué usuario o rol realizó la acción, desde qué dirección IP y a qué hora exacta. ¿Qué servicio es la mejor opción?",
  "options": [
   "AWS Config",
   "AWS CloudTrail",
   "Amazon CloudWatch",
   "Amazon Inspector"
  ],
  "answer": [
   1
  ],
  "explain": "CloudTrail registra las llamadas a la API: quién hizo qué, desde dónde y cuándo. Config registra cómo cambió la configuración de un recurso.",
  "ref": "https://aws.amazon.com/cloudtrail/"
 },
 {
  "id": "D2-13",
  "domain": 2,
  "q": "El equipo de seguridad necesita evaluar de forma continua si los recursos cumplen reglas de configuración, por ejemplo que todos los volúmenes de Amazon EBS estén cifrados, y consultar el historial de cambios de configuración de cada recurso. ¿Qué servicio es la mejor opción?",
  "options": [
   "AWS CloudTrail",
   "AWS Config",
   "Amazon Inspector",
   "AWS Audit Manager"
  ],
  "answer": [
   1
  ],
  "explain": "AWS Config evalúa reglas de cumplimiento y guarda el historial de configuración de los recursos. Audit Manager recopila evidencia para auditorías, no evalúa reglas de configuración en tiempo real.",
  "ref": "https://aws.amazon.com/config/"
 },
 {
  "id": "D2-14",
  "domain": 2,
  "q": "Una empresa necesita descargar el informe SOC 2 y los certificados ISO 27001 de AWS para entregarlos a un auditor externo. ¿Qué servicio es la mejor opción?",
  "options": [
   "AWS Artifact",
   "AWS Audit Manager",
   "AWS Config",
   "AWS Trusted Advisor"
  ],
  "answer": [
   0
  ],
  "explain": "Artifact es el portal de los informes de cumplimiento de AWS (algunos bajo acuerdo de confidencialidad). Audit Manager, en cambio, recopila evidencia de cumplimiento de tus propios recursos.",
  "ref": "https://aws.amazon.com/artifact/"
 },
 {
  "id": "D2-15",
  "domain": 2,
  "q": "Una empresa de pagos firmó un contrato que exige que sus claves criptográficas residan en hardware dedicado exclusivamente a ella (no compartido con otros clientes), que AWS no tenga acceso al material de las claves y que la empresa administre por sí misma los usuarios del HSM. ¿Qué es la mejor opción?",
  "options": [
   "AWS KMS con claves administradas por AWS",
   "AWS KMS con claves administradas por el cliente",
   "AWS CloudHSM",
   "AWS Secrets Manager"
  ],
  "answer": [
   2
  ],
  "explain": "CloudHSM da HSM dedicados y de un solo cliente, con control exclusivo de las claves. KMS es un servicio administrado e integrado con otros servicios de AWS.",
  "ref": "https://aws.amazon.com/cloudhsm/"
 },
 {
  "id": "D2-16",
  "domain": 2,
  "q": "Una empresa necesita bloquear de forma explícita el tráfico entrante desde un rango de direcciones IP maliciosas hacia todas las instancias de una subred, sin modificar cada instancia. El control debe evaluar el tráfico de entrada y de salida por separado, sin recordar el estado de las conexiones. ¿Qué es la mejor opción?",
  "options": [
   "Grupos de seguridad con una regla de denegación",
   "Listas de control de acceso a la red (ACL de red)",
   "AWS WAF asociado a las instancias",
   "Tablas de enrutamiento de la subred"
  ],
  "answer": [
   1
  ],
  "explain": "Las ACL de red operan a nivel de subred, no guardan estado y admiten reglas de permitir y de denegar. Los grupos de seguridad solo permiten y son con estado.",
  "ref": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html"
 },
 {
  "id": "D2-17",
  "domain": 2,
  "q": "Una empresa publica una aplicación web detrás de un Application Load Balancer. Necesita bloquear intentos de inyección SQL y XSS en la capa de aplicación, y además mitigar ataques DDoS de las capas 3 y 4 sin costo adicional. ¿Qué DOS servicios cumplen el requisito?",
  "options": [
   "AWS WAF",
   "AWS Shield Standard",
   "Amazon GuardDuty",
   "AWS Network Firewall",
   "AWS Shield Advanced"
  ],
  "answer": [
   0,
   1
  ],
  "explain": "WAF filtra tráfico web en la capa 7 (SQLi, XSS). Shield Standard viene incluido sin costo y protege contra DDoS comunes de las capas 3 y 4. Shield Advanced tiene cargo adicional.",
  "ref": "https://aws.amazon.com/shield/"
 },
 {
  "id": "D2-18",
  "domain": 2,
  "q": "Una empresa usa AWS Organizations con 40 cuentas. El equipo de seguridad necesita garantizar que ninguna cuenta, ni siquiera con usuarios administradores, pueda deshabilitar AWS CloudTrail ni lanzar recursos fuera de las regiones aprobadas. ¿Qué es la mejor opción?",
  "options": [
   "Políticas de IAM con denegación explícita asignadas a cada usuario administrador",
   "Políticas de control de servicio (SCP) aplicadas a la unidad organizativa",
   "Límites de permisos en cada rol de IAM",
   "AWS Config con reglas de remediación automática en cada cuenta"
  ],
  "answer": [
   1
  ],
  "explain": "Las SCP fijan el máximo de permisos de las cuentas miembro, incluso para sus administradores. No conceden permisos, solo los limitan.",
  "ref": "https://aws.amazon.com/organizations/"
 },
 {
  "id": "D2-19",
  "domain": 2,
  "q": "Una aplicación necesita almacenar credenciales de base de datos y rotarlas automáticamente cada 30 días sin cambios manuales en el código. ¿Qué servicio es la mejor opción?",
  "options": [
   "AWS IAM Identity Center",
   "AWS Key Management Service (AWS KMS)",
   "Amazon Cognito",
   "AWS Secrets Manager"
  ],
  "answer": [
   3
  ],
  "explain": "Secrets Manager almacena secretos y automatiza su rotación. KMS administra claves de cifrado, no guarda ni rota credenciales de aplicaciones.",
  "ref": "https://aws.amazon.com/secrets-manager/"
 },
 {
  "id": "D2-20",
  "domain": 2,
  "q": "Selecciona DOS afirmaciones correctas sobre las claves administradas por el cliente en AWS KMS.",
  "options": [
   "AWS puede usar la clave para descifrar datos sin ninguna política",
   "El cliente controla la política de acceso a la clave y puede habilitar su rotación",
   "Las claves no pueden deshabilitarse una vez creadas",
   "La clave se almacena en un HSM dedicado de un único inquilino administrado por el cliente",
   "El uso de la clave puede auditarse mediante AWS CloudTrail"
  ],
  "answer": [
   1,
   4
  ],
  "explain": "En KMS el cliente define políticas y rotación, y cada uso queda en CloudTrail. El HSM de único inquilino describe CloudHSM, no KMS.",
  "ref": "https://aws.amazon.com/kms/"
 },
 {
  "id": "D2-21",
  "domain": 2,
  "q": "Una empresa quiere una revisión rápida que le indique, entre otras cosas, si la cuenta raíz no tiene MFA y si hay security groups con puertos abiertos a todo Internet. ¿Qué herramienta ofrece estas verificaciones?",
  "options": [
   "AWS Trusted Advisor",
   "AWS Artifact",
   "Amazon GuardDuty",
   "Amazon Macie"
  ],
  "answer": [
   0
  ],
  "explain": "Trusted Advisor compara tu cuenta con buenas prácticas, incluidas verificaciones de seguridad. GuardDuty detecta amenazas con análisis de logs, no revisa configuraciones de MFA.",
  "ref": "https://aws.amazon.com/premiumsupport/technology/trusted-advisor/"
 },
 {
  "id": "D2-22",
  "domain": 2,
  "q": "Un equipo de seguridad quiere ver en un solo lugar los hallazgos de seguridad de varios servicios y varias cuentas, junto con verificaciones automatizadas contra buenas prácticas. ¿Qué servicio debería usar?",
  "options": [
   "AWS Security Hub",
   "AWS Config",
   "Amazon Inspector",
   "AWS CloudTrail"
  ],
  "answer": [
   0
  ],
  "explain": "Security Hub agrega y prioriza hallazgos de varios servicios y cuentas. Inspector es una de las fuentes que alimentan esa vista, no la centraliza.",
  "ref": "https://aws.amazon.com/security-hub/"
 },
 {
  "id": "D2-23",
  "domain": 2,
  "q": "Un equipo de cumplimiento quiere recopilar evidencia de forma continua y automática sobre el uso de AWS para preparar auditorías. ¿Qué servicio ayuda más directamente?",
  "options": [
   "AWS Audit Manager",
   "AWS Artifact",
   "Amazon Detective",
   "AWS CloudTrail"
  ],
  "answer": [
   0
  ],
  "explain": "Audit Manager recopila evidencia de tus propios recursos de forma continua. Artifact entrega los reportes de cumplimiento de AWS, no evidencia de tu cuenta.",
  "ref": "https://aws.amazon.com/audit-manager/"
 },
 {
  "id": "D2-24",
  "domain": 2,
  "q": "Una empresa desarrolla una aplicación móvil para clientes finales y quiere permitir el registro, el inicio de sesión y el acceso con proveedores de identidad sociales. ¿Qué servicio es el más adecuado?",
  "options": [
   "Amazon Cognito",
   "AWS IAM con un usuario por cliente",
   "AWS Directory Service",
   "AWS IAM Identity Center"
  ],
  "answer": [
   0
  ],
  "explain": "Cognito gestiona identidades de usuarios de aplicaciones, incluido el acceso social. IAM Identity Center es para la fuerza laboral de la empresa, no para clientes finales.",
  "ref": "https://aws.amazon.com/cognito/"
 },
 {
  "id": "D2-25",
  "domain": 2,
  "q": "Una organización con muchas cuentas en AWS Organizations quiere definir y aplicar reglas de AWS WAF y de security groups de forma centralizada, incluyendo las cuentas nuevas. ¿Qué servicio debería usar?",
  "options": [
   "AWS Shield Advanced",
   "Políticas de control de servicio (SCP)",
   "Amazon GuardDuty",
   "AWS Firewall Manager"
  ],
  "answer": [
   3
  ],
  "explain": "Firewall Manager administra reglas de firewall de forma centralizada en varias cuentas. Las SCP limitan permisos de IAM, no configuran WAF ni security groups.",
  "ref": "https://aws.amazon.com/firewall-manager/"
 },
 {
  "id": "D2-26",
  "domain": 2,
  "q": "Una empresa necesita inspeccionar el tráfico de red que entra y sale de su VPC y filtrar por reglas de dominios y protocolos, con inspección con estado. ¿Qué servicio es el más adecuado?",
  "options": [
   "AWS Network Firewall",
   "Lista de control de acceso a la red (NACL)",
   "AWS WAF",
   "AWS Shield Standard"
  ],
  "answer": [
   0
  ],
  "explain": "Network Firewall es un firewall administrado para el tráfico de la VPC con inspección con estado. WAF protege aplicaciones web (capa 7) en servicios como CloudFront o ALB.",
  "ref": "https://aws.amazon.com/network-firewall/"
 },
 {
  "id": "D2-27",
  "domain": 2,
  "q": "Una empresa de comercio electrónico sufre ataques DDoS sofisticados y quiere acceso a un equipo de respuesta de AWS y protección contra picos de costos causados por ataques. ¿Qué servicio debería contratar?",
  "options": [
   "Amazon GuardDuty",
   "AWS WAF",
   "AWS Shield Standard",
   "AWS Shield Advanced"
  ],
  "answer": [
   3
  ],
  "explain": "Shield Advanced añade equipo de respuesta y protección de costos por DDoS. Shield Standard ya viene incluido sin costo, pero no ofrece esas características.",
  "ref": "https://aws.amazon.com/shield/"
 },
 {
  "id": "D2-28",
  "domain": 2,
  "q": "Selecciona DOS características de los security groups de Amazon VPC.",
  "options": [
   "Se aplican a nivel de subred",
   "Son sin estado (stateless)",
   "Admiten reglas de denegar explícitas",
   "Son con estado (stateful)",
   "Solo admiten reglas de permitir"
  ],
  "answer": [
   3,
   4
  ],
  "explain": "Los security groups actúan a nivel de instancia, son con estado y solo permiten tráfico. Las NACL son sin estado y trabajan a nivel de subred; esas sí admiten reglas de denegar.",
  "ref": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html"
 },
 {
  "id": "D2-29",
  "domain": 2,
  "q": "Una empresa ejecuta su lógica en AWS Lambda. Según el modelo de responsabilidad compartida, ¿qué es responsabilidad del cliente?",
  "options": [
   "El mantenimiento del entorno de ejecución del lenguaje",
   "La seguridad física del hardware",
   "El parcheo del sistema operativo de los servidores donde corre",
   "El código de la función y los permisos de IAM que se le asignan"
  ],
  "answer": [
   3
  ],
  "explain": "En Lambda AWS administra servidores, SO y runtime; el cliente responde por su código, sus datos y los permisos. En EC2, en cambio, el cliente parchea el SO.",
  "ref": "https://aws.amazon.com/compliance/shared-responsibility-model/"
 },
 {
  "id": "D2-30",
  "domain": 2,
  "q": "Una aplicación solo necesita leer objetos de un bucket de S3 específico. ¿Qué política respeta mejor el principio de mínimo privilegio?",
  "options": [
   "Adjuntar la política administrada AmazonS3FullAccess",
   "Adjuntar AdministratorAccess para evitar errores de permisos",
   "Permitir s3:* sobre todos los recursos",
   "Permitir solo s3:GetObject sobre los objetos de ese bucket"
  ],
  "answer": [
   3
  ],
  "explain": "Mínimo privilegio es conceder solo las acciones y recursos necesarios. Las demás opciones dan acceso de escritura o a recursos que la aplicación no necesita.",
  "ref": "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html"
 },
 {
  "id": "D3-01",
  "domain": 3,
  "q": "Una empresa ejecuta una aplicación de análisis en cientos de instancias de Amazon EC2 con Linux, distribuidas en varias zonas de disponibilidad. Todas deben leer y escribir de forma concurrente en el mismo sistema de archivos compartido, cuya capacidad debe crecer automáticamente sin aprovisionarla. ¿Qué solución es la mejor?",
  "options": [
   "Amazon EBS con Multi-Attach",
   "Amazon EFS",
   "Amazon S3 montado en cada instancia",
   "Amazon FSx for Windows File Server"
  ],
  "answer": [
   1
  ],
  "explain": "EFS es un sistema de archivos NFS elástico y compartido entre muchas instancias Linux y varias AZ. EBS se asocia a instancias de una sola AZ.",
  "ref": "https://aws.amazon.com/efs/"
 },
 {
  "id": "D3-02",
  "domain": 3,
  "q": "Una empresa ejecuta MySQL en instancias EC2 y quiere reducir la carga operativa de parches y respaldos. Necesita compatibilidad con MySQL, mayor rendimiento, almacenamiento que escale solo y datos replicados en tres zonas de disponibilidad. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon RDS for MySQL con Multi-AZ",
   "Amazon Aurora (compatible con MySQL)",
   "Amazon DynamoDB con tablas globales",
   "Amazon Redshift"
  ],
  "answer": [
   1
  ],
  "explain": "Aurora replica el almacenamiento en seis copias a través de tres AZ y lo escala automáticamente. RDS Multi-AZ usa una réplica en espera en otra AZ.",
  "ref": "https://aws.amazon.com/rds/aurora/"
 },
 {
  "id": "D3-03",
  "domain": 3,
  "q": "Una aplicación móvil de pedidos recibe picos de tráfico impredecibles. Almacena datos con un modelo clave-valor sin esquema fijo, necesita latencia de milisegundos de un dígito a cualquier escala y la empresa no quiere aprovisionar ni administrar servidores de base de datos. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon RDS for PostgreSQL con Multi-AZ",
   "Amazon Redshift",
   "Amazon DynamoDB",
   "Amazon Neptune"
  ],
  "answer": [
   2
  ],
  "explain": "DynamoDB es una base NoSQL clave-valor sin servidores y de baja latencia a cualquier escala.",
  "ref": "https://aws.amazon.com/dynamodb/"
 },
 {
  "id": "D3-04",
  "domain": 3,
  "q": "Un equipo de análisis recibe archivos CSV y Parquet en un bucket de Amazon S3. Los analistas quieren ejecutar consultas SQL ocasionales directamente sobre esos archivos, sin cargar los datos en otra base de datos ni administrar infraestructura, y pagando solo por las consultas que ejecutan. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon Redshift",
   "Amazon Athena",
   "Amazon EMR",
   "Amazon RDS"
  ],
  "answer": [
   1
  ],
  "explain": "Athena consulta datos en S3 con SQL, sin servidores y con pago por consulta. Redshift requiere cargar los datos en un data warehouse.",
  "ref": "https://aws.amazon.com/athena/"
 },
 {
  "id": "D3-05",
  "domain": 3,
  "q": "Una aplicación de comercio electrónico usa Amazon RDS. Durante las campañas, las consultas de lectura repetitivas saturan la base de datos y aumenta la latencia. La empresa quiere reducir la carga y la latencia con el menor cambio posible. ¿Qué opción es la mejor?",
  "options": [
   "Migrar los datos a Amazon Redshift",
   "Colocar Amazon ElastiCache como caché delante de la base de datos",
   "Migrar a Amazon Neptune",
   "Agregar volúmenes de Amazon EBS a la instancia de RDS"
  ],
  "answer": [
   1
  ],
  "explain": "ElastiCache almacena en memoria los resultados que se consultan repetidamente y descarga la base de datos. Redshift y Neptune son para otros tipos de carga.",
  "ref": "https://aws.amazon.com/elasticache/"
 },
 {
  "id": "D3-06",
  "domain": 3,
  "q": "Una empresa almacena en Amazon S3 datos con un patrón de acceso impredecible: algunos objetos se consultan a diario y otros pasan meses sin leerse. Quiere optimizar costos moviendo los objetos automáticamente entre niveles de acceso, sin sobrecarga operativa ni cargos por recuperación. ¿Qué opción es la mejor?",
  "options": [
   "S3 Standard-IA",
   "S3 Intelligent-Tiering",
   "S3 Glacier Flexible Retrieval",
   "S3 One Zone-IA"
  ],
  "answer": [
   1
  ],
  "explain": "Intelligent-Tiering mueve los objetos entre niveles según su uso y no cobra por recuperación. Standard-IA y One Zone-IA cobran por recuperar datos.",
  "ref": "https://aws.amazon.com/s3/storage-classes/"
 },
 {
  "id": "D3-07",
  "domain": 3,
  "q": "Una empresa debe conservar durante cinco años datos de S3 que casi nunca se consultan, pero que deben recuperarse en milisegundos cuando se necesiten. ¿Qué clase de almacenamiento es la más económica que cumple el requisito?",
  "options": [
   "S3 Standard",
   "S3 Standard-IA",
   "S3 Glacier Flexible Retrieval",
   "S3 Glacier Deep Archive"
  ],
  "answer": [
   1
  ],
  "explain": "Standard-IA da acceso en milisegundos con menor costo de almacenamiento que Standard. Glacier Flexible Retrieval y Deep Archive tardan minutos u horas en recuperar.",
  "ref": "https://aws.amazon.com/s3/storage-classes/"
 },
 {
  "id": "D3-08",
  "domain": 3,
  "q": "Una empresa tiene terabytes de datos en servidores NFS on-premises y quiere copiarlos a Amazon S3 de forma programada y automatizada a través de su conexión de red, con verificación de integridad y sin escribir scripts propios. No necesita acceso híbrido continuo. ¿Qué servicio es la mejor opción?",
  "options": [
   "AWS Storage Gateway",
   "AWS DataSync",
   "AWS Snowball Edge",
   "AWS Direct Connect"
  ],
  "answer": [
   1
  ],
  "explain": "DataSync automatiza transferencias en línea programadas. Snow Family mueve datos con un dispositivo físico, y Storage Gateway da acceso híbrido continuo.",
  "ref": "https://aws.amazon.com/datasync/"
 },
 {
  "id": "D3-09",
  "domain": 3,
  "q": "Una empresa tiene una aplicación global con usuarios en Asia y Europa. Usa TCP y UDP con direcciones IP estáticas que los clientes tienen en listas blancas. Quiere mejorar el rendimiento y la conmutación por error entre regiones usando la red global de AWS. El contenido no es cacheable. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon CloudFront",
   "AWS Global Accelerator",
   "Amazon Route 53 con enrutamiento por geolocalización",
   "AWS Direct Connect"
  ],
  "answer": [
   1
  ],
  "explain": "Global Accelerator da IP estáticas anycast, soporta TCP y UDP y conmuta rápido entre regiones. CloudFront sirve contenido cacheable; Route 53 resuelve nombres por DNS.",
  "ref": "https://aws.amazon.com/global-accelerator/"
 },
 {
  "id": "D3-10",
  "domain": 3,
  "q": "Una empresa transfiere de forma constante grandes volúmenes de datos desde su centro de datos a AWS. Necesita ancho de banda consistente, latencia predecible y que el tráfico no viaje por la internet pública. ¿Qué solución es la mejor?",
  "options": [
   "AWS Site-to-Site VPN",
   "AWS Direct Connect",
   "AWS PrivateLink",
   "Amazon CloudFront"
  ],
  "answer": [
   1
  ],
  "explain": "Direct Connect es una conexión dedicada y privada hacia AWS. Site-to-Site VPN cifra el tráfico pero viaja por internet.",
  "ref": "https://aws.amazon.com/directconnect/"
 },
 {
  "id": "D3-11",
  "domain": 3,
  "q": "Una empresa ejecuta servidores de aplicación en Amazon EC2 dentro de una subred privada. Deben descargar actualizaciones desde internet, pero ninguna conexión iniciada desde internet debe poder llegar a ellos. La empresa quiere una solución administrada por AWS, sin mantener instancias adicionales. ¿Qué opción es la mejor?",
  "options": [
   "Un Internet Gateway asociado a la subred privada con una ruta a 0.0.0.0/0",
   "Un NAT Gateway en una subred pública, con ruta desde la subred privada",
   "Una instancia EC2 con NAT configurada manualmente en una subred pública",
   "VPC peering con una VPC que tenga acceso a internet"
  ],
  "answer": [
   1
  ],
  "explain": "El NAT Gateway es administrado y permite conexiones salientes desde subredes privadas sin aceptar conexiones entrantes. Una instancia NAT exige mantenerla tú.",
  "ref": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"
 },
 {
  "id": "D3-12",
  "domain": 3,
  "q": "Un proveedor quiere exponer un servicio a clientes en otras VPC de forma privada, sin que el tráfico pase por internet y sin conectar las VPC completas entre sí. ¿Qué opción es la mejor?",
  "options": [
   "VPC peering",
   "AWS PrivateLink",
   "AWS Site-to-Site VPN",
   "Internet Gateway con grupos de seguridad restrictivos"
  ],
  "answer": [
   1
  ],
  "explain": "PrivateLink publica un servicio de forma privada para consumidores en otras VPC, sin unir las redes. VPC peering conecta las dos VPC completas.",
  "ref": "https://aws.amazon.com/privatelink/"
 },
 {
  "id": "D3-13",
  "domain": 3,
  "q": "Una aplicación web aloja varios microservicios en grupos de instancias EC2. La empresa necesita un único balanceador que enrute el tráfico HTTP/HTTPS hacia diferentes grupos según la ruta de la URL, por ejemplo /api hacia un grupo y /imagenes hacia otro. ¿Qué opción es la mejor?",
  "options": [
   "Network Load Balancer",
   "Application Load Balancer",
   "Gateway Load Balancer",
   "Amazon Route 53 con enrutamiento ponderado"
  ],
  "answer": [
   1
  ],
  "explain": "El Application Load Balancer trabaja en la capa 7 y enruta por ruta, host o encabezados. El Network Load Balancer trabaja en la capa 4 (TCP/UDP).",
  "ref": "https://aws.amazon.com/elasticloadbalancing/application-load-balancer/"
 },
 {
  "id": "D3-14",
  "domain": 3,
  "q": "Un sitio de comercio electrónico recibe pedidos en picos. Una función de backend procesa cada pedido a su ritmo. La empresa quiere desacoplar ambos componentes y asegurarse de que, si el backend falla o se ralentiza, los pedidos queden almacenados hasta ser procesados, sin perderse. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon SNS",
   "Amazon SQS",
   "AWS Step Functions",
   "Amazon CloudWatch"
  ],
  "answer": [
   1
  ],
  "explain": "SQS es una cola que guarda los mensajes hasta que un consumidor los procesa. SNS reparte notificaciones a los suscriptores, sin guardarlas para procesarlas después.",
  "ref": "https://aws.amazon.com/sqs/"
 },
 {
  "id": "D3-15",
  "domain": 3,
  "q": "Una empresa quiere ejecutar una función de AWS Lambda cada vez que una instancia de EC2 cambie a estado detenida, y también reaccionar a eventos de aplicaciones SaaS de terceros. Necesita definir reglas que filtren y enruten esos eventos hacia diferentes destinos. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon SNS",
   "Amazon SQS",
   "Amazon EventBridge",
   "AWS Step Functions"
  ],
  "answer": [
   2
  ],
  "explain": "EventBridge recibe eventos de servicios de AWS, aplicaciones propias y socios SaaS, y los enruta con reglas.",
  "ref": "https://aws.amazon.com/eventbridge/"
 },
 {
  "id": "D3-16",
  "domain": 3,
  "q": "Una empresa procesa pedidos en varios pasos: validar el pago, verificar inventario, enviar confirmación y manejar errores con reintentos. Quiere coordinar estos pasos como un flujo de trabajo visual con funciones de AWS Lambda, sin escribir código de orquestación. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon SQS",
   "Amazon SNS",
   "AWS Step Functions",
   "Amazon EventBridge"
  ],
  "answer": [
   2
  ],
  "explain": "Step Functions orquesta pasos con un flujo visual, reintentos y manejo de errores. SQS y SNS mueven mensajes, pero no coordinan un flujo.",
  "ref": "https://aws.amazon.com/step-functions/"
 },
 {
  "id": "D3-17",
  "domain": 3,
  "q": "Una empresa empaquetó su aplicación en contenedores Docker que deben ejecutarse de forma continua. El equipo no quiere aprovisionar, escalar ni parchear instancias de EC2 para ejecutarlos. ¿Qué opción es la mejor?",
  "options": [
   "AWS Lambda",
   "Amazon ECS con instancias EC2 administradas por la empresa",
   "AWS Fargate",
   "Amazon Lightsail"
  ],
  "answer": [
   2
  ],
  "explain": "Fargate ejecuta contenedores (con ECS o EKS) sin administrar servidores. Lambda está pensado para funciones por evento, con duración limitada.",
  "ref": "https://aws.amazon.com/fargate/"
 },
 {
  "id": "D3-18",
  "domain": 3,
  "q": "Un equipo quiere definir su infraestructura en AWS con un lenguaje de programación conocido, como Python o TypeScript, usando bucles y clases para reutilizar componentes. La definición debe terminar desplegándose como pilas de AWS CloudFormation. ¿Qué herramienta es la mejor opción?",
  "options": [
   "Plantillas de CloudFormation escritas a mano en JSON",
   "AWS Cloud Development Kit (AWS CDK)",
   "AWS Elastic Beanstalk",
   "AWS Systems Manager"
  ],
  "answer": [
   1
  ],
  "explain": "El CDK define la infraestructura en código y la sintetiza en plantillas de CloudFormation.",
  "ref": "https://aws.amazon.com/cdk/"
 },
 {
  "id": "D3-19",
  "domain": 3,
  "q": "Los administradores deben acceder a instancias EC2 en subredes privadas para solucionar problemas. La empresa prohíbe abrir el puerto 22, usar bastion hosts y administrar llaves SSH. Además, requiere un registro auditable de cada sesión. ¿Qué solución cumple mejor los requisitos?",
  "options": [
   "EC2 Instance Connect",
   "AWS Systems Manager Session Manager",
   "AWS Client VPN",
   "AWS CloudShell"
  ],
  "answer": [
   1
  ],
  "explain": "Session Manager da shell por el agente de SSM e IAM, sin puertos de entrada, bastion ni llaves, y registra las sesiones. CloudShell es una terminal en el navegador para usar la CLI, no una conexión a instancias privadas.",
  "ref": "https://aws.amazon.com/systems-manager/"
 },
 {
  "id": "D3-20",
  "domain": 3,
  "q": "Un equipo de desarrollo tiene una aplicación web en Java y quiere subir su código y dejar que AWS aprovisione las instancias, el balanceo de carga y el escalado automático, conservando la posibilidad de acceder a los recursos subyacentes si lo necesitan. ¿Qué servicio es la mejor opción?",
  "options": [
   "AWS Lambda",
   "AWS CloudFormation",
   "AWS Elastic Beanstalk",
   "Amazon Lightsail"
  ],
  "answer": [
   2
  ],
  "explain": "Elastic Beanstalk es un servicio tipo PaaS: subes el código y aprovisiona y administra la infraestructura, que sigue visible para ti.",
  "ref": "https://aws.amazon.com/elasticbeanstalk/"
 },
 {
  "id": "D3-21",
  "domain": 3,
  "q": "Una aseguradora recibe miles de formularios y facturas escaneadas en PDF e imagen. Quiere extraer automáticamente el texto, las tablas y los pares campo-valor sin construir un modelo propio. ¿Qué servicio es la mejor opción?",
  "options": [
   "Amazon Rekognition",
   "Amazon Comprehend",
   "Amazon Textract",
   "Amazon Transcribe"
  ],
  "answer": [
   2
  ],
  "explain": "Textract extrae texto, tablas y formularios de documentos. Rekognition analiza imágenes y video; Comprehend, el significado del texto; Transcribe convierte voz en texto.",
  "ref": "https://aws.amazon.com/textract/"
 },
 {
  "id": "D3-22",
  "domain": 3,
  "q": "Un arquitecto repasa las características de Amazon EBS con un equipo nuevo. ¿Qué DOS afirmaciones sobre los volúmenes de EBS son correctas?",
  "options": [
   "Un volumen se adjunta a instancias de EC2 que están en la misma zona de disponibilidad",
   "Es un servicio de almacenamiento de objetos accesible por una API HTTP",
   "Los datos del volumen pueden persistir independientemente de la vida de la instancia",
   "Un mismo volumen se comparte por defecto entre cientos de instancias en varias AZ",
   "Ofrece un sistema de archivos NFS administrado para instancias Linux"
  ],
  "answer": [
   0,
   2
  ],
  "explain": "EBS es almacenamiento de bloques ligado a una AZ cuyos datos pueden sobrevivir a la instancia. El almacenamiento de objetos es S3 y el sistema de archivos NFS compartido es EFS.",
  "ref": "https://aws.amazon.com/ebs/"
 },
 {
  "id": "D3-23",
  "domain": 3,
  "q": "Una empresa ejecuta una aplicación web de tres capas con servidores de aplicación en EC2 y una base de datos relacional en Amazon RDS. Quiere que siga funcionando, sin intervención manual, si una zona de disponibilidad completa deja de estar disponible. ¿Qué DOS acciones logran este objetivo?",
  "options": [
   "Ejecutar las instancias EC2 en un grupo de Auto Scaling en varias AZ detrás de un Elastic Load Balancer",
   "Habilitar Multi-AZ en la instancia de Amazon RDS",
   "Usar una única instancia EC2 de mayor tamaño en una sola AZ",
   "Crear una réplica de lectura de RDS en la misma AZ que la base principal",
   "Tomar instantáneas diarias de EBS y restaurarlas manualmente si la AZ falla"
  ],
  "answer": [
   0,
   1
  ],
  "explain": "Distribuir la capa de aplicación en varias AZ y usar RDS Multi-AZ (conmutación automática) sobrevive a la caída de una AZ. Una réplica de lectura en la misma AZ cae junto con la base principal.",
  "ref": "https://aws.amazon.com/rds/features/multi-az/"
 },
 {
  "id": "D3-24",
  "domain": 3,
  "q": "Una empresa quiere que un servidor web en una subred de su VPC sea accesible directamente desde internet. ¿Qué DOS elementos son necesarios?",
  "options": [
   "Una ruta en la tabla de rutas de la subred hacia un Internet Gateway",
   "Un NAT Gateway asociado a la subred del servidor",
   "Una dirección IP pública o una Elastic IP asignada a la instancia",
   "Una conexión AWS Site-to-Site VPN",
   "Una conexión AWS Direct Connect"
  ],
  "answer": [
   0,
   2
  ],
  "explain": "Una subred pública tiene una ruta hacia un Internet Gateway, y la instancia necesita una IP pública o Elastic IP. El NAT Gateway sirve para la salida desde subredes privadas.",
  "ref": "https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html"
 },
 {
  "id": "D3-25",
  "domain": 3,
  "q": "Una aplicación corre en varias Regiones de AWS y los usuarios globales deben ser dirigidos a la Región que les ofrezca la menor latencia. ¿Qué configuración de Amazon Route 53 debería usarse?",
  "options": [
   "Política de enrutamiento ponderada",
   "Política de enrutamiento basada en latencia",
   "Política de enrutamiento de conmutación por error",
   "Política de enrutamiento por geolocalización"
  ],
  "answer": [
   1
  ],
  "explain": "El enrutamiento por latencia elige la Región con la menor latencia medida. Geolocalización usa la ubicación del usuario, que no siempre equivale a la menor latencia.",
  "ref": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html"
 },
 {
  "id": "D3-26",
  "domain": 3,
  "q": "Un sitio sirve imágenes y videos estáticos desde un bucket de S3 a usuarios en todo el mundo. La empresa quiere reducir la latencia y los costos de transferencia saliente desde el origen. ¿Qué servicio es el más adecuado?",
  "options": [
   "AWS Global Accelerator",
   "Amazon CloudFront",
   "AWS Direct Connect",
   "Amazon S3 Transfer Acceleration"
  ],
  "answer": [
   1
  ],
  "explain": "CloudFront guarda contenido en caché en ubicaciones de borde, lo que reduce latencia y transferencia desde el origen. Global Accelerator mejora la ruta de red hacia aplicaciones, pero no almacena contenido en caché.",
  "ref": "https://aws.amazon.com/cloudfront/"
 },
 {
  "id": "D3-27",
  "domain": 3,
  "q": "Una empresa quiere generar miniaturas automáticamente cada vez que se sube una imagen a un bucket de S3, sin administrar servidores y pagando solo por el tiempo de ejecución. ¿Qué servicio debería usar?",
  "options": [
   "AWS Elastic Beanstalk",
   "AWS Lambda",
   "Amazon Lightsail",
   "Amazon EC2 con Auto Scaling"
  ],
  "answer": [
   1
  ],
  "explain": "Lambda se ejecuta en respuesta a eventos de S3 y cobra por solicitudes y duración. EC2 y Beanstalk requieren capacidad aprovisionada que se paga aunque no haya imágenes.",
  "ref": "https://aws.amazon.com/lambda/"
 },
 {
  "id": "D3-28",
  "domain": 3,
  "q": "Una empresa ejecuta una base de datos en memoria con conjuntos de datos muy grandes que deben cargarse completos en RAM. ¿Qué familia de instancias de EC2 es la más adecuada?",
  "options": [
   "Optimizadas para almacenamiento",
   "De uso general",
   "Optimizadas para memoria",
   "Optimizadas para cómputo"
  ],
  "answer": [
   2
  ],
  "explain": "Las instancias optimizadas para memoria ofrecen gran capacidad de RAM por vCPU. Las de almacenamiento priorizan IOPS de disco local, no memoria.",
  "ref": "https://aws.amazon.com/ec2/instance-types/"
 },
 {
  "id": "D3-29",
  "domain": 3,
  "q": "Una empresa tiene aplicaciones locales que acceden a archivos mediante NFS y SMB, y quiere guardar esos archivos en Amazon S3 manteniendo los más usados en caché local. ¿Qué servicio debería usar?",
  "options": [
   "Amazon EFS",
   "AWS Storage Gateway (File Gateway)",
   "AWS DataSync",
   "AWS Snowball Edge"
  ],
  "answer": [
   1
  ],
  "explain": "File Gateway ofrece acceso NFS/SMB local con los datos respaldados en S3 y caché local. DataSync copia datos de forma programada, pero no es un punto de acceso continuo.",
  "ref": "https://aws.amazon.com/storagegateway/"
 },
 {
  "id": "D3-30",
  "domain": 3,
  "q": "Un equipo de análisis necesita ejecutar consultas SQL complejas y frecuentes para informes de BI sobre petabytes de datos estructurados. ¿Qué servicio es el más adecuado?",
  "options": [
   "Amazon Aurora",
   "Amazon DynamoDB",
   "Amazon Redshift",
   "Amazon Athena"
  ],
  "answer": [
   2
  ],
  "explain": "Redshift es un almacén de datos columnar para analítica a gran escala. Aurora es para cargas transaccionales, y Athena es mejor para consultas ocasionales sobre datos en S3.",
  "ref": "https://aws.amazon.com/redshift/"
 },
 {
  "id": "D4-01",
  "domain": 4,
  "q": "Una empresa tiene un uso estable de cómputo y se compromete a gastar una cantidad fija por hora durante tres años. No sabe qué familias de instancias EC2 ni qué regiones usará en el futuro, y además quiere que el descuento aplique a AWS Fargate y AWS Lambda. ¿Qué opción es la mejor?",
  "options": [
   "Reserved Instances Standard",
   "EC2 Instance Savings Plans",
   "Compute Savings Plans",
   "Spot Instances"
  ],
  "answer": [
   2
  ],
  "explain": "Los Compute Savings Plans son los más flexibles: aplican a cualquier familia, región o sistema operativo de EC2, y también a Fargate y Lambda.",
  "ref": "https://aws.amazon.com/savingsplans/"
 },
 {
  "id": "D4-02",
  "domain": 4,
  "q": "Una empresa tiene una carga estable en EC2 que corre 24/7 durante los próximos tres años y, además, procesos de análisis por lotes que toleran interrupciones y pueden reiniciarse. Quiere minimizar costos en ambos casos. ¿Qué combinación es la mejor?",
  "options": [
   "On-Demand para la carga estable y Reserved Instances de un año para los lotes",
   "Reserved Instances o Savings Plans de tres años para la carga estable y Spot Instances para los lotes",
   "Dedicated Hosts para la carga estable y On-Demand para los lotes",
   "Spot Instances para la carga estable y Reserved Instances de tres años para los lotes"
  ],
  "answer": [
   1
  ],
  "explain": "Las cargas estables y prolongadas se benefician de compromisos (RI o Savings Plans); las cargas tolerantes a interrupciones son ideales para Spot, con descuentos de hasta alrededor de 90 %.",
  "ref": "https://aws.amazon.com/ec2/spot/"
 },
 {
  "id": "D4-03",
  "domain": 4,
  "q": "Una empresa quiere calcular el costo mensual estimado de una arquitectura nueva en AWS antes de desplegarla, incluyendo instancias EC2, una base de datos RDS y almacenamiento S3, y compartir la estimación con la dirección. ¿Qué herramienta es la mejor opción?",
  "options": [
   "AWS Cost Explorer",
   "AWS Pricing Calculator",
   "AWS Budgets",
   "AWS Cost and Usage Report"
  ],
  "answer": [
   1
  ],
  "explain": "Pricing Calculator estima costos antes de desplegar. Cost Explorer analiza costos pasados y pronostica; Budgets alerta; el Cost and Usage Report da el detalle más completo de lo facturado.",
  "ref": "https://calculator.aws/"
 },
 {
  "id": "D4-04",
  "domain": 4,
  "q": "El equipo de finanzas quiere recibir una notificación automática por correo cuando el costo pronosticado del mes supere los 5 000 USD, para actuar antes de que termine el periodo de facturación. ¿Qué herramienta es la mejor opción?",
  "options": [
   "AWS Cost Explorer",
   "AWS Budgets",
   "AWS Cost and Usage Report",
   "AWS Pricing Calculator"
  ],
  "answer": [
   1
  ],
  "explain": "AWS Budgets envía alertas cuando el costo real o pronosticado supera un umbral. Cost Explorer sirve para visualizar y analizar, pero no para alertar.",
  "ref": "https://aws.amazon.com/aws-cost-management/aws-budgets/"
 },
 {
  "id": "D4-05",
  "domain": 4,
  "q": "Una empresa contrata el plan de AWS Support Business. ¿Qué DOS beneficios incluye?",
  "options": [
   "Acceso a todas las verificaciones de AWS Trusted Advisor",
   "Un Technical Account Manager (TAM) dedicado",
   "Acceso 24/7 a ingenieros de soporte en la nube por teléfono, chat y correo",
   "Un equipo de Concierge Support para ayuda con la facturación y las cuentas",
   "Infrastructure Event Management sin costo adicional"
  ],
  "answer": [
   0,
   2
  ],
  "explain": "Business ofrece soporte 24/7 y todas las verificaciones de Trusted Advisor. El TAM dedicado y Concierge son de Enterprise; Infrastructure Event Management tiene cargo adicional en Business.",
  "ref": "https://aws.amazon.com/premiumsupport/plans/"
 },
 {
  "id": "D4-06",
  "domain": 4,
  "q": "Una empresa con una carga crítica en producción necesita un Technical Account Manager (TAM) dedicado que la guíe de forma proactiva, además de un tiempo de respuesta menor a 15 minutos para sistemas críticos caídos. El presupuesto no es una restricción. ¿Qué plan de AWS Support debe contratar?",
  "options": [
   "Business",
   "Enterprise On-Ramp",
   "Enterprise",
   "Developer"
  ],
  "answer": [
   2
  ],
  "explain": "El TAM dedicado y la respuesta más rápida para sistemas críticos (menos de 15 minutos) son de Enterprise. Enterprise On-Ramp ofrece un grupo (pool) de TAMs, no uno dedicado.",
  "ref": "https://aws.amazon.com/premiumsupport/plans/"
 },
 {
  "id": "D4-07",
  "domain": 4,
  "q": "Una empresa agrupa sus cuentas de AWS en una organización con facturación consolidada. ¿Qué DOS beneficios obtiene?",
  "options": [
   "Recibe una sola factura para todas las cuentas de la organización",
   "El uso combinado de las cuentas puede alcanzar descuentos por volumen más altos",
   "Los usuarios de IAM de una cuenta obtienen automáticamente permisos en todas las demás",
   "AWS hace copias de seguridad automáticas de todos los recursos de las cuentas miembro",
   "Los límites de servicio de cada cuenta se eliminan"
  ],
  "answer": [
   0,
   1
  ],
  "explain": "La facturación consolidada reúne el pago en una factura y combina el uso para precios por volumen. No cambia permisos, respaldos ni límites de servicio.",
  "ref": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"
 },
 {
  "id": "D4-08",
  "domain": 4,
  "q": "Varios equipos comparten una misma cuenta de AWS. La empresa quiere ver en AWS Cost Explorer cuánto cuesta cada proyecto para repartir los costos entre departamentos. Los recursos ya están etiquetados con la clave «Proyecto». ¿Qué debe hacer a continuación?",
  "options": [
   "Crear un presupuesto en AWS Budgets por cada proyecto",
   "Activar la etiqueta «Proyecto» como etiqueta de asignación de costos en la consola de facturación",
   "Abrir un caso de soporte para que AWS agrupe los costos por etiqueta",
   "Usar AWS Trusted Advisor para detectar los costos por proyecto"
  ],
  "answer": [
   1
  ],
  "explain": "Las etiquetas aparecen en los informes de costos solo después de activarlas como etiquetas de asignación de costos.",
  "ref": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html"
 },
 {
  "id": "D4-09",
  "domain": 4,
  "q": "Una empresa lanza una aplicación nueva con demanda impredecible durante unas semanas y no quiere compromisos de largo plazo. ¿Qué modelo de compra de EC2 es el más adecuado?",
  "options": [
   "Instancias reservadas estándar de 3 años",
   "Bajo demanda (On-Demand)",
   "Hosts dedicados",
   "Savings Plans de 3 años"
  ],
  "answer": [
   1
  ],
  "explain": "On-Demand cobra por uso sin compromiso, ideal para cargas impredecibles o de corto plazo. Las reservas y los Savings Plans exigen comprometerse a 1 o 3 años.",
  "ref": "https://aws.amazon.com/ec2/pricing/"
 },
 {
  "id": "D4-10",
  "domain": 4,
  "q": "Una empresa tiene una carga estable y se compromete a 3 años, pero podría cambiar de familia de instancias durante ese tiempo. ¿Qué opción ofrece descuento y flexibilidad para cambiar?",
  "options": [
   "Instancias reservadas estándar",
   "Instancias reservadas convertibles",
   "Instancias bajo demanda",
   "Instancias Spot"
  ],
  "answer": [
   1
  ],
  "explain": "Las reservadas convertibles permiten cambiar atributos como la familia de instancia. Las estándar dan más descuento pero con menos flexibilidad.",
  "ref": "https://aws.amazon.com/ec2/pricing/reserved-instances/"
 },
 {
  "id": "D4-11",
  "domain": 4,
  "q": "¿Cuál de las siguientes cargas es MENOS adecuada para instancias Spot?",
  "options": [
   "Renderizado de video que puede reanudarse",
   "Una base de datos de producción crítica que no tolera interrupciones",
   "Procesamiento por lotes tolerante a interrupciones",
   "Pruebas de integración continua"
  ],
  "answer": [
   1
  ],
  "explain": "Spot puede interrumpirse con poco aviso, por lo que no sirve para cargas críticas sin tolerancia a cortes. Las demás opciones toleran interrupciones y aprovechan el descuento.",
  "ref": "https://aws.amazon.com/ec2/spot/"
 },
 {
  "id": "D4-12",
  "domain": 4,
  "q": "Una empresa tiene licencias de software que se cobran por socket o núcleo físico y necesita cumplir con ese licenciamiento usando servidores de EC2. ¿Qué opción es la mejor?",
  "options": [
   "Instancias Spot",
   "Instancias dedicadas",
   "Hosts dedicados",
   "Instancias reservadas estándar"
  ],
  "answer": [
   2
  ],
  "explain": "Los hosts dedicados dan visibilidad de sockets y núcleos físicos para licencias por socket. Las instancias dedicadas aíslan hardware, pero no dan esa visibilidad.",
  "ref": "https://aws.amazon.com/ec2/dedicated-hosts/"
 },
 {
  "id": "D4-13",
  "domain": 4,
  "q": "Una empresa calcula el costo total de propiedad (TCO) de mantener su centro de datos local para compararlo con AWS. Selecciona DOS costos que deben incluirse.",
  "options": [
   "Costo del plan de soporte de AWS",
   "Energía y refrigeración del centro de datos",
   "Salarios del personal que administra el hardware",
   "Cargos por solicitudes a Amazon S3",
   "Cargos por duración de ejecución de AWS Lambda"
  ],
  "answer": [
   1,
   2
  ],
  "explain": "El TCO local incluye energía, refrigeración, espacio y personal. Las otras opciones son cargos que solo existen en AWS.",
  "ref": "https://aws.amazon.com/tco-calculator/"
 },
 {
  "id": "D4-14",
  "domain": 4,
  "q": "Selecciona DOS factores que determinan el cargo mensual de una función de AWS Lambda.",
  "options": [
   "El número de zonas de disponibilidad utilizadas",
   "El número de solicitudes",
   "La duración de la ejecución, según la memoria configurada",
   "Una tarifa mensual fija por cada función creada",
   "Las horas de instancia EC2 aprovisionadas"
  ],
  "answer": [
   1,
   2
  ],
  "explain": "Lambda cobra por solicitudes y por duración (ajustada por la memoria). No hay servidores aprovisionados ni cargo fijo por función.",
  "ref": "https://aws.amazon.com/lambda/pricing/"
 },
 {
  "id": "D4-15",
  "domain": 4,
  "q": "¿Qué tipo de transferencia de datos normalmente NO genera cargo en AWS?",
  "options": [
   "Datos entre zonas de disponibilidad",
   "Datos entrantes a AWS desde Internet",
   "Datos salientes de AWS hacia Internet",
   "Datos entre Regiones de AWS"
  ],
  "answer": [
   1
  ],
  "explain": "La transferencia entrante desde Internet generalmente es gratuita. La saliente, la interregional y la que cruza zonas de disponibilidad se cobran.",
  "ref": "https://aws.amazon.com/ec2/pricing/on-demand/"
 },
 {
  "id": "D4-16",
  "domain": 4,
  "q": "Selecciona DOS componentes que influyen en la factura de Amazon S3.",
  "options": [
   "El número de usuarios IAM con acceso",
   "El número de buckets creados",
   "El número de solicitudes realizadas",
   "Los datos transferidos hacia S3 desde Internet",
   "El almacenamiento utilizado por GB"
  ],
  "answer": [
   2,
   4
  ],
  "explain": "S3 cobra por almacenamiento, solicitudes y transferencia saliente, entre otros. Crear buckets y subir datos desde Internet no tienen cargo por sí mismos.",
  "ref": "https://aws.amazon.com/s3/pricing/"
 },
 {
  "id": "D4-17",
  "domain": 4,
  "q": "Un gerente quiere ver el gasto de los últimos seis meses por servicio y un pronóstico para los próximos meses. ¿Qué herramienta debe usar?",
  "options": [
   "AWS Trusted Advisor",
   "AWS Pricing Calculator",
   "AWS Cost Explorer",
   "AWS Budgets"
  ],
  "answer": [
   2
  ],
  "explain": "Cost Explorer visualiza y pronostica costos. Budgets se usa para definir umbrales y recibir alertas; Pricing Calculator estima costos de cargas futuras.",
  "ref": "https://aws.amazon.com/aws-cost-management/aws-cost-explorer/"
 },
 {
  "id": "D4-18",
  "domain": 4,
  "q": "Un equipo de finanzas necesita el conjunto de datos de costo y uso más detallado posible, entregado a un bucket de S3 para analizarlo con Amazon Athena. ¿Qué debe habilitar?",
  "options": [
   "AWS Budgets",
   "AWS Cost Explorer",
   "AWS Cost and Usage Report",
   "Facturación consolidada de AWS Organizations"
  ],
  "answer": [
   2
  ],
  "explain": "El Cost and Usage Report es el reporte más detallado y se entrega en S3. Cost Explorer es una interfaz de análisis con menos detalle.",
  "ref": "https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/"
 },
 {
  "id": "D4-19",
  "domain": 4,
  "q": "Una empresa quiere un caso de negocio con una estimación de costos en AWS basada en el uso real de sus servidores locales. ¿Qué herramienta debería usar?",
  "options": [
   "AWS Budgets",
   "AWS Migration Evaluator",
   "AWS Pricing Calculator",
   "AWS Cost Explorer"
  ],
  "answer": [
   1
  ],
  "explain": "Migration Evaluator analiza el uso actual local para estimar costos y armar el caso de negocio. Pricing Calculator estima cargas que describes manualmente.",
  "ref": "https://aws.amazon.com/migration-evaluator/"
 },
 {
  "id": "D4-20",
  "domain": 4,
  "q": "Un equipo quiere recibir recomendaciones de tipos de instancia EC2 más adecuados, basadas en métricas de utilización y aprendizaje automático. ¿Qué servicio ofrece esto?",
  "options": [
   "AWS Budgets",
   "AWS Cost Explorer",
   "AWS Compute Optimizer",
   "AWS Cost and Usage Report"
  ],
  "answer": [
   2
  ],
  "explain": "Compute Optimizer analiza la utilización y recomienda tamaños óptimos de recursos. Cost Explorer muestra el gasto, pero no recomienda tipos de instancia.",
  "ref": "https://aws.amazon.com/compute-optimizer/"
 },
 {
  "id": "D4-21",
  "domain": 4,
  "q": "Una empresa quiere detectar automáticamente aumentos de gasto inusuales, sin definir umbrales fijos, mediante aprendizaje automático. ¿Qué servicio debería usar?",
  "options": [
   "AWS Pricing Calculator",
   "AWS Trusted Advisor",
   "AWS Budgets con un umbral fijo",
   "AWS Cost Anomaly Detection"
  ],
  "answer": [
   3
  ],
  "explain": "Cost Anomaly Detection identifica gasto atípico con ML. Budgets alerta cuando se cruza un valor que tú defines.",
  "ref": "https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/"
 },
 {
  "id": "D4-22",
  "domain": 4,
  "q": "Una cuenta de una organización con facturación consolidada compró instancias reservadas y no usa toda la capacidad. ¿Qué ocurre con el descuento no utilizado?",
  "options": [
   "Se devuelve en dinero a la cuenta de administración",
   "Solo puede usarlo la cuenta compradora",
   "Se pierde al final del mes",
   "Otras cuentas de la organización con instancias que coincidan pueden aprovecharlo"
  ],
  "answer": [
   3
  ],
  "explain": "Con facturación consolidada, los beneficios de reservas se comparten entre las cuentas de la organización (si el uso compartido no se deshabilita).",
  "ref": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-behavior.html"
 },
 {
  "id": "D4-23",
  "domain": 4,
  "q": "Una empresa tiene cargas no productivas, quiere orientación técnica por correo en horario laboral y busca el costo más bajo posible de un plan de pago. ¿Qué plan de AWS Support es el más adecuado?",
  "options": [
   "Basic",
   "Developer",
   "Enterprise",
   "Business"
  ],
  "answer": [
   1
  ],
  "explain": "Developer ofrece soporte técnico por correo en horario laboral a bajo costo. Basic no incluye soporte técnico; Business está pensado para cargas de producción. (Los nombres de planes pueden haber cambiado: verifícalo en la página oficial.)",
  "ref": "https://aws.amazon.com/premiumsupport/plans/"
 },
 {
  "id": "D4-24",
  "domain": 4,
  "q": "Una empresa quiere un grupo de Technical Account Managers y revisiones de arquitectura de forma consultiva, sin pagar el plan Enterprise completo. ¿Qué plan es el más adecuado?",
  "options": [
   "Developer",
   "Business",
   "Enterprise",
   "Enterprise On-Ramp"
  ],
  "answer": [
   3
  ],
  "explain": "On-Ramp ofrece un grupo de TAM compartido; Enterprise ofrece un TAM designado. (Verifica los nombres de los planes en la página oficial, pueden haber cambiado.)",
  "ref": "https://aws.amazon.com/premiumsupport/plans/"
 },
 {
  "id": "D4-25",
  "domain": 4,
  "q": "¿Cuál es el plan de soporte de menor nivel que incluye todas las verificaciones de AWS Trusted Advisor?",
  "options": [
   "Basic",
   "Cualquier plan, incluido Basic",
   "Developer",
   "Business"
  ],
  "answer": [
   3
  ],
  "explain": "Basic y Developer solo incluyen las verificaciones principales de Trusted Advisor; el conjunto completo comienza en Business. (Verifica la información vigente en la página oficial.)",
  "ref": "https://aws.amazon.com/premiumsupport/plans/"
 },
 {
  "id": "D4-26",
  "domain": 4,
  "q": "Una empresa quiere comprar software de terceros ya preparado para AWS, con facturación integrada a su cuenta de AWS. ¿Qué servicio debería usar?",
  "options": [
   "AWS Marketplace",
   "AWS Professional Services",
   "AWS Partner Network",
   "AWS re:Post"
  ],
  "answer": [
   0
  ],
  "explain": "AWS Marketplace es un catálogo digital de software de terceros con facturación en AWS. La Red de Socios conecta con empresas consultoras y tecnológicas, pero no vende software.",
  "ref": "https://aws.amazon.com/marketplace"
 },
 {
  "id": "D4-27",
  "domain": 4,
  "q": "Una empresa busca a una organización consultora externa, certificada en AWS, que la ayude a migrar sus aplicaciones. ¿Dónde puede encontrarla?",
  "options": [
   "AWS Marketplace",
   "AWS Professional Services",
   "AWS re:Post",
   "AWS Partner Network"
  ],
  "answer": [
   3
  ],
  "explain": "La Red de Socios de AWS reúne a consultoras y proveedores externos. Professional Services es el equipo propio de AWS, no un tercero.",
  "ref": "https://aws.amazon.com/partners/"
 },
 {
  "id": "D4-28",
  "domain": 4,
  "q": "Una empresa quiere que consultores del propio AWS trabajen junto con su equipo para lograr un resultado específico de adopción de la nube. ¿Qué recurso debe contratar?",
  "options": [
   "AWS Professional Services",
   "AWS Marketplace",
   "AWS Partner Network",
   "AWS re:Post"
  ],
  "answer": [
   0
  ],
  "explain": "Professional Services es un equipo global de expertos de AWS. Los socios son terceros externos a AWS.",
  "ref": "https://aws.amazon.com/professional-services/"
 },
 {
  "id": "D4-29",
  "domain": 4,
  "q": "Un ingeniero sin plan de soporte de pago quiere hacer una pregunta técnica a la comunidad y a expertos de AWS. ¿Qué recurso puede usar?",
  "options": [
   "AWS re:Post",
   "Un Technical Account Manager",
   "Un caso de soporte técnico con el plan Business",
   "AWS Professional Services"
  ],
  "answer": [
   0
  ],
  "explain": "re:Post es una comunidad de preguntas y respuestas técnicas sin costo. Los casos de soporte, Professional Services y el TAM requieren planes o contratos de pago.",
  "ref": "https://repost.aws/"
 },
 {
  "id": "D4-30",
  "domain": 4,
  "q": "Un administrador quiere ver los eventos de servicio y los mantenimientos programados que afectan específicamente a los recursos de su cuenta. ¿Qué herramienta debería usar?",
  "options": [
   "AWS Config",
   "Amazon CloudWatch",
   "AWS Trusted Advisor",
   "AWS Health Dashboard"
  ],
  "answer": [
   3
  ],
  "explain": "AWS Health Dashboard muestra eventos y cambios que afectan los recursos de tu cuenta. Trusted Advisor da recomendaciones de buenas prácticas, no estado del servicio.",
  "ref": "https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html"
 }
];
