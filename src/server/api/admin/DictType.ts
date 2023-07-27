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
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class DictTypeApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags dict-type
   * @name DictTypeGetGet
   * @request GET:/api/admin/dict-type/get
   * @secure
   */
  dictTypeGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputDictTypeGetOutput>({
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
   * @name DictTypeGetPagePost
   * @request POST:/api/admin/dict-type/get-page
   * @secure
   */
  dictTypeGetPagePost = (data: PageInputDictTypeGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputDictTypeGetPageOutput>({
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
   * @name DictTypeAddPost
   * @request POST:/api/admin/dict-type/add
   * @secure
   */
  dictTypeAddPost = (data: DictTypeAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name DictTypeUpdatePut
   * @request PUT:/api/admin/dict-type/update
   * @secure
   */
  dictTypeUpdatePut = (data: DictTypeUpdateInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name DictTypeDeleteDelete
   * @request DELETE:/api/admin/dict-type/delete
   * @secure
   */
  dictTypeDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name DictTypeBatchDeletePut
   * @request PUT:/api/admin/dict-type/batch-delete
   * @secure
   */
  dictTypeBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
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
   * @name DictTypeSoftDeleteDelete
   * @request DELETE:/api/admin/dict-type/soft-delete
   * @secure
   */
  dictTypeSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name DictTypeBatchSoftDeletePut
   * @request PUT:/api/admin/dict-type/batch-soft-delete
   * @secure
   */
  dictTypeBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
      path: `/api/admin/dict-type/batch-soft-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
