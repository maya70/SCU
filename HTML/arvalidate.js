function validateForm(form) {
    var elements = form.elements;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].id.indexOf("required_") == 0 && isEmpty(elements[i].value)) {
            alert('لا يمكن ترك هذا الحقل فارغا');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('required') && isEmpty(elements[i].value)) {
            alert('لا يمكن ترك هذا الحقل فارغا');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('ftype') == 'number' && !isNumber(elements[i].value)) {
            alert('هذا الحقل لابد ان يكون رقم');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('ftype') == 'txt' && !isTxt(elements[i].value) && !isEmpty(elements[i].value)) {
            alert('هذا الحقل لابد ان يكون حروف فقط');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('ftype') == 'date' && !isDate(elements[i].value)) {
            alert('هذا الحقل لابد ان يكون تاريخ');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('ftype') == 'eil' && !isEmail(elements[i].value)) {
            alert('هذا الحقل لابد أن يكون بريد الكتروني');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('ftype') == 'url' && !isUrl(elements[i].value)) {
            alert('هذا الحقل لابد أن يكون رابط');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('ftype') == 'opnumber' && !isNumber(elements[i].value) && !isEmpty(elements[i].value)) {
            alert('هذا الحقل لابد ان يكون رقم');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('ftype') == 'optxt' && !isTxt(elements[i].value) && !isEmpty(elements[i].value)) {
            alert('هذا الحقل لابد ان يكون حروف فقط');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('ftype') == 'opemail' && !isEmpty(elements[i].value) && !isEmail(elements[i].value)) {
            alert('هذا الحقل لابد أن يكون بريد الكتروني');
            elements[i].focus();
            return false;
        }
        if (elements[i].getAttribute('ftype') == 'opurl' && !isEmpty(elements[i].value) && !isUrl(elements[i].value)) {
            alert('هذا الحقل لابد أن يكون رابط');
            elements[i].focus();
            return false;
        }
    }
    form.submit();
    return true;
}
function isTxt(s) {
    var reg = /^[a-zA-Z\u0600-\u06ff\ufb50-\ufdff\ufe70-\ufeff]/;
    return reg.test(s);
}
function isUrl(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}
function isEmail(s) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(s);
}
function isEmpty(inputStr) {
    if (inputStr == '' || inputStr == null) {
        return true;
    }
    return false;
}
function isNumber(inputStr) {

    var check = /^[0-9]*\.?[0-9]+$/;
    return check.test(inputStr);

}
var dtCh = "/";
var minYear = 1800;
var maxYear = 2100;

function isInteger(s) {
    if (s == '') return true;
    var i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function stripCharsInBag(s, bag) {
    var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function daysInFebruary(year) {
    // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (((year % 4 == 0) && ((!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28);
}
function DaysArray(n) {
    for (var i = 1; i <= n; i++) {
        this[i] = 31
        if (i == 4 || i == 6 || i == 9 || i == 11) { this[i] = 30 }
        if (i == 2) { this[i] = 29 }
    }
    return this
}

function isDate(dtStr) {
    if (dtStr == '') return true;
    var daysInMonth = DaysArray(12)
    var pos1 = dtStr.indexOf(dtCh)
    var pos2 = dtStr.indexOf(dtCh, pos1 + 1)
    var strDay = dtStr.substring(0, pos1)
    var strMonth = dtStr.substring(pos1 + 1, pos2)
    var strYear = dtStr.substring(pos2 + 1)
    strYr = strYear
    if (strDay.charAt(0) == "0" && strDay.length > 1) strDay = strDay.substring(1)
    if (strMonth.charAt(0) == "0" && strMonth.length > 1) strMonth = strMonth.substring(1)
    for (var i = 1; i <= 3; i++) {
        if (strYr.charAt(0) == "0" && strYr.length > 1) strYr = strYr.substring(1)
    }
    month = parseInt(strMonth)
    day = parseInt(strDay)
    year = parseInt(strYr)
    if (pos1 == -1 || pos2 == -1) {
        alert("صيغة التاريخ لابد ان تكون يوم/شهر/سنه");
        return false
    }
    if (strMonth.length < 1 || month < 1 || month > 12) {
        alert("من فضلك أدخل الشهر بطريقه صحيحه");
        return false
    }
    if (strDay.length < 1 || day < 1 || day > 31 || (month == 2 && day > daysInFebruary(year)) || day > daysInMonth[month]) {
        alert("من فضلك أدخل يوم بطريقه صحيحه");
        return false
    }
    if (strYear.length != 4 || year == 0 || year < minYear || year > maxYear) {
        alert("من فضلك أدخل السنه بطريقه صحيحه");
        return false
    }
    if (dtStr.indexOf(dtCh, pos2 + 1) != -1 || isInteger(stripCharsInBag(dtStr, dtCh)) == false) {
        alert("من فضلك أدخل التاريخ بصيغه صحيحه");
        return false
    }
    return true
}

