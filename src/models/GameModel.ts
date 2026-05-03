export interface GameOverview {
  title: string;
  subtitle: string;
  players: string[];
  rule: string;
}

class GameModel {
  private title = 'ImpostorVZ';
  private subtitle = 'Juego de deducción social verbal en React Native.';
  private players = ['Agente 1', 'Agente 2', 'Agente 3'];
  private rule = 'Busca al impostor antes de que termine el tiempo.';

  getOverview(): GameOverview {
    return {
      title: this.title,
      subtitle: this.subtitle,
      players: this.players,
      rule: this.rule,
    };
  }
}

export default new GameModel();
