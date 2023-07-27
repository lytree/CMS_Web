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
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class PermissionApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags permission
   * @name PermissionGetGroupGet
   * @request GET:/api/admin/permission/get-group
   * @secure
   */
  permissionGetGroupGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputPermissionGetGroupOutput>({
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
   * @name PermissionGetMenuGet
   * @request GET:/api/admin/permission/get-menu
   * @secure
   */
  permissionGetMenuGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputPermissionGetMenuOutput>({
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
   * @name PermissionGetApiGet
   * @request GET:/api/admin/permission/get-api
   * @secure
   */
  permissionGetApiGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputPermissionGetApiOutput>({
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
   * @name PermissionGetDotGet
   * @request GET:/api/admin/permission/get-dot
   * @secure
   */
  permissionGetDotGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputPermissionGetDotOutput>({
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
   * @name PermissionGetListGet
   * @request GET:/api/admin/permission/get-list
   * @secure
   */
  permissionGetListGet = (
    query?: {
      key?: string;
      /** @format date-time */
      start?: string;
      /** @format date-time */
      end?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListPermissionListOutput>({
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
   * @name PermissionGetPermissionListGet
   * @request GET:/api/admin/permission/get-permission-list
   * @secure
   */
  permissionGetPermissionListGet = (params: RequestParams = {}) =>
    this.request<ResultOutputIEnumerableObject>({
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
   * @name PermissionGetRolePermissionListGet
   * @request GET:/api/admin/permission/get-role-permission-list
   * @secure
   */
  permissionGetRolePermissionListGet = (
    query?: {
      /**
       * @format int64
       * @default 0
       */
      roleId?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListInt64>({
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
   * @name PermissionAddGroupPost
   * @request POST:/api/admin/permission/add-group
   * @secure
   */
  permissionAddGroupPost = (data: PermissionAddGroupInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name PermissionAddMenuPost
   * @request POST:/api/admin/permission/add-menu
   * @secure
   */
  permissionAddMenuPost = (data: PermissionAddMenuInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name PermissionAddApiPost
   * @request POST:/api/admin/permission/add-api
   * @secure
   */
  permissionAddApiPost = (data: PermissionAddApiInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name PermissionAddDotPost
   * @request POST:/api/admin/permission/add-dot
   * @secure
   */
  permissionAddDotPost = (data: PermissionAddDotInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name PermissionUpdateGroupPut
   * @request PUT:/api/admin/permission/update-group
   * @secure
   */
  permissionUpdateGroupPut = (data: PermissionUpdateGroupInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name PermissionUpdateMenuPut
   * @request PUT:/api/admin/permission/update-menu
   * @secure
   */
  permissionUpdateMenuPut = (data: PermissionUpdateMenuInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name PermissionUpdateApiPut
   * @request PUT:/api/admin/permission/update-api
   * @secure
   */
  permissionUpdateApiPut = (data: PermissionUpdateApiInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name PermissionUpdateDotPut
   * @request PUT:/api/admin/permission/update-dot
   * @secure
   */
  permissionUpdateDotPut = (data: PermissionUpdateDotInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name PermissionDeleteDelete
   * @request DELETE:/api/admin/permission/delete
   * @secure
   */
  permissionDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name PermissionSoftDeleteDelete
   * @request DELETE:/api/admin/permission/soft-delete
   * @secure
   */
  permissionSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name PermissionAssignPost
   * @request POST:/api/admin/permission/assign
   * @secure
   */
  permissionAssignPost = (data: PermissionAssignInput, params: RequestParams = {}) =>
    this.request<any>({
      path: `/api/admin/permission/assign`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
}
