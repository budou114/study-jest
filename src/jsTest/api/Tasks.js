import axios from 'axios';

// 外部APIのエンドポイント
const API_ENDPOINT = 'http://localhost/api/tasks';

// Tasksクラス
export class Tasks {
  constructor() {}
  async getData() {
    try {
      const response = await axios.get(API_ENDPOINT);
      return response.data;
    } catch (error) {
      console.error('Error fetching Tasks:', error);
      throw new Error('Failed to fetch Tasks');
    }
  }
}