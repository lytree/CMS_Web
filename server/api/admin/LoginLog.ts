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
  LoginLogAddInput,
  PageInputLogGetPageDto,
  ResultOutputInt64,
  ResultOutputPageOutputLoginLogListOutput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class LoginLog<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags login-log
   * @name ApiAdminLoginLogGetPagePost
   * @request POST:/api/admin/login-log/get-page
   * @secure
   */
  apiAdminLoginLogGetPagePost = (data: PageInputLogGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputLoginLogListOutput, any>({
      path: `/api/admin/login-log/get-page`,
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
   * @tags login-log
   * @name ApiAdminLoginLogAddPost
   * @request POST:/api/admin/login-log/add
   * @secure
   */
  apiAdminLoginLogAddPost = (data: LoginLogAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64, any>({
      path: `/api/admin/login-log/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
