# D1. Conceptos de la nube

Peso aproximado en el examen: 24 %. Preguntas: 30.

> Preguntas originales y no oficiales. La respuesta está al final de cada una, dentro de un bloque desplegable.

### 1. Una empresa de venta de boletos tiene picos de tráfico impredecibles cuando anuncia eventos. Necesita que la capacidad de cómputo aumente sola durante cada pico y disminuya cuando la demanda baje, para no pagar recursos ociosos. ¿Qué capacidad de la nube describe mejor esto?

- **A.** Elasticidad: ajustar la capacidad a la demanda actual
- **B.** Escalabilidad: crecer para soportar un aumento sostenido de la carga
- **C.** Agilidad: aprovisionar recursos rápidamente para nuevas iniciativas
- **D.** Alta disponibilidad: distribuir la carga en ubicaciones aisladas

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Elasticidad es que la capacidad suba y baje automáticamente con la demanda. Escalabilidad es poder crecer; agilidad es aprovisionar rápido; alta disponibilidad es tolerar fallos.

Referencia: <https://aws.amazon.com/what-is-cloud-computing/>

</details>

### 2. Una empresa debe migrar 200 servidores on-premises a AWS en tres meses, porque el contrato de su centro de datos vence. No hay tiempo para modificar el código de las aplicaciones. Quiere el menor esfuerzo y riesgo en la migración y optimizar después. ¿Qué estrategia de migración es la mejor?

- **A.** Refactor
- **B.** Replatform
- **C.** Rehost
- **D.** Repurchase

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Rehost (lift-and-shift) mueve los servidores tal cual, sin cambiar código. Refactor rediseña la aplicación para la nube y exige tiempo que aquí no hay.

Referencia: <https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html>

</details>

### 3. Al inventariar su portafolio, una empresa encuentra que el 20 % de sus aplicaciones lleva más de un año sin usuarios activos ni dependencias de otras aplicaciones. Decide eliminarlas para reducir costos de mantenimiento. ¿Qué estrategia de migración aplica?

- **A.** Retain
- **B.** Retire
- **C.** Repurchase
- **D.** Replatform

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Retire significa apagar lo que ya no se necesita. Retain es dejar la aplicación donde está (por ejemplo, on-premises) por ahora.

Referencia: <https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html>

</details>

### 4. Una empresa quiere evaluar su preparación organizacional para la nube en funciones de negocio y técnicas, alinear a las partes interesadas y planificar su transformación desde la estrategia hasta la adopción a escala. ¿Qué recurso es el más adecuado?

- **A.** AWS Well-Architected Framework
- **B.** AWS Artifact
- **C.** AWS Cloud Adoption Framework (AWS CAF)
- **D.** Modelo de responsabilidad compartida

<details><summary>Ver respuesta</summary>

**Respuesta: C.** AWS CAF guía la transformación organizacional con seis perspectivas (negocio, personas, gobernanza, plataforma, seguridad y operaciones) y las fases envision, align, launch y scale.

Referencia: <https://aws.amazon.com/cloud-adoption-framework/>

</details>

### 5. Una empresa tiene una carga de trabajo ya desplegada y quiere revisar sus decisiones de arquitectura contra las mejores prácticas de AWS para identificar riesgos en áreas como seguridad, confiabilidad y costos. ¿Qué recurso es el más adecuado?

- **A.** AWS Cloud Adoption Framework (AWS CAF)
- **B.** AWS Well-Architected Framework
- **C.** AWS Artifact
- **D.** Modelo de responsabilidad compartida

<details><summary>Ver respuesta</summary>

**Respuesta: B.** El Well-Architected Framework (y la herramienta Well-Architected Tool) revisa una carga de trabajo contra seis pilares. CAF es para planificar la transformación de la organización.

Referencia: <https://aws.amazon.com/architecture/well-architected/>

</details>

### 6. Un equipo de arquitectura decide seleccionar los tipos de recursos de cómputo adecuados para cada necesidad y evaluar periódicamente nuevos tipos de instancias y servicios para mantener el desempeño cuando cambia la demanda. ¿A qué pilar del AWS Well-Architected Framework corresponde principalmente esta práctica?

- **A.** Excelencia operativa
- **B.** Optimización de costos
- **C.** Eficiencia del rendimiento
- **D.** Confiabilidad

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Elegir los recursos correctos y revisarlos con el tiempo para sostener el desempeño es el pilar de Eficiencia del rendimiento. Los seis pilares son: excelencia operativa, seguridad, confiabilidad, eficiencia del rendimiento, optimización de costos y sostenibilidad.

Referencia: <https://aws.amazon.com/architecture/well-architected/>

</details>

### 7. Una empresa compara el costo de operar su propio centro de datos con el de usar AWS. Observa que AWS puede ofrecer precios por unidad más bajos de los que ella lograría por su cuenta, porque agrega el uso de cientos de miles de clientes y compra infraestructura a gran volumen. ¿Qué beneficio de la nube describe esto?

- **A.** Elasticidad
- **B.** Economías de escala
- **C.** Agilidad
- **D.** Alta disponibilidad

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Las economías de escala son los precios más bajos que resultan de que AWS agregue el uso de muchísimos clientes.

Referencia: <https://aws.amazon.com/what-is-cloud-computing/>

</details>

### 8. Una startup evita comprar servidores por adelantado y paga cada mes solo los recursos que realmente consume. ¿Qué beneficio de la nube describe mejor este cambio?

- **A.** Alcance global en minutos
- **B.** Cambiar gasto de capital (CapEx) por gasto variable (OpEx)
- **C.** Economías de escala
- **D.** Alta disponibilidad

<details><summary>Ver respuesta</summary>

**Respuesta: B.** En vez de invertir en infraestructura por adelantado (CapEx), se paga por consumo (gasto variable).

Referencia: <https://aws.amazon.com/what-is-cloud-computing/>

</details>

### 9. Un arquitecto explica la infraestructura global de AWS a un equipo nuevo. ¿Qué DOS afirmaciones sobre las zonas de disponibilidad (AZ) son correctas?

*Selecciona 2.*

- **A.** Cada AZ consta de uno o más centros de datos con energía, refrigeración y red independientes
- **B.** Las AZ de una misma región están separadas físicamente y conectadas con redes de baja latencia
- **C.** Una AZ es equivalente a una ubicación de borde de Amazon CloudFront
- **D.** Los recursos se replican automáticamente entre las AZ de una región para todos los servicios
- **E.** Toda región de AWS contiene exactamente dos zonas de disponibilidad

<details><summary>Ver respuesta</summary>

**Respuesta: A, B.** Las AZ son centros de datos aislados y conectados con baja latencia. No todo se replica solo: en EC2 o EBS, por ejemplo, tú diseñas la redundancia. Y una región tiene varias AZ (normalmente tres o más), no exactamente dos.

Referencia: <https://aws.amazon.com/about-aws/global-infrastructure/>

</details>

### 10. Una empresa debe cumplir una ley que exige que los datos de sus clientes alemanes permanezcan dentro de la Unión Europea. ¿Qué factor debe pesar primero al elegir la región de AWS?

- **A.** El menor precio por hora de EC2
- **B.** El cumplimiento y la residencia de los datos
- **C.** La menor latencia hacia usuarios de otro continente
- **D.** El mayor número de servicios disponibles

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Un requisito legal de residencia de datos manda sobre el precio, la latencia o la disponibilidad de servicios: primero se eligen las regiones que lo permiten.

Referencia: <https://aws.amazon.com/about-aws/global-infrastructure/>

</details>

### 11. Amazon CloudFront entrega contenido estático desde ubicaciones cercanas a los usuarios finales para reducir la latencia. ¿Cómo se llaman esas ubicaciones?

- **A.** Zonas de disponibilidad
- **B.** Ubicaciones de borde (edge locations)
- **C.** Regiones
- **D.** AWS Outposts

<details><summary>Ver respuesta</summary>

**Respuesta: B.** CloudFront usa ubicaciones de borde para almacenar contenido en caché cerca del usuario. Las AZ y las regiones alojan tus cargas de trabajo; Outposts lleva infraestructura de AWS a tu centro de datos.

Referencia: <https://aws.amazon.com/about-aws/global-infrastructure/>

</details>

### 12. Una auditoría pregunta quién es responsable de controlar el acceso físico a los servidores donde corren las instancias EC2 de la empresa. Según el modelo de responsabilidad compartida, ¿quién lo es?

- **A.** Ambos por igual, mediante security groups
- **B.** El cliente, si contrató el plan de soporte Business
- **C.** El cliente, porque es dueño de las instancias EC2
- **D.** AWS, porque es seguridad “de” la nube

<details><summary>Ver respuesta</summary>

**Respuesta: D.** La seguridad física de los centros de datos es siempre de AWS (seguridad “de” la nube). El cliente solo responde por lo que configura “en” la nube; el plan de soporte no cambia el reparto.

Referencia: <https://aws.amazon.com/compliance/shared-responsibility-model/>

</details>

### 13. Se publica una vulnerabilidad crítica en el sistema operativo de las instancias EC2 de una empresa. ¿Quién debe aplicar el parche al sistema operativo invitado?

- **A.** AWS, porque administra los servidores físicos
- **B.** La empresa (cliente)
- **C.** Nadie: EC2 se parchea sola al ser un servicio administrado
- **D.** AWS, si la instancia está en una zona de disponibilidad con Multi-AZ

<details><summary>Ver respuesta</summary>

**Respuesta: B.** En EC2 (IaaS) el cliente administra el SO invitado, sus parches y su firewall. Lo distinguirías de RDS o Lambda, donde AWS se encarga del SO subyacente.

Referencia: <https://aws.amazon.com/compliance/shared-responsibility-model/>

</details>

### 14. Un equipo quiere reducir el impacto ambiental de sus cargas: maximizar la utilización de los recursos aprovisionados y elegir hardware más eficiente en energía. ¿Qué pilar del AWS Well-Architected Framework aborda esto?

- **A.** Optimización de costos
- **B.** Excelencia operativa
- **C.** Sostenibilidad
- **D.** Eficiencia del rendimiento

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Sostenibilidad se centra en minimizar el impacto ambiental y la energía consumida. Optimización de costos también reduce desperdicio, pero su meta es el gasto, no el impacto ambiental.

Referencia: <https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html>

</details>

### 15. Un equipo de operaciones quiere definir toda su infraestructura como código, automatizar los despliegues y aprender de cada incidente para mejorar sus procedimientos. ¿Qué pilar del Well-Architected Framework describe mejor esto?

- **A.** Excelencia operativa
- **B.** Confiabilidad
- **C.** Eficiencia del rendimiento
- **D.** Seguridad

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Excelencia operativa cubre ejecutar y monitorear sistemas, automatizar cambios y mejorar procesos con base en lo aprendido. Confiabilidad trata de recuperarse de fallas, no de mejorar la operación.

Referencia: <https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html>

</details>

### 16. Una carga de trabajo debe recuperarse automáticamente de fallas de infraestructura y de interrupciones del servicio, y escalar para cubrir la demanda. ¿Qué pilar del Well-Architected Framework aborda esta capacidad?

- **A.** Optimización de costos
- **B.** Confiabilidad
- **C.** Eficiencia del rendimiento
- **D.** Excelencia operativa

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Confiabilidad es la capacidad de recuperarse de fallas y mitigar interrupciones. Eficiencia del rendimiento trata de elegir los recursos adecuados, no de la recuperación.

Referencia: <https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html>

</details>

### 17. Selecciona DOS principios de diseño del pilar de Confiabilidad del Well-Architected Framework.

*Selecciona 2.*

- **A.** Administrar los cambios de forma manual para evitar errores
- **B.** Escalar horizontalmente para reducir el impacto de una falla individual
- **C.** Adivinar la capacidad necesaria y comprar por adelantado
- **D.** Probar los procedimientos de recuperación
- **E.** Usar un único recurso grande para simplificar la arquitectura

<details><summary>Ver respuesta</summary>

**Respuesta: B, D.** Probar la recuperación y escalar horizontalmente (varios recursos pequeños) son principios de Confiabilidad. Adivinar capacidad es justo lo que la nube permite dejar de hacer.

Referencia: <https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html>

</details>

### 18. Una empresa necesita capacitar a sus empleados en habilidades de nube y rediseñar su estructura organizacional para soportar la adopción. ¿Qué perspectiva del AWS Cloud Adoption Framework (CAF) aborda esto?

- **A.** Plataforma
- **B.** Personas
- **C.** Operaciones
- **D.** Gobernanza

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Personas cubre cultura, capacitación y estructura organizacional. Gobernanza trata de gestionar riesgo, presupuesto y portafolio; Plataforma, de la arquitectura técnica.

Referencia: <https://aws.amazon.com/cloud-adoption-framework/>

</details>

### 19. Una empresa quiere diseñar la arquitectura de nube y aprovisionar ambientes con infraestructura como código, y además administrar el riesgo y el presupuesto de sus programas de TI. Selecciona las DOS perspectivas del CAF que cubren estas necesidades.

*Selecciona 2.*

- **A.** Gobernanza
- **B.** Personas
- **C.** Operaciones
- **D.** Plataforma
- **E.** Negocio

<details><summary>Ver respuesta</summary>

**Respuesta: A, D.** Plataforma cubre arquitectura y aprovisionamiento; Gobernanza cubre riesgo, presupuesto y gestión de programas. Negocio se enfoca en alinear la nube con resultados de negocio.

Referencia: <https://aws.amazon.com/cloud-adoption-framework/>

</details>

### 20. Una empresa quiere usar un CRM sin administrar servidores, sistema operativo ni actualizaciones del software; solo desea que sus usuarios lo utilicen. ¿Qué modelo de servicio de nube describe esto?

- **A.** Infraestructura como servicio (IaaS)
- **B.** Nube privada local
- **C.** Software como servicio (SaaS)
- **D.** Plataforma como servicio (PaaS)

<details><summary>Ver respuesta</summary>

**Respuesta: C.** En SaaS el proveedor gestiona todo y el cliente solo usa la aplicación. En PaaS el cliente aún administra su aplicación y datos; en IaaS, además el SO.

Referencia: <https://aws.amazon.com/types-of-cloud-computing/>

</details>

### 21. Por regulación, una empresa debe mantener sus datos de clientes en su centro de datos local, pero quiere ejecutar sus aplicaciones web en AWS conectadas con ese centro de datos. ¿Qué modelo de implementación describe esto?

- **A.** Todo en la nube
- **B.** Nube privada en la nube
- **C.** Nube pública
- **D.** Nube híbrida

<details><summary>Ver respuesta</summary>

**Respuesta: D.** Combinar infraestructura local con recursos en la nube conectados es nube híbrida. “Todo en la nube” implicaría migrar también los datos regulados.

Referencia: <https://aws.amazon.com/types-of-cloud-computing/>

</details>

### 22. Una aplicación debe seguir disponible si falla por completo un centro de datos, con el menor esfuerzo y latencia. ¿Cuál es la mejor opción?

- **A.** Desplegarla en varias zonas de disponibilidad de una Región
- **B.** Distribuir contenido con ubicaciones de borde
- **C.** Desplegarla en varias Regiones desde el inicio
- **D.** Usar una instancia EC2 más grande en una sola zona

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Las zonas de disponibilidad son uno o más centros de datos aislados dentro de una Región; varias AZ cubren la falla de un centro de datos. Multi-Región es mejor para desastres regionales y es más costoso y complejo.

Referencia: <https://aws.amazon.com/about-aws/global-infrastructure/regions_az/>

</details>

### 23. Un equipo de producto quiere lanzar un experimento: crear un ambiente de pruebas en minutos y eliminarlo si la idea fracasa, sin comprar hardware. ¿Qué ventaja de la nube describe esto?

- **A.** Beneficiarse de economías de escala masivas
- **B.** Aumentar la velocidad y la agilidad
- **C.** Dejar de adivinar la capacidad
- **D.** Llegar a ser global en minutos

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Agilidad es aprovisionar y descartar recursos rápido para experimentar. Dejar de adivinar la capacidad se refiere a no calcular de más o de menos la demanda futura.

Referencia: <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html>

</details>

### 24. Una empresa migra su base de datos MySQL instalada en servidores locales a Amazon RDS for MySQL, sin cambiar el diseño de la aplicación pero aprovechando un servicio administrado. ¿Qué estrategia de migración es?

- **A.** Rehost
- **B.** Repurchase
- **C.** Replatform
- **D.** Refactor

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Replatform es hacer pequeños ajustes para aprovechar la nube (por ejemplo, pasar a un servicio administrado) sin rediseñar. Rehost mueve tal cual; Refactor rediseña la aplicación.

Referencia: <https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/>

</details>

### 25. Una empresa reemplaza su CRM instalado en servidores propios por un producto SaaS comercial. ¿Qué estrategia de migración es?

- **A.** Rehost
- **B.** Repurchase
- **C.** Retain
- **D.** Replatform

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Repurchase es cambiar a un producto distinto, normalmente SaaS. Rehost y Replatform conservan la misma aplicación.

Referencia: <https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/>

</details>

### 26. Una aplicación en un mainframe depende de equipos que no pueden moverse todavía. La empresa decide no migrarla por ahora y revisarla más adelante. ¿Qué estrategia aplica?

- **A.** Relocate
- **B.** Refactor
- **C.** Retain
- **D.** Retire

<details><summary>Ver respuesta</summary>

**Respuesta: C.** Retain es dejar la aplicación donde está. Retire sería apagarla porque ya no se necesita.

Referencia: <https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/>

</details>

### 27. Una empresa quiere mover sus cargas de VMware locales a VMware Cloud on AWS sin cambiar el hipervisor ni adquirir hardware nuevo. ¿Qué estrategia de migración es?

- **A.** Relocate
- **B.** Replatform
- **C.** Repurchase
- **D.** Rehost

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Relocate mueve cargas (por ejemplo, VMware) a la nube sin cambios en el hipervisor ni en las operaciones. Rehost reinstala las aplicaciones en EC2.

Referencia: <https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/>

</details>

### 28. Una empresa quiere migrar servidores físicos y virtuales a instancias EC2 mediante lift-and-shift, replicando los servidores de forma continua hasta el corte. ¿Qué servicio es el más adecuado?

- **A.** AWS Application Migration Service
- **B.** AWS DataSync
- **C.** AWS Snowball Edge
- **D.** AWS Database Migration Service

<details><summary>Ver respuesta</summary>

**Respuesta: A.** Application Migration Service replica servidores completos hacia EC2. Database Migration Service mueve bases de datos, y DataSync mueve archivos y datos.

Referencia: <https://aws.amazon.com/application-migration-service/>

</details>

### 29. Una empresa migra una base de datos Oracle local a Amazon Aurora PostgreSQL y necesita que la base de origen siga operando durante la migración. ¿Qué servicio debería usar?

- **A.** Amazon S3 Transfer Acceleration
- **B.** AWS Database Migration Service (AWS DMS)
- **C.** AWS DataSync
- **D.** AWS Application Migration Service

<details><summary>Ver respuesta</summary>

**Respuesta: B.** AWS DMS migra bases de datos (incluso heterogéneas) con el origen operativo. DataSync transfiere archivos, no bases de datos transaccionales.

Referencia: <https://aws.amazon.com/dms/>

</details>

### 30. Un equipo revisa su arquitectura para identificar instancias subutilizadas y apagar recursos que no generan valor. ¿Qué pilar del Well-Architected Framework guía esta revisión?

- **A.** Eficiencia del rendimiento
- **B.** Optimización de costos
- **C.** Excelencia operativa
- **D.** Confiabilidad

<details><summary>Ver respuesta</summary>

**Respuesta: B.** Optimización de costos busca evitar gasto innecesario y ajustar recursos al consumo real. Eficiencia del rendimiento trata de escoger recursos que cumplan la demanda, no de reducir gasto.

Referencia: <https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html>

</details>
