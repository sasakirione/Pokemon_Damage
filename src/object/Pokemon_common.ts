export default class Pokemon_common {
    constructor() {

    }

    HP_real_calculation (base: number, ev: number): number{
        return Math.floor(base + (31/2) + (ev/8) + 60)
    }

    Etc_real_calculation (base: number, ev: number): number{
        return Math.floor(base + (31/2) + (ev/8) + 5)
    }
}