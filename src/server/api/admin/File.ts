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
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class FileApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags file
   * @name FileGetPagePost
   * @request POST:/api/admin/file/get-page
   * @secure
   */
  fileGetPagePost = (data: PageInputFileGetPageDto, params: RequestParams = {}) =>
    this.request<ResultOutputPageOutputFileGetPageOutput>({
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
   * @name FileDeletePost
   * @request POST:/api/admin/file/delete
   * @secure
   */
  fileDeletePost = (data: FileDeleteInput, params: RequestParams = {}) =>
    this.request<any>({
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
   * @name FileUploadFilePost
   * @request POST:/api/admin/file/upload-file
   * @secure
   */
  fileUploadFilePost = (
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
    this.request<ResultOutputFileEntity>({
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
   * @name FileUploadFilesPost
   * @request POST:/api/admin/file/upload-files
   * @secure
   */
  fileUploadFilesPost = (
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
    this.request<ResultOutputListFileEntity>({
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
