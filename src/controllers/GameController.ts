import GameModel, {GameOverview} from '../models/GameModel';

type HeaderData = Pick<GameOverview, 'title' | 'subtitle'>;

type GameData = Pick<GameOverview, 'players' | 'rule'>;

const GameController = {
  getHeaderData(): HeaderData {
    const {title, subtitle} = GameModel.getOverview();
    return {title, subtitle};
  },

  getGameData(): GameData {
    const {players, rule} = GameModel.getOverview();
    return {players, rule};
  },

  startGame(): {message: string} {
    const playerCount = GameModel.getOverview().players.length;

    return {
      message: `Juego iniciado con ${playerCount} ${
        playerCount === 1 ? 'jugador' : 'jugadores'
      }`,
    };
  },
};

export default GameController;
