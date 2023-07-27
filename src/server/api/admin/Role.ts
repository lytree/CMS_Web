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
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class RoleApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags role
   * @name RoleGetGet
   * @request GET:/api/admin/role/get
   * @secure
   */
  roleGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputRoleGetOutput>({
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
   * @name RoleGetListGet
   * @request GET:/api/admin/role/get-list
   * @secure
   */
  roleGetListGet = (
    query?: {
      Name?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListRoleGetListOutput>({
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
   * @name RoleGetPagePost
   * @request POST:/api/admin/role/get-page
   * @secure
   */
  roleGetPagePost = (data: PageInputRoleGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputRoleGetPageOutput>({
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
   * @name RoleGetRoleUserListGet
   * @request GET:/api/admin/role/get-role-user-list
   * @secure
   */
  roleGetRoleUserListGet = (
    query?: {
      Name?: string;
      /** @format int64 */
      RoleId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListRoleGetRoleUserListOutput>({
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
   * @name RoleAddRoleUserPost
   * @request POST:/api/admin/role/add-role-user
   * @secure
   */
  roleAddRoleUserPost = (data: RoleAddRoleUserListInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name RoleRemoveRoleUserPost
   * @request POST:/api/admin/role/remove-role-user
   * @secure
   */
  roleRemoveRoleUserPost = (data: RoleAddRoleUserListInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name RoleAddPost
   * @request POST:/api/admin/role/add
   * @secure
   */
  roleAddPost = (data: RoleAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name RoleUpdatePut
   * @request PUT:/api/admin/role/update
   * @secure
   */
  roleUpdatePut = (data: RoleUpdateInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name RoleDeleteDelete
   * @request DELETE:/api/admin/role/delete
   * @secure
   */
  roleDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name RoleBatchDeletePut
   * @request PUT:/api/admin/role/batch-delete
   * @secure
   */
  roleBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
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
   * @name RoleSoftDeleteDelete
   * @request DELETE:/api/admin/role/soft-delete
   * @secure
   */
  roleSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name RoleBatchSoftDeletePut
   * @request PUT:/api/admin/role/batch-soft-delete
   * @secure
   */
  roleBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
      path: `/api/admin/role/batch-soft-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
