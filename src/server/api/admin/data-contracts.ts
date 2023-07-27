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

export interface ApiAddInput {
  /** @format int64 */
  parentId?: number | null;
  label?: string | null;
  path?: string | null;
  httpMethods?: string | null;
  description?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
}

export interface ApiEntity {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  createdUserId?: number | null;
  /** @maxLength 50 */
  createdUserName?: string | null;
  /** @format date-time */
  createdTime?: string | null;
  /** @format int64 */
  modifiedUserId?: number | null;
  /** @maxLength 50 */
  modifiedUserName?: string | null;
  /** @format date-time */
  modifiedTime?: string | null;
  isDeleted?: boolean;
  /** @format int64 */
  parentId?: number;
  name?: string | null;
  label?: string | null;
  path?: string | null;
  httpMethods?: string | null;
  description?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  childs?: ApiEntity[] | null;
  permissions?: PermissionEntity[] | null;
}

export interface ApiGetOutput {
  /** @format int64 */
  parentId?: number | null;
  label?: string | null;
  path?: string | null;
  httpMethods?: string | null;
  description?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface ApiGetPageDto {
  label?: string | null;
}

export interface ApiListOutput {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  parentId?: number | null;
  name?: string | null;
  label?: string | null;
  path?: string | null;
  httpMethods?: string | null;
  description?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
}

export interface ApiSyncDto {
  label?: string | null;
  path?: string | null;
  parentPath?: string | null;
  httpMethods?: string | null;
}

export interface ApiSyncInput {
  apis?: ApiSyncDto[] | null;
}

export interface ApiUpdateInput {
  /** @format int64 */
  parentId?: number | null;
  label?: string | null;
  path?: string | null;
  httpMethods?: string | null;
  description?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface AuthGetPasswordEncryptKeyOutput {
  key?: string | null;
  encyptKey?: string | null;
}

export interface AuthGetUserInfoOutput {
  user?: AuthUserProfileDto;
  menus?: AuthUserMenuDto[] | null;
  permissions?: string[] | null;
}

export interface AuthGetUserPermissionsOutput {
  user?: AuthUserProfileDto;
  permissions?: string[] | null;
}

export interface AuthLoginInput {
  /** @minLength 1 */
  userName: string;
  /** @minLength 1 */
  password: string;
  passwordKey?: string | null;
  captchaId?: string | null;
  captchaData?: string | null;
}

export interface AuthMobileLoginInput {
  /** @minLength 1 */
  mobile: string;
  /** @minLength 1 */
  code: string;
  /** @minLength 1 */
  codeId: string;
}

export interface AuthUserMenuDto {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  parentId?: number;
  path?: string | null;
  name?: string | null;
  viewPath?: string | null;
  redirect?: string | null;
  label?: string | null;
  icon?: string | null;
  opened?: boolean | null;
  hidden?: boolean;
  newWindow?: boolean | null;
  external?: boolean | null;
  isKeepAlive?: boolean;
  isAffix?: boolean;
  link?: string | null;
  isIframe?: boolean;
  /** @format int32 */
  sort?: number | null;
}

export interface AuthUserProfileDto {
  userName?: string | null;
  name?: string | null;
  nickName?: string | null;
  avatar?: string | null;
}

export interface CaptchaData {
  id?: string | null;
  backgroundImage?: string | null;
  sliderImage?: string | null;
}

/**
 * MySql=0,SqlServer=1,PostgreSQL=2,Oracle=3,Sqlite=4,OdbcOracle=5,OdbcSqlServer=6,OdbcMySql=7,OdbcPostgreSQL=8,Odbc=9,OdbcDameng=10,MsAccess=11,Dameng=12,OdbcKingbaseES=13,ShenTong=14,KingbaseES=15,Firebird=16,Custom=17,ClickHouse=18,GBase=19,QuestDb=20,Xugu=21,CustomOracle=22,CustomSqlServer=23,CustomMySql=24,CustomPostgreSQL=25
 * @format int32
 */
export type DataType =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
  | 25;

export interface DictAddInput {
  /** @format int64 */
  dictTypeId?: number;
  /** @minLength 1 */
  name: string;
  code?: string | null;
  value?: string | null;
  description?: string | null;
  enabled?: boolean;
  /** @format int32 */
  sort?: number;
}

export interface DictGetListDto {
  dictTypeCode?: string | null;
  dictTypeName?: string | null;
  /** @format int64 */
  id?: number;
  name?: string | null;
  code?: string | null;
  value?: string | null;
}

export interface DictGetOutput {
  /** @format int64 */
  dictTypeId?: number;
  /** @minLength 1 */
  name: string;
  code?: string | null;
  value?: string | null;
  description?: string | null;
  enabled?: boolean;
  /** @format int32 */
  sort?: number;
  /** @format int64 */
  id: number;
}

export interface DictGetPageDto {
  /** @format int64 */
  dictTypeId?: number;
  name?: string | null;
}

export interface DictGetPageOutput {
  /** @format int64 */
  id?: number;
  name?: string | null;
  code?: string | null;
  value?: string | null;
  enabled?: boolean;
  /** @format int32 */
  sort?: number;
}

export interface DictTypeAddInput {
  /** @minLength 1 */
  name: string;
  code?: string | null;
  description?: string | null;
  enabled?: boolean;
  /** @format int32 */
  sort?: number;
}

export interface DictTypeGetOutput {
  /** @minLength 1 */
  name: string;
  code?: string | null;
  description?: string | null;
  enabled?: boolean;
  /** @format int32 */
  sort?: number;
  /** @format int64 */
  id: number;
}

export interface DictTypeGetPageDto {
  name?: string | null;
}

export interface DictTypeGetPageOutput {
  /** @format int64 */
  id?: number;
  name?: string | null;
  code?: string | null;
  enabled?: boolean;
  /** @format int32 */
  sort?: number;
}

export interface DictTypeUpdateInput {
  /** @minLength 1 */
  name: string;
  code?: string | null;
  description?: string | null;
  enabled?: boolean;
  /** @format int32 */
  sort?: number;
  /** @format int64 */
  id: number;
}

export interface DictUpdateInput {
  /** @format int64 */
  dictTypeId?: number;
  /** @minLength 1 */
  name: string;
  code?: string | null;
  value?: string | null;
  description?: string | null;
  enabled?: boolean;
  /** @format int32 */
  sort?: number;
  /** @format int64 */
  id: number;
}

export interface DynamicFilterInfo {
  field?: string | null;
  /** Contains=0,StartsWith=1,EndsWith=2,NotContains=3,NotStartsWith=4,NotEndsWith=5,Equal=6,Equals=7,Eq=8,NotEqual=9,GreaterThan=10,GreaterThanOrEqual=11,LessThan=12,LessThanOrEqual=13,Range=14,DateRange=15,Any=16,NotAny=17,Custom=18 */
  operator?: DynamicFilterOperator;
  value?: any;
  /** And=0,Or=1 */
  logic?: DynamicFilterLogic;
  filters?: DynamicFilterInfo[] | null;
}

/**
 * And=0,Or=1
 * @format int32
 */
export type DynamicFilterLogic = 0 | 1;

/**
 * Contains=0,StartsWith=1,EndsWith=2,NotContains=3,NotStartsWith=4,NotEndsWith=5,Equal=6,Equals=7,Eq=8,NotEqual=9,GreaterThan=10,GreaterThanOrEqual=11,LessThan=12,LessThanOrEqual=13,Range=14,DateRange=15,Any=16,NotAny=17,Custom=18
 * @format int32
 */
export type DynamicFilterOperator = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;

export interface FileDeleteInput {
  /** @format int64 */
  id: number;
}

export interface FileEntity {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  createdUserId?: number | null;
  /** @maxLength 50 */
  createdUserName?: string | null;
  /** @format date-time */
  createdTime?: string | null;
  /** @format int64 */
  modifiedUserId?: number | null;
  /** @maxLength 50 */
  modifiedUserName?: string | null;
  /** @format date-time */
  modifiedTime?: string | null;
  isDeleted?: boolean;
  /** Invalid=0,Minio=1,Aliyun=2,QCloud=3,Qiniu=4,HuaweiCloud=5 */
  provider?: OSSProvider;
  bucketName?: string | null;
  fileDirectory?: string | null;
  /** @format uuid */
  fileGuid?: string;
  saveFileName?: string | null;
  fileName?: string | null;
  extension?: string | null;
  /** @format int64 */
  size?: number;
  sizeFormat?: string | null;
  linkUrl?: string | null;
  md5?: string | null;
}

export interface FileGetPageDto {
  fileName?: string | null;
}

export interface FileGetPageOutput {
  /** @format int64 */
  id?: number;
  providerName?: string | null;
  bucketName?: string | null;
  fileDirectory?: string | null;
  /** @format uuid */
  fileGuid?: string;
  fileName?: string | null;
  extension?: string | null;
  sizeFormat?: string | null;
  linkUrl?: string | null;
  createdUserName?: string | null;
  /** @format date-time */
  createdTime?: string | null;
  modifiedUserName?: string | null;
  /** @format date-time */
  modifiedTime?: string | null;
}

export interface LogGetPageDto {
  createdUserName?: string | null;
}

export interface LoginLogAddInput {
  name?: string | null;
  ip?: string | null;
  browser?: string | null;
  os?: string | null;
  device?: string | null;
  browserInfo?: string | null;
  /** @format int64 */
  elapsedMilliseconds?: number;
  status?: boolean | null;
  msg?: string | null;
  result?: string | null;
  /** @format int64 */
  createdUserId?: number | null;
  createdUserName?: string | null;
}

export interface LoginLogListOutput {
  /** @format int64 */
  id?: number;
  nickName?: string | null;
  createdUserName?: string | null;
  ip?: string | null;
  browser?: string | null;
  os?: string | null;
  device?: string | null;
  /** @format int64 */
  elapsedMilliseconds?: number;
  status?: boolean;
  msg?: string | null;
  /** @format date-time */
  createdTime?: string | null;
}

/**
 * Invalid=0,Minio=1,Aliyun=2,QCloud=3,Qiniu=4,HuaweiCloud=5
 * @format int32
 */
export type OSSProvider = 0 | 1 | 2 | 3 | 4 | 5;

export interface OprationLogAddInput {
  name?: string | null;
  apiLabel?: string | null;
  apiPath?: string | null;
  apiMethod?: string | null;
  ip?: string | null;
  browser?: string | null;
  os?: string | null;
  device?: string | null;
  browserInfo?: string | null;
  /** @format int64 */
  elapsedMilliseconds?: number;
  status?: boolean | null;
  msg?: string | null;
  params?: string | null;
  result?: string | null;
}

export interface OprationLogListOutput {
  /** @format int64 */
  id?: number;
  nickName?: string | null;
  createdUserName?: string | null;
  apiLabel?: string | null;
  apiPath?: string | null;
  apiMethod?: string | null;
  ip?: string | null;
  browser?: string | null;
  os?: string | null;
  device?: string | null;
  /** @format int64 */
  elapsedMilliseconds?: number;
  status?: boolean;
  msg?: string | null;
  /** @format date-time */
  createdTime?: string | null;
}

export interface PageInputApiGetPageDto {
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  dynamicFilter?: DynamicFilterInfo;
  filter?: ApiGetPageDto;
}

export interface PageInputDictGetPageDto {
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  dynamicFilter?: DynamicFilterInfo;
  filter?: DictGetPageDto;
}

export interface PageInputDictTypeGetPageDto {
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  dynamicFilter?: DynamicFilterInfo;
  filter?: DictTypeGetPageDto;
}

export interface PageInputFileGetPageDto {
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  dynamicFilter?: DynamicFilterInfo;
  filter?: FileGetPageDto;
}

export interface PageInputLogGetPageDto {
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  dynamicFilter?: DynamicFilterInfo;
  filter?: LogGetPageDto;
}

export interface PageInputRoleGetPageDto {
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  dynamicFilter?: DynamicFilterInfo;
  filter?: RoleGetPageDto;
}

export interface PageInputUserGetPageDto {
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  dynamicFilter?: DynamicFilterInfo;
  filter?: UserGetPageDto;
}

export interface PageOutputApiEntity {
  /** @format int64 */
  total?: number;
  list?: ApiEntity[] | null;
}

export interface PageOutputDictGetPageOutput {
  /** @format int64 */
  total?: number;
  list?: DictGetPageOutput[] | null;
}

export interface PageOutputDictTypeGetPageOutput {
  /** @format int64 */
  total?: number;
  list?: DictTypeGetPageOutput[] | null;
}

export interface PageOutputFileGetPageOutput {
  /** @format int64 */
  total?: number;
  list?: FileGetPageOutput[] | null;
}

export interface PageOutputLoginLogListOutput {
  /** @format int64 */
  total?: number;
  list?: LoginLogListOutput[] | null;
}

export interface PageOutputOprationLogListOutput {
  /** @format int64 */
  total?: number;
  list?: OprationLogListOutput[] | null;
}

export interface PageOutputRoleGetPageOutput {
  /** @format int64 */
  total?: number;
  list?: RoleGetPageOutput[] | null;
}

export interface PageOutputUserGetPageOutput {
  /** @format int64 */
  total?: number;
  list?: UserGetPageOutput[] | null;
}

/**
 * MD5Encrypt32=0,PasswordHasher=1
 * @format int32
 */
export type PasswordEncryptType = 0 | 1;

export interface PermissionAddApiInput {
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  apiId?: number | null;
  label?: string | null;
  code?: string | null;
  description?: string | null;
  hidden?: boolean;
  icon?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
}

export interface PermissionAddDotInput {
  /** @format int64 */
  parentId?: number;
  apiIds?: number[] | null;
  label?: string | null;
  code?: string | null;
  description?: string | null;
  icon?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
}

export interface PermissionAddGroupInput {
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  viewId?: number | null;
  name?: string | null;
  path?: string | null;
  redirect?: string | null;
  label?: string | null;
  hidden?: boolean;
  icon?: string | null;
  opened?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
}

export interface PermissionAddMenuInput {
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  viewId?: number | null;
  name?: string | null;
  path?: string | null;
  label?: string | null;
  description?: string | null;
  hidden?: boolean;
  icon?: string | null;
  newWindow?: boolean;
  external?: boolean;
  isKeepAlive?: boolean;
  isAffix?: boolean;
  link?: string | null;
  isIframe?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
}

export interface PermissionAssignInput {
  /** @format int64 */
  roleId: number;
  permissionIds: number[];
}

export interface PermissionEntity {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  createdUserId?: number | null;
  /** @maxLength 50 */
  createdUserName?: string | null;
  /** @format date-time */
  createdTime?: string | null;
  /** @format int64 */
  modifiedUserId?: number | null;
  /** @maxLength 50 */
  modifiedUserName?: string | null;
  /** @format date-time */
  modifiedTime?: string | null;
  isDeleted?: boolean;
  /** @format int64 */
  parentId?: number;
  label?: string | null;
  code?: string | null;
  /** Group=1,Menu=2,Dot=3 */
  type?: PermissionType;
  /** @format int64 */
  viewId?: number | null;
  view?: ViewEntity;
  name?: string | null;
  path?: string | null;
  redirect?: string | null;
  icon?: string | null;
  hidden?: boolean;
  opened?: boolean;
  newWindow?: boolean;
  external?: boolean;
  isKeepAlive?: boolean;
  isAffix?: boolean;
  link?: string | null;
  isIframe?: boolean;
  /** @format int32 */
  sort?: number;
  description?: string | null;
  enabled?: boolean;
  apis?: ApiEntity[] | null;
  childs?: PermissionEntity[] | null;
}

export interface PermissionGetApiOutput {
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  apiId?: number | null;
  label?: string | null;
  code?: string | null;
  description?: string | null;
  hidden?: boolean;
  icon?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface PermissionGetDotOutput {
  /** @format int64 */
  parentId?: number;
  apiIds?: number[] | null;
  label?: string | null;
  code?: string | null;
  description?: string | null;
  icon?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface PermissionGetGroupOutput {
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  viewId?: number | null;
  name?: string | null;
  path?: string | null;
  redirect?: string | null;
  label?: string | null;
  hidden?: boolean;
  icon?: string | null;
  opened?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface PermissionGetMenuOutput {
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  viewId?: number | null;
  name?: string | null;
  path?: string | null;
  label?: string | null;
  description?: string | null;
  hidden?: boolean;
  icon?: string | null;
  newWindow?: boolean;
  external?: boolean;
  isKeepAlive?: boolean;
  isAffix?: boolean;
  link?: string | null;
  isIframe?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface PermissionListOutput {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  parentId?: number;
  label?: string | null;
  /** Group=1,Menu=2,Dot=3 */
  type?: PermissionType;
  path?: string | null;
  redirect?: string | null;
  viewPath?: string | null;
  link?: string | null;
  apiPaths?: string | null;
  icon?: string | null;
  opened?: boolean;
  /** @format int32 */
  sort?: number | null;
  description?: string | null;
  enabled?: boolean;
}

/**
 * Group=1,Menu=2,Dot=3
 * @format int32
 */
export type PermissionType = 1 | 2 | 3;

export interface PermissionUpdateApiInput {
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  apiId?: number | null;
  label?: string | null;
  code?: string | null;
  description?: string | null;
  hidden?: boolean;
  icon?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface PermissionUpdateDotInput {
  /** @format int64 */
  parentId?: number;
  apiIds?: number[] | null;
  label?: string | null;
  code?: string | null;
  description?: string | null;
  icon?: string | null;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface PermissionUpdateGroupInput {
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  viewId?: number | null;
  name?: string | null;
  path?: string | null;
  redirect?: string | null;
  label?: string | null;
  hidden?: boolean;
  icon?: string | null;
  opened?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface PermissionUpdateMenuInput {
  /** @format int64 */
  parentId?: number;
  /** @format int64 */
  viewId?: number | null;
  name?: string | null;
  path?: string | null;
  label?: string | null;
  description?: string | null;
  hidden?: boolean;
  icon?: string | null;
  newWindow?: boolean;
  external?: boolean;
  isKeepAlive?: boolean;
  isAffix?: boolean;
  link?: string | null;
  isIframe?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface ResultOutputApiGetOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: ApiGetOutput;
}

export interface ResultOutputAuthGetPasswordEncryptKeyOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: AuthGetPasswordEncryptKeyOutput;
}

export interface ResultOutputAuthGetUserInfoOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: AuthGetUserInfoOutput;
}

export interface ResultOutputAuthGetUserPermissionsOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: AuthGetUserPermissionsOutput;
}

export interface ResultOutputAuthUserProfileDto {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: AuthUserProfileDto;
}

export interface ResultOutputBoolean {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: boolean;
}

export interface ResultOutputCaptchaData {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: CaptchaData;
}

export interface ResultOutputDictGetOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: DictGetOutput;
}

export interface ResultOutputDictTypeGetOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: DictTypeGetOutput;
}

export interface ResultOutputDictionaryStringListDictGetListDto {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: Record<string, DictGetListDto[]>;
}

export interface ResultOutputFileEntity {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: FileEntity;
}

export interface ResultOutputIEnumerableObject {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: any[] | null;
}

export interface ResultOutputIListUserPermissionsOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: UserPermissionsOutput[] | null;
}

export interface ResultOutputInt64 {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  /** @format int64 */
  data?: number;
}

export interface ResultOutputListApiListOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: ApiListOutput[] | null;
}

export interface ResultOutputListAuthUserMenuDto {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: AuthUserMenuDto[] | null;
}

export interface ResultOutputListFileEntity {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: FileEntity[] | null;
}

export interface ResultOutputListInt64 {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: number[] | null;
}

export interface ResultOutputListPermissionListOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PermissionListOutput[] | null;
}

export interface ResultOutputListRoleGetListOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: RoleGetListOutput[] | null;
}

export interface ResultOutputListRoleGetRoleUserListOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: RoleGetRoleUserListOutput[] | null;
}

export interface ResultOutputListViewListOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: ViewListOutput[] | null;
}

export interface ResultOutputObject {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: any;
}

export interface ResultOutputPageOutputApiEntity {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PageOutputApiEntity;
}

export interface ResultOutputPageOutputDictGetPageOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PageOutputDictGetPageOutput;
}

export interface ResultOutputPageOutputDictTypeGetPageOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PageOutputDictTypeGetPageOutput;
}

export interface ResultOutputPageOutputFileGetPageOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PageOutputFileGetPageOutput;
}

export interface ResultOutputPageOutputLoginLogListOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PageOutputLoginLogListOutput;
}

export interface ResultOutputPageOutputOprationLogListOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PageOutputOprationLogListOutput;
}

export interface ResultOutputPageOutputRoleGetPageOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PageOutputRoleGetPageOutput;
}

export interface ResultOutputPageOutputUserGetPageOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PageOutputUserGetPageOutput;
}

export interface ResultOutputPermissionGetApiOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PermissionGetApiOutput;
}

export interface ResultOutputPermissionGetDotOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PermissionGetDotOutput;
}

export interface ResultOutputPermissionGetGroupOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PermissionGetGroupOutput;
}

export interface ResultOutputPermissionGetMenuOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: PermissionGetMenuOutput;
}

export interface ResultOutputRoleGetOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: RoleGetOutput;
}

export interface ResultOutputString {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: string | null;
}

export interface ResultOutputUserGetBasicOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: UserGetBasicOutput;
}

export interface ResultOutputUserGetOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: UserGetOutput;
}

export interface ResultOutputValidateResult {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: ValidateResult;
}

export interface ResultOutputViewGetOutput {
  success?: boolean;
  code?: string | null;
  msg?: string | null;
  data?: ViewGetOutput;
}

export interface RoleAddInput {
  /** @format int64 */
  parentId?: number;
  name?: string | null;
  code?: string | null;
  /** Group=1,Role=2 */
  type?: RoleType;
  description?: string | null;
  /** @format int32 */
  sort?: number;
}

export interface RoleAddRoleUserListInput {
  /** @format int64 */
  roleId: number;
  userIds?: number[] | null;
}

export interface RoleEntity {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  createdUserId?: number | null;
  /** @maxLength 50 */
  createdUserName?: string | null;
  /** @format date-time */
  createdTime?: string | null;
  /** @format int64 */
  modifiedUserId?: number | null;
  /** @maxLength 50 */
  modifiedUserName?: string | null;
  /** @format date-time */
  modifiedTime?: string | null;
  isDeleted?: boolean;
  /** @format int64 */
  tenantId?: number | null;
  /** @format int64 */
  parentId?: number;
  childs?: RoleEntity[] | null;
  name?: string | null;
  code?: string | null;
  /** Group=1,Role=2 */
  type?: RoleType;
  description?: string | null;
  hidden?: boolean;
  /** @format int32 */
  sort?: number;
  users?: UserEntity[] | null;
  permissions?: PermissionEntity[] | null;
}

export interface RoleGetListOutput {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  parentId?: number;
  name?: string | null;
  code?: string | null;
  /** Group=1,Role=2 */
  type?: RoleType;
  /** @format int32 */
  sort?: number;
  description?: string | null;
}

export interface RoleGetOutput {
  /** @format int64 */
  parentId?: number;
  name?: string | null;
  code?: string | null;
  /** Group=1,Role=2 */
  type?: RoleType;
  description?: string | null;
  /** @format int32 */
  sort?: number;
  /** @format int64 */
  id: number;
}

export interface RoleGetPageDto {
  name?: string | null;
}

export interface RoleGetPageOutput {
  /** @format int64 */
  id?: number;
  name?: string | null;
  code?: string | null;
  description?: string | null;
  hidden?: boolean;
  /** @format date-time */
  createdTime?: string | null;
}

export interface RoleGetRoleUserListOutput {
  /** @format int64 */
  id?: number;
  name?: string | null;
  mobile?: string | null;
}

/**
 * Group=1,Role=2
 * @format int32
 */
export type RoleType = 1 | 2;

export interface RoleUpdateInput {
  /** @format int64 */
  parentId?: number;
  name?: string | null;
  code?: string | null;
  /** Group=1,Role=2 */
  type?: RoleType;
  description?: string | null;
  /** @format int32 */
  sort?: number;
  /** @format int64 */
  id: number;
}

export interface SendSmsCodeInput {
  /** @minLength 1 */
  mobile: string;
  codeId?: string | null;
  /** @minLength 1 */
  captchaId: string;
  track: SlideTrack;
}

export interface SlideTrack {
  /** @format int32 */
  backgroundImageWidth?: number;
  /** @format int32 */
  backgroundImageHeight?: number;
  /** @format int32 */
  sliderImageWidth?: number;
  /** @format int32 */
  sliderImageHeight?: number;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  endTime?: string;
  tracks?: Track[] | null;
  /** @format float */
  percent?: number;
}

export interface TenantEntity {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  createdUserId?: number | null;
  /** @maxLength 50 */
  createdUserName?: string | null;
  /** @format date-time */
  createdTime?: string | null;
  /** @format int64 */
  modifiedUserId?: number | null;
  /** @maxLength 50 */
  modifiedUserName?: string | null;
  /** @format date-time */
  modifiedTime?: string | null;
  isDeleted?: boolean;
  /** @format int64 */
  userId?: number;
  user?: UserEntity;
  /** Platform=1,Tenant=2 */
  tenantType?: TenantTypes;
  dbKey?: string | null;
  /** MySql=0,SqlServer=1,PostgreSQL=2,Oracle=3,Sqlite=4,OdbcOracle=5,OdbcSqlServer=6,OdbcMySql=7,OdbcPostgreSQL=8,Odbc=9,OdbcDameng=10,MsAccess=11,Dameng=12,OdbcKingbaseES=13,ShenTong=14,KingbaseES=15,Firebird=16,Custom=17,ClickHouse=18,GBase=19,QuestDb=20,Xugu=21,CustomOracle=22,CustomSqlServer=23,CustomMySql=24,CustomPostgreSQL=25 */
  dbType?: DataType;
  connectionString?: string | null;
  enabled?: boolean;
  description?: string | null;
}

/**
 * Platform=1,Tenant=2
 * @format int32
 */
export type TenantTypes = 1 | 2;

export interface Track {
  /** @format int32 */
  x?: number;
  /** @format int32 */
  y?: number;
  /** @format int32 */
  t?: number;
}

export interface UserAddInput {
  /** @format int64 */
  id?: number;
  /** @minLength 1 */
  userName: string;
  /** @minLength 1 */
  name: string;
  mobile?: string | null;
  email?: string | null;
  roleIds?: number[] | null;
  password?: string | null;
  enabled?: boolean;
}

export interface UserAddMemberInput {
  /** @format int64 */
  id?: number;
  /** @minLength 1 */
  userName: string;
  name?: string | null;
  mobile?: string | null;
  email?: string | null;
  /** @minLength 1 */
  password: string;
  /** WaitChangePasssword=2,WaitActive=3 */
  status?: UserStatus;
}

export interface UserChangePasswordInput {
  /** @minLength 1 */
  oldPassword: string;
  /** @minLength 1 */
  newPassword: string;
  /** @minLength 1 */
  confirmPassword: string;
}

export interface UserEntity {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  createdUserId?: number | null;
  /** @maxLength 50 */
  createdUserName?: string | null;
  /** @format date-time */
  createdTime?: string | null;
  /** @format int64 */
  modifiedUserId?: number | null;
  /** @maxLength 50 */
  modifiedUserName?: string | null;
  /** @format date-time */
  modifiedTime?: string | null;
  isDeleted?: boolean;
  /** @format int64 */
  tenantId?: number | null;
  tenant?: TenantEntity;
  userName?: string | null;
  password?: string | null;
  /** MD5Encrypt32=0,PasswordHasher=1 */
  passwordEncryptType?: PasswordEncryptType;
  name?: string | null;
  mobile?: string | null;
  email?: string | null;
  nickName?: string | null;
  avatar?: string | null;
  /** WaitChangePasssword=2,WaitActive=3 */
  status?: UserStatus;
  /** Member=0,DefaultUser=1,TenantAdmin=10,PlatformAdmin=100,Tourist=-1 */
  type?: UserType;
  enabled?: boolean;
  roles?: RoleEntity[] | null;
}

export interface UserGetBasicOutput {
  avatar?: string | null;
  name?: string | null;
  nickName?: string | null;
  mobile?: string | null;
  email?: string | null;
}

export interface UserGetOutput {
  /** @minLength 1 */
  userName: string;
  /** @minLength 1 */
  name: string;
  mobile?: string | null;
  email?: string | null;
  /** @format int64 */
  id: number;
  roles?: UserGetRoleDto[] | null;
  roleIds?: number[] | null;
}

export type UserGetPageDto = object;

export interface UserGetPageOutput {
  /** @format int64 */
  id?: number;
  userName?: string | null;
  name?: string | null;
  mobile?: string | null;
  email?: string | null;
  /** Member=0,DefaultUser=1,TenantAdmin=10,PlatformAdmin=100,Tourist=-1 */
  type?: UserType;
  roles?: RoleEntity[] | null;
  roleNames?: string[] | null;
  isManager?: boolean;
  enabled?: boolean;
  /** @format date-time */
  createdTime?: string | null;
}

export interface UserGetRoleDto {
  /** @format int64 */
  id?: number;
  name?: string | null;
}

export interface UserPermissionsOutput {
  httpMethods?: string | null;
  path?: string | null;
}

export interface UserResetPasswordInput {
  /** @format int64 */
  id?: number;
  password?: string | null;
}

export interface UserSetEnableInput {
  /** @format int64 */
  userId?: number;
  enabled?: boolean;
}

/**
 * WaitChangePasssword=2,WaitActive=3
 * @format int32
 */
export type UserStatus = 2 | 3;

/**
 * Member=0,DefaultUser=1,TenantAdmin=10,PlatformAdmin=100,Tourist=-1
 * @format int32
 */
export type UserType = 0 | 1 | 10 | 100 | -1;

export interface UserUpdateBasicInput {
  /** @minLength 1 */
  name: string;
  nickName?: string | null;
}

export interface UserUpdateInput {
  /** @minLength 1 */
  userName: string;
  /** @minLength 1 */
  name: string;
  mobile?: string | null;
  email?: string | null;
  roleIds?: number[] | null;
  /** @format int64 */
  id: number;
}

export interface UserUpdateMemberInput {
  /** @minLength 1 */
  userName: string;
  name?: string | null;
  mobile?: string | null;
  email?: string | null;
  /** @format int64 */
  id: number;
}

export interface ValidateResult {
  /** Success=0,ValidateFail=1,Timeout=2 */
  result?: ValidateResultType;
  message?: string | null;
}

/**
 * Success=0,ValidateFail=1,Timeout=2
 * @format int32
 */
export type ValidateResultType = 0 | 1 | 2;

export interface ViewAddInput {
  /** @format int64 */
  parentId?: number | null;
  name?: string | null;
  label?: string | null;
  path?: string | null;
  description?: string | null;
  cache?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
}

export interface ViewEntity {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  createdUserId?: number | null;
  /** @maxLength 50 */
  createdUserName?: string | null;
  /** @format date-time */
  createdTime?: string | null;
  /** @format int64 */
  modifiedUserId?: number | null;
  /** @maxLength 50 */
  modifiedUserName?: string | null;
  /** @format date-time */
  modifiedTime?: string | null;
  isDeleted?: boolean;
  /** @format int64 */
  parentId?: number;
  name?: string | null;
  label?: string | null;
  path?: string | null;
  description?: string | null;
  cache?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  childs?: ViewEntity[] | null;
}

export interface ViewGetOutput {
  /** @format int64 */
  parentId?: number | null;
  name?: string | null;
  label?: string | null;
  path?: string | null;
  description?: string | null;
  cache?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}

export interface ViewListOutput {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  parentId?: number | null;
  name?: string | null;
  label?: string | null;
  path?: string | null;
  cache?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  description?: string | null;
}

export interface ViewSyncDto {
  name?: string | null;
  path?: string | null;
  label?: string | null;
  description?: string | null;
  cache?: boolean;
}

export interface ViewSyncInput {
  views?: ViewSyncDto[] | null;
}

export interface ViewUpdateInput {
  /** @format int64 */
  parentId?: number | null;
  name?: string | null;
  label?: string | null;
  path?: string | null;
  description?: string | null;
  cache?: boolean;
  /** @format int32 */
  sort?: number;
  enabled?: boolean;
  /** @format int64 */
  id: number;
}
