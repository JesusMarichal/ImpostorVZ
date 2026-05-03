# ImpostorVZ

## Descripción del Juego

ImpostorVZ es un juego de deducción social y verbal desarrollado en React Native para plataformas móviles iOS y Android. En este juego, la mayoría de los jugadores comparten una palabra secreta, mientras que uno o más son "impostores" que no la conocen. El objetivo es identificar al impostor mediante pistas verbales: cada jugador da una palabra relacionada con la palabra secreta, sin revelarla directamente. Los impostores intentan pasar desapercibidos dando pistas falsas o genéricas.

El juego fomenta la creatividad, la observación y la comunicación estratégica en un entorno multijugador local o en línea.

## Mecánicas del Juego

### Roles
- **Buenos Jugadores**: La mayoría (por ejemplo, 3-9 jugadores). Conocen la palabra secreta y deben dar pistas relacionadas para ayudar a identificar al impostor.
- **Impostores**: Un número limitado (generalmente 1-2 dependiendo del total de jugadores). No conocen la palabra secreta y deben fingir dando pistas plausibles o confusas para evitar ser descubiertos.

### Número de Jugadores
- Mínimo: 4 jugadores
- Máximo: 10 jugadores (configurable)

### Fases del Juego
1. **Inicio**: Se selecciona una palabra secreta aleatoria. Todos los "buenos" la ven en sus dispositivos, pero los impostores ven una pantalla diferente o nada.
2. **Ronda de Pistas**:
   - Cada jugador, por turnos, da una pista: una palabra relacionada con la secreta (ej. si la palabra es "mar", pistas como "agua", "playa", "barco").
   - Los impostores dan pistas que podrían ser relacionadas o no, para confundir.
   - No se permite revelar la palabra secreta directamente.
3. **Discusión**: Los jugadores discuten las pistas dadas, intentando deducir quién es el impostor basado en la calidad y coherencia de las pistas.
4. **Votación**: Cada jugador vota por quién cree que es el impostor. El más votado es "expulsado".
5. **Fin del Juego**:
   - Si el impostor es identificado correctamente, ganan los buenos.
   - Si el impostor sobrevive o engaña a todos, gana el impostor.
   - Opcional: Múltiples rondas hasta que se resuelva.

### Palabras Secretas
- Categorías temáticas: Animales, objetos, lugares, etc.
- Ejemplos: "Sol" (pistas: estrella, calor, día), "Teléfono" (pistas: llamada, móvil, mensaje).

### Reglas Adicionales
- Las pistas deben ser una sola palabra.
- No se permiten pistas que revelen la palabra (ej. sinónimos directos).
- Tiempo límite por ronda para mantener el ritmo.

## Implementación en React Native

### Arquitectura de la Aplicación
La aplicación se desarrollará utilizando React Native, aprovechando su capacidad para crear interfaces móviles nativas desde JavaScript/TypeScript. La arquitectura seguirá un patrón de capas con separación entre UI, lógica de negocio y datos:

- **UI Layer**: Componentes de React Native para pantallas, botones, animaciones.
- **Business Logic Layer**: Lógica del juego, estados de jugadores, rondas y votaciones.
- **Data Layer**: Almacenamiento local de configuraciones y ajustes de partida.

### Pantallas Principales
1. **Menú Principal**: Selección de modo (local, en línea), configuración de partida.
2. **Sala de Espera**: Lista de jugadores, chat y botón para iniciar la partida.
3. **Ronda de Pistas**: Entrada de pistas, historial de palabras dadas, temporizador.
4. **Discusión y Votación**: Lista de jugadores, votos y resultados.
5. **Fin de Partida**: Resultados y estadísticas.

### Tecnologías Utilizadas
- **React Native**: Framework principal.
- **JavaScript** o **TypeScript**: Lenguaje de programación.
- **React Navigation**: Navegación entre pantallas.
- **Redux** o **Context API**: Para gestión de estado.
- **Socket.IO** o **Firebase Realtime Database**: Para multijugador en línea.
- **AsyncStorage**: Para almacenamiento local de configuraciones.

### Requisitos del Sistema
- Node.js 18+ o 20+
- npm o Yarn
- React Native CLI o Expo CLI
- Android Studio con Android SDK (para Android)
- Xcode (para iOS, solo en macOS)

### Instalación y Ejecución
1. Clona el repositorio.
2. Instala dependencias con `npm install` o `yarn install`.
3. Inicia el proyecto:
   - Con React Native CLI: `npx react-native run-android` o `npx react-native run-ios`
   - Con Expo: `npx expo start`

### Contribución
Para contribuir al desarrollo:
- Reporta bugs en issues.
- Envía pull requests con mejoras.
- Sigue las guías de estilo de React Native.

### Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

---

*Esta documentación es preliminar y puede actualizarse durante el desarrollo.*

Desarrollado por: Eduar Marcano - Jesus Marichal