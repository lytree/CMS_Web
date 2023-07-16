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
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Captcha<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags captcha
   * @name ApiAdminCaptchaGeneratePost
   * @request POST:/api/admin/captcha/generate
   * @secure
   */
  apiAdminCaptchaGeneratePost = (
    query?: {
      captchaId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputCaptchaData, any>({
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
   * @name ApiAdminCaptchaCheckPost
   * @request POST:/api/admin/captcha/check
   * @secure
   */
  apiAdminCaptchaCheckPost = (
    data: SlideTrack,
    query?: {
      captchaId?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<ResultOutputValidateResult, any>({
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
   * @name ApiAdminCaptchaSendSmsCodePost
   * @request POST:/api/admin/captcha/send-sms-code
   * @secure
   */
  apiAdminCaptchaSendSmsCodePost = (data: SendSmsCodeInput, params: RequestParams = {}) =>
    this.request<ResultOutputString, any>({
      path: `/api/admin/captcha/send-sms-code`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
