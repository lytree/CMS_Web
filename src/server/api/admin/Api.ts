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
  ApiAddInput,
  ApiSyncInput,
  ApiUpdateInput,
  PageInputApiGetPageDto,
  ResultOutputApiGetOutput,
  ResultOutputInt64,
  ResultOutputListApiListOutput,
  ResultOutputPageOutputApiEntity,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class ApiApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags api
   * @name ApiGetGet
   * @request GET:/api/admin/api/get
   * @secure
   */
  apiGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputApiGetOutput>({
      path: `/api/admin/api/get`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags api
   * @name ApiGetListGet
   * @request GET:/api/admin/api/get-list
   * @secure
   */
  apiGetListGet = (
    query?: {
      key?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListApiListOutput>({
      path: `/api/admin/api/get-list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags api
   * @name ApiGetPagePost
   * @request POST:/api/admin/api/get-page
   * @secure
   */
  apiGetPagePost = (data: PageInputApiGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputApiEntity>({
      path: `/api/admin/api/get-page`,
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
   * @tags api
   * @name ApiAddPost
   * @request POST:/api/admin/api/add
   * @secure
   */
  apiAddPost = (data: ApiAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
      path: `/api/admin/api/add`,
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
   * @tags api
   * @name ApiUpdatePut
   * @request PUT:/api/admin/api/update
   * @secure
   */
  apiUpdatePut = (data: ApiUpdateInput, params: RequestParams = {}) =>
    this.request<any>({
      path: `/api/admin/api/update`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags api
   * @name ApiDeleteDelete
   * @request DELETE:/api/admin/api/delete
   * @secure
   */
  apiDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
      path: `/api/admin/api/delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags api
   * @name ApiBatchDeletePut
   * @request PUT:/api/admin/api/batch-delete
   * @secure
   */
  apiBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
      path: `/api/admin/api/batch-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags api
   * @name ApiSoftDeleteDelete
   * @request DELETE:/api/admin/api/soft-delete
   * @secure
   */
  apiSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
      path: `/api/admin/api/soft-delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags api
   * @name ApiBatchSoftDeletePut
   * @request PUT:/api/admin/api/batch-soft-delete
   * @secure
   */
  apiBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
      path: `/api/admin/api/batch-soft-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags api
   * @name ApiSyncPost
   * @request POST:/api/admin/api/sync
   * @secure
   */
  apiSyncPost = (data: ApiSyncInput, params: RequestParams = {}) =>
    this.request<any>({
      path: `/api/admin/api/sync`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
