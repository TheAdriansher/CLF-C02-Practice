# D2. Seguridad y cumplimiento

Peso aproximado en el examen: 30 %. Preguntas: 30.

> Preguntas originales y no oficiales. La respuesta está al final de cada una, dentro de un bloque desplegable.

### 1. Una empresa usa Amazon RDS for MySQL. Según el modelo de responsabilidad compartida, ¿qué DOS tareas son responsabilidad del cliente?

*Selecciona 2.*

- **A.** Aplicar parches al sistema operativo de la instancia de base de datos
- **B.** Configurar las reglas de los grupos de seguridad que controlan el acceso a la base de datos
- **C.** Reemplazar el hardware del servidor que aloja la instancia
- **D.** Administrar los usuarios de la base de datos y los permisos sobre los datos
- **E.** Mantener la seguridad física del centro de datos

<details><summary>Ver respuesta</summary>

**Respuesta: B, D.** En RDS, AWS se encarga del hardware, el centro de datos y los parches del sistema operativo; el cliente configura el acceso de red (grupos de seguridad), los usuarios y los permisos, y protege sus datos.

Referencia: <https://aws.amazon.com/compliance/shared-responsibility-model/>

</details>

### 2. Una empresa sigue las mejores prácticas de IAM y usa el usuario raíz solo cuando es estrictamente necesario. ¿Cuál de estas tareas requiere credenciales del usuario raíz?

- **A.** Crear usuarios y roles de IAM
- **B.** Lanzar instancias de Amazon EC2 en cualquier región
- **C.** Cerrar la cuenta de AWS
- **D.** Configurar alertas de AWS Budgets

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Cerrar la cuenta es de las pocas tareas exclusivas del usuario raíz (también cambiar ciertos ajustes de la cuenta o restaurar permisos de IAM). Administrar IAM o lanzar recursos se hace con usuarios o roles de IAM.

Referencia: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html>

</details>

### 3. Una empresa revisa la seguridad de su cuenta de AWS recién creada. ¿Qué DOS acciones siguen las mejores prácticas para proteger el usuario raíz?

*Selecciona 2.*

- **A.** Habilitar la autenticación multifactor (MFA) en el usuario raíz
- **B.** Crear claves de acceso para el usuario raíz y guardarlas cifradas en AWS Secrets Manager
- **C.** Usar el usuario raíz para las tareas administrativas diarias, ya que tiene todos los permisos
- **D.** No crear claves de acceso para el usuario raíz, y eliminarlas si ya existen
- **E.** Compartir la contraseña del usuario raíz con los administradores para casos de emergencia

<details><summary>Ver respuesta</summary>

**Respuesta: A, D.** El usuario raíz se protege con MFA y sin claves de acceso, que son de larga duración y con privilegios totales. No se usa para el trabajo diario ni se comparte su contraseña.

Referencia: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user.html>

</details>

### 4. Una aplicación en una instancia de Amazon EC2 debe llamar a la API de Amazon S3. El equipo quiere evitar guardar claves de acceso en el código o en la instancia. ¿Cuál es la mejor práctica?

- **A.** Guardar las claves de acceso en variables de entorno cifradas
- **B.** Asociar un rol de IAM a la instancia mediante un perfil de instancia
- **C.** Crear un usuario de IAM compartido y rotar sus claves cada mes
- **D.** Guardar las claves en un bucket de S3 privado

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Un rol de IAM entrega credenciales temporales que se rotan solas. Cualquier opción que guarde claves de larga duración sigue siendo un riesgo.

Referencia: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html>

</details>

### 5. Un equipo de seguridad explica cómo funcionan los roles de AWS IAM. ¿Qué DOS afirmaciones sobre los roles de IAM son correctas?

*Selecciona 2.*

- **A.** Entregan credenciales temporales a quien los asume
- **B.** Tienen una contraseña permanente y claves de acceso de larga duración
- **C.** Pueden ser asumidos por servicios de AWS, como Amazon EC2 o AWS Lambda
- **D.** Solo pueden ser asumidos por usuarios humanos de la misma cuenta
- **E.** Eliminan la necesidad de definir políticas de permisos

<details><summary>Ver respuesta</summary>

**Respuesta: A, C.** Los roles dan credenciales temporales y pueden asumirlos servicios, aplicaciones y usuarios (incluso de otras cuentas). Siguen necesitando políticas que definan sus permisos.

Referencia: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html>

</details>

### 6. Una empresa con 25 cuentas en AWS Organizations quiere que sus empleados inicien sesión una sola vez con las credenciales de su directorio corporativo y accedan a varias cuentas y aplicaciones asignadas a su rol, sin crear usuarios de IAM en cada cuenta. ¿Qué servicio es la mejor opción?

- **A.** Amazon Cognito
- **B.** Grupos de IAM en cada cuenta
- **C.** AWS IAM Identity Center
- **D.** AWS Secrets Manager

<details><summary>Ver respuesta</summary>

**Respuesta: C.** IAM Identity Center da inicio de sesión único (SSO) a múltiples cuentas y aplicaciones para la fuerza laboral. Cognito es para los usuarios finales de tus propias aplicaciones.

Referencia: <https://aws.amazon.com/iam/identity-center/>

</details>

### 7. Una empresa quiere detectar de forma continua comportamientos sospechosos en sus cuentas, como credenciales de IAM usadas desde ubicaciones inusuales o instancias de EC2 que se comunican con servidores de minería de criptomonedas. No quiere instalar agentes ni administrar infraestructura. ¿Qué servicio es la mejor opción?

- **A.** Amazon Inspector
- **B.** Amazon Macie
- **C.** Amazon GuardDuty
- **D.** AWS Config

<details><summary>Ver respuesta</summary>

**Respuesta: C.** GuardDuty detecta amenazas analizando registros como CloudTrail, VPC Flow Logs y DNS, sin agentes. Inspector busca vulnerabilidades; Macie, datos sensibles; Config, cambios de configuración.

Referencia: <https://aws.amazon.com/guardduty/>

</details>

### 8. Una empresa quiere escanear de forma automática y continua sus instancias de Amazon EC2, imágenes de contenedor y funciones de AWS Lambda para detectar vulnerabilidades de software conocidas y exposición de red no intencionada. ¿Qué servicio es la mejor opción?

- **A.** Amazon GuardDuty
- **B.** Amazon Macie
- **C.** Amazon Inspector
- **D.** AWS Config

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Amazon Inspector es el servicio de gestión de vulnerabilidades. GuardDuty detecta comportamiento sospechoso, no vulnerabilidades de software.

Referencia: <https://aws.amazon.com/inspector/>

</details>

### 9. Una empresa quiere descubrir y proteger de forma automática datos sensibles, como números de tarjeta y datos personales, almacenados en cientos de buckets de Amazon S3. ¿Qué servicio es la mejor opción?

- **A.** Amazon Inspector
- **B.** Amazon Macie
- **C.** AWS Config
- **D.** Amazon GuardDuty

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Macie usa aprendizaje automático para descubrir y clasificar datos sensibles (PII) en S3.

Referencia: <https://aws.amazon.com/macie/>

</details>

### 10. Una empresa recibió una alerta de GuardDuty sobre actividad sospechosa de un rol de IAM. El equipo de seguridad necesita investigar la causa raíz analizando las relaciones entre usuarios, roles, direcciones IP y recursos a lo largo del tiempo, con visualizaciones basadas en grafos. ¿Qué servicio es la mejor opción?

- **A.** AWS CloudTrail Lake
- **B.** Amazon Detective
- **C.** AWS Security Hub
- **D.** Amazon Inspector

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Detective construye grafos de relaciones para investigar la causa raíz de un hallazgo. Security Hub solo centraliza y prioriza hallazgos.

Referencia: <https://aws.amazon.com/detective/>

</details>

### 11. Una empresa quiere identificar qué buckets de S3, roles de IAM y claves de KMS están compartidos con entidades externas a su organización, para detectar accesos no intencionados. ¿Qué servicio es la mejor opción?

- **A.** Amazon Macie
- **B.** AWS IAM Access Analyzer
- **C.** Amazon Inspector
- **D.** Amazon GuardDuty

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Access Analyzer analiza las políticas para encontrar recursos compartidos con entidades externas. GuardDuty detecta actividad sospechosa, no revisa quién tiene acceso por política.

Referencia: <https://aws.amazon.com/iam/access-analyzer/>

</details>

### 12. Una auditoría descubre que un bucket de Amazon S3 fue eliminado ayer. El equipo de seguridad necesita saber qué usuario o rol realizó la acción, desde qué dirección IP y a qué hora exacta. ¿Qué servicio es la mejor opción?

- **A.** AWS Config
- **B.** AWS CloudTrail
- **C.** Amazon CloudWatch
- **D.** Amazon Inspector

<details><summary>Ver respuesta</summary>

**Respuesta: B.** CloudTrail registra las llamadas a la API: quién hizo qué, desde dónde y cuándo. Config registra cómo cambió la configuración de un recurso.

Referencia: <https://aws.amazon.com/cloudtrail/>

</details>

### 13. El equipo de seguridad necesita evaluar de forma continua si los recursos cumplen reglas de configuración, por ejemplo que todos los volúmenes de Amazon EBS estén cifrados, y consultar el historial de cambios de configuración de cada recurso. ¿Qué servicio es la mejor opción?

- **A.** AWS CloudTrail
- **B.** AWS Config
- **C.** Amazon Inspector
- **D.** AWS Audit Manager

<details><summary>Ver respuesta</summary>

**Respuesta: B.** AWS Config evalúa reglas de cumplimiento y guarda el historial de configuración de los recursos. Audit Manager recopila evidencia para auditorías, no evalúa reglas de configuración en tiempo real.

Referencia: <https://aws.amazon.com/config/>

</details>

### 14. Una empresa necesita descargar el informe SOC 2 y los certificados ISO 27001 de AWS para entregarlos a un auditor externo. ¿Qué servicio es la mejor opción?

- **A.** AWS Artifact
- **B.** AWS Audit Manager
- **C.** AWS Config
- **D.** AWS Trusted Advisor

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Artifact es el portal de los informes de cumplimiento de AWS (algunos bajo acuerdo de confidencialidad). Audit Manager, en cambio, recopila evidencia de cumplimiento de tus propios recursos.

Referencia: <https://aws.amazon.com/artifact/>

</details>

### 15. Una empresa de pagos firmó un contrato que exige que sus claves criptográficas residan en hardware dedicado exclusivamente a ella (no compartido con otros clientes), que AWS no tenga acceso al material de las claves y que la empresa administre por sí misma los usuarios del HSM. ¿Qué es la mejor opción?

- **A.** AWS KMS con claves administradas por AWS
- **B.** AWS KMS con claves administradas por el cliente
- **C.** AWS CloudHSM
- **D.** AWS Secrets Manager

<details><summary>Ver respuesta</summary>

**Respuesta: C.** CloudHSM da HSM dedicados y de un solo cliente, con control exclusivo de las claves. KMS es un servicio administrado e integrado con otros servicios de AWS.

Referencia: <https://aws.amazon.com/cloudhsm/>

</details>

### 16. Una empresa necesita bloquear de forma explícita el tráfico entrante desde un rango de direcciones IP maliciosas hacia todas las instancias de una subred, sin modificar cada instancia. El control debe evaluar el tráfico de entrada y de salida por separado, sin recordar el estado de las conexiones. ¿Qué es la mejor opción?

- **A.** Grupos de seguridad con una regla de denegación
- **B.** Listas de control de acceso a la red (ACL de red)
- **C.** AWS WAF asociado a las instancias
- **D.** Tablas de enrutamiento de la subred

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Las ACL de red operan a nivel de subred, no guardan estado y admiten reglas de permitir y de denegar. Los grupos de seguridad solo permiten y son con estado.

Referencia: <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html>

</details>

### 17. Una empresa publica una aplicación web detrás de un Application Load Balancer. Necesita bloquear intentos de inyección SQL y XSS en la capa de aplicación, y además mitigar ataques DDoS de las capas 3 y 4 sin costo adicional. ¿Qué DOS servicios cumplen el requisito?

*Selecciona 2.*

- **A.** AWS WAF
- **B.** AWS Shield Standard
- **C.** Amazon GuardDuty
- **D.** AWS Network Firewall
- **E.** AWS Shield Advanced

<details><summary>Ver respuesta</summary>

**Respuesta: A, B.** WAF filtra tráfico web en la capa 7 (SQLi, XSS). Shield Standard viene incluido sin costo y protege contra DDoS comunes de las capas 3 y 4. Shield Advanced tiene cargo adicional.

Referencia: <https://aws.amazon.com/shield/>

</details>

### 18. Una empresa usa AWS Organizations con 40 cuentas. El equipo de seguridad necesita garantizar que ninguna cuenta, ni siquiera con usuarios administradores, pueda deshabilitar AWS CloudTrail ni lanzar recursos fuera de las regiones aprobadas. ¿Qué es la mejor opción?

- **A.** Políticas de IAM con denegación explícita asignadas a cada usuario administrador
- **B.** Políticas de control de servicio (SCP) aplicadas a la unidad organizativa
- **C.** Límites de permisos en cada rol de IAM
- **D.** AWS Config con reglas de remediación automática en cada cuenta

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Las SCP fijan el máximo de permisos de las cuentas miembro, incluso para sus administradores. No conceden permisos, solo los limitan.

Referencia: <https://aws.amazon.com/organizations/>

</details>

### 19. Una aplicación necesita almacenar credenciales de base de datos y rotarlas automáticamente cada 30 días sin cambios manuales en el código. ¿Qué servicio es la mejor opción?

- **A.** AWS IAM Identity Center
- **B.** AWS Key Management Service (AWS KMS)
- **C.** Amazon Cognito
- **D.** AWS Secrets Manager

<details><summary>Ver respuesta</summary>

**Respuesta: D.** Secrets Manager almacena secretos y automatiza su rotación. KMS administra claves de cifrado, no guarda ni rota credenciales de aplicaciones.

Referencia: <https://aws.amazon.com/secrets-manager/>

</details>

### 20. Selecciona DOS afirmaciones correctas sobre las claves administradas por el cliente en AWS KMS.

*Selecciona 2.*

- **A.** AWS puede usar la clave para descifrar datos sin ninguna política
- **B.** El cliente controla la política de acceso a la clave y puede habilitar su rotación
- **C.** Las claves no pueden deshabilitarse una vez creadas
- **D.** La clave se almacena en un HSM dedicado de un único inquilino administrado por el cliente
- **E.** El uso de la clave puede auditarse mediante AWS CloudTrail

<details><summary>Ver respuesta</summary>

**Respuesta: B, E.** En KMS el cliente define políticas y rotación, y cada uso queda en CloudTrail. El HSM de único inquilino describe CloudHSM, no KMS.

Referencia: <https://aws.amazon.com/kms/>

</details>

### 21. Una empresa quiere una revisión rápida que le indique, entre otras cosas, si la cuenta raíz no tiene MFA y si hay security groups con puertos abiertos a todo Internet. ¿Qué herramienta ofrece estas verificaciones?

- **A.** AWS Trusted Advisor
- **B.** AWS Artifact
- **C.** Amazon GuardDuty
- **D.** Amazon Macie

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Trusted Advisor compara tu cuenta con buenas prácticas, incluidas verificaciones de seguridad. GuardDuty detecta amenazas con análisis de logs, no revisa configuraciones de MFA.

Referencia: <https://aws.amazon.com/premiumsupport/technology/trusted-advisor/>

</details>

### 22. Un equipo de seguridad quiere ver en un solo lugar los hallazgos de seguridad de varios servicios y varias cuentas, junto con verificaciones automatizadas contra buenas prácticas. ¿Qué servicio debería usar?

- **A.** AWS Security Hub
- **B.** AWS Config
- **C.** Amazon Inspector
- **D.** AWS CloudTrail

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Security Hub agrega y prioriza hallazgos de varios servicios y cuentas. Inspector es una de las fuentes que alimentan esa vista, no la centraliza.

Referencia: <https://aws.amazon.com/security-hub/>

</details>

### 23. Un equipo de cumplimiento quiere recopilar evidencia de forma continua y automática sobre el uso de AWS para preparar auditorías. ¿Qué servicio ayuda más directamente?

- **A.** AWS Audit Manager
- **B.** AWS Artifact
- **C.** Amazon Detective
- **D.** AWS CloudTrail

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Audit Manager recopila evidencia de tus propios recursos de forma continua. Artifact entrega los reportes de cumplimiento de AWS, no evidencia de tu cuenta.

Referencia: <https://aws.amazon.com/audit-manager/>

</details>

### 24. Una empresa desarrolla una aplicación móvil para clientes finales y quiere permitir el registro, el inicio de sesión y el acceso con proveedores de identidad sociales. ¿Qué servicio es el más adecuado?

- **A.** Amazon Cognito
- **B.** AWS IAM con un usuario por cliente
- **C.** AWS Directory Service
- **D.** AWS IAM Identity Center

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Cognito gestiona identidades de usuarios de aplicaciones, incluido el acceso social. IAM Identity Center es para la fuerza laboral de la empresa, no para clientes finales.

Referencia: <https://aws.amazon.com/cognito/>

</details>

### 25. Una organización con muchas cuentas en AWS Organizations quiere definir y aplicar reglas de AWS WAF y de security groups de forma centralizada, incluyendo las cuentas nuevas. ¿Qué servicio debería usar?

- **A.** AWS Shield Advanced
- **B.** Políticas de control de servicio (SCP)
- **C.** Amazon GuardDuty
- **D.** AWS Firewall Manager

<details><summary>Ver respuesta</summary>

**Respuesta: D.** Firewall Manager administra reglas de firewall de forma centralizada en varias cuentas. Las SCP limitan permisos de IAM, no configuran WAF ni security groups.

Referencia: <https://aws.amazon.com/firewall-manager/>

</details>

### 26. Una empresa necesita inspeccionar el tráfico de red que entra y sale de su VPC y filtrar por reglas de dominios y protocolos, con inspección con estado. ¿Qué servicio es el más adecuado?

- **A.** AWS Network Firewall
- **B.** Lista de control de acceso a la red (NACL)
- **C.** AWS WAF
- **D.** AWS Shield Standard

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Network Firewall es un firewall administrado para el tráfico de la VPC con inspección con estado. WAF protege aplicaciones web (capa 7) en servicios como CloudFront o ALB.

Referencia: <https://aws.amazon.com/network-firewall/>

</details>

### 27. Una empresa de comercio electrónico sufre ataques DDoS sofisticados y quiere acceso a un equipo de respuesta de AWS y protección contra picos de costos causados por ataques. ¿Qué servicio debería contratar?

- **A.** Amazon GuardDuty
- **B.** AWS WAF
- **C.** AWS Shield Standard
- **D.** AWS Shield Advanced

<details><summary>Ver respuesta</summary>

**Respuesta: D.** Shield Advanced añade equipo de respuesta y protección de costos por DDoS. Shield Standard ya viene incluido sin costo, pero no ofrece esas características.

Referencia: <https://aws.amazon.com/shield/>

</details>

### 28. Selecciona DOS características de los security groups de Amazon VPC.

*Selecciona 2.*

- **A.** Se aplican a nivel de subred
- **B.** Son sin estado (stateless)
- **C.** Admiten reglas de denegar explícitas
- **D.** Son con estado (stateful)
- **E.** Solo admiten reglas de permitir

<details><summary>Ver respuesta</summary>

**Respuesta: D, E.** Los security groups actúan a nivel de instancia, son con estado y solo permiten tráfico. Las NACL son sin estado y trabajan a nivel de subred; esas sí admiten reglas de denegar.

Referencia: <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html>

</details>

### 29. Una empresa ejecuta su lógica en AWS Lambda. Según el modelo de responsabilidad compartida, ¿qué es responsabilidad del cliente?

- **A.** El mantenimiento del entorno de ejecución del lenguaje
- **B.** La seguridad física del hardware
- **C.** El parcheo del sistema operativo de los servidores donde corre
- **D.** El código de la función y los permisos de IAM que se le asignan

<details><summary>Ver respuesta</summary>

**Respuesta: D.** En Lambda AWS administra servidores, SO y runtime; el cliente responde por su código, sus datos y los permisos. En EC2, en cambio, el cliente parchea el SO.

Referencia: <https://aws.amazon.com/compliance/shared-responsibility-model/>

</details>

### 30. Una aplicación solo necesita leer objetos de un bucket de S3 específico. ¿Qué política respeta mejor el principio de mínimo privilegio?

- **A.** Adjuntar la política administrada AmazonS3FullAccess
- **B.** Adjuntar AdministratorAccess para evitar errores de permisos
- **C.** Permitir s3:* sobre todos los recursos
- **D.** Permitir solo s3:GetObject sobre los objetos de ese bucket

<details><summary>Ver respuesta</summary>

**Respuesta: D.** Mínimo privilegio es conceder solo las acciones y recursos necesarios. Las demás opciones dan acceso de escritura o a recursos que la aplicación no necesita.

Referencia: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>

</details>
