# Acordeón CLF-C02 (no oficial)

Pares de servicios y conceptos que más se confunden. Verifica los detalles en la documentación oficial de AWS.

## Preguntas de «selecciona DOS»

- Juzga cada opción por separado como verdadera o falsa.
- Desconfía de «todos», «automáticamente» y «siempre».
- Si dos opciones se parecen, una suele ser la trampa.

## D1. Conceptos de la nube

- **Rehost** = sin tocar el código, rápido. **Refactor** = rediseñar. **Retire** = apagar. **Retain** = dejar donde está.
- **CAF** = transformar la organización (seis perspectivas). **Well-Architected** = revisar una carga de trabajo (seis pilares).
- **Elasticidad** = sube y baja sola. **Escalabilidad** = crece. **Agilidad** = aprovisionar rápido.
- Las AZ no replican todo solas: la redundancia en EC2 o EBS la diseñas tú.

## D2. Seguridad y cumplimiento

- **Usuario raíz:** solo tareas de la cuenta (como cerrarla), con MFA y sin claves de acceso.
- Una aplicación en AWS usa un **rol de IAM**, nunca claves fijas.
- **GuardDuty** detecta amenazas. **Inspector** escanea vulnerabilidades. **Macie** busca datos sensibles en S3. **Detective** investiga. **Security Hub** centraliza. **Access Analyzer** detecta acceso externo.
- **CloudTrail** = quién hizo qué. **Config** = cómo cambió y si cumple.
- **Artifact** = informes de AWS. **Audit Manager** = evidencia de tus recursos.
- **KMS** = claves administradas. **CloudHSM** = hardware dedicado.
- **Grupo de seguridad:** instancia, con estado, solo permite. **ACL de red:** subred, sin estado, permite y deniega.
- **WAF** = capa 7. **Shield** = DDoS en capas 3 y 4. **SCP** = limita, no concede.

## D3. Tecnología y servicios

- **Aurora** = seis copias en tres AZ. **Multi-AZ** = disponibilidad. **Réplica de lectura** = rendimiento.
- **Athena** = SQL sobre S3. **Redshift** = data warehouse. **ElastiCache** = caché. **DynamoDB** = clave-valor.
- **EFS** = archivos compartidos (Linux). **EBS** = disco de una instancia en una AZ.
- **DataSync** = por la red, programado. **Snow Family** = físico. **Storage Gateway** = híbrido continuo.
- **CloudFront** = caché. **Global Accelerator** = IP estáticas, TCP/UDP. **Route 53** = DNS.
- **Direct Connect** = línea dedicada. **VPN** = por internet. **PrivateLink** = servicio privado. **NAT Gateway** = salida desde una subred privada.
- **SQS** = cola. **SNS** = notificación. **EventBridge** = reglas de eventos. **Step Functions** = flujo visual.
- **Fargate** = contenedores sin servidores. **Lambda** = por evento. **CDK** = CloudFormation escrito en código. **Session Manager** = shell sin SSH.

## D4. Facturación, precios y soporte

- **Compute Savings Plans** = flexibilidad. **Spot** = interrumpible. **Dedicated Host** = licencias o cumplimiento.
- **Pricing Calculator** = antes de desplegar. **Cost Explorer** = analizar. **Budgets** = alertar. **Migration Evaluator** = on-premises frente a AWS.
- **Business** = 24/7 y Trusted Advisor completo. **Enterprise On-Ramp** = grupo de TAMs. **Enterprise** = TAM dedicado.
- La entrada de datos es gratis y la salida se cobra. Las etiquetas hay que activarlas como etiquetas de asignación de costos.
