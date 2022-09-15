let maxamazingsale = 100;
let amazingsale = 70;
let amazing = {
    price: 10500,
    discount: 0,
    amazingsale: 70,

    count: 0,
    check: function (count) {
        if (count > this.amazingsale) {//اگر درخواست بیشتر از فروش شگفت انگیز بود پیام فروخته شد بده
            console.log("sold out");
        }
        else if (count < this.amazingsale) {//اگر تعداد درخواست کمتر از فروش شگفت انگیز بود باقی مانده موجودی را اعلام کن
            console.log(`The amazingsale inventory Is: ${this.amazingsale - count}`)
        }
    }

}
//محاسبه درصد تخیف موند که نستونستم
function cal(maxamazingsale, amazingsale) {// فکر کنم دوتا متود آبجکت در یک آبجکت نمیشه تعریف کرد برای همین تابع رو اوردم بیرون تعریف کردم
    let res = maxamazingsale - amazingsale ; 
    console.log(`the percent of sale : ${res}`);
}


function rate(number) {//تابع ثبت رتبه محصول
    if (number < 6) {
        console.log(`rate:${number}`);
    }
}
rate(5);
rate(1);
console.log(amazing.check(74));
console.log(amazing.check(24));
cal(maxamazingsale, amazingsale);