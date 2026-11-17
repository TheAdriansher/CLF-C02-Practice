# D3. Tecnología y servicios

Peso aproximado en el examen: 34 %. Preguntas: 30.

> Preguntas originales y no oficiales. La respuesta está al final de cada una, dentro de un bloque desplegable.

### 1. Una empresa ejecuta una aplicación de análisis en cientos de instancias de Amazon EC2 con Linux, distribuidas en varias zonas de disponibilidad. Todas deben leer y escribir de forma concurrente en el mismo sistema de archivos compartido, cuya capacidad debe crecer automáticamente sin aprovisionarla. ¿Qué solución es la mejor?

- **A.** Amazon EBS con Multi-Attach
- **B.** Amazon EFS
- **C.** Amazon S3 montado en cada instancia
- **D.** Amazon FSx for Windows File Server

<details><summary>Ver respuesta</summary>

**Respuesta: B.** EFS es un sistema de archivos NFS elástico y compartido entre muchas instancias Linux y varias AZ. EBS se asocia a instancias de una sola AZ.

Referencia: <https://aws.amazon.com/efs/>

</details>

### 2. Una empresa ejecuta MySQL en instancias EC2 y quiere reducir la carga operativa de parches y respaldos. Necesita compatibilidad con MySQL, mayor rendimiento, almacenamiento que escale solo y datos replicados en tres zonas de disponibilidad. ¿Qué servicio es la mejor opción?

- **A.** Amazon RDS for MySQL con Multi-AZ
- **B.** Amazon Aurora (compatible con MySQL)
- **C.** Amazon DynamoDB con tablas globales
- **D.** Amazon Redshift

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Aurora replica el almacenamiento en seis copias a través de tres AZ y lo escala automáticamente. RDS Multi-AZ usa una réplica en espera en otra AZ.

Referencia: <https://aws.amazon.com/rds/aurora/>

</details>

### 3. Una aplicación móvil de pedidos recibe picos de tráfico impredecibles. Almacena datos con un modelo clave-valor sin esquema fijo, necesita latencia de milisegundos de un dígito a cualquier escala y la empresa no quiere aprovisionar ni administrar servidores de base de datos. ¿Qué servicio es la mejor opción?

- **A.** Amazon RDS for PostgreSQL con Multi-AZ
- **B.** Amazon Redshift
- **C.** Amazon DynamoDB
- **D.** Amazon Neptune

<details><summary>Ver respuesta</summary>

**Respuesta: C.** DynamoDB es una base NoSQL clave-valor sin servidores y de baja latencia a cualquier escala.

Referencia: <https://aws.amazon.com/dynamodb/>

</details>

### 4. Un equipo de análisis recibe archivos CSV y Parquet en un bucket de Amazon S3. Los analistas quieren ejecutar consultas SQL ocasionales directamente sobre esos archivos, sin cargar los datos en otra base de datos ni administrar infraestructura, y pagando solo por las consultas que ejecutan. ¿Qué servicio es la mejor opción?

- **A.** Amazon Redshift
- **B.** Amazon Athena
- **C.** Amazon EMR
- **D.** Amazon RDS

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Athena consulta datos en S3 con SQL, sin servidores y con pago por consulta. Redshift requiere cargar los datos en un data warehouse.

Referencia: <https://aws.amazon.com/athena/>

</details>

### 5. Una aplicación de comercio electrónico usa Amazon RDS. Durante las campañas, las consultas de lectura repetitivas saturan la base de datos y aumenta la latencia. La empresa quiere reducir la carga y la latencia con el menor cambio posible. ¿Qué opción es la mejor?

- **A.** Migrar los datos a Amazon Redshift
- **B.** Colocar Amazon ElastiCache como caché delante de la base de datos
- **C.** Migrar a Amazon Neptune
- **D.** Agregar volúmenes de Amazon EBS a la instancia de RDS

<details><summary>Ver respuesta</summary>

**Respuesta: B.** ElastiCache almacena en memoria los resultados que se consultan repetidamente y descarga la base de datos. Redshift y Neptune son para otros tipos de carga.

Referencia: <https://aws.amazon.com/elasticache/>

</details>

### 6. Una empresa almacena en Amazon S3 datos con un patrón de acceso impredecible: algunos objetos se consultan a diario y otros pasan meses sin leerse. Quiere optimizar costos moviendo los objetos automáticamente entre niveles de acceso, sin sobrecarga operativa ni cargos por recuperación. ¿Qué opción es la mejor?

- **A.** S3 Standard-IA
- **B.** S3 Intelligent-Tiering
- **C.** S3 Glacier Flexible Retrieval
- **D.** S3 One Zone-IA

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Intelligent-Tiering mueve los objetos entre niveles según su uso y no cobra por recuperación. Standard-IA y One Zone-IA cobran por recuperar datos.

Referencia: <https://aws.amazon.com/s3/storage-classes/>

</details>

### 7. Una empresa debe conservar durante cinco años datos de S3 que casi nunca se consultan, pero que deben recuperarse en milisegundos cuando se necesiten. ¿Qué clase de almacenamiento es la más económica que cumple el requisito?

- **A.** S3 Standard
- **B.** S3 Standard-IA
- **C.** S3 Glacier Flexible Retrieval
- **D.** S3 Glacier Deep Archive

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Standard-IA da acceso en milisegundos con menor costo de almacenamiento que Standard. Glacier Flexible Retrieval y Deep Archive tardan minutos u horas en recuperar.

Referencia: <https://aws.amazon.com/s3/storage-classes/>

</details>

### 8. Una empresa tiene terabytes de datos en servidores NFS on-premises y quiere copiarlos a Amazon S3 de forma programada y automatizada a través de su conexión de red, con verificación de integridad y sin escribir scripts propios. No necesita acceso híbrido continuo. ¿Qué servicio es la mejor opción?

- **A.** AWS Storage Gateway
- **B.** AWS DataSync
- **C.** AWS Snowball Edge
- **D.** AWS Direct Connect

<details><summary>Ver respuesta</summary>

**Respuesta: B.** DataSync automatiza transferencias en línea programadas. Snow Family mueve datos con un dispositivo físico, y Storage Gateway da acceso híbrido continuo.

Referencia: <https://aws.amazon.com/datasync/>

</details>

### 9. Una empresa tiene una aplicación global con usuarios en Asia y Europa. Usa TCP y UDP con direcciones IP estáticas que los clientes tienen en listas blancas. Quiere mejorar el rendimiento y la conmutación por error entre regiones usando la red global de AWS. El contenido no es cacheable. ¿Qué servicio es la mejor opción?

- **A.** Amazon CloudFront
- **B.** AWS Global Accelerator
- **C.** Amazon Route 53 con enrutamiento por geolocalización
- **D.** AWS Direct Connect

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Global Accelerator da IP estáticas anycast, soporta TCP y UDP y conmuta rápido entre regiones. CloudFront sirve contenido cacheable; Route 53 resuelve nombres por DNS.

Referencia: <https://aws.amazon.com/global-accelerator/>

</details>

### 10. Una empresa transfiere de forma constante grandes volúmenes de datos desde su centro de datos a AWS. Necesita ancho de banda consistente, latencia predecible y que el tráfico no viaje por la internet pública. ¿Qué solución es la mejor?

- **A.** AWS Site-to-Site VPN
- **B.** AWS Direct Connect
- **C.** AWS PrivateLink
- **D.** Amazon CloudFront

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Direct Connect es una conexión dedicada y privada hacia AWS. Site-to-Site VPN cifra el tráfico pero viaja por internet.

Referencia: <https://aws.amazon.com/directconnect/>

</details>

### 11. Una empresa ejecuta servidores de aplicación en Amazon EC2 dentro de una subred privada. Deben descargar actualizaciones desde internet, pero ninguna conexión iniciada desde internet debe poder llegar a ellos. La empresa quiere una solución administrada por AWS, sin mantener instancias adicionales. ¿Qué opción es la mejor?

- **A.** Un Internet Gateway asociado a la subred privada con una ruta a 0.0.0.0/0
- **B.** Un NAT Gateway en una subred pública, con ruta desde la subred privada
- **C.** Una instancia EC2 con NAT configurada manualmente en una subred pública
- **D.** VPC peering con una VPC que tenga acceso a internet

<details><summary>Ver respuesta</summary>

**Respuesta: B.** El NAT Gateway es administrado y permite conexiones salientes desde subredes privadas sin aceptar conexiones entrantes. Una instancia NAT exige mantenerla tú.

Referencia: <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html>

</details>

### 12. Un proveedor quiere exponer un servicio a clientes en otras VPC de forma privada, sin que el tráfico pase por internet y sin conectar las VPC completas entre sí. ¿Qué opción es la mejor?

- **A.** VPC peering
- **B.** AWS PrivateLink
- **C.** AWS Site-to-Site VPN
- **D.** Internet Gateway con grupos de seguridad restrictivos

<details><summary>Ver respuesta</summary>

**Respuesta: B.** PrivateLink publica un servicio de forma privada para consumidores en otras VPC, sin unir las redes. VPC peering conecta las dos VPC completas.

Referencia: <https://aws.amazon.com/privatelink/>

</details>

### 13. Una aplicación web aloja varios microservicios en grupos de instancias EC2. La empresa necesita un único balanceador que enrute el tráfico HTTP/HTTPS hacia diferentes grupos según la ruta de la URL, por ejemplo /api hacia un grupo y /imagenes hacia otro. ¿Qué opción es la mejor?

- **A.** Network Load Balancer
- **B.** Application Load Balancer
- **C.** Gateway Load Balancer
- **D.** Amazon Route 53 con enrutamiento ponderado

<details><summary>Ver respuesta</summary>

**Respuesta: B.** El Application Load Balancer trabaja en la capa 7 y enruta por ruta, host o encabezados. El Network Load Balancer trabaja en la capa 4 (TCP/UDP).

Referencia: <https://aws.amazon.com/elasticloadbalancing/application-load-balancer/>

</details>

### 14. Un sitio de comercio electrónico recibe pedidos en picos. Una función de backend procesa cada pedido a su ritmo. La empresa quiere desacoplar ambos componentes y asegurarse de que, si el backend falla o se ralentiza, los pedidos queden almacenados hasta ser procesados, sin perderse. ¿Qué servicio es la mejor opción?

- **A.** Amazon SNS
- **B.** Amazon SQS
- **C.** AWS Step Functions
- **D.** Amazon CloudWatch

<details><summary>Ver respuesta</summary>

**Respuesta: B.** SQS es una cola que guarda los mensajes hasta que un consumidor los procesa. SNS reparte notificaciones a los suscriptores, sin guardarlas para procesarlas después.

Referencia: <https://aws.amazon.com/sqs/>

</details>

### 15. Una empresa quiere ejecutar una función de AWS Lambda cada vez que una instancia de EC2 cambie a estado detenida, y también reaccionar a eventos de aplicaciones SaaS de terceros. Necesita definir reglas que filtren y enruten esos eventos hacia diferentes destinos. ¿Qué servicio es la mejor opción?

- **A.** Amazon SNS
- **B.** Amazon SQS
- **C.** Amazon EventBridge
- **D.** AWS Step Functions

<details><summary>Ver respuesta</summary>

**Respuesta: C.** EventBridge recibe eventos de servicios de AWS, aplicaciones propias y socios SaaS, y los enruta con reglas.

Referencia: <https://aws.amazon.com/eventbridge/>

</details>

### 16. Una empresa procesa pedidos en varios pasos: validar el pago, verificar inventario, enviar confirmación y manejar errores con reintentos. Quiere coordinar estos pasos como un flujo de trabajo visual con funciones de AWS Lambda, sin escribir código de orquestación. ¿Qué servicio es la mejor opción?

- **A.** Amazon SQS
- **B.** Amazon SNS
- **C.** AWS Step Functions
- **D.** Amazon EventBridge

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Step Functions orquesta pasos con un flujo visual, reintentos y manejo de errores. SQS y SNS mueven mensajes, pero no coordinan un flujo.

Referencia: <https://aws.amazon.com/step-functions/>

</details>

### 17. Una empresa empaquetó su aplicación en contenedores Docker que deben ejecutarse de forma continua. El equipo no quiere aprovisionar, escalar ni parchear instancias de EC2 para ejecutarlos. ¿Qué opción es la mejor?

- **A.** AWS Lambda
- **B.** Amazon ECS con instancias EC2 administradas por la empresa
- **C.** AWS Fargate
- **D.** Amazon Lightsail

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Fargate ejecuta contenedores (con ECS o EKS) sin administrar servidores. Lambda está pensado para funciones por evento, con duración limitada.

Referencia: <https://aws.amazon.com/fargate/>

</details>

### 18. Un equipo quiere definir su infraestructura en AWS con un lenguaje de programación conocido, como Python o TypeScript, usando bucles y clases para reutilizar componentes. La definición debe terminar desplegándose como pilas de AWS CloudFormation. ¿Qué herramienta es la mejor opción?

- **A.** Plantillas de CloudFormation escritas a mano en JSON
- **B.** AWS Cloud Development Kit (AWS CDK)
- **C.** AWS Elastic Beanstalk
- **D.** AWS Systems Manager

<details><summary>Ver respuesta</summary>

**Respuesta: B.** El CDK define la infraestructura en código y la sintetiza en plantillas de CloudFormation.

Referencia: <https://aws.amazon.com/cdk/>

</details>

### 19. Los administradores deben acceder a instancias EC2 en subredes privadas para solucionar problemas. La empresa prohíbe abrir el puerto 22, usar bastion hosts y administrar llaves SSH. Además, requiere un registro auditable de cada sesión. ¿Qué solución cumple mejor los requisitos?

- **A.** EC2 Instance Connect
- **B.** AWS Systems Manager Session Manager
- **C.** AWS Client VPN
- **D.** AWS CloudShell

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Session Manager da shell por el agente de SSM e IAM, sin puertos de entrada, bastion ni llaves, y registra las sesiones. CloudShell es una terminal en el navegador para usar la CLI, no una conexión a instancias privadas.

Referencia: <https://aws.amazon.com/systems-manager/>

</details>

### 20. Un equipo de desarrollo tiene una aplicación web en Java y quiere subir su código y dejar que AWS aprovisione las instancias, el balanceo de carga y el escalado automático, conservando la posibilidad de acceder a los recursos subyacentes si lo necesitan. ¿Qué servicio es la mejor opción?

- **A.** AWS Lambda
- **B.** AWS CloudFormation
- **C.** AWS Elastic Beanstalk
- **D.** Amazon Lightsail

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Elastic Beanstalk es un servicio tipo PaaS: subes el código y aprovisiona y administra la infraestructura, que sigue visible para ti.

Referencia: <https://aws.amazon.com/elasticbeanstalk/>

</details>

### 21. Una aseguradora recibe miles de formularios y facturas escaneadas en PDF e imagen. Quiere extraer automáticamente el texto, las tablas y los pares campo-valor sin construir un modelo propio. ¿Qué servicio es la mejor opción?

- **A.** Amazon Rekognition
- **B.** Amazon Comprehend
- **C.** Amazon Textract
- **D.** Amazon Transcribe

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Textract extrae texto, tablas y formularios de documentos. Rekognition analiza imágenes y video; Comprehend, el significado del texto; Transcribe convierte voz en texto.

Referencia: <https://aws.amazon.com/textract/>

</details>

### 22. Un arquitecto repasa las características de Amazon EBS con un equipo nuevo. ¿Qué DOS afirmaciones sobre los volúmenes de EBS son correctas?

*Selecciona 2.*

- **A.** Un volumen se adjunta a instancias de EC2 que están en la misma zona de disponibilidad
- **B.** Es un servicio de almacenamiento de objetos accesible por una API HTTP
- **C.** Los datos del volumen pueden persistir independientemente de la vida de la instancia
- **D.** Un mismo volumen se comparte por defecto entre cientos de instancias en varias AZ
- **E.** Ofrece un sistema de archivos NFS administrado para instancias Linux

<details><summary>Ver respuesta</summary>

**Respuesta: A, C.** EBS es almacenamiento de bloques ligado a una AZ cuyos datos pueden sobrevivir a la instancia. El almacenamiento de objetos es S3 y el sistema de archivos NFS compartido es EFS.

Referencia: <https://aws.amazon.com/ebs/>

</details>

### 23. Una empresa ejecuta una aplicación web de tres capas con servidores de aplicación en EC2 y una base de datos relacional en Amazon RDS. Quiere que siga funcionando, sin intervención manual, si una zona de disponibilidad completa deja de estar disponible. ¿Qué DOS acciones logran este objetivo?

*Selecciona 2.*

- **A.** Ejecutar las instancias EC2 en un grupo de Auto Scaling en varias AZ detrás de un Elastic Load Balancer
- **B.** Habilitar Multi-AZ en la instancia de Amazon RDS
- **C.** Usar una única instancia EC2 de mayor tamaño en una sola AZ
- **D.** Crear una réplica de lectura de RDS en la misma AZ que la base principal
- **E.** Tomar instantáneas diarias de EBS y restaurarlas manualmente si la AZ falla

<details><summary>Ver respuesta</summary>

**Respuesta: A, B.** Distribuir la capa de aplicación en varias AZ y usar RDS Multi-AZ (conmutación automática) sobrevive a la caída de una AZ. Una réplica de lectura en la misma AZ cae junto con la base principal.

Referencia: <https://aws.amazon.com/rds/features/multi-az/>

</details>

### 24. Una empresa quiere que un servidor web en una subred de su VPC sea accesible directamente desde internet. ¿Qué DOS elementos son necesarios?

*Selecciona 2.*

- **A.** Una ruta en la tabla de rutas de la subred hacia un Internet Gateway
- **B.** Un NAT Gateway asociado a la subred del servidor
- **C.** Una dirección IP pública o una Elastic IP asignada a la instancia
- **D.** Una conexión AWS Site-to-Site VPN
- **E.** Una conexión AWS Direct Connect

<details><summary>Ver respuesta</summary>

**Respuesta: A, C.** Una subred pública tiene una ruta hacia un Internet Gateway, y la instancia necesita una IP pública o Elastic IP. El NAT Gateway sirve para la salida desde subredes privadas.

Referencia: <https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html>

</details>

### 25. Una aplicación corre en varias Regiones de AWS y los usuarios globales deben ser dirigidos a la Región que les ofrezca la menor latencia. ¿Qué configuración de Amazon Route 53 debería usarse?

- **A.** Política de enrutamiento ponderada
- **B.** Política de enrutamiento basada en latencia
- **C.** Política de enrutamiento de conmutación por error
- **D.** Política de enrutamiento por geolocalización

<details><summary>Ver respuesta</summary>

**Respuesta: B.** El enrutamiento por latencia elige la Región con la menor latencia medida. Geolocalización usa la ubicación del usuario, que no siempre equivale a la menor latencia.

Referencia: <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-latency.html>

</details>

### 26. Un sitio sirve imágenes y videos estáticos desde un bucket de S3 a usuarios en todo el mundo. La empresa quiere reducir la latencia y los costos de transferencia saliente desde el origen. ¿Qué servicio es el más adecuado?

- **A.** AWS Global Accelerator
- **B.** Amazon CloudFront
- **C.** AWS Direct Connect
- **D.** Amazon S3 Transfer Acceleration

<details><summary>Ver respuesta</summary>

**Respuesta: B.** CloudFront guarda contenido en caché en ubicaciones de borde, lo que reduce latencia y transferencia desde el origen. Global Accelerator mejora la ruta de red hacia aplicaciones, pero no almacena contenido en caché.

Referencia: <https://aws.amazon.com/cloudfront/>

</details>

### 27. Una empresa quiere generar miniaturas automáticamente cada vez que se sube una imagen a un bucket de S3, sin administrar servidores y pagando solo por el tiempo de ejecución. ¿Qué servicio debería usar?

- **A.** AWS Elastic Beanstalk
- **B.** AWS Lambda
- **C.** Amazon Lightsail
- **D.** Amazon EC2 con Auto Scaling

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Lambda se ejecuta en respuesta a eventos de S3 y cobra por solicitudes y duración. EC2 y Beanstalk requieren capacidad aprovisionada que se paga aunque no haya imágenes.

Referencia: <https://aws.amazon.com/lambda/>

</details>

### 28. Una empresa ejecuta una base de datos en memoria con conjuntos de datos muy grandes que deben cargarse completos en RAM. ¿Qué familia de instancias de EC2 es la más adecuada?

- **A.** Optimizadas para almacenamiento
- **B.** De uso general
- **C.** Optimizadas para memoria
- **D.** Optimizadas para cómputo

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Las instancias optimizadas para memoria ofrecen gran capacidad de RAM por vCPU. Las de almacenamiento priorizan IOPS de disco local, no memoria.

Referencia: <https://aws.amazon.com/ec2/instance-types/>

</details>

### 29. Una empresa tiene aplicaciones locales que acceden a archivos mediante NFS y SMB, y quiere guardar esos archivos en Amazon S3 manteniendo los más usados en caché local. ¿Qué servicio debería usar?

- **A.** Amazon EFS
- **B.** AWS Storage Gateway (File Gateway)
- **C.** AWS DataSync
- **D.** AWS Snowball Edge

<details><summary>Ver respuesta</summary>

**Respuesta: B.** File Gateway ofrece acceso NFS/SMB local con los datos respaldados en S3 y caché local. DataSync copia datos de forma programada, pero no es un punto de acceso continuo.

Referencia: <https://aws.amazon.com/storagegateway/>

</details>

### 30. Un equipo de análisis necesita ejecutar consultas SQL complejas y frecuentes para informes de BI sobre petabytes de datos estructurados. ¿Qué servicio es el más adecuado?

- **A.** Amazon Aurora
- **B.** Amazon DynamoDB
- **C.** Amazon Redshift
- **D.** Amazon Athena

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Redshift es un almacén de datos columnar para analítica a gran escala. Aurora es para cargas transaccionales, y Athena es mejor para consultas ocasionales sobre datos en S3.

Referencia: <https://aws.amazon.com/redshift/>

</details>
