# D4. Facturación, precios y soporte

Peso aproximado en el examen: 12 %. Preguntas: 30.

> Preguntas originales y no oficiales. La respuesta está al final de cada una, dentro de un bloque desplegable.

### 1. Una empresa tiene un uso estable de cómputo y se compromete a gastar una cantidad fija por hora durante tres años. No sabe qué familias de instancias EC2 ni qué regiones usará en el futuro, y además quiere que el descuento aplique a AWS Fargate y AWS Lambda. ¿Qué opción es la mejor?

- **A.** Reserved Instances Standard
- **B.** EC2 Instance Savings Plans
- **C.** Compute Savings Plans
- **D.** Spot Instances

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Los Compute Savings Plans son los más flexibles: aplican a cualquier familia, región o sistema operativo de EC2, y también a Fargate y Lambda.

Referencia: <https://aws.amazon.com/savingsplans/>

</details>

### 2. Una empresa tiene una carga estable en EC2 que corre 24/7 durante los próximos tres años y, además, procesos de análisis por lotes que toleran interrupciones y pueden reiniciarse. Quiere minimizar costos en ambos casos. ¿Qué combinación es la mejor?

- **A.** On-Demand para la carga estable y Reserved Instances de un año para los lotes
- **B.** Reserved Instances o Savings Plans de tres años para la carga estable y Spot Instances para los lotes
- **C.** Dedicated Hosts para la carga estable y On-Demand para los lotes
- **D.** Spot Instances para la carga estable y Reserved Instances de tres años para los lotes

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Las cargas estables y prolongadas se benefician de compromisos (RI o Savings Plans); las cargas tolerantes a interrupciones son ideales para Spot, con descuentos de hasta alrededor de 90 %.

Referencia: <https://aws.amazon.com/ec2/spot/>

</details>

### 3. Una empresa quiere calcular el costo mensual estimado de una arquitectura nueva en AWS antes de desplegarla, incluyendo instancias EC2, una base de datos RDS y almacenamiento S3, y compartir la estimación con la dirección. ¿Qué herramienta es la mejor opción?

- **A.** AWS Cost Explorer
- **B.** AWS Pricing Calculator
- **C.** AWS Budgets
- **D.** AWS Cost and Usage Report

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Pricing Calculator estima costos antes de desplegar. Cost Explorer analiza costos pasados y pronostica; Budgets alerta; el Cost and Usage Report da el detalle más completo de lo facturado.

Referencia: <https://calculator.aws/>

</details>

### 4. El equipo de finanzas quiere recibir una notificación automática por correo cuando el costo pronosticado del mes supere los 5 000 USD, para actuar antes de que termine el periodo de facturación. ¿Qué herramienta es la mejor opción?

- **A.** AWS Cost Explorer
- **B.** AWS Budgets
- **C.** AWS Cost and Usage Report
- **D.** AWS Pricing Calculator

<details><summary>Ver respuesta</summary>

**Respuesta: B.** AWS Budgets envía alertas cuando el costo real o pronosticado supera un umbral. Cost Explorer sirve para visualizar y analizar, pero no para alertar.

Referencia: <https://aws.amazon.com/aws-cost-management/aws-budgets/>

</details>

### 5. Una empresa contrata el plan de AWS Support Business. ¿Qué DOS beneficios incluye?

*Selecciona 2.*

- **A.** Acceso a todas las verificaciones de AWS Trusted Advisor
- **B.** Un Technical Account Manager (TAM) dedicado
- **C.** Acceso 24/7 a ingenieros de soporte en la nube por teléfono, chat y correo
- **D.** Un equipo de Concierge Support para ayuda con la facturación y las cuentas
- **E.** Infrastructure Event Management sin costo adicional

<details><summary>Ver respuesta</summary>

**Respuesta: A, C.** Business ofrece soporte 24/7 y todas las verificaciones de Trusted Advisor. El TAM dedicado y Concierge son de Enterprise; Infrastructure Event Management tiene cargo adicional en Business.

Referencia: <https://aws.amazon.com/premiumsupport/plans/>

</details>

### 6. Una empresa con una carga crítica en producción necesita un Technical Account Manager (TAM) dedicado que la guíe de forma proactiva, además de un tiempo de respuesta menor a 15 minutos para sistemas críticos caídos. El presupuesto no es una restricción. ¿Qué plan de AWS Support debe contratar?

- **A.** Business
- **B.** Enterprise On-Ramp
- **C.** Enterprise
- **D.** Developer

<details><summary>Ver respuesta</summary>

**Respuesta: C.** El TAM dedicado y la respuesta más rápida para sistemas críticos (menos de 15 minutos) son de Enterprise. Enterprise On-Ramp ofrece un grupo (pool) de TAMs, no uno dedicado.

Referencia: <https://aws.amazon.com/premiumsupport/plans/>

</details>

### 7. Una empresa agrupa sus cuentas de AWS en una organización con facturación consolidada. ¿Qué DOS beneficios obtiene?

*Selecciona 2.*

- **A.** Recibe una sola factura para todas las cuentas de la organización
- **B.** El uso combinado de las cuentas puede alcanzar descuentos por volumen más altos
- **C.** Los usuarios de IAM de una cuenta obtienen automáticamente permisos en todas las demás
- **D.** AWS hace copias de seguridad automáticas de todos los recursos de las cuentas miembro
- **E.** Los límites de servicio de cada cuenta se eliminan

<details><summary>Ver respuesta</summary>

**Respuesta: A, B.** La facturación consolidada reúne el pago en una factura y combina el uso para precios por volumen. No cambia permisos, respaldos ni límites de servicio.

Referencia: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html>

</details>

### 8. Varios equipos comparten una misma cuenta de AWS. La empresa quiere ver en AWS Cost Explorer cuánto cuesta cada proyecto para repartir los costos entre departamentos. Los recursos ya están etiquetados con la clave «Proyecto». ¿Qué debe hacer a continuación?

- **A.** Crear un presupuesto en AWS Budgets por cada proyecto
- **B.** Activar la etiqueta «Proyecto» como etiqueta de asignación de costos en la consola de facturación
- **C.** Abrir un caso de soporte para que AWS agrupe los costos por etiqueta
- **D.** Usar AWS Trusted Advisor para detectar los costos por proyecto

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Las etiquetas aparecen en los informes de costos solo después de activarlas como etiquetas de asignación de costos.

Referencia: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html>

</details>

### 9. Una empresa lanza una aplicación nueva con demanda impredecible durante unas semanas y no quiere compromisos de largo plazo. ¿Qué modelo de compra de EC2 es el más adecuado?

- **A.** Instancias reservadas estándar de 3 años
- **B.** Bajo demanda (On-Demand)
- **C.** Hosts dedicados
- **D.** Savings Plans de 3 años

<details><summary>Ver respuesta</summary>

**Respuesta: B.** On-Demand cobra por uso sin compromiso, ideal para cargas impredecibles o de corto plazo. Las reservas y los Savings Plans exigen comprometerse a 1 o 3 años.

Referencia: <https://aws.amazon.com/ec2/pricing/>

</details>

### 10. Una empresa tiene una carga estable y se compromete a 3 años, pero podría cambiar de familia de instancias durante ese tiempo. ¿Qué opción ofrece descuento y flexibilidad para cambiar?

- **A.** Instancias reservadas estándar
- **B.** Instancias reservadas convertibles
- **C.** Instancias bajo demanda
- **D.** Instancias Spot

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Las reservadas convertibles permiten cambiar atributos como la familia de instancia. Las estándar dan más descuento pero con menos flexibilidad.

Referencia: <https://aws.amazon.com/ec2/pricing/reserved-instances/>

</details>

### 11. ¿Cuál de las siguientes cargas es MENOS adecuada para instancias Spot?

- **A.** Renderizado de video que puede reanudarse
- **B.** Una base de datos de producción crítica que no tolera interrupciones
- **C.** Procesamiento por lotes tolerante a interrupciones
- **D.** Pruebas de integración continua

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Spot puede interrumpirse con poco aviso, por lo que no sirve para cargas críticas sin tolerancia a cortes. Las demás opciones toleran interrupciones y aprovechan el descuento.

Referencia: <https://aws.amazon.com/ec2/spot/>

</details>

### 12. Una empresa tiene licencias de software que se cobran por socket o núcleo físico y necesita cumplir con ese licenciamiento usando servidores de EC2. ¿Qué opción es la mejor?

- **A.** Instancias Spot
- **B.** Instancias dedicadas
- **C.** Hosts dedicados
- **D.** Instancias reservadas estándar

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Los hosts dedicados dan visibilidad de sockets y núcleos físicos para licencias por socket. Las instancias dedicadas aíslan hardware, pero no dan esa visibilidad.

Referencia: <https://aws.amazon.com/ec2/dedicated-hosts/>

</details>

### 13. Una empresa calcula el costo total de propiedad (TCO) de mantener su centro de datos local para compararlo con AWS. Selecciona DOS costos que deben incluirse.

*Selecciona 2.*

- **A.** Costo del plan de soporte de AWS
- **B.** Energía y refrigeración del centro de datos
- **C.** Salarios del personal que administra el hardware
- **D.** Cargos por solicitudes a Amazon S3
- **E.** Cargos por duración de ejecución de AWS Lambda

<details><summary>Ver respuesta</summary>

**Respuesta: B, C.** El TCO local incluye energía, refrigeración, espacio y personal. Las otras opciones son cargos que solo existen en AWS.

Referencia: <https://aws.amazon.com/tco-calculator/>

</details>

### 14. Selecciona DOS factores que determinan el cargo mensual de una función de AWS Lambda.

*Selecciona 2.*

- **A.** El número de zonas de disponibilidad utilizadas
- **B.** El número de solicitudes
- **C.** La duración de la ejecución, según la memoria configurada
- **D.** Una tarifa mensual fija por cada función creada
- **E.** Las horas de instancia EC2 aprovisionadas

<details><summary>Ver respuesta</summary>

**Respuesta: B, C.** Lambda cobra por solicitudes y por duración (ajustada por la memoria). No hay servidores aprovisionados ni cargo fijo por función.

Referencia: <https://aws.amazon.com/lambda/pricing/>

</details>

### 15. ¿Qué tipo de transferencia de datos normalmente NO genera cargo en AWS?

- **A.** Datos entre zonas de disponibilidad
- **B.** Datos entrantes a AWS desde Internet
- **C.** Datos salientes de AWS hacia Internet
- **D.** Datos entre Regiones de AWS

<details><summary>Ver respuesta</summary>

**Respuesta: B.** La transferencia entrante desde Internet generalmente es gratuita. La saliente, la interregional y la que cruza zonas de disponibilidad se cobran.

Referencia: <https://aws.amazon.com/ec2/pricing/on-demand/>

</details>

### 16. Selecciona DOS componentes que influyen en la factura de Amazon S3.

*Selecciona 2.*

- **A.** El número de usuarios IAM con acceso
- **B.** El número de buckets creados
- **C.** El número de solicitudes realizadas
- **D.** Los datos transferidos hacia S3 desde Internet
- **E.** El almacenamiento utilizado por GB

<details><summary>Ver respuesta</summary>

**Respuesta: C, E.** S3 cobra por almacenamiento, solicitudes y transferencia saliente, entre otros. Crear buckets y subir datos desde Internet no tienen cargo por sí mismos.

Referencia: <https://aws.amazon.com/s3/pricing/>

</details>

### 17. Un gerente quiere ver el gasto de los últimos seis meses por servicio y un pronóstico para los próximos meses. ¿Qué herramienta debe usar?

- **A.** AWS Trusted Advisor
- **B.** AWS Pricing Calculator
- **C.** AWS Cost Explorer
- **D.** AWS Budgets

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Cost Explorer visualiza y pronostica costos. Budgets se usa para definir umbrales y recibir alertas; Pricing Calculator estima costos de cargas futuras.

Referencia: <https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>

</details>

### 18. Un equipo de finanzas necesita el conjunto de datos de costo y uso más detallado posible, entregado a un bucket de S3 para analizarlo con Amazon Athena. ¿Qué debe habilitar?

- **A.** AWS Budgets
- **B.** AWS Cost Explorer
- **C.** AWS Cost and Usage Report
- **D.** Facturación consolidada de AWS Organizations

<details><summary>Ver respuesta</summary>

**Respuesta: C.** El Cost and Usage Report es el reporte más detallado y se entrega en S3. Cost Explorer es una interfaz de análisis con menos detalle.

Referencia: <https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/>

</details>

### 19. Una empresa quiere un caso de negocio con una estimación de costos en AWS basada en el uso real de sus servidores locales. ¿Qué herramienta debería usar?

- **A.** AWS Budgets
- **B.** AWS Migration Evaluator
- **C.** AWS Pricing Calculator
- **D.** AWS Cost Explorer

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Migration Evaluator analiza el uso actual local para estimar costos y armar el caso de negocio. Pricing Calculator estima cargas que describes manualmente.

Referencia: <https://aws.amazon.com/migration-evaluator/>

</details>

### 20. Un equipo quiere recibir recomendaciones de tipos de instancia EC2 más adecuados, basadas en métricas de utilización y aprendizaje automático. ¿Qué servicio ofrece esto?

- **A.** AWS Budgets
- **B.** AWS Cost Explorer
- **C.** AWS Compute Optimizer
- **D.** AWS Cost and Usage Report

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Compute Optimizer analiza la utilización y recomienda tamaños óptimos de recursos. Cost Explorer muestra el gasto, pero no recomienda tipos de instancia.

Referencia: <https://aws.amazon.com/compute-optimizer/>

</details>

### 21. Una empresa quiere detectar automáticamente aumentos de gasto inusuales, sin definir umbrales fijos, mediante aprendizaje automático. ¿Qué servicio debería usar?

- **A.** AWS Pricing Calculator
- **B.** AWS Trusted Advisor
- **C.** AWS Budgets con un umbral fijo
- **D.** AWS Cost Anomaly Detection

<details><summary>Ver respuesta</summary>

**Respuesta: D.** Cost Anomaly Detection identifica gasto atípico con ML. Budgets alerta cuando se cruza un valor que tú defines.

Referencia: <https://aws.amazon.com/aws-cost-management/aws-cost-anomaly-detection/>

</details>

### 22. Una cuenta de una organización con facturación consolidada compró instancias reservadas y no usa toda la capacidad. ¿Qué ocurre con el descuento no utilizado?

- **A.** Se devuelve en dinero a la cuenta de administración
- **B.** Solo puede usarlo la cuenta compradora
- **C.** Se pierde al final del mes
- **D.** Otras cuentas de la organización con instancias que coincidan pueden aprovecharlo

<details><summary>Ver respuesta</summary>

**Respuesta: D.** Con facturación consolidada, los beneficios de reservas se comparten entre las cuentas de la organización (si el uso compartido no se deshabilita).

Referencia: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-behavior.html>

</details>

### 23. Una empresa tiene cargas no productivas, quiere orientación técnica por correo en horario laboral y busca el costo más bajo posible de un plan de pago. ¿Qué plan de AWS Support es el más adecuado?

- **A.** Basic
- **B.** Developer
- **C.** Enterprise
- **D.** Business

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Developer ofrece soporte técnico por correo en horario laboral a bajo costo. Basic no incluye soporte técnico; Business está pensado para cargas de producción. (Los nombres de planes pueden haber cambiado: verifícalo en la página oficial.)

Referencia: <https://aws.amazon.com/premiumsupport/plans/>

</details>

### 24. Una empresa quiere un grupo de Technical Account Managers y revisiones de arquitectura de forma consultiva, sin pagar el plan Enterprise completo. ¿Qué plan es el más adecuado?

- **A.** Developer
- **B.** Business
- **C.** Enterprise
- **D.** Enterprise On-Ramp

<details><summary>Ver respuesta</summary>

**Respuesta: D.** On-Ramp ofrece un grupo de TAM compartido; Enterprise ofrece un TAM designado. (Verifica los nombres de los planes en la página oficial, pueden haber cambiado.)

Referencia: <https://aws.amazon.com/premiumsupport/plans/>

</details>

### 25. ¿Cuál es el plan de soporte de menor nivel que incluye todas las verificaciones de AWS Trusted Advisor?

- **A.** Basic
- **B.** Cualquier plan, incluido Basic
- **C.** Developer
- **D.** Business

<details><summary>Ver respuesta</summary>

**Respuesta: D.** Basic y Developer solo incluyen las verificaciones principales de Trusted Advisor; el conjunto completo comienza en Business. (Verifica la información vigente en la página oficial.)

Referencia: <https://aws.amazon.com/premiumsupport/plans/>

</details>

### 26. Una empresa quiere comprar software de terceros ya preparado para AWS, con facturación integrada a su cuenta de AWS. ¿Qué servicio debería usar?

- **A.** AWS Marketplace
- **B.** AWS Professional Services
- **C.** AWS Partner Network
- **D.** AWS re:Post

<details><summary>Ver respuesta</summary>

**Respuesta: A.** AWS Marketplace es un catálogo digital de software de terceros con facturación en AWS. La Red de Socios conecta con empresas consultoras y tecnológicas, pero no vende software.

Referencia: <https://aws.amazon.com/marketplace>

</details>

### 27. Una empresa busca a una organización consultora externa, certificada en AWS, que la ayude a migrar sus aplicaciones. ¿Dónde puede encontrarla?

- **A.** AWS Marketplace
- **B.** AWS Professional Services
- **C.** AWS re:Post
- **D.** AWS Partner Network

<details><summary>Ver respuesta</summary>

**Respuesta: D.** La Red de Socios de AWS reúne a consultoras y proveedores externos. Professional Services es el equipo propio de AWS, no un tercero.

Referencia: <https://aws.amazon.com/partners/>

</details>

### 28. Una empresa quiere que consultores del propio AWS trabajen junto con su equipo para lograr un resultado específico de adopción de la nube. ¿Qué recurso debe contratar?

- **A.** AWS Professional Services
- **B.** AWS Marketplace
- **C.** AWS Partner Network
- **D.** AWS re:Post

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Professional Services es un equipo global de expertos de AWS. Los socios son terceros externos a AWS.

Referencia: <https://aws.amazon.com/professional-services/>

</details>

### 29. Un ingeniero sin plan de soporte de pago quiere hacer una pregunta técnica a la comunidad y a expertos de AWS. ¿Qué recurso puede usar?

- **A.** AWS re:Post
- **B.** Un Technical Account Manager
- **C.** Un caso de soporte técnico con el plan Business
- **D.** AWS Professional Services

<details><summary>Ver respuesta</summary>

**Respuesta: A.** re:Post es una comunidad de preguntas y respuestas técnicas sin costo. Los casos de soporte, Professional Services y el TAM requieren planes o contratos de pago.

Referencia: <https://repost.aws/>

</details>

### 30. Un administrador quiere ver los eventos de servicio y los mantenimientos programados que afectan específicamente a los recursos de su cuenta. ¿Qué herramienta debería usar?

- **A.** AWS Config
- **B.** Amazon CloudWatch
- **C.** AWS Trusted Advisor
- **D.** AWS Health Dashboard

<details><summary>Ver respuesta</summary>

**Respuesta: D.** AWS Health Dashboard muestra eventos y cambios que afectan los recursos de tu cuenta. Trusted Advisor da recomendaciones de buenas prácticas, no estado del servicio.

Referencia: <https://docs.aws.amazon.com/health/latest/ug/what-is-aws-health.html>

</details>
