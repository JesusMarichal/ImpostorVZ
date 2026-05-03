# ImpostorVZ

## Descripción del Juego

ImpostorVZ es un juego de deducción social y verbal desarrollado en Flutter para plataformas móviles iOS y Android. En este juego, la mayoría de los jugadores comparten una palabra secreta, mientras que uno o más son "impostores" que no la conocen. El objetivo es identificar al impostor mediante pistas verbales: cada jugador da una palabra relacionada con la palabra secreta, sin revelarla directamente. Los impostores intentan pasar desapercibidos dando pistas falsas o genéricas.

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

## Implementación en Flutter

### Arquitectura de la Aplicación
La aplicación se desarrollará utilizando Flutter, aprovechando su capacidad para crear interfaces de usuario nativas en iOS y Android. La arquitectura seguirá el patrón Provider para la gestión de estado, con separación de capas:

- **UI Layer**: Widgets de Flutter para pantallas, botones, animaciones.
- **Business Logic Layer**: Lógica del juego, estados de jugadores, tareas.
- **Data Layer**: Almacenamiento local de configuraciones, puntuaciones.

### Pantallas Principales
1. **Menú Principal**: Selección de modo (local, en línea), configuración de partida.
2. **Sala de Espera**: Lista de jugadores, chat, inicio de partida.
3. **Juego**: Vista del mapa, minimapa, lista de tareas, chat de emergencia.
4. **Votación**: Interfaz para votar, ver cuerpos reportados.
5. **Fin de Partida**: Resultados, estadísticas.

### Tecnologías Utilizadas
- **Flutter**: Framework principal.
- **Dart**: Lenguaje de programación.
- **Provider**: Para gestión de estado.
- **WebSocket** o **Firebase**: Para multijugador en línea.
- **SQLite** o **SharedPreferences**: Para almacenamiento local.

### Requisitos del Sistema
- Flutter SDK 3.0+
- Dart 2.19+
- Android Studio o Xcode para desarrollo nativo.

### Instalación y Ejecución
1. Clona el repositorio.
2. Ejecuta `flutter pub get` para instalar dependencias.
3. Ejecuta `flutter run` para iniciar la aplicación en un emulador o dispositivo.

### Contribución
Para contribuir al desarrollo:
- Reporta bugs en issues.
- Envía pull requests con mejoras.
- Sigue las guías de estilo de Flutter.

### Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

---

*Esta documentación es preliminar y puede actualizarse durante el desarrollo.*

Desarrollado por: Eduar Marcano - Jesus Marichal