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
  AuthLoginInput,
  AuthMobileLoginInput,
  ResultOutputAuthGetPasswordEncryptKeyOutput,
  ResultOutputAuthGetUserInfoOutput,
  ResultOutputAuthGetUserPermissionsOutput,
  ResultOutputAuthUserProfileDto,
  ResultOutputBoolean,
  ResultOutputListAuthUserMenuDto,
  ResultOutputObject,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags auth
   * @name ApiAdminAuthGetPasswordEncryptKeyGet
   * @request GET:/api/admin/auth/get-password-encrypt-key
   * @secure
   */
  apiAdminAuthGetPasswordEncryptKeyGet = (params: RequestParams = {}) =>
    this.request<ResultOutputAuthGetPasswordEncryptKeyOutput, any>({
      path: `/api/admin/auth/get-password-encrypt-key`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAdminAuthGetUserProfileGet
   * @request GET:/api/admin/auth/get-user-profile
   * @secure
   */
  apiAdminAuthGetUserProfileGet = (params: RequestParams = {}) =>
    this.request<ResultOutputAuthUserProfileDto, any>({
      path: `/api/admin/auth/get-user-profile`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAdminAuthGetUserMenusGet
   * @request GET:/api/admin/auth/get-user-menus
   * @secure
   */
  apiAdminAuthGetUserMenusGet = (params: RequestParams = {}) =>
    this.request<ResultOutputListAuthUserMenuDto, any>({
      path: `/api/admin/auth/get-user-menus`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAdminAuthGetUserPermissionsGet
   * @request GET:/api/admin/auth/get-user-permissions
   * @secure
   */
  apiAdminAuthGetUserPermissionsGet = (params: RequestParams = {}) =>
    this.request<ResultOutputAuthGetUserPermissionsOutput, any>({
      path: `/api/admin/auth/get-user-permissions`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAdminAuthGetUserInfoGet
   * @request GET:/api/admin/auth/get-user-info
   * @secure
   */
  apiAdminAuthGetUserInfoGet = (params: RequestParams = {}) =>
    this.request<ResultOutputAuthGetUserInfoOutput, any>({
      path: `/api/admin/auth/get-user-info`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAdminAuthLoginPost
   * @request POST:/api/admin/auth/login
   * @secure
   */
  apiAdminAuthLoginPost = (data: AuthLoginInput, params: RequestParams = {}) =>
    this.request<ResultOutputObject, any>({
      path: `/api/admin/auth/login`,
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
   * @tags auth
   * @name ApiAdminAuthMobileLoginPost
   * @request POST:/api/admin/auth/mobile-login
   * @secure
   */
  apiAdminAuthMobileLoginPost = (data: AuthMobileLoginInput, params: RequestParams = {}) =>
    this.request<ResultOutputObject, any>({
      path: `/api/admin/auth/mobile-login`,
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
   * @tags auth
   * @name ApiAdminAuthRefreshGet
   * @request GET:/api/admin/auth/refresh
   * @secure
   */
  apiAdminAuthRefreshGet = (
    query: {
      token: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputObject, any>({
      path: `/api/admin/auth/refresh`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags auth
   * @name ApiAdminAuthIsCaptchaGet
   * @request GET:/api/admin/auth/is-captcha
   * @secure
   */
  apiAdminAuthIsCaptchaGet = (params: RequestParams = {}) =>
    this.request<ResultOutputBoolean, any>({
      path: `/api/admin/auth/is-captcha`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
