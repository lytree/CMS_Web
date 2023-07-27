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
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class DictApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags dict
   * @name DictGetGet
   * @request GET:/api/admin/dict/get
   * @secure
   */
  dictGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputDictGetOutput>({
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
   * @name DictGetPagePost
   * @request POST:/api/admin/dict/get-page
   * @secure
   */
  dictGetPagePost = (data: PageInputDictGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputDictGetPageOutput>({
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
   * @name DictGetListPost
   * @request POST:/api/admin/dict/get-list
   * @secure
   */
  dictGetListPost = (data: string[], params: RequestParams = {}) =>
    this.request<ResultOutputDictionaryStringListDictGetListDto>({
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
   * @name DictGetListByNamesPost
   * @request POST:/api/admin/dict/get-list-by-names
   * @secure
   */
  dictGetListByNamesPost = (data: string[], params: RequestParams = {}) =>
    this.request<ResultOutputDictionaryStringListDictGetListDto>({
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
   * @name DictAddPost
   * @request POST:/api/admin/dict/add
   * @secure
   */
  dictAddPost = (data: DictAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name DictUpdatePut
   * @request PUT:/api/admin/dict/update
   * @secure
   */
  dictUpdatePut = (data: DictUpdateInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name DictDeleteDelete
   * @request DELETE:/api/admin/dict/delete
   * @secure
   */
  dictDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name DictBatchDeletePut
   * @request PUT:/api/admin/dict/batch-delete
   * @secure
   */
  dictBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
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
   * @name DictSoftDeleteDelete
   * @request DELETE:/api/admin/dict/soft-delete
   * @secure
   */
  dictSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name DictBatchSoftDeletePut
   * @request PUT:/api/admin/dict/batch-soft-delete
   * @secure
   */
  dictBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
      path: `/api/admin/dict/batch-soft-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
