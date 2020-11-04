'use strict';

var storeArray = [];
var allStoreHourHeader = [];
var newStore;
var i = 0;
var j = 0;
var salmonCookieTableID = 'scTableID';
var sctRowID = [];
var allStoreTotalSalesPerHour = []; // bottom footer row

// takes in military time and turns it into an array of '8:00am, 9:00am, 10:00am'
function hourParse (hpStartHour, hpEndHour){
    var currentHour = hpStartHour;
    var strAMPM = 'AM';
    var hpStoreHourBr = [];
    var displayHour = 0;

    // takes a store open and closing time period in military time and breaks it down into 12-hour time period
    while(currentHour !== hpEndHour){
        if(currentHour === 12){
            displayHour = currentHour;
            strAMPM = 'PM';
        }else if(currentHour === 24){
            displayHour = currentHour - 12;
            strAMPM = 'AM';
            currentHour = 0;
        }else if(currentHour > 12){
            displayHour = currentHour - 12;
        }else{
            displayHour = currentHour;
        }

        hpStoreHourBr.push(`${displayHour}:00 ${strAMPM}`);
        currentHour++;
    }

    return hpStoreHourBr
}

function jsElementCreater(parentElementID, elementToBeCreated, idOfNewElement='', elementTextContent='', elementPaddingAmount='', elementBorderStyle='', elementBorderWidth=''){
    // get the parent from the DOM
    var elementParent = document.getElementById(parentElementID);

    // create an element
    var newElement = document.createElement(elementToBeCreated);

    // once we create a new element, we can add an id to that element using .setAttribute('id', 'this-is-my-id')
    if(idOfNewElement){
        newElement.setAttribute('id',idOfNewElement);
    }

    // fill it with conent
    if(elementTextContent){
        newElement.textContent = elementTextContent;
    }

    // give the element padding
    if(elementPaddingAmount){
        newElement.style.padding = elementPaddingAmount;
    }

    // give it a border
    if(elementBorderStyle){
        newElement.style.borderStyle = elementBorderStyle;
    }

    // give it a border width
    if(elementBorderWidth){
        newElement.style.borderWidth = elementBorderWidth;
    }

    // append the element to the parent
    elementParent.appendChild(newElement);
}

function AddStore (addStoreLocation, addOpenHour, addCloseHour, addMinCust, addMaxCust, addAvgSales){
    this.storeLocation = addStoreLocation;
    this.minCust = addMinCust;
    this.maxCust = addMaxCust;
    this.avgSales = addAvgSales;
    this.openHour = addOpenHour;
    this.closeHour = addCloseHour;
    this.salesPerHour = [];
    this.totalSales = 0;

    storeArray.push(this);
}

AddStore.prototype.randCustPerHour = function(){
    //Code Taken from
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}

// This function requires Opening and Closing to be put in 24 hour system (Military Time)
AddStore.prototype.cookiesSoldPerHour = function(){
    // converts a 24 hour time system into a 12 hour array
    var cookiesSoldPerHourStoreOpenHours = hourParse(this.openHour,this.closeHour)
    var cookiesSoldPerHourIndex = 0;

    for(cookiesSoldPerHourIndex = 0; cookiesSoldPerHourIndex < cookiesSoldPerHourStoreOpenHours.length; cookiesSoldPerHourIndex++){
        // generating our sales per hour array
        this.salesPerHour.push(Math.round(this.randCustPerHour() * this.avgSales));

        // add the sales per hour to the total sales
        this.totalSales += this.salesPerHour[cookiesSoldPerHourIndex];

        // error checking - if he gets NaN, he's pushing 0
        if(isNaN(allStoreTotalSalesPerHour[cookiesSoldPerHourIndex])){
            allStoreTotalSalesPerHour.push(0);
        }

        allStoreTotalSalesPerHour[cookiesSoldPerHourIndex] = allStoreTotalSalesPerHour[cookiesSoldPerHourIndex] + this.salesPerHour[cookiesSoldPerHourIndex];
    }
}

AddStore.prototype.render = function(orParentElementID){
    var orIndex = 0;
    var orPadding = '10px';
    var orBorderType = 'solid';
    var orBorderWidth = '1px';

    // magic function that creates an element and adds it to the DOM
    // making our header
    jsElementCreater(orParentElementID,'th',false,this.storeLocation,orPadding,orBorderType,orBorderWidth);

    for(orIndex=0; orIndex < this.salesPerHour.length; orIndex++){
        // making our sales numbers
        jsElementCreater(orParentElementID,'td',false,this.salesPerHour[orIndex],orPadding,orBorderType,orBorderWidth)
    }
}

function tableHourHeaders (thhStoreArray){
    var earliestOpen = 6;
    var latestClose = 20;
    var thhIndex;

    for(thhIndex = 0; thhIndex < thhStoreArray.length; thhIndex++){
        // if the earliest open is later first hour in the array, then we set earliestOpen to the first hour in the array
        if(earliestOpen > thhStoreArray[thhIndex].openHour){
            earliestOpen = thhStoreArray[thhIndex].openHour;
        }

        // same thing with the close
        if(latestClose < thhStoreArray[thhIndex].closeHour){
            latestClose = thhStoreArray[thhIndex].closeHour;
        }
    }

    return hourParse(earliestOpen, latestClose);
}

newStore = new AddStore('Seattle',6,20,23,65,6.3);
newStore = new AddStore('Tokyo',6,20,3,24,1.2);
newStore = new AddStore('Dubai',6,20,11,38,3.7);
newStore = new AddStore('Paris',6,20,20,38,2.3);
newStore = new AddStore('Lima',6,20,2,16,4.6);

allStoreHourHeader = tableHourHeaders(storeArray);

for(i = 0; i < storeArray.length; i++){
    storeArray[i].cookiesSoldPerHour();
}

// starts to make our table
jsElementCreater('sCookiesSold','tbody',salmonCookieTableID,false,false,false);

// i is travering the table
// i = 0 is the hours row
// i = 1 is the first location => Seattle...
// storeArray.length is only 5 so we need to add 1  to the length to account for the header and footer row
for(i=0; i <= storeArray.length + 1; i++){
    // make an id for each row
    sctRowID[i] = `sctRow${i+1}`;
    jsElementCreater(salmonCookieTableID,'tr',sctRowID[i]);

    if(i === 0){
        jsElementCreater(sctRowID[i],'th',false,false,'10px');
        
        // this loop is creating our store hour header
        for(j = 0; j < allStoreHourHeader.length; j++){
            jsElementCreater(sctRowID[i],'th',false,allStoreHourHeader[j],'10px');
        }
    }else if (i === storeArray.length + 1){
        // this makes the word 'total' at the bottom
        jsElementCreater(sctRowID[i],'th',false,'Total','10px','solid','1px');
        
        // this generates the footer row
        for(j = 0; j < allStoreTotalSalesPerHour.length; j++){
            jsElementCreater(sctRowID[i],'th',false,allStoreTotalSalesPerHour[j],'10px','solid','1px');
        }
    }else{
        // this generates cookie sales each hour
        storeArray[i-1].render(sctRowID[i]);
    }
}

