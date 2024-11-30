import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { RESPONSE } from "./interface";
import { SERVER } from "./links";

interface Filters {
  limit?: number;
  skip?: number;
  filter?: Record<string, unknown>;
}
class RequestService {
  private axiosInstance;

  constructor() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // Customize the axios instance (base URL, headers, etc.)
    this.axiosInstance = axios.create({
      baseURL: SERVER,

      // headers: {
      //   "Content-Type": "application/json",

      //   // Add any other headers you need
      // },
    });
  }

  async get(
    url: string,
    token?: string,
    config?: AxiosRequestConfig,
    filters?: Filters
  ): Promise<RESPONSE> {
    let headers = config?.headers || {}; // Start with the headers from the config or an empty object.
    // If token is provided, add Authorization header
    if (token) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }

    try {
      const response = await this.axiosInstance.get(url, {
        ...config,
        headers,
        params: {
          limit: +filters!.limit || 10,
          skip: +filters!.skip || 0,
          filter: JSON.stringify(filters.filter),
        },
      });

      // Check for Unauthorized response (401) and redirect to login if needed
      if (response.status === 401) {
        document.location.href = "/login"; // or any path where the user should be redirected
      }

      // Return the response
      return response;
    } catch (error) {
      console.error("Error during HTTP request:", error);

      // Optionally, handle specific error cases or rethrow for further handling
      throw error;
    }
  }
  async post(
    url: string,
    token?: string,
    form?: boolean,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<RESPONSE> {
    let headers;
    if (token) {
      headers = {
        ...config?.headers,
        Authorization: `Bearer ${token}`,
        "Content-Type": `${form ? "multipart/form-data" : "application/json"} `,
      };
    } else {
      headers = {
        ...config?.headers,
        "Content-Type": `${form ? "multipart/form-data" : "application/json"}`,
      };
    }
    try {
      const axiosResponse = await this.axiosInstance.post(url, data, {
        ...config,
        headers,
      });
      if (axiosResponse.status === 401) {
        document.location.href = "/";
      }
      return axiosResponse;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        // If it's an AxiosError, handle it properly
        const axiosError = err as AxiosError<RESPONSE>; // Cast to the specific AxiosError type
        return axiosError.response as RESPONSE; // Safely cast the response to your RESPONSE type
      } else {
        // Handle unknown errors (e.g., network issues or other errors)
        throw new Error("An unknown error occurred");
      }
    }
  }
  async tokenPost(
    url: string,
    token: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<RESPONSE> {
    const headers = {
      ...config?.headers,
      Authorization: `Bearer ${token}`,
    };
    try {
      const axiosResponse = await this.axiosInstance.post(url, data, {
        ...config,
        headers,
      });
      if (axiosResponse.status === 401) {
        document.location.href = "/";
      }
      return axiosResponse;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        // If it's an AxiosError, handle it properly
        const axiosError = err as AxiosError<RESPONSE>; // Cast to the specific AxiosError type
        return axiosError.response as RESPONSE; // Safely cast the response to your RESPONSE type
      } else {
        // Handle unknown errors (e.g., network issues or other errors)
        throw new Error("An unknown error occurred");
      }
    }
  }
  async put(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<RESPONSE> {
    const response = await this.axiosInstance.put(url, data, config);
    return response;
  }

  async delete(
    url: string,
    token?: string,
    config?: AxiosRequestConfig
  ): Promise<unknown> {
    let headers;
    if (token) {
      headers = {
        ...config?.headers,
        Authorization: `Bearer ${token}`,
      };
    } else {
      headers = {
        ...config?.headers,
      };
    }
    const response = await this.axiosInstance.delete(url, {
      ...config,
      headers,
    });
    return response;
  }
}
const requestService = new RequestService();
export default requestService;
