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
  PageInputRoleGetPageDto,
  ResultOutputInt64,
  ResultOutputListRoleGetListOutput,
  ResultOutputListRoleGetRoleUserListOutput,
  ResultOutputPageOutputRoleGetPageOutput,
  ResultOutputRoleGetOutput,
  RoleAddInput,
  RoleAddRoleUserListInput,
  RoleUpdateInput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Role<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleGetGet
   * @request GET:/api/admin/role/get
   * @secure
   */
  apiAdminRoleGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputRoleGetOutput, any>({
      path: `/api/admin/role/get`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleGetListGet
   * @request GET:/api/admin/role/get-list
   * @secure
   */
  apiAdminRoleGetListGet = (
    query?: {
      Name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListRoleGetListOutput, any>({
      path: `/api/admin/role/get-list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleGetPagePost
   * @request POST:/api/admin/role/get-page
   * @secure
   */
  apiAdminRoleGetPagePost = (data: PageInputRoleGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputRoleGetPageOutput, any>({
      path: `/api/admin/role/get-page`,
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
   * @tags role
   * @name ApiAdminRoleGetRoleUserListGet
   * @request GET:/api/admin/role/get-role-user-list
   * @secure
   */
  apiAdminRoleGetRoleUserListGet = (
    query?: {
      Name?: string;
      /** @format int64 */
      RoleId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListRoleGetRoleUserListOutput, any>({
      path: `/api/admin/role/get-role-user-list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleAddRoleUserPost
   * @request POST:/api/admin/role/add-role-user
   * @secure
   */
  apiAdminRoleAddRoleUserPost = (data: RoleAddRoleUserListInput, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/role/add-role-user`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleRemoveRoleUserPost
   * @request POST:/api/admin/role/remove-role-user
   * @secure
   */
  apiAdminRoleRemoveRoleUserPost = (data: RoleAddRoleUserListInput, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/role/remove-role-user`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleAddPost
   * @request POST:/api/admin/role/add
   * @secure
   */
  apiAdminRoleAddPost = (data: RoleAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/role/add`,
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
   * @tags role
   * @name ApiAdminRoleUpdatePut
   * @request PUT:/api/admin/role/update
   * @secure
   */
  apiAdminRoleUpdatePut = (data: RoleUpdateInput, params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/role/update`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleDeleteDelete
   * @request DELETE:/api/admin/role/delete
   * @secure
   */
  apiAdminRoleDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/role/delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleBatchDeletePut
   * @request PUT:/api/admin/role/batch-delete
   * @secure
   */
  apiAdminRoleBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/role/batch-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleSoftDeleteDelete
   * @request DELETE:/api/admin/role/soft-delete
   * @secure
   */
  apiAdminRoleSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/role/soft-delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags role
   * @name ApiAdminRoleBatchSoftDeletePut
   * @request PUT:/api/admin/role/batch-soft-delete
   * @secure
   */
  apiAdminRoleBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<AxiosResponse, any>({
      path: `/api/admin/role/batch-soft-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
