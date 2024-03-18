class MovieService {
  constructor(baseUrl = 'http://localhost:4000') {
    this.baseUrl = baseUrl;
  }

  async getAll() {
    const response = await fetch(`${this.baseUrl}/movies`);
    const structured = await response.json();
    return structured.data;
  }
}

export const service = new MovieService();