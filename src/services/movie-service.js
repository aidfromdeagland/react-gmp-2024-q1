class MovieService {
  constructor(baseUrl = 'http://localhost:4000') {
    this.baseUrl = baseUrl;
    this.resetAbortController();
  }

  resetAbortController() {
    this.abortController = null;
    this.signal = null;
  }

  async getMovies({ genre, sorting, searchQuery }) {
    const [sortCriteria, sortOrder] = sorting ? sorting.split(' ') : [];
    const searchCriteria = searchQuery ? 'title' : undefined;
    const queryParams = Object.entries({
      sortBy: sortCriteria,
      sortOrder: sortOrder,
      search: searchQuery,
      searchBy: searchCriteria,
      filter: genre,
      offset: undefined,
      limit: undefined,
    })
      .filter(entry => Boolean(entry[1]))
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const baseUrl = `${this.baseUrl}/movies`;
    const requestUrl = queryParams ? `${baseUrl}?${queryParams}` : baseUrl;

    if (this.abortController) {
      this.abortController.abort(this.signal);
      this.resetAbortController();
    }

    try {
      this.abortController = new AbortController();
      this.signal = this.abortController.signal;
      const rawResponse = await fetch(requestUrl, { signal: this.signal });
      const moviesResponse = await rawResponse.json();
      return moviesResponse.data;
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log(`request ${requestUrl} aborted`);
      } else {
        console.error(`request ${requestUrl} failed`, error);
      }
    }
    finally {
      this.resetAbortController();
    }
  }
}

export const service = new MovieService();