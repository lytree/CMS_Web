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
  ResultOutputCaptchaData,
  ResultOutputString,
  ResultOutputValidateResult,
  SendSmsCodeInput,
  SlideTrack,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "@/utils/http-client";

export class CaptchaApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags captcha
   * @name CaptchaGeneratePost
   * @request POST:/api/admin/captcha/generate
   * @secure
   */
  captchaGeneratePost = (
    query?: {
      captchaId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputCaptchaData>({
      path: `/api/admin/captcha/generate`,
      method: "POST",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags captcha
   * @name CaptchaCheckPost
   * @request POST:/api/admin/captcha/check
   * @secure
   */
  captchaCheckPost = (
    data: SlideTrack,
    query?: {
      captchaId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputValidateResult>({
      path: `/api/admin/captcha/check`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags captcha
   * @name CaptchaSendSmsCodePost
   * @request POST:/api/admin/captcha/send-sms-code
   * @secure
   */
  captchaSendSmsCodePost = (data: SendSmsCodeInput, params: RequestParams = {}) =>
    this.request<ResultOutputString>({
      path: `/api/admin/captcha/send-sms-code`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
