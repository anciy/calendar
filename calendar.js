/*获取当前的年月并且插入页面中*/
let date=new Date();
let a=new Date(1969,1,1);
let b=a.getDay();
console.log(b)
let nowyear=date.getFullYear();
let nowmonth=date.getMonth()+1;
let nowday=date.getDate();
let year= document.getElementsByClassName("year")[0];
year.innerHTML=nowyear+"年";
let month= document.getElementsByClassName("month")[0];
let adddiv=document.getElementsByClassName("content")[0];
let clickmonth=nowmonth;
month.innerHTML=nowmonth+"月";
/* 判断当年月份有多少天*/
function judgeMonDay (judgeyear,judgemonth) {
    let monthday;
    if(judgeyear%4==0&judgemonth==2){
        monthday=29
    }
    else if(judgeyear%4!=0&judgemonth==2){
        monthday=28
    }
    else if(judgemonth%2==0&judgemonth!=2&judgemonth<7){
        monthday=30
    }
    else if(judgemonth%2!=0&judgemonth!=2&judgemonth<7){
        monthday=31;
    }
    else if(judgemonth%2==0&judgemonth==2&judgemonth>7){
        monthday=31
    }
    else if(judgemonth%2!=0&judgemonth!=2&judgemonth>7){
        monthday=30
    }
    else{
        monthday=31
    }
    return monthday
}
/*当前月份的日历，判断第一天是从星期几开始的，然后将其插入页面中*/
let firstmonthdate=new Date(nowyear,nowmonth-1,1);//当前月份的具体日期；
let firstmonthweek=firstmonthdate.getDay()//当前月份的第一天从星期几开始
let nowdays=judgeMonDay(nowyear,nowmonth)//当前月份有多少天
/*新建日历框*/
function addDays (){
let temp =0;
let j=42;
for(;temp<j;temp++){
   div=document.createElement("div")
   adddiv.appendChild(div).className="choice";    //给每个新建的日历格子一个class属性，方便后面选择操作。
}
}
/*格子中插入天数*/
function insertDay (firstmonthweek,nowdays) {
let i=0;
let j=firstmonthweek+nowdays-1;
let k=1;
let temp=firstmonthweek-1;
for(i;i<42;i++){
    choice[i].innerHTML=""                    //一定要先把所有元素置空，否则下个页面加载会有上个页面残留的数据。
    }
 for(temp;temp<j;temp++,k++){
     if(temp<0){
         temp=6
         j=temp+nowdays
     }
     choice[temp].innerHTML=k;
 }
}
addDays();
let choice=document.getElementsByClassName("choice");    //选中每个新建的div，为新建的div格子里面插入数据准备
insertDay(firstmonthweek,nowdays);                        //这里就建立了当前月的日历了
let style=firstmonthweek+nowday-2;                       //设置当前日子不同于其他日子的样式，我设置的时号数标红
choice[style].style="color:red"
/*绑定年的左右点击切换年*/
let left1=document.getElementsByClassName("left1")[0];
left1.addEventListener("click",goleft1);
let clickyear=nowyear
function goleft1 (){
    clickyear--;
    if(clickyear===nowyear&clickmonth===nowmonth){           //此判断是因为，当我们点击按钮后，会切换到其他号去，不是当前号了，故让红色消失，如果切换回当前号，则变红
        choice[style].style="color:red"
    }else{                                                    //以下的一样
        choice[style].style=""
    }
    year.innerHTML=clickyear+"年";         //左点击变化后，改变的年，插入页面头部
    let firstmonthdate=new Date(clickyear,clickmonth-1,1);   //当年改变后，获取年改变后的这个月的第一天日期
    let firstmonthweek=firstmonthdate.getDay();              //年改变后，获取年改变后的第一天从星期几开始的
    let nowdays=judgeMonDay(clickyear,clickmonth);            //判断年改变后的这一月有多少天，有多少天，就要插入多少个号
    console.log("a1"+nowdays)
    insertDay(firstmonthweek,nowdays);                         //插入号数
}
//右点击与左点击同理
let right1=document.getElementsByClassName("right1")[0];
right1.addEventListener("click",goright1);
function goright1 (){
    clickyear++;
    if(clickyear===nowyear&clickmonth===nowmonth){
        choice[style].style="color:red"
    }else{
        choice[style].style=" "}
    year.innerHTML=clickyear+"年";
    let firstmonthdate=new Date(clickyear,clickmonth-1,1);
    let firstmonthweek=firstmonthdate.getDay();
    let nowdays=judgeMonDay(clickyear,clickmonth);
    console.log("a1"+nowdays)
    insertDay(firstmonthweek,nowdays);
}
/*绑定月的左右点击切换月,与年点击同理*/
var left2=document.getElementsByClassName("left2")[0];
left2.addEventListener("click",goleft2);

function goleft2(){
    clickmonth--;
    if(clickyear===nowyear&clickmonth===nowmonth){
        choice[style].style="color:red"
    }else{
        choice[style].style=" "}
    if(clickmonth<=0){
        clickmonth=12+clickmonth;
        month.innerHTML=clickmonth+"月";
        clickyear--;
        year.innerHTML=clickyear+"年"
    }else{
        month.innerHTML=clickmonth+"月";
    }
    let firstmonthdate=new Date(nowyear,clickmonth-1,1)
    let firstmonthweek=firstmonthdate.getDay();
    let nowdays=judgeMonDay(nowyear,clickmonth);
    insertDay(firstmonthweek,nowdays)
}

var right2=document.getElementsByClassName("right2")[0];
right2.addEventListener("click",goright2);
function goright2(){
    clickmonth++;
    if(clickyear===nowyear&clickmonth===nowmonth){
        choice[style].style="color:red"
    }else{
        choice[style].style=" "}
    if(clickmonth>12){
        clickmonth=clickmonth%12;
        month.innerHTML=clickmonth+"月";
        clickyear++;
        year.innerHTML=clickyear+"年"
    }else{
         month.innerHTML=clickmonth+"月";
    }
    let firstmonthdate=new Date(nowyear,clickmonth-1,1)
    let firstmonthweek=firstmonthdate.getDay();
    let nowdays=judgeMonDay(nowyear,clickmonth);
    insertDay(firstmonthweek,nowdays)
}