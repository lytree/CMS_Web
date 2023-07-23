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
  PageInputUserGetPageDto,
  ResultOutputIListUserPermissionsOutput,
  ResultOutputInt64,
  ResultOutputObject,
  ResultOutputPageOutputUserGetPageOutput,
  ResultOutputString,
  ResultOutputUserGetBasicOutput,
  ResultOutputUserGetOutput,
  UserAddInput,
  UserAddMemberInput,
  UserChangePasswordInput,
  UserResetPasswordInput,
  UserSetEnableInput,
  UserUpdateBasicInput,
  UserUpdateInput,
  UserUpdateMemberInput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserGetGet
   * @request GET:/api/admin/user/get
   * @secure
   */
  apiAdminUserGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputUserGetOutput, any>({
      path: `/api/admin/user/get`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserGetPagePost
   * @request POST:/api/admin/user/get-page
   * @secure
   */
  apiAdminUserGetPagePost = (data: PageInputUserGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputUserGetPageOutput, any>({
      path: `/api/admin/user/get-page`,
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
   * @tags user
   * @name ApiAdminUserGetBasicGet
   * @request GET:/api/admin/user/get-basic
   * @secure
   */
  apiAdminUserGetBasicGet = (params: RequestParams = {}) =>
    this.request<ResultOutputUserGetBasicOutput, any>({
      path: `/api/admin/user/get-basic`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserGetPermissionsGet
   * @request GET:/api/admin/user/get-permissions
   * @secure
   */
  apiAdminUserGetPermissionsGet = (params: RequestParams = {}) =>
    this.request<ResultOutputIListUserPermissionsOutput, any>({
      path: `/api/admin/user/get-permissions`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserAddPost
   * @request POST:/api/admin/user/add
   * @secure
   */
  apiAdminUserAddPost = (data: UserAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/user/add`,
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
   * @tags user
   * @name ApiAdminUserUpdatePut
   * @request PUT:/api/admin/user/update
   * @secure
   */
  apiAdminUserUpdatePut = (data: UserUpdateInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/user/update`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserAddMemberPost
   * @request POST:/api/admin/user/add-member
   * @secure
   */
  apiAdminUserAddMemberPost = (data: UserAddMemberInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/user/add-member`,
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
   * @tags user
   * @name ApiAdminUserUpdateMemberPut
   * @request PUT:/api/admin/user/update-member
   * @secure
   */
  apiAdminUserUpdateMemberPut = (data: UserUpdateMemberInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/user/update-member`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserUpdateBasicPut
   * @request PUT:/api/admin/user/update-basic
   * @secure
   */
  apiAdminUserUpdateBasicPut = (data: UserUpdateBasicInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/user/update-basic`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserChangePasswordPut
   * @request PUT:/api/admin/user/change-password
   * @secure
   */
  apiAdminUserChangePasswordPut = (data: UserChangePasswordInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/user/change-password`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserResetPasswordPost
   * @request POST:/api/admin/user/reset-password
   * @secure
   */
  apiAdminUserResetPasswordPost = (data: UserResetPasswordInput, params: RequestParams = {}) =>
    this.request<ResultOutputString, any>({
      path: `/api/admin/user/reset-password`,
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
   * @tags user
   * @name ApiAdminUserSetEnablePost
   * @request POST:/api/admin/user/set-enable
   * @secure
   */
  apiAdminUserSetEnablePost = (data: UserSetEnableInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/user/set-enable`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserDeleteDelete
   * @request DELETE:/api/admin/user/delete
   * @secure
   */
  apiAdminUserDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/user/delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserBatchDeletePut
   * @request PUT:/api/admin/user/batch-delete
   * @secure
   */
  apiAdminUserBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/user/batch-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserSoftDeleteDelete
   * @request DELETE:/api/admin/user/soft-delete
   * @secure
   */
  apiAdminUserSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/user/soft-delete`,
      method: "DELETE",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserBatchSoftDeletePut
   * @request PUT:/api/admin/user/batch-soft-delete
   * @secure
   */
  apiAdminUserBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/user/batch-soft-delete`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserAvatarUploadPost
   * @request POST:/api/admin/user/avatar-upload
   * @secure
   */
  apiAdminUserAvatarUploadPost = (
    data: {
      ContentType?: string;
      ContentDisposition?: string;
      Headers?: Record<string, string[]>;
      /** @format int64 */
      Length?: number;
      Name?: string;
      FileName?: string;
    },
    query?: {
      /** @default false */
      autoUpdate?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputString, any>({
      path: `/api/admin/user/avatar-upload`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name ApiAdminUserOneClickLoginGet
   * @request GET:/api/admin/user/one-click-login
   * @secure
   */
  apiAdminUserOneClickLoginGet = (
    query: {
      userName: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputObject, any>({
      path: `/api/admin/user/one-click-login`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
