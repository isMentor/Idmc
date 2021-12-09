import { Intruder, CoreParam } from '../types';
declare class Core {
    private dataSources;
    readonly parameters: CoreParam;
    readonly keyTarget: String;
    product: Array<Intruder> | Intruder;
    constructor(source: Array<Intruder>, param: CoreParam);
    /**
     * @description: Add multiple
     * @param {Array} data 添加的数据
     * @return {*}
     */
    save(data: Array<Intruder>): void;
    /**
     * @description: Add one data
     * @param {Object} data 添加的数据
     */
    saveOne(data: Intruder): void;
    /**
     * @description: 删除数据
     * @param {any} key
     */
    remove(key: any): void;
    /**
     * @description:
     * @param {any} target
     * @param {any} data
     * @return {*}
     */
    update<T>(target: T, data: T): void;
    /**
     * @description: 查询多个
     * @param {any} data 查询的对象
     */
    find(data: any): void;
    /**
     * @description: 查询单个
     * @param {Object} data 查询的对象
     * @param {Number} index
     */
    findOne(data: Object, index?: Number): void;
    /**
     * @description: 私有方法
     * @param {Array} data
     */
    private assignment;
    /**
     * @description: 清除 __key__
     * @param {Array} data
     * @return {*}
     */
    private clearKey;
}
export default Core;
