function checkCashRegister(price, cash, cid) {
    const INSUFFICIENT_FUNDS = { status: "INSUFFICIENT_FUNDS", change: [] }
    const CLOSED = { status: "CLOSED", change: cid }
    const OPEN = { status: "OPEN", change: [] }

}

let ss = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

console.log(ss);
