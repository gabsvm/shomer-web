export const appPrivacyTranslations = {
  es: {
    title: "Política de Privacidad",
    titleEm: "Shomer Vision",
    lastUpdated: "Última actualización: Mayo 2026",
    tag: "Aplicación Móvil",
    intro: "La presente Política de Privacidad establece los términos en que Shomer Security SRL (\"Shomer\", \"nosotros\") trata la información que el usuario (\"usted\", \"residente\") proporciona al utilizar la aplicación móvil Shomer Vision (la \"Aplicación\"). Esta política se redacta de conformidad con las pautas de privacidad de Apple App Store, Google Play y la normativa argentina de Protección de Datos Personales (Ley 25.326).",
    backLink: "← Volver al inicio",
    generalLink: "Política General de Privacidad →",
    responsibleTitle: "Responsable del tratamiento",
    responsibleText: "Shomer Security SRL",
    contactText: "Contacto: ",
    unvinculationLabel: "Ajustes → Desvincular este dispositivo",
    noCollectLabel: "No solicitamos ni almacenamos:",
    noCollectText: "nombre y apellido, DNI, dirección postal, teléfono celular, fecha de nacimiento, datos biométricos, ubicación GPS, contactos de la agenda, fotografías ni archivos del dispositivo.",
    sections: {
      s1: {
        title: "1. Información que se recopila y almacena",
        desc: "Para el funcionamiento de la Aplicación se recopilan únicamente los siguientes datos:",
        a: "a) Datos de la cuenta del edificio (provistos por Shomer Security al administrador del consorcio o empresa, no creados por el residente desde la Aplicación):",
        aText: "Dirección de correo electrónico de la cuenta del edificio y contraseña asociada (almacenada en forma cifrada por nuestro proveedor de autenticación; nunca queda visible para nosotros en texto plano). Cada edificio o establecimiento dispone de una única cuenta compartida entre sus residentes y administradores. Todos los dispositivos que inician sesión con esa cuenta visualizan las mismas cámaras del frente de calle de ese edificio (hasta 2 cámaras por cuenta).",
        b: "b) Datos de vinculación (necesarios para que las llamadas del portero lleguen a su dispositivo):",
        bText: "Identificador interno de la unidad o departamento que usted ocupa, asignado por la administración del consorcio o empresa. Token de notificación push del dispositivo (FCM en Android, APNs en iOS) asociado a su unidad. Este token permite que el portero le envíe la llamada entrante. No identifica personalmente al usuario y rota automáticamente cuando reinstala la aplicación.",
        c: "c) Historial mínimo de llamadas (sólo metadatos, nunca contenido):",
        cText: "Fecha y hora de la llamada entrante, origen (portero o unidad interna del mismo edificio), si fue atendida o perdida y duración aproximada. Este historial es visible únicamente para usted dentro de su sesión."
      },
      s2: {
        title: "2. Uso del Micrófono y Video (Streaming en Tiempo Real)",
        desc: "Shomer Vision funciona como portero visor y telefonía interna del edificio. Las funciones de audio y video operan exclusivamente en tiempo real:",
        items: [
          "Video del portero: se transmite en vivo desde la cámara del frente de calle hacia el dispositivo del residente mientras la llamada está activa. No se graba en nuestros servidores.",
          "Audio bidireccional con control manual: el residente puede escuchar al visitante y, si lo decide, activar manualmente el micrófono de su dispositivo para responderle. El audio NO se activa de forma automática. La interfaz muestra de manera visible cuándo el micrófono está abierto y aplica un corte automático a los 18 segundos por cada activación, para evitar transmisiones prolongadas accidentales.",
          "Llamadas internas entre residentes del mismo edificio: son únicamente de audio, en tiempo real, mediante canales cifrados (WebRTC). Tampoco se graban.",
          "Cero almacenamiento de contenido: Shomer Security SRL no graba, transcribe ni archiva el video, las imágenes ni el audio de las llamadas en ningún servidor. Solo se conservan los metadatos descritos en el punto 1.c."
        ]
      },
      s3: {
        title: "3. Uso de la Cámara del Dispositivo (Lector de QR)",
        text: "La Aplicación puede solicitar acceso a la cámara del teléfono únicamente para escanear el código QR de configuración inicial entregado por la administración del edificio, que permite vincular su cuenta con la unidad correcta. La cámara NO se utiliza para tomar ni guardar fotografías ni videos."
      },
      s4: {
        title: "4. Notificaciones Push",
        text: "La Aplicación recibe notificaciones push para anunciar llamadas entrantes y mantener la sesión activa. El contenido transmitido en la notificación incluye únicamente: identificador de la unidad que llama, tipo de llamada (portero o interna) e identificador de sesión técnico. No se incluyen datos personales del visitante."
      },
      s5: {
        title: "5. Directorio del Edificio / Empresa",
        text: "La sección \"Directorio del Edificio\" es modular y configurable por cada administración. Los datos visibles (número de unidad, nombre opcional de residente o área común como Recepción/Administración) son definidos por la administración del consorcio o empresa y se procesan únicamente dentro del entorno cerrado de la Aplicación para facilitar la intercomunicación interna. Cada residente puede solicitar a su administración no figurar visible en el directorio."
      },
      s6: {
        title: "6. Control de Accesos y Funciones Biométricas",
        text1: "Se deja constancia explícita de que la Aplicación móvil Shomer Vision NO incluye funciones de apertura remota de cerraduras, control de accesos ni biometría facial.",
        text2: "Todo el sistema avanzado de gestión perimetral, horarios de personal, perfiles de acceso y reconocimiento biométrico del ecosistema Shomer Security se administra de forma independiente y centralizada por la base operativa de la empresa, sin vinculación técnica con la presente Aplicación. La Aplicación se limita a la comunicación audiovisual con la entrada y la intercomunicación interna del edificio."
      },
      s7: {
        title: "7. Servicios de terceros y dónde se procesan los datos",
        desc: "Para operar, la Aplicación utiliza los siguientes proveedores en carácter de encargados del tratamiento:",
        items: [
          "Supabase Inc. (EE.UU.) — autenticación de usuarios, base de datos y mensajería en tiempo real para coordinar las llamadas. Almacena los datos descritos en el punto 1.",
          "Google LLC (Firebase Cloud Messaging) — entrega de notificaciones push a dispositivos Android.",
          "Apple Inc. (Apple Push Notification service) — entrega de notificaciones push a dispositivos iOS.",
          "Dahua / DoLynk Cloud y Lechange / Imou Cloud — proveedores de las cámaras del portero; transmiten el video y el audio en vivo desde la cámara hasta el dispositivo del residente. No reciben datos personales del residente, sólo identificadores técnicos del dispositivo cámara.",
          "Vercel Inc. (EE.UU.) — alojamiento de la lógica de orquestación de llamadas internas y vinculación de QR."
        ],
        footer: "Todos los proveedores cumplen estándares internacionales de protección de datos (SOC 2, ISO 27001 o equivalentes según corresponda)."
      },
      s8: {
        title: "8. Seguridad y cifrado",
        text: "Toda comunicación entre la Aplicación y nuestros servidores utiliza HTTPS/TLS. Los flujos de audio y video usan WebRTC con cifrado punto a punto donde es técnicamente posible, evitando la exposición de contenido fuera del entorno seguro. Las contraseñas se almacenan cifradas mediante el proveedor de autenticación y no son accesibles para Shomer Security SRL ni para terceros."
      },
      s9: {
        title: "9. Retención y eliminación de datos",
        items: [
          "a) Mientras la cuenta del edificio esté activa, conservamos los datos descritos en el punto 1.",
          "b) El historial de llamadas se conserva por un máximo de 90 días, transcurridos los cuales se elimina automáticamente.",
          "c) Los tokens de notificación push expiran cuando reinstala la Aplicación, cambia de dispositivo o no inicia sesión durante 180 días.",
          "d) Desvinculación de su dispositivo personal: como cada cuenta es compartida por todo el edificio, no es posible eliminarla desde la Aplicación por un usuario individual (hacerlo afectaría a todos los demás residentes). Lo que sí puede hacer cada residente desde la propia Aplicación es desvincular su dispositivo, ingresando a Ajustes → Desvincular este dispositivo. Esta acción elimina inmediatamente: (i) la asociación de su dispositivo con la unidad o departamento, (ii) el token de notificación push almacenado y (iii) cualquier caché local. La cuenta del edificio y los datos de los demás residentes no se ven afectados. Si ya no desea recibir llamadas en su teléfono, este es el procedimiento estándar.",
          "e) Eliminación de la cuenta del edificio: la cuenta del edificio en su conjunto solo puede ser eliminada por la administración del consorcio o empresa que la contrató, mediante solicitud escrita a info@shomer.com.ar. Procesamos la baja completa, incluidos todos los datos asociados (cuenta, historial, tokens, vinculaciones de unidades), en un plazo máximo de 30 días corridos desde la recepción de la solicitud verificada."
        ]
      },
      s10: {
        title: "10. Derechos del usuario",
        text1: "De acuerdo con la Ley argentina 25.326 y, cuando corresponda, con el Reglamento General de Protección de Datos (UE) 2016/679, usted tiene derecho a: acceder a los datos personales que tratamos sobre usted, solicitar su rectificación o actualización, solicitar su eliminación, oponerse al tratamiento o solicitar la limitación del mismo, y solicitar la portabilidad de sus datos.",
        text2: "Para ejercer cualquiera de estos derechos puede escribirnos a info@shomer.com.ar. Le responderemos dentro de los 10 días hábiles."
      },
      s11: {
        title: "11. Menores de edad",
        text: "La Aplicación está dirigida a personas mayores de 18 años (residentes y administradores de edificios o empresas). No recopilamos intencionalmente datos de menores de 13 años. Si tomamos conocimiento de que existen datos de un menor de 13 años, los eliminaremos."
      },
      s12: {
        title: "12. Cambios a esta Política",
        text: "Podemos actualizar esta Política de Privacidad para reflejar cambios en la Aplicación o en la legislación aplicable. La versión vigente siempre estará disponible dentro de la Aplicación y en el sitio oficial de Shomer Security. Cuando se realicen cambios materiales se notificará al usuario mediante la propia Aplicación antes de que entren en vigencia."
      },
      s13: {
        title: "13. Contacto",
        text1: "Para cualquier consulta, reclamo o solicitud relacionada con esta Política de Privacidad o con el tratamiento de sus datos personales, puede escribirnos a:",
        text2: "Shomer Security SRL",
        text3: "Correo electrónico: info@shomer.com.ar",
        footer: "Si considera que sus derechos no han sido atendidos satisfactoriamente, puede presentar un reclamo ante la Agencia de Acceso a la Información Pública (AAIP) de la República Argentina."
      }
    }
  },
  en: {
    title: "Privacy Policy",
    titleEm: "Shomer Vision",
    lastUpdated: "Last updated: May 2026",
    tag: "Mobile Application",
    intro: "This Privacy Policy establishes the terms under which Shomer Security SRL (\"Shomer\", \"we\", \"us\") processes the information that the user (\"you\", \"resident\") provides when using the Shomer Vision mobile application (the \"Application\"). This policy is written in compliance with the privacy guidelines of the Apple App Store, Google Play, and the Argentine Personal Data Protection regulations (Law 25,326).",
    backLink: "← Back to home",
    generalLink: "General Privacy Policy →",
    responsibleTitle: "Data Controller",
    responsibleText: "Shomer Security SRL",
    contactText: "Contact: ",
    unvinculationLabel: "Settings → Unlink this device",
    noCollectLabel: "We do not request or store:",
    noCollectText: "first and last name, National Identity Document (DNI), postal address, mobile phone number, date of birth, biometric data, GPS location, contact list, photos, or files from the device.",
    sections: {
      s1: {
        title: "1. Information Collected and Stored",
        desc: "For the operation of the Application, only the following data is collected:",
        a: "a) Building account data (provided by Shomer Security to the building or company administrator, not created by the resident from the Application):",
        aText: "Email address of the building account and associated password (stored in encrypted form by our authentication provider; never visible to us in plain text). Each building or establishment has a single shared account among its residents and administrators. All devices logging in with that account view the same cameras at the building entrance (up to 2 cameras per account).",
        b: "b) Association data (necessary for intercom calls to reach your device):",
        bText: "Internal identifier of the unit or department you occupy, assigned by the building or company administration. Device push notification token (FCM in Android, APNs in iOS) associated with your unit. This token allows the intercom to send you the incoming call. It does not personally identify the user and rotates automatically when you reinstall the application.",
        c: "c) Minimum call history (metadata only, never content):",
        cText: "Date and time of the incoming call, origin (intercom or internal unit in the same building), whether it was answered or missed, and approximate duration. This history is visible only to you within your session."
      },
      s2: {
        title: "2. Use of Microphone and Video (Real-Time Streaming)",
        desc: "Shomer Vision works as a video intercom and internal building telephony system. Audio and video functions operate exclusively in real time:",
        items: [
          "Intercom video: broadcast live from the street entrance camera to the resident's device while the call is active. It is not recorded on our servers.",
          "Two-way audio with manual control: the resident can listen to the visitor and, if they choose to, manually activate their device's microphone to reply. The audio does NOT activate automatically. The interface visibly displays when the microphone is open and applies an automatic cutoff after 18 seconds for each activation, to prevent accidental prolonged transmissions.",
          "Internal calls between residents of the same building: audio-only, in real time, via encrypted channels (WebRTC). They are not recorded.",
          "Zero content storage: Shomer Security SRL does not record, transcribe, or archive the video, images, or audio of calls on any server. Only the metadata described in section 1.c is kept."
        ]
      },
      s3: {
        title: "3. Use of Device Camera (QR Reader)",
        text: "The Application may request access to the phone's camera solely to scan the initial setup QR code delivered by the building administration, which allows linking your account with the correct unit. The camera is NOT used to take or save photos or videos."
      },
      s4: {
        title: "4. Push Notifications",
        text: "The Application receives push notifications to announce incoming calls and keep the session active. The content transmitted in the notification includes only: identifier of the calling unit, type of call (intercom or internal), and a technical session identifier. No personal data of the visitor is included."
      },
      s5: {
        title: "5. Building / Company Directory",
        text: "The \"Building Directory\" section is modular and configurable by each administration. The visible data (unit number, optional resident name, or common area like Reception/Administration) is defined by the building or company administration and is processed only within the closed environment of the Application to facilitate internal intercom communication. Each resident can request their administration not to appear visible in the directory."
      },
      s6: {
        title: "6. Access Control and Biometric Functions",
        text1: "It is explicitly stated that the Shomer Vision mobile Application DOES NOT include functions for remote lock opening, access control, or facial biometrics.",
        text2: "The entire advanced perimeter management, staff scheduling, access profiles, and biometric recognition system of the Shomer Security ecosystem is managed independently and centrally by the company's operations center, with no technical connection to this Application. The Application is limited to audiovisual communication with the entrance and internal intercom communication of the building."
      },
      s7: {
        title: "7. Third-Party Services and Where Data is Processed",
        desc: "To operate, the Application uses the following providers as data processors:",
        items: [
          "Supabase Inc. (USA) — user authentication, database, and real-time messaging to coordinate calls. Stores the data described in section 1.",
          "Google LLC (Firebase Cloud Messaging) — delivery of push notifications to Android devices.",
          "Apple Inc. (Apple Push Notification service) — delivery of push notifications to iOS devices.",
          "Dahua / DoLynk Cloud and Lechange / Imou Cloud — intercom camera providers; they stream the live video and audio from the camera to the resident's device. They do not receive the resident's personal data, only technical identifiers of the camera device.",
          "Vercel Inc. (USA) — hosting the internal call orchestration logic and QR linking."
        ],
        footer: "All providers comply with international data protection standards (SOC 2, ISO 27001, or equivalent as applicable)."
      },
      s8: {
        title: "8. Security and Encryption",
        text: "All communication between the Application and our servers uses HTTPS/TLS. Audio and video streams use WebRTC with end-to-end encryption where technically possible, preventing content exposure outside the secure environment. Passwords are stored encrypted by the authentication provider and are not accessible to Shomer Security SRL or third parties."
      },
      s9: {
        title: "9. Data Retention and Deletion",
        items: [
          "a) While the building account is active, we retain the data described in section 1.",
          "b) Call history is kept for a maximum of 90 days, after which it is automatically deleted.",
          "c) Push notification tokens expire when you reinstall the Application, change devices, or do not log in for 180 days.",
          "d) Unlinking your personal device: since each account is shared by the entire building, it cannot be deleted from the Application by an individual user (doing so would affect all other residents). What each resident can do from the Application is unlink their device by going to Settings → Unlink this device. This action immediately deletes: (i) the association of your device with the unit or department, (ii) the stored push notification token, and (iii) any local cache. The building account and the data of other residents are not affected. If you no longer wish to receive calls on your phone, this is the standard procedure.",
          "e) Building account deletion: the building account as a whole can only be deleted by the building or company administration that contracted it, via written request to info@shomer.com.ar. We process the complete cancellation, including all associated data (account, history, tokens, unit associations), within a maximum period of 30 calendar days from the receipt of the verified request."
        ]
      },
      s10: {
        title: "10. User Rights",
        text1: "In accordance with Argentine Law 25,326 and, where applicable, the General Data Protection Regulation (EU) 2016/679, you have the right to: access the personal data we process about you, request its rectification or update, request its deletion, object to the processing or request its limitation, and request the portability of your data.",
        text2: "To exercise any of these rights, you can write to us at info@shomer.com.ar. We will reply within 10 business days."
      },
      s11: {
        title: "11. Minors",
        text: "The Application is intended for individuals over 18 years of age (residents and administrators of buildings or companies). We do not intentionally collect data from children under 13. If we become aware that data of a child under 13 exists, we will delete it."
      },
      s12: {
        title: "12. Changes to this Policy",
        text: "We may update this Privacy Policy to reflect changes in the Application or applicable legislation. The current version will always be available within the Application and on the official Shomer Security website. When material changes are made, the user will be notified through the Application before they take effect."
      },
      s13: {
        title: "13. Contact",
        text1: "For any questions, claims, or requests related to this Privacy Policy or the processing of your personal data, you can write to us at:",
        text2: "Shomer Security SRL",
        text3: "Email: info@shomer.com.ar",
        footer: "If you believe your rights have not been satisfactorily addressed, you may file a complaint with the Agency for Access to Public Information (AAIP) of the Argentine Republic."
      }
    }
  },
  pt: {
    title: "Política de Privacidade",
    titleEm: "Shomer Vision",
    lastUpdated: "Última atualização: Maio de 2026",
    tag: "Aplicativo Móvel",
    intro: "A presente Política de Privacidade estabelece os termos sob os quais a Shomer Security SRL (\"Shomer\", \"nós\") trata as informações que o usuário (\"você\", \"morador\") fornece ao utilizar o aplicativo móvel Shomer Vision (o \"Aplicativo\"). Esta política foi elaborada em conformidade com as diretrizes de privacidade da Apple App Store, Google Play e a regulamentação argentina de Proteção de Dados Pessoais (Lei 25.326).",
    backLink: "← Voltar ao início",
    generalLink: "Política de Privacidade Geral →",
    responsibleTitle: "Responsável pelo tratamento",
    responsibleText: "Shomer Security SRL",
    contactText: "Contato: ",
    unvinculationLabel: "Ajustes → Desvincular este dispositivo",
    noCollectLabel: "Não solicitamos nem armazenamos:",
    noCollectText: "nome e sobrenome, documento de identidade (DNI), endereço postal, número de telefone celular, data de nascimento, dados biométricos, localização GPS, lista de contatos, fotos ou arquivos do dispositivo.",
    sections: {
      s1: {
        title: "1. Informações coletadas e armazenadas",
        desc: "Para o funcionamento do Aplicativo, são coletados apenas os seguintes dados:",
        a: "a) Dados da conta do edifício (fornecidos pela Shomer Security ao administrador do condomínio ou empresa, não criados pelo morador a partir do Aplicativo):",
        aText: "Endereço de e-mail da conta do edifício e senha associada (armazenada de forma criptografada pelo nosso provedor de autenticação; nunca visível para nós em texto simples). Cada edifício ou estabelecimento possui uma única conta compartilhada entre seus moradores e administradores. Todos os dispositivos que fazem login com essa conta visualizam as mesmas câmeras da entrada desse edifício (até 2 câmeras por conta).",
        b: "b) Dados de vinculação (necessários para que as chamadas do porteiro cheguem ao seu dispositivo):",
        bText: "Identificador interno da unidade ou apartamento que você ocupa, atribuído pela administração do condomínio ou empresa. Token de notificação push do dispositivo (FCM no Android, APNs no iOS) associado à sua unidade. Este token permite que o porteiro lhe envie a chamada recebida. Não identifica pessoalmente o usuário e muda automaticamente ao reinstalar o aplicativo.",
        c: "c) Histórico mínimo de chamadas (apenas metadados, nunca conteúdo):",
        cText: "Data e hora da chamada recebida, origem (porteiro ou unidade interna do mesmo edifício), se foi atendida ou perdida e duração aproximada. Este histórico é visível apenas para você dentro da sua sessão."
      },
      s2: {
        title: "2. Uso do Microfone e Vídeo (Transmissão em Tempo Real)",
        desc: "O Shomer Vision funciona como porteiro eletrônico com vídeo e telefonia interna do edifício. As funções de áudio e vídeo operam exclusivamente em tempo real:",
        items: [
          "Vídeo do porteiro: transmitido ao vivo da câmera de entrada para o dispositivo do morador enquanto a chamada estiver ativa. Não é gravado em nossos servidores.",
          "Áudio bidirecional com controle manual: o morador pode ouvir o visitante e, se desejar, ativar manualmente o microfone de seu dispositivo para responder. O áudio NÃO é ativado automaticamente. A interface mostra visivelmente quando o microfone está aberto e aplica um corte automático aos 18 segundos por cada ativação, para evitar transmissões prolongadas acidentais.",
          "Chamadas internas entre moradores do mesmo edifício: apenas áudio, em tempo real, por canais criptografados (WebRTC). Também não são gravadas.",
          "Armazenamento zero de conteúdo: a Shomer Security SRL não grava, transcreve ou arquiva o vídeo, as imagens ou o áudio das chamadas em nenhum servidor. Apenas os metadatos descritos no item 1.c são conservados."
        ]
      },
      s3: {
        title: "3. Uso da Câmera do Dispositivo (Leitor de QR)",
        text: "O Aplicativo pode solicitar acesso à câmera do telefone apenas para escanear o código QR de configuração inicial entregue pela administração do edifício, que permite vincular sua conta à unidade correta. A câmera NÃO é utilizada para tirar ou salvar fotos ou vídeos."
      },
      s4: {
        title: "4. Notificações Push",
        text: "O Aplicativo recebe notificações push para anunciar chamadas recebidas e manter a sessão ativa. O conteúdo transmitido na notificação inclui apenas: identificador da unidade que chama, tipo de chamada (porteiro ou interna) e identificador técnico de sessão. Não são incluídos dados pessoais do visitante."
      },
      s5: {
        title: "5. Diretório do Edifício / Empresa",
        text: "A seção \"Diretório do Edifício\" é modular e configurável por cada administração. Os dados visíveis (número da unidade, nome opcional do morador ou área comum como Recepção/Administração) são definidos pela administração do condomínio ou empresa e são processados apenas dentro do ambiente fechado do Aplicativo para facilitar a intercomunicação interna. Cada morador pode solicitar à sua administração para não aparecer visível no diretório."
      },
      s6: {
        title: "6. Controle de Acesso e Funções Biométricas",
        text1: "Fica expressamente estabelecido que o Aplicativo móvel Shomer Vision NÃO inclui funções de abertura remota de fechaduras, controle de acesso ou biometria facial.",
        text2: "Todo o sistema avançado de gestão perimetral, horários de funcionários, perfis de acesso e reconhecimento biométrico do ecossistema Shomer Security é administrado de forma independente e centralizada pela base operacional da empresa, sem vinculação técnica com este Aplicativo. O Aplicativo limita-se à comunicação audiovisual com a entrada e à intercomunicação interna do edifício."
      },
      s7: {
        title: "7. Serviços de Terceiros e Onde os Dados são Processados",
        desc: "Para operar, o Aplicativo utiliza os seguintes provedores como operadores de tratamento:",
        items: [
          "Supabase Inc. (EUA) — autenticação de usuários, banco de dados e mensagens em tempo real para coordenar as chamadas. Armazena os dados descritos no item 1.",
          "Google LLC (Firebase Cloud Messaging) — entrega de notificações push para dispositivos Android.",
          "Apple Inc. (Apple Push Notification service) — entrega de notificações push para dispositivos iOS.",
          "Dahua / DoLynk Cloud e Lechange / Imou Cloud — provedores das câmeras do porteiro; transmitem o vídeo e o áudio ao vivo da câmera para o dispositivo do morador. Não recebem dados pessoais do morador, apenas identificadores técnicos do dispositivo câmera.",
          "Vercel Inc. (EUA) — hospedagem da lógica de orquestração de chamadas internas e vinculação de QR."
        ],
        footer: "Todos os provedores cumprem padrões internacionais de proteção de dados (SOC 2, ISO 27001 ou equivalentes, conforme aplicável)."
      },
      s8: {
        title: "8. Segurança e Criptografia",
        text: "Todas as comunicações entre o Aplicativo e nossos servidores usam HTTPS/TLS. As transmissões de áudio e vídeo usam WebRTC com criptografia de ponta a ponta onde for tecnicamente possível, evitando a exposição do conteúdo fora do ambiente seguro. As senhas são armazenadas criptografadas pelo provedor de autenticação e não são acessíveis pela Shomer Security SRL ou terceiros."
      },
      s9: {
        title: "9. Retenção e Exclusão de Dados",
        items: [
          "a) Enquanto a conta do edifício estiver ativa, mantemos os dados descritos no item 1.",
          "b) O histórico de chamadas é retido por no máximo 90 dias, após os quais é excluído automaticamente.",
          "c) Os tokens de notificação push expiram quando você reinstala o Aplicativo, altera de dispositivo ou não inicia sessão por 180 dias.",
          "d) Desvinculação do seu dispositivo pessoal: como cada conta é compartilhada por todo o edifício, não é possível excluí-la do Aplicativo por um usuário individual (fazer isso afetaria todos os outros moradores). O que cada morador pode fazer no próprio Aplicativo é desvincular seu dispositivo, acessando Ajustes → Desvincular este dispositivo. Esta ação remove imediatamente: (i) a associação do seu dispositivo com a unidade ou departamento, (ii) o token de notificação push armazenado e (iii) qualquer cache local. A conta do edifício e os dados dos outros moradores não são afetados. Se você não deseja mais receber chamadas no seu telefone, este é o procedimento padrão.",
          "e) Exclusão da conta do edifício: a conta do edifício como um todo só pode ser excluída pela administração do condomínio ou empresa que o contratou, mediante solicitação por escrito para info@shomer.com.ar. Processamos o cancelamento completo, incluindo todos os dados associados (conta, histórico, tokens, vinculações de unidades), em um prazo máximo de 30 dias corridos a partir do recebimento da solicitação verificada."
        ]
      },
      s10: {
        title: "10. Direitos do Usuário",
        text1: "De acordo com a Lei argentina 25.326 e, quando aplicável, com o Regulamento Geral de Proteção de Dados (UE) 2016/679, você tem o direito de: acessar os dados pessoais que tratamos sobre você, solicitar sua retificação ou atualização, solicitar sua exclusão, opor-se ao tratamento ou solicitar a limitação do mesmo, e solicitar a portabilidade dos seus dados.",
        text2: "Para exercer qualquer um destes direitos, você pode nos escrever em info@shomer.com.ar. Responderemos no prazo de 10 dias úteis."
      },
      s11: {
        title: "11. Menores de Idade",
        text: "O Aplicativo é voltado para maiores de 18 anos (moradores e administradores de edifícios ou empresas). Não coletamos intencionalmente dados de menores de 13 anos. Se tivermos conhecimento de que existem dados de um menor de 13 anos, nós os excluiremos."
      },
      s12: {
        title: "12. Alterações a esta Política",
        text: "Podemos atualizar esta Política de Privacidade para refletir alterações no Aplicativo ou na legislação aplicável. A versão vigente sempre estará disponível dentro do Aplicativo e no site oficial da Shomer Security. Quando forem feitas alterações materiais, o usuário será notificado pelo próprio Aplicativo antes que elas entrem em vigor."
      },
      s13: {
        title: "13. Contato",
        text1: "Para qualquer dúvida, reclamação ou solicitação relacionada a esta Política de Privacidade ou ao tratamento de seus dados pessoais, você pode nos escrever em:",
        text2: "Shomer Security SRL",
        text3: "E-mail: info@shomer.com.ar",
        footer: "Se considerar que os seus direitos não foram atendidos satisfatoriamente, você pode apresentar uma reclamação perante a Agência de Acesso à Informação Pública (AAIP) de la República Argentina."
      }
    }
  },
  he: {
    title: "מדיניות פרטיות",
    titleEm: "Shomer Vision",
    lastUpdated: "עודכן לאחרונה: מאי 2026",
    tag: "אפליקציה לנייד",
    intro: "מדיניות פרטיות זו מגדירה את התנאים שבהם Shomer Security SRL (\"Shomer\", \"אנחנו\") מעבדת את המידע שהמשתמש (\"אתה\", \"התושב\") מספק בעת השימוש באפליקציה לנייד Shomer Vision (\"האפליקציה\"). מדיניות זו נכתבה בהתאם להנחיות הפרטיות של Apple App Store, Google Play והתקנות הארגנטינאיות להגנת מידע אישי (חוק 25.326).",
    backLink: "← חזרה לדף הבית",
    generalLink: "מדיניות פרטיות כללית →",
    responsibleTitle: "גורם אחראי לעיבוד נתונים",
    responsibleText: "Shomer Security SRL",
    contactText: "ליצירת קשר: ",
    unvinculationLabel: "הגדרות ← ניתוק מכשיר זה",
    noCollectLabel: "איננו מבקשים או שומרים:",
    noCollectText: "שם פרטי ומשפחה, תעודת זהות (DNI), כתובת דואר, מספר טלפון נייד, תאריך לידה, נתונים ביומטריים, מיקום GPS, רשימת אנשי קשר, תמונות או קבצים מהמכשיר.",
    sections: {
      s1: {
        title: "1. מידע שנאסף ונשמר",
        desc: "לצורך פעילות האפליקציה נאספים הנתונים הבאים בלבד:",
        a: "א) נתוני חשבון הבניין (מסופקים על ידי Shomer Security למנהל הבניין או החברה, ולא נוצרים על ידי הדייר מהאפליקציה):",
        aText: "כתובת אימייל של חשבון הבניין והסיסמה המשויכת (נשמרת בצורה מוצפנת על ידי ספק האימות שלנו; לעולם אינה גלויה לנו בטקסט פשוט). לכל בניין או מוסד יש חשבון משותף יחיד בין דייריו ומנהליו. כל המכשירים שמתחברים עם חשבון זה מציגים את אותן מצלמות בכניסה לבניין (עד 2 מצלמות לחשבון).",
        b: "ב) נתוני קישור (נחוצים כדי ששיחות האינטרקום יגיעו למכשיר שלך):",
        bText: "מזהה פנימי של הדירה או המחלקה שאתה מאכלס, שהוקצה על ידי הנהלת הבניין או החברה. טוקן של התראות פוש של המכשיר (FCM באנדרואיד, APNs ב-iOS) המשויך לדירה שלך. טוקן זה מאפשר לאינטרקום לשלוח לך את השיחה הנכנסת. הוא אינו מזהה את המשתמש באופן אישי ומתחלף אוטומטית בעת התקנה מחדש של האפליקציה.",
        c: "ג) היסטוריית שיחות מינימלית (מטא-נתונים בלבד, לעולם לא תוכן):",
        cText: "תאריך ושעה של השיחה הנכנסת, מקור (אינטרקום או יחידה פנימית באותו בניין), האם נענתה או הוחמצה ומשך זמן משוער. היסטוריה זו גלויה רק לך בתוך הפעילות שלך."
      },
      s2: {
        title: "2. שימוש במיקרופון ווידאו (הזרמה בזמן אמת)",
        desc: "Shomer Vision פועלת כאינטרקום וידאו ומערכת טלפוניה פנימית בבניין. פונקציות האודיו והוידאו פועלות אך ורק בזמן אמת:",
        items: [
          "וידאו של האינטרקום: משודר בשידור חי ממצלמת הכניסה למכשיר הדייר כל עוד השיחה פעילה. הוא אינו מוקלט בשרתים שלנו.",
          "אודיו דו-כיווני עם שליטה ידנית: הדייר יכול להאזין למבקר, ואם יבחר בכך, להפעיל ידנית את המיקרופון של המכשיר שלו כדי לענות. האודיו אינו מופעל אוטומטית. הממשק מציג באופן ברור מתי המיקרופון פתוח ומחיל ניתוק אוטומטי לאחר 18 שניות לכל הפעלה, כדי למנוע שידורים ממושכים בשוגג.",
          "שיחות פנימיות בין דיירים באותו בניין: אודיו בלבד, בזמן אמת, באמצעות ערוצים מוצפנים (WebRTC). הן אינן מוקלטות.",
          "אפס שמירת תוכן: Shomer Security SRL אינה מקליטה, מתמללת או שומרת את הוידאו, התמונות או האודיו של השיחות באף שרת. רק המטא-נתונים המתוארים בסעיף 1.ג נשמרים."
        ]
      },
      s3: {
        title: "3. שימוש במצלמת המכשיר (קורא QR)",
        text: "האפליקציה עשויה לבקש גישה למצלמת הטלפון אך ורק לצורך סריקת קוד ה-QR של ההגדרה הראשונית שנמסר על ידי הנהלת הבניין, המאפשר לקשר את החשבון שלך לדירה הנכונה. המצלמה אינה משמשת לצילום או שמירה של תמונות או סרטונים."
      },
      s4: {
        title: "4. התראות פוש",
        text: "האפליקציה מקבלת התראות פוש כדי להכריז על שיחות נכנסות ולשמור על פעילות החשבון. התוכן המועבר בהתראה כולל בלבד: מזהה היחידה המתקשרת, סוג השיחה (אינטרקום או פנימית) ומזהה שיחה טכני. לא נכללים נתונים אישיים של המבקר."
      },
      s5: {
        title: "5. ספר טלפונים של הבניין / החברה",
        text: "מדור \"ספר הטלפונים של הבניין\" הוא מודולרי וניתן להגדרה על ידי כל הנהלה. הנתונים הגלויים (מספר דירה, שם דייר אופציונלי או אזור משותף כמו קבלה/נהלה) מוגדרים על ידי הנהלת הבניין או החברה ומעובדים רק בתוך הסביבה הסגורה של האפליקציה כדי להקל על תקשורת אינטרקום פנימית. כל דייר יכול לבקש מהנהלתו לא להופיע גלוי בספר הטלפונים."
      },
      s6: {
        title: "6. בקרת כניסה ופונקציות ביומטריות",
        text1: "מובהר במפורש כי האפליקציה לנייד Shomer Vision אינה כוללת פונקציות לפתיחת מנעולים מרחוק, בקרת כניסה או ביומטריה של הפנים.",
        text2: "כל מערכת ניהול ההיקף המתקדמת, לוחות זמנים של צוות, פרופילי גישה ומערכת הזיהוי הביומטרי של Shomer Security מנוהלת באופן עצמאי ומרכזי על ידי מרכז המבצעים של החברה, ללא קשר טכני לאפליקציה זו. האפליקציה מוגבלת לתקשורת קולית וחזותית עם הכניסה ולתקשורת אינטרקום פנימית של הבניין."
      },
      s7: {
        title: "7. שירותי צד שלישי והיכן מעובדים הנתונים",
        desc: "לצורך פעילותה, האפליקציה משתמשת בספקים הבאים כמעבדי נתונים:",
        items: [
          "Supabase Inc. (ארה\"ב) — אימות משתמשים, בסיס נתונים והודעות בזמן אמת לתיאום שיחות. שומר את הנתונים המתוארים בסעיף 1.",
          "Google LLC (Firebase Cloud Messaging) — מסירת התראות פוש למכשירי אנדרואיד.",
          "Apple Inc. (Apple Push Notification service) — מסירת התראות פוש למכשירי iOS.",
          "Dahua / DoLynk Cloud ו Lechange / Imou Cloud — ספקי מצלמות האינטרקום; הם מזרימים את הוידאו והאודיו בשידור חי מהמצלמה למכשיר התושב. הם אינם מקבלים נתונים אישיים של התושב, אלא רק מזהים טכניים של מכשיר המצלמה.",
          "Vercel Inc. (ארה\"ב) — אירוח לוגיקת שיחות פנימיות וקישור QR."
        ],
        footer: "כל הספקים עומדים בתקני הגנת מידע בינלאומיים (SOC 2, ISO 27001 או שווה ערך לפי העניין)."
      },
      s8: {
        title: "8. אבטחה והצפנה",
        text: "כל התקשורת בין האפליקציה לשרתים שלנו משתמשת ב-HTTPS/TLS. הזרמות אודיו ווידאו משתמשות ב-WebRTC עם הצפנה מקצה לקצה במידת האפשר מבחינה טכנית, מה שמונע חשיפת תוכן מחוץ לסביבה המאובטחת. הסיסמאות נשמרות מוצפנות על ידי ספק האימות ואינן נגישות ל-Shomer Security SRL או לצדדים שלישיים."
      },
      s9: {
        title: "9. שמירה ומחיקה של נתונים",
        items: [
          "א) כל עוד חשבון הבניין פעיל, אנו שומרים את הנתונים המתוארים בסעיף 1.",
          "ב) היסטוריית השיחות נשמרת למשך מקסימום 90 יום, ולאחר מכן נמחקת אוטומטית.",
          "ג) טוקנים של התראות פוש פגים כאשר אתה מתקין מחדש את האפליקציה, מחליף מכשיר או לא מתחבר למשך 180 יום.",
          "ד) ניתוק המכשיר האישי שלך: מכיוון שכל חשבון משותף לכל הבניין, משתמש בודד אינו יכול למחוק אותו מהאפליקציה (ביצוע פעולה זו ישפיע על כל שאר הדיירים). מה שכל דייר יכול לעשות מהאפליקציה הוא לנתק את המכשיר שלו על ידי מעבר להגדרות ← ניתוק מכשיר זה. פעולה זו מוחקת מיידית: (i) את הקשר של המכשיר שלך לדירה או למחלקה, (ii) את טוקן התראות הפוש המאוחסן, ו-(iii) כל זיכרון מטמון מקומי. חשבון הבניין והנתונים של דיירים אחרים אינם מושפעים. אם אינך מעוניין עוד לקבל שיחות בטלפון שלך, זהו ההליך הסטנדרטי.",
          "ה) מחיקת חשבון הבניין: ניתן למחוק את חשבון הבניין כמכלול רק על ידי הנהלת הבניין או החברה שהתקשרה איתנו, באמצעות בקשה בכתב לכתובת info@shomer.com.ar. אנו מעבדים את הביטול המלא, כולל כל הנתונים המשויכים (חשבון, היסטוריה, טוקנים, קישורי דירות), בתוך תקופה מקסימלית של 30 ימי קלנדריים מקבלת הבקשה המאומתת."
        ]
      },
      s10: {
        title: "10. זכויות משתמש",
        text1: "בהתאם לחוק הארגנטינאי 25.326 ובמידת הצורך, לתקנת הגנת הנתונים הכללית (EU) 2016/679, עומדת לך הזכות לגשת לנתונים האישיים שאנו מעבדים עליך, לבקש את תיקונם או עדכונם, לבקש את מחיקתם, להתנגד לעיבוד או לבקש את הגבלתו, ולבקש את ניידות הנתונים שלך.",
        text2: "למימוש כל אחת מזכויות אלו, תוכל לכתוב לנו בכתובת info@shomer.com.ar. אנו נשיב תוך 10 ימי עסקים."
      },
      s11: {
        title: "11. קטינים",
        text: "האפליקציה מיועדת לאנשים מעל גיל 18 (תושבים ומנהלי בניינים או חברות). איננו אוספים ביודעין נתונים מילדים מתחת לגיל 13. אם נדע שקיימים נתונים של ילד מתחת לגיל 13, נמחק אותם."
      },
      s12: {
        title: "12. שינויים במדיניות זו",
        text: "אנו עשויים לעדכן מדיניות פרטיות זו כדי לשקף שינויים באפליקציה או בחקיקה החלה. הגרסה הנוכחית תמיד תהיה זמינה בתוך האפליקציה ובאתר הרשמי של Shomer Security. כאשר יבוצעו שינויים מהותיים, המשתמש יקבל הודעה באמצעות האפליקציה לפני שהם ייכנסו לתוקף."
      },
      s13: {
        title: "13. יצירת קשר",
        text1: "לכל שאלה, תביעה או בקשה הקשורה למדיניות פרטיות זו או לעיבוד הנתונים האישיים שלך, תוכל לכתוב לנו בכתובת:",
        text2: "Shomer Security SRL",
        text3: "אימייל: info@shomer.com.ar",
        footer: "אם אתה סבור שזכויותיך לא טופלו כראוי, תוכל להגיש תלונה לסוכנות לגישה למידע ציבורי (AAIP) של הרפובליקה הארגנטינאית."
      }
    }
  },
  de: {
    title: "Datenschutzerklärung",
    titleEm: "Shomer Vision",
    lastUpdated: "Letzte Aktualisierung: Mai 2026",
    tag: "Mobile Anwendung",
    intro: "Diese Datenschutzerklärung legt die Bedingungen fest, unter denen Shomer Security SRL (\"Shomer\", \"wir\", \"uns\") die Informationen verarbeitet, die der Nutzer (\"Sie\", \"Bewohner\") bei der Nutzung der mobilen Anwendung Shomer Vision (die \"Anwendung\") bereitstellt. Diese Richtlinie wurde in Übereinstimmung mit den Datenschutzrichtlinien des Apple App Store, Google Play und den argentinischen Datenschutzbestimmungen (Gesetz 25.326) verfasst.",
    backLink: "← Zurück zur Startseite",
    generalLink: "Allgemeine Datenschutzerklärung →",
    responsibleTitle: "Verantwortlicher für die Datenverarbeitung",
    responsibleText: "Shomer Security SRL",
    contactText: "Kontakt: ",
    unvinculationLabel: "Einstellungen → Dieses Gerät entkoppeln",
    noCollectLabel: "Wir fordern oder speichern nicht:",
    noCollectText: "Vor- und Nachname, Personalausweis (DNI), Postanschrift, Mobiltelefonnummer, Geburtsdatum, biometrische Daten, GPS-Standort, Kontaktliste, Fotos oder Dateien vom Gerät.",
    sections: {
      s1: {
        title: "1. Erhobene und gespeicherte Informationen",
        desc: "Für den Betrieb der Anwendung werden nur die folgenden Daten erhoben:",
        a: "a) Gebäudekontodaten (bereitgestellt von Shomer Security an den Gebäude- oder Unternehmensadministrator, nicht vom Bewohner über die Anwendung erstellt):",
        aText: "E-Mail-Adresse des Gebäudekontos und das zugehörige Passwort (in verschlüsselter Form von unserem Authentifizierungsanbieter gespeichert; für uns niemals in Klartext sichtbar). Jedes Gebäude oder jede Einrichtung verfügt über ein einziges gemeinsames Konto für seine Bewohner und Administratoren. Alle Geräte, die sich mit diesem Konto anmelden, sehen dieselben Kameras am Gebäudeeingang (bis zu 2 Kameras pro Konto).",
        b: "b) Zuordnungsdaten (erforderlich, damit die Intercom-Anrufe Ihr Gerät erreichen):",
        bText: "Interner Bezeichner der Einheit oder Abteilung, die Sie belegen, zugewiesen von der Gebäude- oder Unternehmensverwaltung. Push-Benachrichtigungstoken des Geräts (FCM in Android, APNs in iOS), das Ihrer Einheit zugeordnet ist. Dieses Token ermöglicht es der Gegensprechanlage, Ihnen den eingehenden Anruf zu senden. Es identifiziert den Nutzer nicht persönlich und rotiert automatisch, wenn Sie die Anwendung neu installieren.",
        c: "c) Minimaler Anrufverlauf (nur Metadaten, niemals Inhalt):",
        cText: "Datum und Uhrzeit des eingehenden Anrufs, Herkunft (Gegensprechanlage oder interne Einheit im selben Gebäude), ob er beantwortet oder verpasst wurde, und ungefähre Dauer. Dieser Verlauf ist nur für Sie innerhalb Ihrer Sitzung sichtbar."
      },
      s2: {
        title: "2. Verwendung von Mikrofon und Video (Echtzeit-Streaming)",
        desc: "Shomer Vision funktioniert als Video-Gegensprechanlage und internes Telefonnetz des Gebäudes. Audio- und Videofunktionen arbeiten ausschließlich in Echtzeit:",
        items: [
          "Intercom-Video: wird live von der Eingangskamera auf das Gerät des Bewohners übertragen, während der Anruf aktiv ist. Es wird nicht auf unseren Servern aufgezeichnet.",
          "Zwei-Wege-Audio mit manueller Steuerung: Der Bewohner kann den Besucher hören und bei Bedarf das Mikrofon seines Geräts manuell aktivieren, um zu antworten. Das Audio wird NICHT automatisch aktiviert. Die Schnittstelle zeigt sichtbar an, wenn das Mikrofon geöffnet ist, und wendet nach 18 Sekunden für jede Aktivierung eine automatische Abschaltung an, um versehentliche längere Übertragungen zu verhindern.",
          "Interne Anrufe zwischen Bewohnern desselben Gebäudes: nur Audio, in Echtzeit, über verschlüsselte Kanäle (WebRTC). Sie werden nicht aufgezeichnet.",
          "Keine Inhaltsspeicherung: Shomer Security SRL zeichnet das Video, die Bilder oder das Audio von Anrufen auf keinem Server auf, transkribiert oder archiviert sie nicht. Es werden nur die in Abschnitt 1.c beschriebenen Metadaten aufbewahrt."
        ]
      },
      s3: {
        title: "3. Verwendung der Gerätekamera (QR-Leser)",
        text: "Die Anwendung fordert möglicherweise den Zugriff auf die Kamera des Telefons an, um den von der Gebäudeverwaltung gelieferten anfänglichen Setup-QR-Code zu scannen, mit dem Ihr Konto mit der richtigen Einheit verknüpft werden kann. Die Kamera wird NICHT verwendet, um Fotos oder Videos aufzunehmen oder zu speichern."
      },
      s4: {
        title: "4. Push-Benachrichtigungen",
        text: "Die Anwendung empfängt Push-Benachrichtigungen, um eingehende Anrufe anzukündigen und die Sitzung aktiv zu halten. Der in der Benachrichtigung übertragene Inhalt enthält nur: Kennung der anrufenden Einheit, Art des Anrufs (Gegensprechanlage oder intern) und eine technische Sitzungskennung. Es werden keine personenbezogenen Daten des Besuchers übertragen."
      },
      s5: {
        title: "5. Gebäude- / Unternehmensverzeichnis",
        text: "Der Bereich \"Gebäudeverzeichnis\" ist modular aufgebaut und von jeder Verwaltung konfigurierbar. Die sichtbaren Daten (Einheitsnummer, optionaler Name des Bewohners oder Gemeinschaftsbereich wie Rezeption/Verwaltung) werden von der Gebäude- oder Unternehmensverwaltung definiert und nur innerhalb der geschlossenen Umgebung der Anwendung verarbeitet, um die interne Kommunikation zu erleichtern. Jeder Bewohner kann bei seiner Verwaltung beantragen, im Verzeichnis nicht sichtbar zu sein."
      },
      s6: {
        title: "6. Zugangskontrolle und biometrische Funktionen",
        text1: "Es wird ausdrücklich darauf hingewiesen, dass die mobile Anwendung Shomer Vision KEINE Funktionen zur Fernöffnung von Schlössern, zur Zugangskontrolle oder zur Gesichtsbiometrie enthält.",
        text2: "Das gesamte fortschrittliche Perimeterschutz-, Personaleinsatzplanungs-, Zugriffsprofil- und biometrische Erkennungssystem des Shomer Security-Ökosystems wird unabhängig und zentral von der Betriebszentrale des Unternehmens verwaltet, ohne technische Verbindung zu dieser Anwendung. Die Anwendung beschränkt sich auf die audiovisuelle Kommunikation mit dem Eingang und die interne Kommunikation des Gebäudes."
      },
      s7: {
        title: "7. Drittanbieterdienste und Ort der Datenverarbeitung",
        desc: "Für den Betrieb nutzt die Anwendung die folgenden Anbieter als Auftragsverarbeiter:",
        items: [
          "Supabase Inc. (USA) — Benutzerauthentifizierung, Datenbank und Echtzeit-Messaging zur Koordinierung von Anrufen. Speichert die in Abschnitt 1 beschriebenen Daten.",
          "Google LLC (Firebase Cloud Messaging) — Bereitstellung von Push-Benachrichtigungen an Android-Geräte.",
          "Apple Inc. (Apple Push Notification service) — Bereitstellung von Push-Benachrichtigungen an iOS-Geräte.",
          "Dahua / DoLynk Cloud und Lechange / Imou Cloud — Anbieter von Gegensprechkameras; sie streamen das Live-Video und -Audio von der Kamera zum Gerät des Bewohners. Sie erhalten keine personenbezogenen Daten des Bewohners, sondern nur technische Identifikatoren der Kamera.",
          "Vercel Inc. (USA) — Hosting der internen Anruforchestrierungslogik und QR-Verknüpfung."
        ],
        footer: "Alle Anbieter erfüllen internationale Datenschutzstandards (SOC 2, ISO 27001 oder gleichwertig, je nach Anwendbarkeit)."
      },
      s8: {
        title: "8. Sicherheit und Verschlüsselung",
        text: "Die gesamte Kommunikation zwischen der Anwendung und unseren Servern verwendet HTTPS/TLS. Audio- und Videostreams verwenden WebRTC mit Ende-zu-Ende-Verschlüsselung, wo dies technisch möglich ist, um eine Offenlegung von Inhalten außerhalb der sicheren Umgebung zu verhindern. Passwörter werden vom Authentifizierungsanbieter verschlüsselt gespeichert und sind für Shomer Security SRL oder Dritte nicht zugänglich."
      },
      s9: {
        title: "9. Datenspeicherung und -löschung",
        items: [
          "a) Solange das Gebäudekonto aktiv ist, bewahren wir die in Abschnitt 1 beschriebenen Daten auf.",
          "b) Der Anrufverlauf wird maximal 90 Tage aufbewahrt und danach automatisch gelöscht.",
          "c) Push-Benachrichtigungstoken laufen ab, wenn Sie die Anwendung neu installieren, das Gerät wechseln oder sich 180 Tage lang nicht anmelden.",
          "d) Entkoppeln Ihres persönlichen Geräts: Da jedes Konto vom gesamten Gebäude gemeinsam genutzt wird, kann es von einem einzelnen Nutzer nicht aus der Anwendung gelöscht werden (dies würde alle anderen Bewohner betreffen). Was jeder Bewohner tun kann, ist, sein Gerät über die Anwendung zu entkoppeln, indem er zu Einstellungen → Dieses Gerät entkoppeln geht. Diese Aktion löscht sofort: (i) die Zuordnung Ihres Geräts zur Einheit oder Abteilung, (ii) das gespeicherte Push-Benachrichtigungstoken und (iii) jeglichen lokalen Cache. Das Gebäudekonto und die Daten anderer Bewohner sind davon nicht betroffen. Wenn Sie keine Anrufe mehr auf Ihrem Telefon empfangen möchten, ist dies das Standardverfahren.",
          "e) Löschung des Gebäudekontos: Das Gebäudekonto als Ganzes kann nur von der Gebäude- oder Unternehmensverwaltung gelöscht werden, die den Vertrag abgeschlossen hat, und zwar per schriftlicher Anfrage an info@shomer.com.ar. Wir bearbeiten die vollständige Stornierung einschließlich aller zugehörigen Daten (Konto, Verlauf, Token, Einheitenbeziehungen) innerhalb einer Frist von maximal 30 Kalendertagen ab Erhalt der verifizierten Anfrage."
        ]
      },
      s10: {
        title: "10. Rechte des Nutzers",
        text1: "Gemäß dem argentinischen Gesetz 25.326 und gegebenenfalls der Datenschutz-Grundverordnung (EU) 2016/679 haben Sie das Recht auf: Auskunft über die von uns über Sie verarbeiteten personenbezogenen Daten, deren Berichtigung oder Aktualisierung, deren Löschung, Widerspruch gegen die Verarbeitung oder Einschränkung der Verarbeitung sowie Datenübertragbarkeit.",
        text2: "Um eines dieser Rechte auszuüben, schreiben Sie uns bitte an info@shomer.com.ar. Wir werden innerhalb von 10 Werktagen antworten."
      },
      s11: {
        title: "11. Minderjährige",
        text: "Die Anwendung richtet sich an Personen über 18 Jahre (Bewohner und Administratoren von Gebäuden oder Unternehmen). Wir erheben nicht wissentlich Daten von Kindern unter 13 Jahren. Wenn wir feststellen, dass Daten eines Kindes unter 13 Jahren vorhanden sind, werden wir diese löschen."
      },
      s12: {
        title: "12. Änderungen dieser Richtlinie",
        text: "Wir können diese Datenschutzerklärung aktualisieren, um Änderungen an der Anwendung oder der geltenden Gesetzgebung Rechnung zu tragen. Die aktuelle Version ist stets in der Anwendung und auf der offiziellen Website von Shomer Security verfügbar. Bei wesentlichen Änderungen wird der Nutzer vor deren Inkrafttreten über die Anwendung benachrichtigt."
      },
      s13: {
        title: "13. Kontakt",
        text1: "Bei Fragen, Reklamationen oder Wünschen im Zusammenhang mit dieser Datenschutzerklärung oder der Verarbeitung Ihrer personenbezogenen Daten können Sie uns schreiben an:",
        text2: "Shomer Security SRL",
        text3: "E-Mail: info@shomer.com.ar",
        footer: "Wenn Sie der Meinung sind, dass Ihre Rechte nicht zufriedenstellend berücksichtigt wurden, können Sie eine Beschwerde bei der Agentur für den Zugang zu öffentlichen Informationen (AAIP) der Argentinischen Republik einreichen."
      }
    }
  },
  ru: {
    title: "Политика конфиденциальности",
    titleEm: "Shomer Vision",
    lastUpdated: "Последнее обновление: май 2026 г.",
    tag: "Мобильное приложение",
    intro: "Настоящая Политика конфиденциальности устанавливает условия, при которых Shomer Security SRL («Shomer», «мы», «нам») обрабатывает информацию, которую пользователь («вы», «житель») предоставляет при использовании мобильного приложения Shomer Vision («Приложение»). Настоящая политика составлена в соответствии с руководящими принципами конфиденциальности Apple App Store, Google Play и аргентинским законодательством о защите персональных данных (Закон 25.326).",
    backLink: "← Вернуться на главную",
    generalLink: "Общая политика конфиденциальности →",
    responsibleTitle: "Ответственный за обработку данных",
    responsibleText: "Shomer Security SRL",
    contactText: "Контакты: ",
    unvinculationLabel: "Настройки → Отвязать это устройство",
    noCollectLabel: "Мы не запрашиваем и не храним:",
    noCollectText: "имя и фамилию, номер удостоверения личности (DNI), почтовый адрес, номер мобильного телефона, дату рождения, биометрические данные, местоположение GPS, список контактов, фотографии или файлы с устройства.",
    sections: {
      s1: {
        title: "1. Сбор и хранение информации",
        desc: "Для работы Приложения собираются только следующие данные:",
        a: "а) Данные учетной записи здания (предоставляются Shomer Security администратору кондоминиума или компании, не создаются жителем из Приложения):",
        aText: "Адрес электронной почты учетной записи здания и связанный с ним пароль (хранится в зашифрованном виде нашим поставщиком услуг аутентификации; никогда не виден нам в открытом виде). Каждое здание или учреждение имеет одну общую учетную запись для своих жителей и администраторов. Все устройства, входящие в систему под этой учетной записью, видят одни и те же камеры на входе в здание (до 2 камер на учетную запись).",
        b: "б) Данные привязки (необходимы для того, чтобы звонки с домофона поступали на ваше устройство):",
        bText: "Внутренний идентификатор квартиры или отдела, который вы занимаете, назначенный администрацией здания или компании. Токен push-уведомлений устройства (FCM на Android, APNs на iOS), связанный с вашей квартирой. Этот токен позволяет домофону отправлять вам входящие звонки. Он не идентифицирует пользователя лично и автоматически обновляется при переустановке приложения.",
        c: "в) Минимальная история звонков (только метаданные, без контента):",
        cText: "Дата и время входящего звонка, источник (домофон или внутреннее устройство в том же здании), был ли он принят или пропущен, а также приблизительная продолжительность. Эта история видна только вам в рамках вашего сеанса."
      },
      s2: {
        title: "2. Использование микрофона и видео (трансляция в реальном времени)",
        desc: "Shomer Vision работает как видеодомофон и система внутренней телефонной связи здания. Функции аудио и видео работают исключительно в режиме реального времени:",
        items: [
          "Видео с домофона: транслируется в реальном времени с камеры у входа на устройство жителя, пока звонок активен. Оно не записывается на наших серверах.",
          "Двусторонняя аудиосвязь с ручным управлением: житель может слышать посетителя и, если захочет, вручную активировать микрофон своего устройства для ответа. Аудио НЕ активируется автоматически. Интерфейс наглядно показывает, когда микрофон открыт, и применяет автоматическое отключение через 18 секунд после каждой активации для предотвращения случайной длительной трансляции.",
          "Внутренние звонки между жителями одного здания: только аудио, в режиме реального времени, по зашифрованным каналам (WebRTC). Они не записываются.",
          "Нулевое хранение контента: Shomer Security SRL не записывает, не транскрибирует и не архивирует видео, изображения или аудио звонков ни на одном сервере. Сохраняются только метаданные, описанные в пункте 1.c."
        ]
      },
      s3: {
        title: "3. Использование камеры устройства (сканер QR-кода)",
        text: "Приложение может запрашивать доступ к камере телефона исключительно для сканирования первоначального установочного QR-кода, предоставленного администрацией здания, что позволяет связать вашу учетную запись с нужной квартирой. Камера НЕ используется для съемки или сохранения фотографий или видео."
      },
      s4: {
        title: "4. Push-уведомления",
        text: "Приложение получает push-уведомления для сообщения о входящих звонках и поддержания активности сеанса. Содержимое уведомления включает только: идентификатор звонящей квартиры, тип звонка (домофон или внутренний) и технический идентификатор сеанса. Персональные данные посетителя не передаются."
      },
      s5: {
        title: "5. Телефонный справочник здания / компании",
        text: "Раздел «Справочник здания» является модульным и настраивается каждой администрацией. Видимые данные (номер квартиры, необязательное имя жителя или общая зона, например Ресепшн/Администрация) определяются администрацией здания или компании и обрабатываются только в закрытой среде Приложения для облегчения внутренней связи. Каждый житель может попросить свою администрацию скрыть его имя в справочнике."
      },
      s6: {
        title: "6. Контроль доступа и биометрические функции",
        text1: "Особо подчеркивается, что мобильное приложение Shomer Vision НЕ включает функции дистанционного открытия замков, контроля доступа или биометрии лица.",
        text2: "Вся передовая система защиты периметра, планирования рабочего времени персонала, профилей доступа и биометрического распознавания экосистемы Shomer Security управляется независимо и централизованно операционным центром компании, без технической связи с этим Приложением. Приложение ограничивается аудиовизуальной связью со входом и внутренней связью здания."
      },
      s7: {
        title: "7. Сторонние службы и место обработки данных",
        desc: "Для работы Приложение использует следующих поставщиков в качестве обработчиков данных:",
        items: [
          "Supabase Inc. (США) — аутентификация пользователей, база данных и обмен сообщениями в реальном времени для координации звонков. Хранит данные, описанные в разделе 1.",
          "Google LLC (Firebase Cloud Messaging) — доставка push-уведомлений на устройства Android.",
          "Apple Inc. (Apple Push Notification service) — доставка push-уведомлений на устройства iOS.",
          "Dahua / DoLynk Cloud и Lechange / Imou Cloud — поставщики камер домофонов; они транслируют видео и аудио в реальном времени с камеры на устройство жителя. Они не получают персональные данные жителя, только технические идентификаторы камеры.",
          "Vercel Inc. (США) — хостинг логики оркестровки внутренних звонков и привязки к QR-коду."
        ],
        footer: "Все поставщики соответствуют международным стандартам защиты данных (SOC 2, ISO 27001 или эквивалентным по мере применимости)."
      },
      s8: {
        title: "8. Безопасность и шифрование",
        text: "Все сообщения между Приложением и нашими серверами используют протокол HTTPS/TLS. Аудио- и видеопотоки используют WebRTC с шифрованием на всем пути прохождения сигнала, где это технически возможно, предотвращая раскрытие контента вне безопасной среды. Пароли хранятся в зашифрованном виде поставщиком услуг аутентификации и недоступны для Shomer Security SRL или третьих лиц."
      },
      s9: {
        title: "9. Хранение и удаление данных",
        items: [
          "a) Пока учетная запись здания активна, мы сохраняем данные, описанные в разделе 1.",
          "b) История звонков хранится максимум 90 дней, после чего автоматически удаляется.",
          "c) Токены push-уведомлений истекают, когда вы переустанавливаете Приложение, меняете устройство или не входите в систему в течение 180 дней.",
          "d) Отвязка вашего личного устройства: поскольку каждая учетная запись является общей для всего здания, она не может быть удалена из Приложения отдельным пользователем (это повлияет на всех остальных жителей). Что каждый житель может сделать из Приложения, так это отвязать свое устройство, перейдя в Настройки → Отвязать это устройство. Это действие немедленно удаляет: (i) связь вашего устройства с квартирой или отделом, (ii) сохраненный токен push-уведомлений и (iii) любой локальный кэш. Учетная запись здания и данные других жителей не затрагиваются. Если вы больше не хотите получать звонки на свой телефон, это стандартная процедура.",
          "e) Удаление учетной записи здания: учетная запись здания в целом может быть удалена только администрацией здания или компании, заключившей договор, по письменному запросу на адрес info@shomer.com.ar. Мы обрабатываем полную отмену, включая все связанные данные (учетную запись, историю, токены, связи с квартирами), в течение максимум 30 календарных дней с момента получения проверенного запроса."
        ]
      },
      s10: {
        title: "10. Права пользователя",
        text1: "В соответствии с Законом Аргентины № 25.326 и, если применимо, Общим регламентом по защите данных (ЕС) 2016/679, вы имеете право на: доступ к вашим персональным данным, которые мы обрабатываем, запрос их исправления или обновления, запрос их удаления, возражение против обработки или запрос ограничения обработки, а также запрос переносимости ваших данных.",
        text2: "Для осуществления любого из этих прав вы можете написать нам по адресу info@shomer.com.ar. Мы ответим в течение 10 рабочих дней."
      },
      s11: {
        title: "11. Несовершеннолетние",
        text: "Приложение предназначено для лиц старше 18 лет (жителей и администраторов зданий или компаний). Мы намеренно не собираем данные детей младше 13 лет. Если нам станет известно, что существуют данные ребенка младше 13 лет, мы их удалим."
      },
      s12: {
        title: "12. Изменения в этой политике",
        text: "Мы можем обновлять настоящую Политику конфиденциальности, чтобы отразить изменения в Приложении или применимом законодательстве. Текущая версия всегда будет доступна в Приложении и на официальном сайте Shomer Security. В случае внесения существенных изменений пользователь будет уведомлен через Приложение до их вступления в силу."
      },
      s13: {
        title: "13. Контакты",
        text1: "По любым вопросам, претензиям или запросам, связанным с настоящей Политикой конфиденциальности или обработкой ваших персональных данных, вы можете написать нам по адресу:",
        text2: "Shomer Security SRL",
        text3: "Электронная почта: info@shomer.com.ar",
        footer: "Если вы считаете, что ваши права не были удовлетворены надлежащим образом, вы можете подать жалобу в Агентство по доступу к публичной информации (AAIP) Аргентинской Республики."
      }
    }
  },
  it: {
    title: "Informativa sulla Privacy",
    titleEm: "Shomer Vision",
    lastUpdated: "Ultimo aggiornamento: Maggio 2026",
    tag: "Applicazione Mobile",
    intro: "La presente Informativa sulla Privacy stabilisce i termini in base ai quali Shomer Security SRL (\"Shomer\", \"noi\", \"ci\") tratta le informazioni che l'utente (\"tu\", \"residente\") fornisce durante l'utilizzo dell'applicazione mobile Shomer Vision (l'\"Applicazione\"). Questa informativa è redatta in conformità con le linee guida sulla privacy dell'Apple App Store, di Google Play e con le normative argentine sulla protezione dei dati personali (Legge 25.326).",
    backLink: "← Torna alla home",
    generalLink: "Informativa Generale sulla Privacy →",
    responsibleTitle: "Titolare del trattamento",
    responsibleText: "Shomer Security SRL",
    contactText: "Contatto: ",
    unvinculationLabel: "Impostazioni → Disassocia questo dispositivo",
    noCollectLabel: "Non richiediamo né memorizziamo:",
    noCollectText: "nome e cognome, documento d'identità (DNI), indirizzo postale, numero di cellulare, data di nascita, dati biometrici, posizione GPS, rubrica contatti, foto o file dal dispositivo.",
    sections: {
      s1: {
        title: "1. Informazioni raccolte e memorizzate",
        desc: "Per il funzionamento dell'Applicazione vengono raccolti solo i seguenti dati:",
        a: "a) Dati dell'account dell'edificio (forniti da Shomer Security all'amministratore del condominio o dell'azienda, non creati dal residente dall'Applicazione):",
        aText: "Indirizzo e-mail dell'account dell'edificio e password associata (memorizzata in forma crittografata dal nostro fornitore di autenticazione; mai visibile a noi in testo normale). Ciascun edificio o stabilimento dispone di un unico account condiviso tra residenti e amministratori. Tutti i dispositivi che effettuano l'accesso con tale account visualizzano le stesse telecamere all'ingresso dell'edificio (fino a 2 telecamere per account).",
        b: "b) Dati di associazione (necessari per consentire alle chiamate del videocitofono di raggiungere il dispositivo):",
        bText: "Identificativo interno dell'unità o dell'appartamento occupato, assegnato dall'amministrazione del condominio o dell'azienda. Token di notifica push del dispositivo (FCM in Android, APNs in iOS) associato alla tua unità. Questo token consente al videocitofono di inviarti la chiamata in arrivo. Non identifica personalmente l'utente e ruota automaticamente alla reinstallazione dell'applicazione.",
        c: "c) Cronologia minima delle chiamate (solo metadati, mai contenuto):",
        cText: "Data e ora della chiamata in arrivo, origine (videocitofono o unità interna nello stesso edificio), se è stata risposta o persa e durata approssimativa. Questa cronologia è visibile solo a te all'interno della tua sessione."
      },
      s2: {
        title: "2. Utilizzo del microfono e del video (streaming in tempo reale)",
        desc: "Shomer Vision funziona come videocitofono e sistema telefonico interno dell'edificio. Le funzioni audio e video operano esclusivamente in tempo reale:",
        items: [
          "Video del videocitofono: trasmesso in diretta dalla telecamera dell'ingresso al dispositivo del residente mentre la chiamata è attiva. Non viene registrato sui nostri server.",
          "Audio bidirezionale con controllo manuale: il residente può ascoltare il visitatore e, se lo desidera, attivare manualmente il microfono del proprio dispositivo per rispondere. L'audio NON si attiva automaticamente. L'interfaccia mostra chiaramente quando il microfono è aperto e applica un'interruzione automatica dopo 18 secondi per ogni attivazione, al fine di evitare trasmissioni prolungate accidentali.",
          "Chiamate interne tra residenti dello stesso edificio: solo audio, in tempo reale, tramite canali crittografati (WebRTC). Non vengono registrate.",
          "Nessuna memorizzazione del contenuto: Shomer Security SRL non registra, trascrive o archivia il video, le immagini o l'audio delle chiamate su alcun server. Vengono conservati solo i metadati descritti nella sezione 1.c."
        ]
      },
      s3: {
        title: "3. Utilizzo della fotocamera del dispositivo (lettore QR)",
        text: "L'Applicazione può richiedere l'accesso alla fotocamera del telefono esclusivamente per scansionare il codice QR di configurazione iniziale fornito dall'amministrazione dell'edificio, che consente di associare il proprio account all'unità corretta. La fotocamera NON viene utilizzata per scattare o salvare foto o video."
      },
      s4: {
        title: "4. Notifiche Push",
        text: "L'Applicazione riceve notifiche push per segnalare le chiamate in arrivo e mantenere attiva la sessione. Il contenuto trasmesso nella notifica include solo: identificativo dell'unità chiamante, tipo di chiamata (videocitofono o interna) e identificativo tecnico della sessione. Non sono inclusi dati personali del visitatore."
      },
      s5: {
        title: "5. Elenco contatti dell'edificio / dell'azienda",
        text: "La sezione \"Elenco dell'edificio\" è modulare e configurabile da ciascuna amministrazione. I dati visibili (numero dell'unità, nome opzionale del residente o area comune come Reception/Amministrazione) sono definiti dall'amministrazione del condominio o dell'azienda e sono trattati solo all'interno dell'ambiente chiuso dell'Applicazione per facilitare la comunicazione interna. Ciascun residente può richiedere alla propria amministrazione di non apparire visibile nell'elenco."
      },
      s6: {
        title: "6. Controllo accessi e funzioni biometriche",
        text1: "Si precisa espressamente che l'Applicazione mobile Shomer Vision NON include funzioni per l'apertura remota di serrature, controllo accessi o biometria facciale.",
        text2: "L'intero sistema avanzato di gestione del perimetro, pianificazione del personale, profili di accesso e riconoscimento biometrico dell'ecosistema Shomer Security è gestito in modo indipendente e centralizzato dalla centrale operativa della società, senza alcun collegamento tecnico con questa Applicazione. L'Applicazione si limita alla comunicazione audiovisiva con l'ingresso e alla comunicazione citofonica interna dell'edificio."
      },
      s7: {
        title: "7. Servizi di terze parti e luogo di trattamento dei dati",
        desc: "Per funzionare, l'Applicazione si avvale dei seguenti fornitori in qualità di responsabili del trattamento:",
        items: [
          "Supabase Inc. (USA) — autenticazione dell'utente, database e messaggistica in tempo reale per coordinare le chiamate. Memorizza i dati descritti nella sezione 1.",
          "Google LLC (Firebase Cloud Messaging) — consegna delle notifiche push ai dispositivi Android.",
          "Apple Inc. (Apple Push Notification service) — consegna delle notifiche push ai dispositivi iOS.",
          "Dahua / DoLynk Cloud e Lechange / Imou Cloud — fornitori delle telecamere del videocitofono; trasmettono il video e l'audio in tempo reale dalla telecamera al dispositivo del residente. Non ricevono i dati personali del residente, ma solo identificativi tecnici del dispositivo telecamera.",
          "Vercel Inc. (USA) — hosting della logica di orchestrazione delle chiamate interne e dell'associazione QR."
        ],
        footer: "Tutti i fornitori rispettano gli standard internazionali di protezione dei dati (SOC 2, ISO 27001 o equivalenti, a seconda dei casi)."
      },
      s8: {
        title: "8. Sicurezza e crittografia",
        text: "Tutte le comunicazioni tra l'Applicazione e i nostri server utilizzano HTTPS/TLS. I flussi audio e video utilizzano WebRTC con crittografia end-to-end ove tecnicamente possibile, evitando l'esposizione del contenuto al di fuori dell'ambiente sicuro. Le password vengono memorizzate in forma crittografata dal fornitore di autenticazione e non sono accessibili a Shomer Security SRL o a terzi."
      },
      s9: {
        title: "9. Conservazione e cancellazione dei dati",
        items: [
          "a) Mentre l'account dell'edificio è attivo, conserviamo i dati descritti nella sezione 1.",
          "b) La cronologia delle chiamate viene conservata per un massimo di 90 giorni, dopodiché viene eliminata automaticamente.",
          "c) I token delle notifiche push scadono quando si reinstalla l'Applicazione, si cambia dispositivo o non si effettua l'accesso per 180 giorni.",
          "d) Disassociazione del dispositivo personale: poiché ciascun account è condiviso dall'intero edificio, non può essere eliminato dall'Applicazione da un singolo utente (ciò influirebbe su tutti gli altri residenti). Ciò che ciascun residente può fare dall'Applicazione è disassociare il proprio dispositivo, andando su Impostazioni → Disassocia questo dispositivo. Questa azione elimina immediatamente: (i) l'associazione del dispositivo con l'unità o il reparto, (ii) il token di notifica push memorizzato e (iii) qualsiasi cache locale. L'account dell'edificio e i dati degli altri residenti non vengono interessati. Se non si desidera più ricevere chiamate sul proprio telefono, questa è la procedura standard.",
          "e) Cancellazione dell'account dell'edificio: l'account dell'edificio nel suo complesso può essere eliminato solo dall'amministrazione del condominio o dell'azienda che lo ha contrattato, tramite richiesta scritta a info@shomer.com.ar. Elaboriamo la cancellazione completa, inclusi tutti i dati associati (account, cronologia, token, associazioni di unità), entro un periodo massimo di 30 giorni di calendario dalla ricezione della richiesta verificata."
        ]
      },
      s10: {
        title: "10. Diritti dell'utente",
        text1: "In conformità con la legge argentina 25.326 e, ove applicabile, con il Regolamento generale sulla protezione dei dati (UE) 2016/679, hai il diritto di: accedere ai dati personali che trattiamo su di te, richiederne la rettifica o l'aggiornamento, richiederne la cancellazione, opporsi al trattamento o richiederne la limitazione e richiedere la portabilità dei dati.",
        text2: "Per esercitare uno qualsiasi di questi diritti, puoi scriverci a info@shomer.com.ar. Risponderemo entro 10 giorni lavorativi."
      },
      s11: {
        title: "11. Minori",
        text: "L'Applicazione è destinata a persone di età superiore ai 18 anni (residenti e amministratori di edifici o aziende). Non raccogliamo intenzionalmente dati da minori di 13 anni. Qualora dovessimo venire a conoscenza dell'esistenza di dati di un minore di 13 anni, li elimineremo."
      },
      s12: {
        title: "12. Modifiche a questa informativa",
        text: "Potremmo aggiornare questa Informativa sulla Privacy per riflettere le modifiche all'Applicazione o alla legislazione applicabile. La versione corrente sarà sempre disponibile all'interno dell'Applicazione e sul sito web ufficiale di Shomer Security. In caso di modifiche sostanziali, l'utente sarà informato tramite l'Applicazione prima che entrino in vigore."
      },
      s13: {
        title: "13. Contatto",
        text1: "Per qualsiasi domanda, reclamo o richiesta relativa alla presente Informativa sulla Privacy o al trattamento dei dati personali, è possibile scriverci a:",
        text2: "Shomer Security SRL",
        text3: "E-mail: info@shomer.com.ar",
        footer: "Se ritieni che i tuoi diritti non siano stati soddisfatti in modo soddisfacente, puoi presentare un reclamo all'Agenzia per l'accesso alle informazioni pubbliche (AAIP) della Repubblica Argentina."
      }
    }
  }
};
export type Locale = "es" | "en" | "pt" | "he" | "de" | "ru" | "it";
