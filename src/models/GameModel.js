class GameModel {
  constructor() {
    this.title = 'ImpostorVZ';
    this.subtitle = 'Juego de deducción social verbal en React Native.';
    this.players = ['Agente 1', 'Agente 2', 'Agente 3'];
    this.rule = 'Busca al impostor antes de que termine el tiempo.';
  }

  getOverview() {
    return {
      title: this.title,
      subtitle: this.subtitle,
      players: this.players,
      rule: this.rule,
    };
  }
}

export default new GameModel();
