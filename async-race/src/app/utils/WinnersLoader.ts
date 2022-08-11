import config from '../config';
import { UpdateWinnersType, WinnersType } from '../types';

export default class WinnersLoader {
  static async getWinners() {
    let winnersArray: Array<WinnersType> = [];
    const response = await fetch(config.winnersUrl);

    if (response.ok) {
      winnersArray = await response.json();
    } else {
      alert(`Ошибка HTTP: ${response.status}`);
    }
    return winnersArray;
  }

  static async getWinner(id: string) {
    let winner;
    const response = await fetch(`${config.winnersUrl}${Number(id)}`);
    if (response.ok) {
      winner = await response.json();
    } else {
      alert(`Ошибка HTTP: ${response.status}`);
    }
    return winner;
  }

  static async createWinner(data: WinnersType) {
    const response = await fetch(config.winnersUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  static async updateWinner(id: string, data: UpdateWinnersType) {
    const response = await fetch(`${config.winnersUrl}${Number(id)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}
