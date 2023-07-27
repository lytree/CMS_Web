/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { useUserInfo } from "@/stores/userInfo";
import { LoadingOptions } from "element-plus";
import { $Fetch, FetchOptions, FetchRequest, ofetch } from "ofetch";
import { storeToRefs } from "pinia";

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed" | "stream">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** 显示错误消息 */
  showErrorMessage?: boolean;
  /** 显示成功消息 */
  showSuccessMessage?: boolean;
  /** 登录访问 */
  login?: boolean;
  /** 加载中 */
  loading?: boolean;
  /** 加载中选项 */
  loadingOptions?: LoadingOptions;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<FetchOptions, "data" | "cancelToken"> {
  // baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | FetchRequest | void> | FetchRequest | RequestParams | void;
  secure?: boolean;
  format?: ResponseType;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}
export interface LoadingInstance {
  target: any;
  count: number;
}

const loadingInstance: LoadingInstance = {
  target: null,
  count: 0,
};
export class HttpClient<SecurityDataType = unknown> {
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private apiFetch: $Fetch;
  private secure?: boolean;
  private format?: ResponseType;
  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
    format: "json",
  };

  constructor({ securityWorker, secure, format, ...fetchConfig }: ApiConfig<SecurityDataType> = {}) {
    this.apiFetch = ofetch.create({
      baseURL: import.meta.env.VITE_API_URL,
      ...fetchConfig,
      ...this.baseApiParams,
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };
  /**
   * 错误处理
   * @param {*} error
   */
  protected errorHandle(error: any) {
    if (!error) {
      return;
    }
    // if (this.apiFetch.isCancel(error)) return console.error('请求重复已被自动取消：' + error.message)
    let message = "";
    switch (error.status) {
      case 302:
        message = "接口重定向";
        break;
      case 400:
        message = "参数不正确";
        break;
      case 401:
        message = "您还没有登录";
        break;
      case 403:
        message = "您没有权限操作";
        break;
      case 404:
        message = "请求地址出错：" + error.response.config.url;
        break;
      case 408:
        message = "请求超时";
        break;
      case 409:
        message = "系统已存在相同数据";
        break;
      case 500:
        message = "服务器内部错误";
        break;
      case 501:
        message = "服务未实现";
        break;
      case 502:
        message = "网关错误";
        break;
      case 503:
        message = "服务不可用";
        break;
      case 504:
        message = "服务暂时无法访问，请稍后再试";
        break;
      case 505:
        message = "HTTP版本不受支持";
        break;
      default:
        message = "异常问题，请联系网站管理员";
        break;
    }
    if (error.message.includes("timeout")) message = "请求超时";
    if (error.message.includes("Network")) message = window.navigator.onLine ? "服务端异常" : "您已断网";

    if (message) {
      ElMessage.error({ message, grouping: true });
    }
  }
  /**
   * 刷新token
   * @param {*} config
   */
  protected async refreshToken(config: any) {
    const storesUseUserInfo = useUserInfo();
    const { userInfos } = storeToRefs(storesUseUserInfo);
    const token = userInfos.value.token;
    if (!token) {
      storesUseUserInfo.clear();
      return Promise.reject(config);
    }

    if (window.tokenRefreshing) {
      window.requests = window.requests ? window.requests : [];
      return new Promise((resolve) => {
        window.requests.push(() => {
          resolve(this.apiFetch(config));
        });
      });
    }

    window.tokenRefreshing = true;

    return this.request<any>({
      path: `/api/admin/auth/refresh`,
      method: "GET",
      secure: true,
      format: "json",
      login: false,
      query: {
        token: token,
      },
    })
      .then((res) => {
        if (res?.success) {
          const token = res.data.token;
          storesUseUserInfo.setToken(token);
          if (window.requests?.length > 0) {
            window.requests.forEach((apiRequest) => apiRequest());
            window.requests = [];
          }
          return this.apiFetch(config);
        } else {
          storesUseUserInfo.clear();
          return Promise.reject(res);
        }
      })
      .catch((error) => {
        storesUseUserInfo.clear();
        return Promise.reject(error);
      })
      .finally(() => {
        window.tokenRefreshing = false;
      });
  }

  /**
   * 关闭Loading层实例
   */
  protected closeLoading(loading: boolean = false) {
    if (loading && loadingInstance.count > 0) loadingInstance.count--;

    if (loadingInstance.count === 0) {
      loadingInstance.target.close();
      loadingInstance.target = null;
      console.log(false);
    }
  }
  public request = async <T = any,>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    showErrorMessage = true,
    showSuccessMessage = false,
    login = true,
    loading = false,
    loadingOptions = {},
    cancelToken,
    ...params
  }: FullRequestParams): Promise<T> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    // const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.apiFetch(`${path}`, {
      query: query,
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
      responseType: responseFormat,
      onRequest: ({ request, options }) => {
        if (loading) {
          loadingInstance.count++;
          if (loadingInstance.count === 1) {
            loadingInstance.target = ElLoading.service(loadingOptions);
          }
        }

        const { userInfos } = storeToRefs(useUserInfo());
        const accessToken = userInfos.value.token;
        (options.headers! as any)["Authorization"] = `Bearer ${accessToken}`;
      },
      onRequestError({ request, options, error }) {
        console.log("[fetch request error options]", request, error, options);
      },
      onResponse: ({ request, response, options }) => {
        loading && this.closeLoading(loading);
        const data = response._data;
        if (data.success) {
          if (showSuccessMessage) {
            ElMessage.success({ message: data.msg ? data.msg : "操作成功", grouping: true });
          }
        } else {
          if (showErrorMessage) {
            ElMessage.error({ message: data.msg ? data.msg : "操作失败", grouping: true });
          }
        }
      },
      onResponseError: ({ request, response, options }) => {
        loading && this.closeLoading(loading);

        //刷新token
        if (login && response.status === 401) {
          return this.refreshToken(options);
        }

        //错误处理
        if (showErrorMessage) {
          this.errorHandle(response);
        }
        // Log error
        console.log("[fetch response error]", request, response);
      },
    }).then((response) => response);
  };
}
