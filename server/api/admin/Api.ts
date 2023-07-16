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
    ApiAddInput,
    ApiSyncInput,
    ApiUpdateInput,
    PageInputApiGetPageDto,
    ResultOutputApiGetOutput,
    ResultOutputInt64,
    ResultOutputListApiListOutput,
    ResultOutputPageOutputApiEntity,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags api
     * @name ApiAdminApiGetGet
     * @request GET:/api/admin/api/get
     * @secure
     */
    apiAdminApiGetGet = (
        query?: {
            /** @format int64 */
            id?: number;
        },
        params: RequestParams = {},
    ) =>
        this.request<ResultOutputApiGetOutput, any>({
            path: `/api/admin/api/get`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
    /**
     * No description
     *
     * @tags api
     * @name ApiAdminApiGetListGet
     * @request GET:/api/admin/api/get-list
     * @secure
     */
    apiAdminApiGetListGet = (
        query?: {
            key?: string;
        },
        params: RequestParams = {},
    ) =>
        this.request<ResultOutputListApiListOutput, any>({
            path: `/api/admin/api/get-list`,
            method: "GET",
            query: query,
            secure: true,
            format: "json",
            ...params,
        });
    /**
     * No description
     *
     * @tags api
     * @name ApiAdminApiGetPagePost
     * @request POST:/api/admin/api/get-page
     * @secure
     */
    apiAdminApiGetPagePost = (data: PageInputApiGetPageDto, params: RequestParams = {}) =>
        this.request<ResultOutputPageOutputApiEntity, any>({
            path: `/api/admin/api/get-page`,
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
     * @tags api
     * @name ApiAdminApiAddPost
     * @request POST:/api/admin/api/add
     * @secure
     */
    apiAdminApiAddPost = (data: ApiAddInput, params: RequestParams = {}) =>
        this.request<ResultOutputInt64, any>({
            path: `/api/admin/api/add`,
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
     * @tags api
     * @name ApiAdminApiUpdatePut
     * @request PUT:/api/admin/api/update
     * @secure
     */
    apiAdminApiUpdatePut = (data: ApiUpdateInput, params: RequestParams = {}) =>
        this.request<AxiosResponse, any>({
            path: `/api/admin/api/update`,
            method: "PUT",
            body: data,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags api
     * @name ApiAdminApiDeleteDelete
     * @request DELETE:/api/admin/api/delete
     * @secure
     */
    apiAdminApiDeleteDelete = (
        query?: {
            /** @format int64 */
            id?: number;
        },
        params: RequestParams = {},
    ) =>
        this.request<AxiosResponse, any>({
            path: `/api/admin/api/delete`,
            method: "DELETE",
            query: query,
            secure: true,
            ...params,
        });
    /**
     * No description
     *
     * @tags api
     * @name ApiAdminApiBatchDeletePut
     * @request PUT:/api/admin/api/batch-delete
     * @secure
     */
    apiAdminApiBatchDeletePut = (data: number[], params: RequestParams = {}) =>
        this.request<AxiosResponse, any>({
            path: `/api/admin/api/batch-delete`,
            method: "PUT",
            body: data,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags api
     * @name ApiAdminApiSoftDeleteDelete
     * @request DELETE:/api/admin/api/soft-delete
     * @secure
     */
    apiAdminApiSoftDeleteDelete = (
        query?: {
            /** @format int64 */
            id?: number;
        },
        params: RequestParams = {},
    ) =>
        this.request<AxiosResponse, any>({
            path: `/api/admin/api/soft-delete`,
            method: "DELETE",
            query: query,
            secure: true,
            ...params,
        });
    /**
     * No description
     *
     * @tags api
     * @name ApiAdminApiBatchSoftDeletePut
     * @request PUT:/api/admin/api/batch-soft-delete
     * @secure
     */
    apiAdminApiBatchSoftDeletePut = (data: number[], params: RequestParams = {}) =>
        this.request<AxiosResponse, any>({
            path: `/api/admin/api/batch-soft-delete`,
            method: "PUT",
            body: data,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
    /**
     * No description
     *
     * @tags api
     * @name ApiAdminApiSyncPost
     * @request POST:/api/admin/api/sync
     * @secure
     */
    apiAdminApiSyncPost = (data: ApiSyncInput, params: RequestParams = {}) =>
        this.request<AxiosResponse, any>({
            path: `/api/admin/api/sync`,
            method: "POST",
            body: data,
            secure: true,
            type: ContentType.Json,
            ...params,
        });
}
