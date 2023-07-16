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
  ResultOutputInt64,
  ResultOutputListViewListOutput,
  ResultOutputViewGetOutput,
  ViewAddInput,
  ViewSyncInput,
  ViewUpdateInput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class View<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags view
   * @name ApiAdminViewGetGet
   * @request GET:/api/admin/view/get
   * @secure
   */
  apiAdminViewGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputViewGetOutput, any>({
      path: `/api/admin/view/get`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags view
   * @name ApiAdminViewGetListGet
   * @request GET:/api/admin/view/get-list
   * @secure
   */
  apiAdminViewGetListGet = (
    query?: {
      key?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListViewListOutput, any>({
      path: `/api/admin/view/get-list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags view
   * @name ApiAdminViewAddPost
   * @request POST:/api/admin/view/add
   * @secure
   */
  apiAdminViewAddPost = (data: ViewAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/view/add`,
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
   * @tags view
   * @name ApiAdminViewUpdatePut
   * @request PUT:/api/admin/view/update
   * @secure
   */
  apiAdminViewUpdatePut = (data: ViewUpdateInput, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/view/update`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags view
   * @name ApiAdminViewDeleteDelete
   * @request DELETE:/api/admin/view/delete
   * @secure
   */
  apiAdminViewDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/view/delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags view
   * @name ApiAdminViewBatchDeletePut
   * @request PUT:/api/admin/view/batch-delete
   * @secure
   */
  apiAdminViewBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/view/batch-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags view
   * @name ApiAdminViewSoftDeleteDelete
   * @request DELETE:/api/admin/view/soft-delete
   * @secure
   */
  apiAdminViewSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/view/soft-delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags view
   * @name ApiAdminViewBatchSoftDeletePut
   * @request PUT:/api/admin/view/batch-soft-delete
   * @secure
   */
  apiAdminViewBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/view/batch-soft-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags view
   * @name ApiAdminViewSyncPost
   * @request POST:/api/admin/view/sync
   * @secure
   */
  apiAdminViewSyncPost = (data: ViewSyncInput, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/view/sync`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
