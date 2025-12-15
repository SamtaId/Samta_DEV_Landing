import AxiosBase from "./axios/AxiosBase";

export const portfoliosService = {
  getPosts: async (params = {}) => {
    try {
      const { page = 1, per_page = 10, search = "" } = params;
      const response = await AxiosBase.get("/portfolios", {
        params: {
          page,
          per_page,
          search,
          _embed: true,
        },
      });
      return {
        data: response.data,
        totalPages: response.headers["x-wp-totalpages"],
        total: response.headers["x-wp-total"],
      };
    } catch (error) {
      console.error("Error fetching portfolios:", error);
      throw error;
    }
  },

  getPostBySlug: async (slug) => {
    try {
      const response = await AxiosBase.get("/portfolios", {
        params: {
          slug,
          _embed: true,
        },
      });
      return response.data[0];
    } catch (error) {
      console.error("Error fetching post:", error);
      throw error;
    }
  },

  getFeaturedMedia: async (mediaId) => {
    try {
      if (!mediaId) return null;
      const response = await AxiosBase.get(`/media/${mediaId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching media:", error);
      return null;
    }
  },

  getAuthor: async (authorId) => {
    try {
      const response = await AxiosBase.get(`/users/${authorId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching author:", error);
      return null;
    }
  },

  getCategories: async () => {
    try {
      const response = await AxiosBase.get("/categories");
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },

  getCategory: async (categoryId) => {
    try {
      const response = await AxiosBase.get(`/categories/${categoryId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching category:", error);
      return null;
    }
  },
};
