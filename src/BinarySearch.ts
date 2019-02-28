export default class BinarySearch {
    private _data: Array<string|number>
    private _iterationCount: number

    constructor (data: Array<string|number>) {
        this._iterationCount = 0
        this._data = data
    }

    search(item: string|number): number|null {
        this._iterationCount = 0

        let low = 0
        let high = this._data.length - 1
        while (low <= high) {
            this._iterationCount++

            const mid = Math.floor((low + high) / 2)
            const guess = this._data[mid]

            if (guess === item) {
                return mid
            }
            
            if (guess > item) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }

        return null
    }

    get iterationCount(): number {
        return this._iterationCount
    }
}