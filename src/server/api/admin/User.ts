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
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class UserApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags user
   * @name UserGetGet
   * @request GET:/api/admin/user/get
   * @secure
   */
  userGetGet = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputUserGetOutput>({
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
   * @name UserGetPagePost
   * @request POST:/api/admin/user/get-page
   * @secure
   */
  userGetPagePost = (data: PageInputUserGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputUserGetPageOutput>({
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
   * @name UserGetBasicGet
   * @request GET:/api/admin/user/get-basic
   * @secure
   */
  userGetBasicGet = (params: RequestParams = {}) =>
    this.request<ResultOutputUserGetBasicOutput>({
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
   * @name UserGetPermissionsGet
   * @request GET:/api/admin/user/get-permissions
   * @secure
   */
  userGetPermissionsGet = (params: RequestParams = {}) =>
    this.request<ResultOutputIListUserPermissionsOutput>({
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
   * @name UserAddPost
   * @request POST:/api/admin/user/add
   * @secure
   */
  userAddPost = (data: UserAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name UserUpdatePut
   * @request PUT:/api/admin/user/update
   * @secure
   */
  userUpdatePut = (data: UserUpdateInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name UserAddMemberPost
   * @request POST:/api/admin/user/add-member
   * @secure
   */
  userAddMemberPost = (data: UserAddMemberInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
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
   * @name UserUpdateMemberPut
   * @request PUT:/api/admin/user/update-member
   * @secure
   */
  userUpdateMemberPut = (data: UserUpdateMemberInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name UserUpdateBasicPut
   * @request PUT:/api/admin/user/update-basic
   * @secure
   */
  userUpdateBasicPut = (data: UserUpdateBasicInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name UserChangePasswordPut
   * @request PUT:/api/admin/user/change-password
   * @secure
   */
  userChangePasswordPut = (data: UserChangePasswordInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name UserResetPasswordPost
   * @request POST:/api/admin/user/reset-password
   * @secure
   */
  userResetPasswordPost = (data: UserResetPasswordInput, params: RequestParams = {}) =>
    this.request<ResultOutputString>({
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
   * @name UserSetEnablePost
   * @request POST:/api/admin/user/set-enable
   * @secure
   */
  userSetEnablePost = (data: UserSetEnableInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name UserDeleteDelete
   * @request DELETE:/api/admin/user/delete
   * @secure
   */
  userDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name UserBatchDeletePut
   * @request PUT:/api/admin/user/batch-delete
   * @secure
   */
  userBatchDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
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
   * @name UserSoftDeleteDelete
   * @request DELETE:/api/admin/user/soft-delete
   * @secure
   */
  userSoftDeleteDelete = (
    query?: {
      /** @format int64 */
      id?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<any>({
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
   * @name UserBatchSoftDeletePut
   * @request PUT:/api/admin/user/batch-soft-delete
   * @secure
   */
  userBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
    this.request<any>({
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
   * @name UserAvatarUploadPost
   * @request POST:/api/admin/user/avatar-upload
   * @secure
   */
  userAvatarUploadPost = (
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
    this.request<ResultOutputString>({
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
   * @name UserOneClickLoginGet
   * @request GET:/api/admin/user/one-click-login
   * @secure
   */
  userOneClickLoginGet = (
    query: {
      userName: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputObject>({
      path: `/api/admin/user/one-click-login`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
