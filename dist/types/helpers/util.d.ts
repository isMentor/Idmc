import { AssertParam, CoreParam, Intruder } from '../types';
/**
 * @description: TAG 生成文档的唯一标识符
 * @param {Number} index
 * @return { key } 唯一标识符
 */
export declare const TAG: (index?: String | Number | undefined) => String;
/**
 * @description: 初始化识别码
 * @param {Array} dataSource 数据源
 * @return {Array} dataSource
 */
export declare const headingCode: (dataSource: Array<any>, param?: CoreParam) => Array<any>;
/**
 * @description: 初始化识别码
 * @param {Intruder} source 数据源
 * @return {Array} dataSource
 */
export declare const headingCodeOne: (source: Intruder) => Intruder;
/**
 * @description: 断言数据类型
 * @param {*} T
 * @return {*}
 */
export declare const assert: <T>(data?: T | undefined) => AssertParam;
