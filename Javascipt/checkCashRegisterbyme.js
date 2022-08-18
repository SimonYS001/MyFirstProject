function checkCashRegister(price, cash, cid) {

    let cashSet = {

        'PENNY': 0.01,
        'NICKEL': 0.05,
        'DIME': 0.1,
        'QUARTER': 0.25,
        'ONE': 1,
        'FIVE': 5,
        'TEN': 10,
        'TWENTY': 20,
        'ONE HUNDRED': 100

    };

    let cashArr = [
        [0.01, 'PENNY'],
        [0.05, 'NICKEL'],
        [0.1, 'DIME'],
        [0.25, 'QUARTER'],
        [1, 'ONE'],
        [5, 'FIVE'],
        [10, 'TEN'],
        [20, 'TWENTY'],
        [100, 'ONE HUNDRED']
    ]

    // console.table(cid.slice(0, 4));
    let topay = cash - price;
    // Object.keys()
    let numberArr = Object.values(cashSet).map(member => Number(member)).sort((a, b) => a - b);

    let topayRes = []
    for (let i = 0; i < numberArr.length; i++) {
        if (topay > numberArr[i]) {
            topayRes.push(numberArr[i])
        }
    }
    let lenTopay = topayRes.length;
    console.log(topayRes);


    let totalMoney = cid.slice(0, lenTopay).reduce((total, member) => total + member[1], 0)
    let resArrMoney = cid.slice(0, lenTopay).reduce((res, member) => {
        res.push(member);
        return res
    }, [])
    console.log(resArrMoney);



    if (totalMoney < topay) {
        return { status: "INSUFFICIENT_FUNDS", change: cid }
    } else if (totalMoney == topay) {

        let strArr = `[${cid.reduce((res, member) => {
            return res.concat(`["${member[0]}", ${member[1]}], `);
        }, "")}`;
        let strArrNew = strArr.slice(0, strArr.length - 2);

        return `{status: "CLOSED", change: ` + strArrNew + `]}`

    } else {

        let res_money = topay;
        let index_find = resArrMoney.length;

        console.log(resArrMoney[index_find - 1][1] >= res_money);
        let res_topay = [];
        while (index_find != 1) {
            console.log(index_find);



            if (resArrMoney[index_find - 1][1] >= res_money) {
                if (res_money % cashArr[index_find - 1][0] == 0) {

                    res_topay.push([resArrMoney[index_find - 1][0], Math.floor(res_money / cashArr[index_find - 1][0])])
                    res_money = (res_money % cashArr[index_find - 1][0]);
                    console.log(res_money);
                    break

                } else {
                    console.log(res_topay);
                    index_find--;
                }
            }

            if (res_money == 0) {
                break;
            }

        }
        let strArr = `[${res_topay.reduce((res, member) => {
            return res.concat(`["${member[0]}", ${member[1] * cashSet[member[0]]}], `);
        }, "")}`;
        let strArrNew = strArr.slice(0, strArr.length - 2);
        return `{status: "OPEN", change: ` + strArrNew + `]}`


    }
}
let a1 = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// let a2 = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log(a1);
