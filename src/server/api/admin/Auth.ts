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
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class AuthApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags auth
   * @name AuthGetPasswordEncryptKeyGet
   * @request GET:/api/admin/auth/get-password-encrypt-key
   * @secure
   */
  authGetPasswordEncryptKeyGet = (params: RequestParams = {}) =>
    this.request<ResultOutputAuthGetPasswordEncryptKeyOutput>({
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
   * @name AuthGetUserProfileGet
   * @request GET:/api/admin/auth/get-user-profile
   * @secure
   */
  authGetUserProfileGet = (params: RequestParams = {}) =>
    this.request<ResultOutputAuthUserProfileDto>({
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
   * @name AuthGetUserMenusGet
   * @request GET:/api/admin/auth/get-user-menus
   * @secure
   */
  authGetUserMenusGet = (params: RequestParams = {}) =>
    this.request<ResultOutputListAuthUserMenuDto>({
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
   * @name AuthGetUserPermissionsGet
   * @request GET:/api/admin/auth/get-user-permissions
   * @secure
   */
  authGetUserPermissionsGet = (params: RequestParams = {}) =>
    this.request<ResultOutputAuthGetUserPermissionsOutput>({
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
   * @name AuthGetUserInfoGet
   * @request GET:/api/admin/auth/get-user-info
   * @secure
   */
  authGetUserInfoGet = (params: RequestParams = {}) =>
    this.request<ResultOutputAuthGetUserInfoOutput>({
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
   * @name AuthLoginPost
   * @request POST:/api/admin/auth/login
   * @secure
   */
  authLoginPost = (data: AuthLoginInput, params: RequestParams = {}) =>
    this.request<ResultOutputObject>({
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
   * @name AuthMobileLoginPost
   * @request POST:/api/admin/auth/mobile-login
   * @secure
   */
  authMobileLoginPost = (data: AuthMobileLoginInput, params: RequestParams = {}) =>
    this.request<ResultOutputObject>({
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
   * @name AuthRefreshGet
   * @request GET:/api/admin/auth/refresh
   * @secure
   */
  authRefreshGet = (
    query: {
      token: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputObject>({
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
   * @name AuthIsCaptchaGet
   * @request GET:/api/admin/auth/is-captcha
   * @secure
   */
  authIsCaptchaGet = (params: RequestParams = {}) =>
    this.request<ResultOutputBoolean>({
      path: `/api/admin/auth/is-captcha`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
