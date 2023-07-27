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
  OprationLogAddInput,
  PageInputLogGetPageDto,
  ResultOutputInt64,
  ResultOutputPageOutputOprationLogListOutput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class OprationLogApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags opration-log
   * @name OprationLogGetPagePost
   * @request POST:/api/admin/opration-log/get-page
   * @secure
   */
  oprationLogGetPagePost = (data: PageInputLogGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputOprationLogListOutput>({
      path: `/api/admin/opration-log/get-page`,
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
   * @tags opration-log
   * @name OprationLogAddPost
   * @request POST:/api/admin/opration-log/add
   * @secure
   */
  oprationLogAddPost = (data: OprationLogAddInput, params: RequestParams = {}) =>
    this.request<ResultOutputInt64>({
      path: `/api/admin/opration-log/add`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
