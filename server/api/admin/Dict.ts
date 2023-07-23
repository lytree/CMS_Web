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

import {
  DictAddInput,
  DictUpdateInput,
  PageInputDictGetPageDto,
  ResultOutputDictGetOutput,
  ResultOutputDictionaryStringListDictGetListDto,
  ResultOutputInt64,
  ResultOutputPageOutputDictGetPageOutput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Dict<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictGetGet
   * @request GET:/api/admin/dict/get
   * @secure
   */
  apiAdminDictGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputDictGetOutput, any>({
      path: `/api/admin/dict/get`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictGetPagePost
   * @request POST:/api/admin/dict/get-page
   * @secure
   */
  apiAdminDictGetPagePost = (data: PageInputDictGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputDictGetPageOutput, any>({
      path: `/api/admin/dict/get-page`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictGetListPost
   * @request POST:/api/admin/dict/get-list
   * @secure
   */
  apiAdminDictGetListPost = (data: string[], params: RequestParams = {}) =>
    this.request<ResultOutputDictionaryStringListDictGetListDto, any>({
      path: `/api/admin/dict/get-list`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictGetListByNamesPost
   * @request POST:/api/admin/dict/get-list-by-names
   * @secure
   */
  apiAdminDictGetListByNamesPost = (data: string[], params: RequestParams = {}) =>
    this.request<ResultOutputDictionaryStringListDictGetListDto, any>({
      path: `/api/admin/dict/get-list-by-names`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictAddPost
   * @request POST:/api/admin/dict/add
   * @secure
   */
  apiAdminDictAddPost = (data: DictAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/dict/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictUpdatePut
   * @request PUT:/api/admin/dict/update
   * @secure
   */
  apiAdminDictUpdatePut = (data: DictUpdateInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/dict/update`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictDeleteDelete
   * @request DELETE:/api/admin/dict/delete
   * @secure
   */
  apiAdminDictDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/dict/delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictBatchDeletePut
   * @request PUT:/api/admin/dict/batch-delete
   * @secure
   */
  apiAdminDictBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/dict/batch-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictSoftDeleteDelete
   * @request DELETE:/api/admin/dict/soft-delete
   * @secure
   */
  apiAdminDictSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/dict/soft-delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags dict
   * @name ApiAdminDictBatchSoftDeletePut
   * @request PUT:/api/admin/dict/batch-soft-delete
   * @secure
   */
  apiAdminDictBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/dict/batch-soft-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
