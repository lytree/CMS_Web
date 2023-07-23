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
  PermissionAddApiInput,
  PermissionAddDotInput,
  PermissionAddGroupInput,
  PermissionAddMenuInput,
  PermissionAssignInput,
  PermissionUpdateApiInput,
  PermissionUpdateDotInput,
  PermissionUpdateGroupInput,
  PermissionUpdateMenuInput,
  ResultOutputIEnumerableObject,
  ResultOutputInt64,
  ResultOutputListInt64,
  ResultOutputListPermissionListOutput,
  ResultOutputPermissionGetApiOutput,
  ResultOutputPermissionGetDotOutput,
  ResultOutputPermissionGetGroupOutput,
  ResultOutputPermissionGetMenuOutput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Permission<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionGetGroupGet
   * @request GET:/api/admin/permission/get-group
   * @secure
   */
  apiAdminPermissionGetGroupGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputPermissionGetGroupOutput, any>({
      path: `/api/admin/permission/get-group`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionGetMenuGet
   * @request GET:/api/admin/permission/get-menu
   * @secure
   */
  apiAdminPermissionGetMenuGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputPermissionGetMenuOutput, any>({
      path: `/api/admin/permission/get-menu`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionGetApiGet
   * @request GET:/api/admin/permission/get-api
   * @secure
   */
  apiAdminPermissionGetApiGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputPermissionGetApiOutput, any>({
      path: `/api/admin/permission/get-api`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionGetDotGet
   * @request GET:/api/admin/permission/get-dot
   * @secure
   */
  apiAdminPermissionGetDotGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputPermissionGetDotOutput, any>({
      path: `/api/admin/permission/get-dot`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionGetListGet
   * @request GET:/api/admin/permission/get-list
   * @secure
   */
  apiAdminPermissionGetListGet = (
    query?: {
      key?: string;
      /** @format date-time */
      start?: string;
      /** @format date-time */
      end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListPermissionListOutput, any>({
      path: `/api/admin/permission/get-list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionGetPermissionListGet
   * @request GET:/api/admin/permission/get-permission-list
   * @secure
   */
  apiAdminPermissionGetPermissionListGet = (params: RequestParams = {}) =>
    this.request<ResultOutputIEnumerableObject, any>({
      path: `/api/admin/permission/get-permission-list`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionGetRolePermissionListGet
   * @request GET:/api/admin/permission/get-role-permission-list
   * @secure
   */
  apiAdminPermissionGetRolePermissionListGet = (
    query?: {
      /**
       * @format int64
       * @default 0
       */
      roleId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListInt64, any>({
      path: `/api/admin/permission/get-role-permission-list`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionAddGroupPost
   * @request POST:/api/admin/permission/add-group
   * @secure
   */
  apiAdminPermissionAddGroupPost = (data: PermissionAddGroupInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/permission/add-group`,
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
   * @tags permission
   * @name ApiAdminPermissionAddMenuPost
   * @request POST:/api/admin/permission/add-menu
   * @secure
   */
  apiAdminPermissionAddMenuPost = (data: PermissionAddMenuInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/permission/add-menu`,
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
   * @tags permission
   * @name ApiAdminPermissionAddApiPost
   * @request POST:/api/admin/permission/add-api
   * @secure
   */
  apiAdminPermissionAddApiPost = (data: PermissionAddApiInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/permission/add-api`,
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
   * @tags permission
   * @name ApiAdminPermissionAddDotPost
   * @request POST:/api/admin/permission/add-dot
   * @secure
   */
  apiAdminPermissionAddDotPost = (data: PermissionAddDotInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/permission/add-dot`,
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
   * @tags permission
   * @name ApiAdminPermissionUpdateGroupPut
   * @request PUT:/api/admin/permission/update-group
   * @secure
   */
  apiAdminPermissionUpdateGroupPut = (data: PermissionUpdateGroupInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/permission/update-group`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionUpdateMenuPut
   * @request PUT:/api/admin/permission/update-menu
   * @secure
   */
  apiAdminPermissionUpdateMenuPut = (data: PermissionUpdateMenuInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/permission/update-menu`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionUpdateApiPut
   * @request PUT:/api/admin/permission/update-api
   * @secure
   */
  apiAdminPermissionUpdateApiPut = (data: PermissionUpdateApiInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/permission/update-api`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionUpdateDotPut
   * @request PUT:/api/admin/permission/update-dot
   * @secure
   */
  apiAdminPermissionUpdateDotPut = (data: PermissionUpdateDotInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/permission/update-dot`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionDeleteDelete
   * @request DELETE:/api/admin/permission/delete
   * @secure
   */
  apiAdminPermissionDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/permission/delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionSoftDeleteDelete
   * @request DELETE:/api/admin/permission/soft-delete
   * @secure
   */
  apiAdminPermissionSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/permission/soft-delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags permission
   * @name ApiAdminPermissionAssignPost
   * @request POST:/api/admin/permission/assign
   * @secure
   */
  apiAdminPermissionAssignPost = (data: PermissionAssignInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/permission/assign`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
