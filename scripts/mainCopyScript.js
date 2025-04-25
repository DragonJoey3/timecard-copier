// Select all <td> elements that contain <a> tags
const TRs = document.querySelectorAll('tr.time_timecardtable');

let totalVals = [];

let startCopy = false;

function processTDs(currentValue){
    if(currentValue.nodeType !== 1){
        return;
    }

    if(currentValue.textContent.trim() === "Middleware III Bridge - OY2"){
        startCopy = true;
        return;
    }

    if(startCopy){
        if(currentValue.textContent.trim() === "") {
            totalVals.push(0);
        } else {
            totalVals.push(currentValue.textContent);
        }
    }
}

function processTRs(currentValue){
    if(currentValue.nodeType !== 1){
        return;
    }

    const tds = currentValue.childNodes;

    startCopy = false;
    tds.forEach(processTDs)
}

TRs.forEach(processTRs);

totalVals.pop();
let value = totalVals.pop();
while(value === 0){
    value = totalVals.pop();
}
totalVals.push(value);

const daysCount = totalVals.length;

const BillLine1 = [];
const BillLine2 = [];
const BillLine3 = [];
const BillLine4 = [];

for(let i = 0; i < daysCount; i++){
    let dayValue = totalVals[i];
    if(dayValue === 0) {
        BillLine1.push(0);
        BillLine2.push(0);
        BillLine3.push(0);
        BillLine4.push(0);
        continue;
    }

    dayValue *= 10;
    let bill1 = Math.round(dayValue * 0.125)/10;
    let bill2 = Math.round(dayValue * 0.063)/10;
    let bill3 = Math.round(dayValue * 0.75)/10;
    let bill4 = Math.round(dayValue * 0.063)/10;

    let delta = Math.round(dayValue - ((bill1 + bill2 + bill3 + bill4)*10))/10;
    bill3 += delta;

    bill3 = Math.round(bill3 * 10)/10;

    BillLine1.push(bill1);
    BillLine2.push(bill2);
    BillLine3.push(bill3);
    BillLine4.push(bill4);
}

const finalString = [BillLine1, BillLine2, BillLine3, BillLine4]
    .map(arr => arr.join('\t'))
    .join('\n');

navigator.clipboard.writeText(finalString).then(()=>{alert("Copied to clipboard!");});

