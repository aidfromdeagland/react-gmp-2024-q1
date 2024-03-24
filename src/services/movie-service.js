class MovieService {
  constructor(baseUrl = 'http://localhost:4000/movies') {
    this.baseUrl = baseUrl;
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

    const requestUrl = queryParams ? `${this.baseUrl}?${queryParams}` : this.baseUrl;
    this.getMoviesAbortController?.abort();
    this.getMoviesAbortController = new AbortController();

    try {
      const rawResponse = await fetch(requestUrl, { signal: this.getMoviesAbortController.signal });
      const moviesResponse = await rawResponse.json();
      return moviesResponse.data;
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log(`request ${requestUrl} aborted`);
      } else {
        console.error(`request ${requestUrl} failed`, error);
        throw error;
      }
    }
    finally {
      this.getMoviesAbortController = null;
    }
  }

  async getById(id) {
    const requestUrl = `${this.baseUrl}/${id}`; 
    this.getByIdAbortController?.abort();
    this.getByIdAbortController = new AbortController();

    try {
      const rawResponse = await fetch(requestUrl, { signal: this.getByIdAbortController.signal });
      return await rawResponse.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log(`request ${requestUrl} aborted`);
      } else {
        console.error(`request ${requestUrl} failed`, error);
      }
      throw error;
    }
    finally {
      this.getByIdAbortController = null;
    }
  }
}

export const service = new MovieService();