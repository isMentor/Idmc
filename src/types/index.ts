/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 类型 | 接口
 */

export type DefaultKeyTarget = '__key__'

type Index = 0 | 1

export interface AssertParam {
  array: Boolean
  none: Boolean
}

export interface Intruder {
  id?: Number | String
  __key__?: Number | String
  [propName: string]: any
}

export interface Assignment {
  sources?: Boolean
}

export interface SaveFunc {
  (source: Array<Intruder>): void
}

export interface CoreParam {
  readonly keyTarget?: String
  readonly key?: String
  readonly defaultKeyTarget?: String
  readonly index?: Index
  readonly type?: String
  
}
