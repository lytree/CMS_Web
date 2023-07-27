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
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class LoginLogApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags login-log
   * @name LoginLogGetPagePost
   * @request POST:/api/admin/login-log/get-page
   * @secure
   */
  loginLogGetPagePost = (data: PageInputLogGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputLoginLogListOutput>({
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
   * @name LoginLogAddPost
   * @request POST:/api/admin/login-log/add
   * @secure
   */
  loginLogAddPost = (data: LoginLogAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
      path: `/api/admin/login-log/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
