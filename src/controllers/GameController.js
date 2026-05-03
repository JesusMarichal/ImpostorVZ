import GameModel from '../models/GameModel';

const GameController = {
  getHeaderData() {
    const {title, subtitle} = GameModel.getOverview();
    return {title, subtitle};
  },

  getGameData() {
    const {players, rule} = GameModel.getOverview();
    return {players, rule};
  },

  startGame() {
    const playerCount = GameModel.getOverview().players.length;
    return {
      message: `Juego iniciado con ${playerCount} ${playerCount === 1 ? 'jugador' : 'jugadores'}`,
    };
  },
};

export default GameController;
