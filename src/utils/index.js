import {
    BEVERAGE_TYPE,
    COMBO_TYPE,
    DURUM_TYPE,
    EXPECTED_INCOME,
    FIRST_SEGMENT_OFF_SET,
    HUNDRED_PERCENT,
} from "../constants/variables";

export const upperCaseString = str => str.trim().toUpperCase()

export const isObjectEmpty = obj => Object.keys(obj).length === 0;

export const isObjectValueEmpty = obj => Object.values(obj).some(x => x === '');

export const getTotals = (orders) => {
    const subTotalTypes = orders.map(({cart}) => cart.reduce(
            ({subCombo, subDurum, subBeverage}, {type, subTotal}) => {
                if (type === COMBO_TYPE) subCombo += subTotal
                if (type === DURUM_TYPE) subDurum += subTotal
                if (type === BEVERAGE_TYPE) subBeverage += subTotal
                return {subCombo, subDurum, subBeverage}
            },
            {
                subCombo: 0,
                subDurum: 0,
                subBeverage: 0
            }
        )
    )

    const {totalCombo, totalDurum, totalBeverage, total} = subTotalTypes.reduce(
        ({totalCombo, totalDurum, totalBeverage, total}, {subCombo, subDurum, subBeverage}) => {
            totalCombo += subCombo
            totalDurum += subDurum
            totalBeverage += subBeverage
            total += subCombo + subDurum + subBeverage

            return {totalCombo, totalDurum, totalBeverage, total}
        }, {
            totalCombo: 0,
            totalDurum: 0,
            totalBeverage: 0,
            total: 0
        }
    )


    return {
        total,
        products: [
            {
                percent: totalCombo * HUNDRED_PERCENT / EXPECTED_INCOME,
                remain: HUNDRED_PERCENT - (totalCombo * HUNDRED_PERCENT / EXPECTED_INCOME),
                color: '#46C379',
                offSet: FIRST_SEGMENT_OFF_SET
            },
            {
                percent: totalDurum * HUNDRED_PERCENT / EXPECTED_INCOME,
                remain: HUNDRED_PERCENT - (totalDurum * HUNDRED_PERCENT / EXPECTED_INCOME),
                color: '#000084',
                offSet: HUNDRED_PERCENT-(totalCombo * HUNDRED_PERCENT / EXPECTED_INCOME)+FIRST_SEGMENT_OFF_SET
            },
            {
                percent: totalBeverage * HUNDRED_PERCENT / EXPECTED_INCOME,
                remain: HUNDRED_PERCENT - (totalBeverage * HUNDRED_PERCENT / EXPECTED_INCOME),
                color: 'brown',
                offSet:HUNDRED_PERCENT-((totalCombo * HUNDRED_PERCENT / EXPECTED_INCOME)+HUNDRED_PERCENT + (totalDurum * HUNDRED_PERCENT / EXPECTED_INCOME))+FIRST_SEGMENT_OFF_SET
            }
        ]
    }
}
