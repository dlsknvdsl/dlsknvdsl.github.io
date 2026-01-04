const scheds = 
{
    "장식 꼬리": {
        "CE200-3": [null, "7:00-8:15"],
        "CE200-3L": [null, null, "7:00-8:15", "7:00-8:15"],
        "CE123-1": [null, "9:30-10:45", "9:30-10:45", "9:30-10:45", "9:30-10:45"],
        "CE133-2": [null, "14:30-17:00", null, "14:30-15:45"],
        "SS041": [null, null, "8:15-9:30", null, "8:15-9:30", null, "8:15-9:30"],
        "CE135": [null, null, "12:00-13:15", null, "14:30-17:00"],
        "MEC103-1": [null, null, "13:15-14:30"],
        "CE135L-1": [null, null, "17:00-20:45"],
        "CE123-1L": [null, null, null, null, null, "7:00-10:45"]
    },
    "Ace": {
        "MEC102": [null, "13:15-14:30", null, null, null, "13:15-14:30"],
        "EECO101": [null, "18:15-19:30", null, "18:15-19:30", null, "18:15-19:30"],
        "SS041": [null, null, "8:15-9:30", null, "8:15-9:30", null, "8:15-9:30"],
        "ENV076": [null, null, "9:30-10:45", null, "9:30-10:45", null, "9:30-10:45"],
        "ME115": [null, null, "13:15-15:45", null, "14:30-15:45"],
        "ECE135": [null, null, "19:30-20:45", null, null, null, "13:15-14:30"],
        "ME141-1L": [null, null, null, "14:30-18:15"],
        "ECE135L": [null, null, null, null, null, null, "14:30-18:15"]
    },
    "Chester": {
        "BAT401": [null, "7:00-10:00", null, null, null, "12:00-14:00"],
        "GEd107": [null, "11:30-13:00", "14:00-15:30"],
        "IT311": [null, "13:00-16:00", null, null, null, "9:00-11:00"],
        "IT312": [null, null, "10:00-13:00", null, null, "7:00-9:00"],
        "IT313": [null, null, "15:30-17:30", "13:00-16:00"],
        "BAT402": [null, null, null, "16:00-19:00", null, "14:00-16:00"],
        "IT314": [null, null, null, null, null, null, "13:00-18:00"]
    },
    "Louzel": {
        "CE101-1P": [null, "7:00-10:45,14:30-15:45", null, "14:30-15:45"],
        "CE131P-1": [null, "15:45-17:00", "15:45-17:00", null, "15:45-17:00", "15:45-17:00", "15:45-18:15"],
        "EMGT101-1": [null, "18:15-19:30", null, "18:15-19:30"],
        "MEC103-1": [null, null, "13:15-14:30"],
        "TEC101": [null, null, null, "12:00-14:30", null, "12:00-13:15"],
        "CE151-1L": [null, null, null, null, null, null, "7:00-10:45"],
        "CE151-1": [null, null, null, null, null, null, "12:00-15:45"]
    },
    "Joseph": {
        "EE61L": [null, "7:00-10:00"],
        "EE65L": [null, "10:00-13:00"],
        "EE60L": [null, "13:00-16:00"],
        "COMM10": [null, null, "8:30-10:00", null, "8:30-10:00"],
        "EE62": [null, null, "10:00-11:30", null, "10:00-11:30"],
        "EE61": [null, null, "11:30-13:00", null, "11:30-13:00"],
        "NSTP2": [null, null, "13:00-16:00"],
        "EE65": [null, null, null, "10:00-11:30", null, "10:00-11:30"],
        "EE66": [null, null, null, "11:30-13:00", null, "11:30-13:00"],
        "EE60": [null, null, null, "15:00-16:00", null, "15:00-16:00"]
    },
    "Marga": {
        "NSTP2": [null, "9:00-12:00"],
        "FBS101L": [null, "13:00-16:00"],
        "SFI140": [null, null, "7:00-8:00", null, "7:00-8:00"],
        "COMM10": [null, null, "8:30-10:00", null, "8:30-10:00"],
        "SFI140L": [null, null, "10:00-13:00"],
        "FBS45": [null, null, "16:00-17:30", null, "16:00-17:30"],
        "FPPS11": [null, null, null, "7:00-8:00"],
        "FBS101": [null, null, null, "10:00-11:00", null, "10:00-11:00"],
        "FPPS11L": [null, null, null, "16:00-19:00", null, "16:00-19:00"],
        "FBS45L": [null, null, null, null, "13:00-16:00"]
    },
    "Rolan": {
        "STS": [null, "11:00-12:30", null, null, "11:00-12:30"],
        "SELF": [null, "12:30-14:00", null, null, "12:30-14:00"],
        "CALC": [null, "15:00-17:00", null, null, "15:00-17:00"],
        "FCL500": [null, "17:00-19:00"],
        "PHYS": [null, null, "7:00-8:30", null, null, "7:00-8:30"],
        "CPL": [null, null, "8:30-9:30", null, null, "8:30-9:30"],
        "MPC": [null, null, "15:00-17:00", null, null, "15:00-17:00"],
        "MOM": [null, null, "17:00-18:00", null, null, "17:00-18:00"],
        "CPLL": [null, null, null, null, "7:00-10:00"],
        "PHYSL": [null, null, null, null, null, "10:00-13:00"]
    },
    "Shek": {
        "EEE157": [null, null, "8:30-10:00", null, "8:30-10:00"],
        "PHYS73": [null, null, "10:00-11:30", "10:15-11:15", "10:00-11:30"],
        "EEE158": [null, null, "11:30-14:30"],
        "MUC10": [null, null, "14:30-16:00", null, "14:30-16:00"],
        "EEE151": [null, null, null, "8:30-10:00", null, "8:30-10:00"],
        "EEE155": [null, null, null, "14:30-16:00", null, "14:30-16:00"],
        "EEE153": [null, null, null, "16:00-17:30", null, "16:00-17:30"]
    },
    "Franco": {
        "ITEL201": [null, "8:00-11:00", null, "8:00-10:00"],
        "PATHFIT3": [null, "15:00-17:00"],
        "ITEC204": [null, null, "11:00-14:00", "10:00-12:00"],
        "ITEC205": [null, null, "15:00-17:00", null, "11:00-14:00"],
        "ITEP203": [null, null, null, "15:00-17:00"],
        "ITEL202": [null, null, null, null, "8:00-11:00,15:00-17:00"],
        "SOSLIT": [null, null, null, null, null, "13:00-16:00"]
    },
    "Sean": {
        "MATH000P": [null, "9:30-10:45", null, "9:30-10:45", null, "9:30-10:45"],
        "CEEL133-1": [null, "12:00-13:15", null, "12:00-13:15", null, "12:00-13:15"],
        "MEC103": [null, "13:15-14:30", null, "13:15-14:30", null, "13:15-14:30"],
        "IE101": [null, "17:00-19:30", null, null, null, "17:00-18:15"],
        "MEC102": [null, null, "12:00-13:15", null, "12:00-13:15"],
        "CE105": [null, null, null, null, "19:30-20:45", null, "7:00-9:30"],
        "EECO101": [null, null, null, null, null, "8:15-9:30", "13:15-15:45"]
    },
    "Kowin": {
        "SS032": [null, "8:15-9:30", null, "8:15-9:30", null, "8:15-9:30"],
        "MATH130": [null, "9:30-10:45", null, "9:30-10:45", null, "9:30-10:45"],
        "IT130": [null, "10:45-12:00", null, "10:45-12:00", null, "10:45-12:00"],
        "IT101-2": [null, "12:00-14:30"],
        "PE042": [null , null, "7:00-9:30"],
        "IT101-2L": [null, null, "10:45-14:30"],
        "ENG029": [null, null, null, "12:00-13:15", null, "12:00-13:15"]
    },
    "Jay": {
        "GED0011": [null, null, "9:00-10:50", null, null, "9:00-10:50"],
        "GED0009": [null, null, "15:00-16:50", null, null, "15:00-16:50"],
        "CCS0001LL-LEC": [null, null, "17:00-19:40"],
        "CCS0001LL-LAB": [null, null, null, "7:00-9:50"],
        "CCS0001LL-LAB": [null, null, null, "10:00-12:50"],
        "CCS0003LL-LEC": [null, null, null, null, null, "11:00-13:40"],
        "GED0006": [null, null, null, null, null, null, "7:00-9:40"],
        "GED0004A": [null, null, null, null, null, null, "13:00-17:00"]
    },
    "Tonio": {
        "GA-MEART": [null, "9:15-10:45", null, null, "11:00-12:30"],
        "CS-ADPRG": [null, "16:15-17:45", null, null, "16:15-17:45"],
        "GE-ETHIC": [null, null, "7:30-9:00", null, null, "7:30-9:00"],
        "ST-ADVDB": [null, null, "9:15-10:45", null, null, "9:15-10:45"],
        "CS-SWENG": [null, null, "11:00-12:30", null, null, "12:45-14:15"],
        "PE-DFOUR": [null, null, null, "8:00-10:00"],
        "LC-LSTWO": [null, null, null, null, null, null, "10:00-12:00"]
    }
};