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
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class ViewApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags view
   * @name ViewGetGet
   * @request GET:/api/admin/view/get
   * @secure
   */
  viewGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputViewGetOutput>({
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
   * @name ViewGetListGet
   * @request GET:/api/admin/view/get-list
   * @secure
   */
  viewGetListGet = (
    query?: {
      key?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListViewListOutput>({
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
   * @name ViewAddPost
   * @request POST:/api/admin/view/add
   * @secure
   */
  viewAddPost = (data: ViewAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name ViewUpdatePut
   * @request PUT:/api/admin/view/update
   * @secure
   */
  viewUpdatePut = (data: ViewUpdateInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name ViewDeleteDelete
   * @request DELETE:/api/admin/view/delete
   * @secure
   */
  viewDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name ViewBatchDeletePut
   * @request PUT:/api/admin/view/batch-delete
   * @secure
   */
  viewBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
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
   * @name ViewSoftDeleteDelete
   * @request DELETE:/api/admin/view/soft-delete
   * @secure
   */
  viewSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name ViewBatchSoftDeletePut
   * @request PUT:/api/admin/view/batch-soft-delete
   * @secure
   */
  viewBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
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
   * @name ViewSyncPost
   * @request POST:/api/admin/view/sync
   * @secure
   */
  viewSyncPost = (data: ViewSyncInput, params: RequestParams = {}) =>
    this.request<any>({
      path: `/api/admin/view/sync`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
