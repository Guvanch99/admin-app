import {BEVERAGE_TYPE, COMBO_TYPE, DURUM_TYPE} from "../constants/variables";

export const upperCaseString = str => str.trim().toUpperCase()

export const isObjectEmpty = obj => Object.keys(obj).length === 0;

export const isObjectValueEmpty = obj => Object.values(obj).some(x => x === '');

export const getTotals=({orders})=>{
    const subTotalTypes=orders.map(({cart})=>cart.reduce(
            ({subCombo,subDurum,subBeverage}, {type,subTotal}) => {
                type===COMBO_TYPE ? subCombo+=subTotal:null
                type===DURUM_TYPE ? subDurum+=subTotal:null
                type===BEVERAGE_TYPE ? subBeverage+=subTotal:null

                return {subCombo,subDurum,subBeverage}
            },
            {
                subCombo: 0,
                subDurum: 0,
                subBeverage: 0
            }
        )
    )

    const {totalCombo,totalDurum,totalBeverage,total}=subTotalTypes.reduce(
        ({totalCombo,totalDurum,totalBeverage,total}, {subCombo,subDurum,subBeverage}) =>{
            totalCombo+=subCombo
            totalDurum+=subDurum
            totalBeverage+=subBeverage
            total+=subCombo+subDurum+subBeverage


            return {totalCombo,totalDurum,totalBeverage,total}
        }, {
            totalCombo: 0,
            totalDurum: 0,
            totalBeverage: 0,
            total:0
        }
    )
    const comboPercent=totalCombo*100/500
    const durumPercent=totalDurum*100/500
    const beveragePercent=totalBeverage*100/500

    return {comboPercent,durumPercent,beveragePercent,total}

}
