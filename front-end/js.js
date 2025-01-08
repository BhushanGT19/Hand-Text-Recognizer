function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#mimg')
                .attr('src', e.target.result)
                .width(300)
                .height(300);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function submitImage(){

    // if image is not selected ask user to select the image by giving(alert) tag
    // call an api by passing an image  
    
    alert("Submit button is clicked");
}



var IsValid = false;
var IsCaps = false;
var IsShift = false;

var VirtualKey = {
    '113': 'ौ', '119': 'ै', '101': 'ा', '114': 'ी', '116': 'ू', '121': 'ब', '117': 'ह', '105': 'ग', '111': 'द', '112': 'ज',
    '97': 'ो', '115': 'े', '100': '्', '102': 'ि', '103': 'ु', '104': 'प', '106': 'र', '107': 'क', '108': 'त',
    '122': '', '120': 'ं', '99': 'म', '118': 'न', '98': 'व', '110': 'ल', '109': 'स',
    '81': 'औ', '87': 'ऐ', '69': 'आ', '82': 'ई', '84': 'ऊ', '89': 'भ', '85': 'ङ', '73': 'घ', '79': 'ध', '80': 'झ',
    '65': 'ओ', '83': 'ए', '68': 'अ', '70': 'इ', '71': 'उ', '72': 'फ', '74': 'ऱ', '75': 'ख', '76': 'थ',
    '90': '', '88': 'ँ', '67': 'ण', '86': '', '66': '', '78': 'ळ', '77': 'श',
    '96': '`', '49': '1', '50': '2', '51': '3', '52': '4', '53': '5', '54': '6', '55': '7', '56': '8', '57': '9', '48': '0', '45': '-', '61': 'ृ', '92': 'ॉ',
    '91': 'ड', '93': '़',
    '59': 'च', '39': 'ट',
    '44': ',', '46': '.', '47': 'य',
    '126': '', '33': 'ऍ', '64': 'ॅ', '35': '्', '36': 'र्', '37': 'ज्ञ', '94': 'त्र', '38': 'क्ष', '42': 'श्र', '40': '(', '41': ')', '95': 'ः', '43': 'ॠ', '124': 'ऑ',
    '123': 'ढ', '125': 'ञ',
    '58': 'छ', '34': 'ठ',
    '60': 'ष', '62': '।', '63': 'य़',
    '32': ' '
};

var VirtualKeyCaps = {
    '113': 'ौ', '119': 'ै', '101': 'ा', '114': 'ी', '116': 'ू', '121': 'ब', '117': 'ह', '105': 'ग', '111': 'द', '112': 'ज',
    '97': 'ो', '115': 'े', '100': '्', '102': 'ि', '103': 'ु', '104': 'प', '106': 'र', '107': 'क', '108': 'त',
    '122': '', '120': 'ं', '99': 'म', '118': 'न', '98': 'व', '110': 'ल', '109': 'स',
    '81': 'औ', '87': 'ऐ', '69': 'आ', '82': 'ई', '84': 'ऊ', '89': 'भ', '85': 'ङ', '73': 'घ', '79': 'ध', '80': 'झ',
    '65': 'ओ', '83': 'ए', '68': 'अ', '70': 'इ', '71': 'उ', '72': 'फ', '74': 'ऱ', '75': 'ख', '76': 'थ',
    '90': '', '88': 'ँ', '67': 'ण', '86': '', '66': '', '78': 'ळ', '77': 'श',
    '96': '', '49': 'ऍ', '50': 'ॅ', '51': '्', '52': 'र्', '53': 'ज्ञ', '54': 'त्र', '55': 'क्ष', '56': 'श्र', '57': '(', '48': ')', '45': 'ः', '61': 'ॠ', '92': 'ऑ',
    '91': 'ढ', '93': 'ञ',
    '59': 'छ', '39': 'ठ',
    '44': 'ष', '46': '।', '47': 'य़',
    '126': '', '33': '1', '64': '2', '35': '3', '36': '4', '37': '5', '94': '6', '38': '7', '42': '8', '40': '9', '41': '0', '95': '-', '43': 'ृ', '124': 'ॉ',
    '123': 'ड', '125': '़',
    '58': 'च', '34': 'ट',
    '60': ',', '62': '.', '63': 'य',
    '32': ' '
};

var LeftButton = {
    '81': '31', '87': '51', '69': '71', '82': '91', '84': '111', '89': '131', '85': '151', '73': '171', '79': '191', '80': '211',
    '65': '37', '83': '57', '68': '77', '70': '97', '71': '117', '72': '137', '74': '157', '75': '177', '76': '197',
    '90': '47', '88': '67', '67': '87', '86': '107', '66': '127', '78': '147', '77': '167',
    '96': '0', '49': '20', '50': '40', '51': '60', '52': '80', '53': '100', '54': '120', '55': '140', '56': '160', '57': '180', '48': '200', '189': '220', '187': '240', '220': '260',
    '192': '0', '33': '20', '64': '40', '35': '60', '36': '80', '37': '100', '94': '120', '38': '140', '42': '160', '40': '180', '41': '200', '95': '220', '43': '240', '124': '260',
    '219': '231', '221': '251',
    '186': '217', '222': '237',
    '188': '187', '190': '207', '191': '227',
    '32': ' '
};

var TopButton = {
    '81': '20', '87': '20', '69': '20', '82': '20', '84': '20', '89': '20', '85': '20', '73': '20', '79': '20', '80': '20',
    '65': '40', '83': '40', '68': '40', '70': '40', '71': '40', '72': '40', '74': '40', '75': '40', '76': '40',
    '90': '60', '88': '60', '67': '60', '86': '60', '66': '60', '78': '60', '77': '60',
    '96': '0', '49': '0', '50': '0', '51': '0', '52': '0', '53': '0', '54': '0', '55': '0', '56': '0', '57': '0', '48': '0', '189': '0', '187': '0', '220': '0',
    '192': '0', '33': '0', '64': '0', '35': '0', '36': '0', '37': '0', '94': '0', '38': '0', '42': '0', '40': '0', '41': '0', '95': '0', '43': '0', '124': '0',
    '219': '20', '221': '20',
    '186': '40', '222': '40',
    '188': '60', '190': '60', '191': '60',
    '32': ' '
};

var ValidButton = {
    '81': '1', '87': '1', '69': '1', '82': '1', '84': '1', '89': '1', '85': '1', '73': '1', '79': '1', '80': '1',
    '65': '1', '83': '1', '68': '1', '70': '1', '71': '1', '72': '1', '74': '1', '75': '1', '76': '1',
    '90': '1', '88': '1', '67': '1', '86': '1', '66': '1', '78': '1', '77': '1',
    '96': '0', '49': '0', '50': '0', '51': '0', '52': '0', '53': '0', '54': '0', '55': '0', '56': '0', '57': '0', '48': '0', '189': '0', '187': '0', '220': '0',
    '192': '0', '33': '0', '64': '0', '35': '0', '36': '0', '37': '0', '94': '0', '38': '0', '42': '0', '40': '0', '41': '0', '95': '0', '43': '0', '124': '0',
    '219': '1', '221': '1',
    '186': '1', '222': '1',
    '188': '1', '190': '1', '191': '1',
    '32': ' ',
    '8': '1', '9': '1', '13': '1', '16': '1', '20': '1', '46': '1'
};

function checkCode(evt) {
    var kcode = 0;

    if (document.all) {
        var evt = window.event;
        kcode = evt.keyCode;
    }
    else kcode = evt.which;

    if (ValidButton[kcode]) { ButtonDown(kcode); IsValid = true; } else { IsValid = false; };
}

function reset() {
    if (!IsCaps && !IsShift) {
        document.getElementById('normal').style.visibility = "visible";
        document.getElementById('shift').style.visibility = "hidden";
        document.getElementById('caps').style.visibility = "hidden";
    }
    else if (IsCaps && !IsShift) {
        document.getElementById('normal').style.visibility = "hidden";
        document.getElementById('shift').style.visibility = "hidden";
        document.getElementById('caps').style.visibility = "visible";

        document.getElementById('capsS').style.visibility = "visible";
    }
    else if (!IsCaps && IsShift) {
        document.getElementById('normal').style.visibility = "hidden";
        document.getElementById('shift').style.visibility = "visible";
        document.getElementById('caps').style.visibility = "hidden";
    }
    else if (IsCaps && IsShift) {
        document.getElementById('normal').style.visibility = "visible";
        document.getElementById('shift').style.visibility = "hidden";
        document.getElementById('caps').style.visibility = "hidden";

        document.getElementById('capsS').style.visibility = "visible";
    }
}

function restoreCode(evt) {
    var kcode = 0;

    if (document.all) {
        var evt = window.event;
        kcode = evt.keyCode;
    }
    else kcode = evt.which;

    ButtonUp(kcode);
}

function writeKeyPressed(evt) {
    var kcode = 0;

    if (document.all) {
        var evt = window.event;
        kcode = evt.keyCode;
    }
    else kcode = evt.which;

    InsertChar('k', kcode);

    return false;
};

function InsertChar(mode, c) {
    var TempStr = '';

    if ((c >= 65 && c <= 90) && !IsShift) {
        IsCaps = true;
    }
    else if ((c >= 97 && c <= 122) && IsShift) {
        IsCaps = true;
    }
    else if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) {
        IsCaps = false;
    }
    reset();

    if (!IsCaps && !IsShift) {
        TempStr = VirtualKey[c];
    }
    else if (IsCaps && !IsShift) {
        TempStr = VirtualKeyCaps[c];
    }
    else if (!IsCaps && IsShift) {
        TempStr = VirtualKey[c];
    }
    else if (IsCaps && IsShift) {
        if (mode == 'k') {
            TempStr = VirtualKeyCaps[c];
        }
        else if (mode == 'm') {
            TempStr = VirtualKey[c];
        }
        else {
            document.getElementById('txtHindi').value = c + ' ' + IsCaps + ' ' + IsShift + ' ' + mode;
        }
    }

    if (TempStr != undefined)
        document.getElementById('txtHindi').value = document.getElementById('txtHindi').value + TempStr;
    document.getElementById('txtHindi').focus();

    
}

function ButtonDown(c) {
    if (c == 8) {
        document.getElementById('bSpace').style.visibility = "visible";
    }
    else if (c == 9) {
        document.getElementById('tab').style.visibility = "visible";
    }
    else if (c == 13) {
        document.getElementById('enter').style.visibility = "visible";
    }
    else if (c == 16) {
        IsShift = true;
        document.getElementById('ShiftL').style.visibility = "visible";
        document.getElementById('ShiftR').style.visibility = "visible";
    }
    else if (c == 20) {
        IsCaps = !IsCaps;
        document.getElementById('capsS').style.visibility = "visible";
    }
    else if (c == 32) {
        document.getElementById('Space').style.visibility = "visible";
    }
    else if (c == 46) {
        document.getElementById('delete').style.visibility = "visible";
    }
    else {
        document.getElementById('Butt').style.left = LeftButton[c] + 'px';
        document.getElementById('Butt').style.top = TopButton[c] + 'px';
        document.getElementById('Butt').style.visibility = "visible";
    }
    reset();
}

function ButtonUp(c) {
    if (c == 16) {
        IsShift = false;
    }

    reset();

    document.getElementById('Butt').style.visibility = "hidden";
    document.getElementById('Space').style.visibility = "hidden";
    document.getElementById('bSpace').style.visibility = "hidden";
    document.getElementById('delete').style.visibility = "hidden";
    document.getElementById('enter').style.visibility = "hidden";
    document.getElementById('tab').style.visibility = "hidden";
    if (!IsShift) {
        document.getElementById('ShiftL').style.visibility = "hidden";
        document.getElementById('ShiftR').style.visibility = "hidden";
    }
    if (!IsCaps) {
        document.getElementById('capsS').style.visibility = "hidden";
    }

    document.getElementById('txtHindi').focus();
}

function Shift() {
    if (document.getElementById('normal').style.visibility == "visible") {
        document.getElementById('normal').style.visibility = "hidden";
        document.getElementById('shift').style.visibility = "visible";
    }
    else {
        document.getElementById('normal').style.visibility = "visible";
        document.getElementById('shift').style.visibility = "hidden";
    }
}

