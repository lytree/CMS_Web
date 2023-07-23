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
  FileDeleteInput,
  PageInputFileGetPageDto,
  ResultOutputFileEntity,
  ResultOutputListFileEntity,
  ResultOutputPageOutputFileGetPageOutput,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class File<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags file
   * @name ApiAdminFileGetPagePost
   * @request POST:/api/admin/file/get-page
   * @secure
   */
  apiAdminFileGetPagePost = (data: PageInputFileGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputFileGetPageOutput, any>({
      path: `/api/admin/file/get-page`,
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
   * @tags file
   * @name ApiAdminFileDeletePost
   * @request POST:/api/admin/file/delete
   * @secure
   */
  apiAdminFileDeletePost = (data: FileDeleteInput, params: RequestParams = {}) =>
    this.request<FetchResponse, any>({
      path: `/api/admin/file/delete`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags file
   * @name ApiAdminFileUploadFilePost
   * @request POST:/api/admin/file/upload-file
   * @secure
   */
  apiAdminFileUploadFilePost = (
    data: {
      /** @format binary */
      file: File;
    },
    query?: {
      /** @default "" */
      fileDirectory?: string;
      /** @default true */
      fileReName?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputFileEntity, any>({
      path: `/api/admin/file/upload-file`,
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
   * @tags file
   * @name ApiAdminFileUploadFilesPost
   * @request POST:/api/admin/file/upload-files
   * @secure
   */
  apiAdminFileUploadFilesPost = (
    data: {
      files: File[];
    },
    query?: {
      /** @default "" */
      fileDirectory?: string;
      /** @default true */
      fileReName?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputListFileEntity, any>({
      path: `/api/admin/file/upload-files`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
}
