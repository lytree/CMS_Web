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
  DictTypeAddInput,
  DictTypeUpdateInput,
  PageInputDictTypeGetPageDto,
  ResultOutputDictTypeGetOutput,
  ResultOutputInt64,
  ResultOutputPageOutputDictTypeGetPageOutput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class DictType<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags dict-type
   * @name ApiAdminDictTypeGetGet
   * @request GET:/api/admin/dict-type/get
   * @secure
   */
  apiAdminDictTypeGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputDictTypeGetOutput, any>({
      path: `/api/admin/dict-type/get`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags dict-type
   * @name ApiAdminDictTypeGetPagePost
   * @request POST:/api/admin/dict-type/get-page
   * @secure
   */
  apiAdminDictTypeGetPagePost = (data: PageInputDictTypeGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputDictTypeGetPageOutput, any>({
      path: `/api/admin/dict-type/get-page`,
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
   * @tags dict-type
   * @name ApiAdminDictTypeAddPost
   * @request POST:/api/admin/dict-type/add
   * @secure
   */
  apiAdminDictTypeAddPost = (data: DictTypeAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/dict-type/add`,
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
   * @tags dict-type
   * @name ApiAdminDictTypeUpdatePut
   * @request PUT:/api/admin/dict-type/update
   * @secure
   */
  apiAdminDictTypeUpdatePut = (data: DictTypeUpdateInput, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/dict-type/update`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags dict-type
   * @name ApiAdminDictTypeDeleteDelete
   * @request DELETE:/api/admin/dict-type/delete
   * @secure
   */
  apiAdminDictTypeDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/dict-type/delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags dict-type
   * @name ApiAdminDictTypeBatchDeletePut
   * @request PUT:/api/admin/dict-type/batch-delete
   * @secure
   */
  apiAdminDictTypeBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/dict-type/batch-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags dict-type
   * @name ApiAdminDictTypeSoftDeleteDelete
   * @request DELETE:/api/admin/dict-type/soft-delete
   * @secure
   */
  apiAdminDictTypeSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/dict-type/soft-delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags dict-type
   * @name ApiAdminDictTypeBatchSoftDeletePut
   * @request PUT:/api/admin/dict-type/batch-soft-delete
   * @secure
   */
  apiAdminDictTypeBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/dict-type/batch-soft-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
