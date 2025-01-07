var loanamount=1000000

var interestrate=7

var monthlyinterest=interestrate/12/100

var tenure=10

var tenuremonths=tenure*12

var emi=loanamount*monthlyinterest*((1+monthlyinterest)**tenuremonths/(((1+monthlyinterest)**tenuremonths)-1))

console.log(`Emi : ${emi}`);

var totalpayable=emi*tenuremonths

console.log(`Total amount payable = ${totalpayable}`);

var totalinterest=loanamount-totalpayable

console.log(`Total interest payable = ${totalinterest}`);



