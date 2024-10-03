import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShareService } from 'src/app/shared/service/share.service';
import { FieldSetting } from '../field-setting.model';

@Component({
    selector: 'app-combo-address',
    templateUrl: './combo-address.component.html',
    styleUrls: ['./combo-address.component.scss']
})
export class ComboAddressComponent implements OnChanges
{
    @Input() fieldSettings!: FieldSetting[];
    @Input() inputForm!: FormGroup;

    constructor(public shareService: ShareService) { }
    allOptions = [{
        "type": "ZIP",
        "code": "100",
        "name": "中正區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "103",
        "name": "大同區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "104",
        "name": "中山區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "105",
        "name": "松山區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "106",
        "name": "大安區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "108",
        "name": "萬華區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "110",
        "name": "信義區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "111",
        "name": "士林區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "112",
        "name": "北投區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "114",
        "name": "內湖區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "115",
        "name": "南港區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "116",
        "name": "文山區",
        "cityCode": "A"
    },
    {
        "type": "ZIP",
        "code": "200",
        "name": "仁愛區",
        "cityCode": "C"
    },
    {
        "type": "ZIP",
        "code": "201",
        "name": "信義區",
        "cityCode": "C"
    },
    {
        "type": "ZIP",
        "code": "202",
        "name": "中正區",
        "cityCode": "C"
    },
    {
        "type": "ZIP",
        "code": "203",
        "name": "中山區",
        "cityCode": "C"
    },
    {
        "type": "ZIP",
        "code": "204",
        "name": "安樂區",
        "cityCode": "C"
    },
    {
        "type": "ZIP",
        "code": "205",
        "name": "暖暖區",
        "cityCode": "C"
    },
    {
        "type": "ZIP",
        "code": "206",
        "name": "七堵區",
        "cityCode": "C"
    },
    {
        "type": "ZIP",
        "code": "207",
        "name": "萬里區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "208",
        "name": "金山區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "209",
        "name": "南竿鄉",
        "cityCode": "Z"
    },
    {
        "type": "ZIP",
        "code": "210",
        "name": "北竿鄉",
        "cityCode": "Z"
    },
    {
        "type": "ZIP",
        "code": "211",
        "name": "莒光鄉",
        "cityCode": "Z"
    },
    {
        "type": "ZIP",
        "code": "212",
        "name": "東引鄉",
        "cityCode": "Z"
    },
    {
        "type": "ZIP",
        "code": "220",
        "name": "板橋區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "221",
        "name": "汐止區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "222",
        "name": "深坑區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "223",
        "name": "石碇區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "224",
        "name": "瑞芳區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "226",
        "name": "平溪區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "227",
        "name": "雙溪區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "228",
        "name": "貢寮區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "231",
        "name": "新店區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "232",
        "name": "坪林區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "233",
        "name": "烏來區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "234",
        "name": "永和區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "235",
        "name": "中和區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "236",
        "name": "土城區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "237",
        "name": "三峽區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "238",
        "name": "樹林區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "239",
        "name": "鶯歌區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "241",
        "name": "三重區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "242",
        "name": "新莊區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "243",
        "name": "泰山區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "244",
        "name": "林口區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "247",
        "name": "蘆洲區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "248",
        "name": "五股區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "249",
        "name": "八里區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "251",
        "name": "淡水區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "252",
        "name": "三芝區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "253",
        "name": "石門區",
        "cityCode": "F"
    },
    {
        "type": "ZIP",
        "code": "260",
        "name": "宜蘭市",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "261",
        "name": "頭城鎮",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "262",
        "name": "礁溪鄉",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "263",
        "name": "壯圍鄉",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "264",
        "name": "員山鄉",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "265",
        "name": "羅東鎮",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "266",
        "name": "三星鄉",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "267",
        "name": "大同鄉",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "268",
        "name": "五結鄉",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "269",
        "name": "冬山鄉",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "270",
        "name": "蘇澳鎮",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "272",
        "name": "南澳鄉",
        "cityCode": "G"
    },
    {
        "type": "ZIP",
        "code": "300",
        "name": "新竹市",
        "cityCode": "O"
    },
    {
        "type": "ZIP",
        "code": "302",
        "name": "竹北市",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "303",
        "name": "湖口鄉",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "304",
        "name": "新豐鄉",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "305",
        "name": "新埔鎮",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "306",
        "name": "關西鎮",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "307",
        "name": "芎林鄉",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "308",
        "name": "寶山鄉",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "310",
        "name": "竹東鎮",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "311",
        "name": "五峰鄉",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "312",
        "name": "橫山鄉",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "313",
        "name": "尖石鄉",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "314",
        "name": "北埔鄉",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "315",
        "name": "峨眉鄉",
        "cityCode": "J"
    },
    {
        "type": "ZIP",
        "code": "320",
        "name": "中壢區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "324",
        "name": "平鎮區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "325",
        "name": "龍潭區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "326",
        "name": "楊梅區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "327",
        "name": "新屋區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "328",
        "name": "觀音區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "330",
        "name": "桃園區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "333",
        "name": "龜山區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "334",
        "name": "八德區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "335",
        "name": "大溪區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "336",
        "name": "復興區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "337",
        "name": "大園區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "338",
        "name": "蘆竹區",
        "cityCode": "H"
    },
    {
        "type": "ZIP",
        "code": "350",
        "name": "竹南鎮",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "351",
        "name": "頭份市",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "352",
        "name": "三灣鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "353",
        "name": "南庄鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "354",
        "name": "獅潭鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "356",
        "name": "後龍鎮",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "357",
        "name": "通霄鎮",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "358",
        "name": "苑裡鎮",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "360",
        "name": "苗栗市",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "361",
        "name": "造橋鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "362",
        "name": "頭屋鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "363",
        "name": "公館鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "364",
        "name": "大湖鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "365",
        "name": "泰安鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "366",
        "name": "銅鑼鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "367",
        "name": "三義鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "368",
        "name": "西湖鄉",
        "cityCode": "K"
    },
    {
        "type": "ZIP",
        "code": "369",
        "name": "卓蘭鎮",
        "cityCode": "K"
    },
    {
        "type": "CITY",
        "code": "W",
        "name": "金門縣",
        "cityCode": "W"
    },
    {
        "type": "CITY",
        "code": "Z",
        "name": "連江縣",
        "cityCode": "Z"
    },
    {
        "type": "CITY",
        "code": "F",
        "name": "新北市",
        "cityCode": "F"
    },
    {
        "type": "CITY",
        "code": "G",
        "name": "宜蘭縣",
        "cityCode": "G"
    },
    {
        "type": "CITY",
        "code": "H",
        "name": "桃園市",
        "cityCode": "H"
    },
    {
        "type": "CITY",
        "code": "J",
        "name": "新竹縣",
        "cityCode": "J"
    },
    {
        "type": "CITY",
        "code": "K",
        "name": "苗栗縣",
        "cityCode": "K"
    },
    {
        "type": "CITY",
        "code": "N",
        "name": "彰化縣",
        "cityCode": "N"
    },
    {
        "type": "CITY",
        "code": "M",
        "name": "南投縣",
        "cityCode": "M"
    },
    {
        "type": "CITY",
        "code": "P",
        "name": "雲林縣",
        "cityCode": "P"
    },
    {
        "type": "CITY",
        "code": "Q",
        "name": "嘉義縣",
        "cityCode": "Q"
    },
    {
        "type": "CITY",
        "code": "T",
        "name": "屏東縣",
        "cityCode": "T"
    },
    {
        "type": "CITY",
        "code": "V",
        "name": "臺東縣",
        "cityCode": "V"
    },
    {
        "type": "CITY",
        "code": "U",
        "name": "花蓮縣",
        "cityCode": "U"
    },
    {
        "type": "CITY",
        "code": "X",
        "name": "澎湖縣",
        "cityCode": "X"
    },
    {
        "type": "CITY",
        "code": "C",
        "name": "基隆市",
        "cityCode": "C"
    },
    {
        "type": "CITY",
        "code": "O",
        "name": "新竹市",
        "cityCode": "O"
    },
    {
        "type": "CITY",
        "code": "B",
        "name": "臺中市",
        "cityCode": "B"
    },
    {
        "type": "CITY",
        "code": "I",
        "name": "嘉義市",
        "cityCode": "I"
    },
    {
        "type": "CITY",
        "code": "D",
        "name": "臺南市",
        "cityCode": "D"
    },
    {
        "type": "CITY",
        "code": "A",
        "name": "臺北市",
        "cityCode": "A"
    },
    {
        "type": "CITY",
        "code": "E",
        "name": "高雄市",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "400",
        "name": "中區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "401",
        "name": "東區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "402",
        "name": "南區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "403",
        "name": "西區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "404",
        "name": "北區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "406",
        "name": "北屯區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "407",
        "name": "西屯區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "408",
        "name": "南屯區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "411",
        "name": "太平區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "412",
        "name": "大里區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "413",
        "name": "霧峰區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "414",
        "name": "烏日區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "420",
        "name": "豐原區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "421",
        "name": "后里區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "422",
        "name": "石岡區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "423",
        "name": "東勢區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "424",
        "name": "和平區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "426",
        "name": "新社區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "427",
        "name": "潭子區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "428",
        "name": "大雅區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "429",
        "name": "神岡區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "432",
        "name": "大肚區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "433",
        "name": "沙鹿區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "434",
        "name": "龍井區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "435",
        "name": "梧棲區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "436",
        "name": "清水區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "437",
        "name": "大甲區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "438",
        "name": "外埔區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "439",
        "name": "大安區",
        "cityCode": "B"
    },
    {
        "type": "ZIP",
        "code": "500",
        "name": "彰化市",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "502",
        "name": "芬園鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "503",
        "name": "花壇鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "504",
        "name": "秀水鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "505",
        "name": "鹿港鎮",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "506",
        "name": "福興鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "507",
        "name": "線西鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "508",
        "name": "和美鎮",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "509",
        "name": "伸港鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "510",
        "name": "員林市",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "511",
        "name": "社頭鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "512",
        "name": "永靖鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "513",
        "name": "埔心鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "514",
        "name": "溪湖鎮",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "515",
        "name": "大村鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "516",
        "name": "埔鹽鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "520",
        "name": "田中鎮",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "521",
        "name": "北斗鎮",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "522",
        "name": "田尾鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "523",
        "name": "埤頭鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "524",
        "name": "溪州鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "525",
        "name": "竹塘鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "526",
        "name": "二林鎮",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "527",
        "name": "大城鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "528",
        "name": "芳苑鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "530",
        "name": "二水鄉",
        "cityCode": "N"
    },
    {
        "type": "ZIP",
        "code": "540",
        "name": "南投市",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "541",
        "name": "中寮鄉",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "542",
        "name": "草屯鎮",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "544",
        "name": "國姓鄉",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "545",
        "name": "埔里鎮",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "546",
        "name": "仁愛鄉",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "551",
        "name": "名間鄉",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "552",
        "name": "集集鎮",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "553",
        "name": "水里鄉",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "555",
        "name": "魚池鄉",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "556",
        "name": "信義鄉",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "557",
        "name": "竹山鎮",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "558",
        "name": "鹿谷鄉",
        "cityCode": "M"
    },
    {
        "type": "ZIP",
        "code": "600",
        "name": "嘉義市",
        "cityCode": "I"
    },
    {
        "type": "ZIP",
        "code": "602",
        "name": "番路鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "603",
        "name": "梅山鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "604",
        "name": "竹崎鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "605",
        "name": "阿里山鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "606",
        "name": "中埔鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "607",
        "name": "大埔鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "608",
        "name": "水上鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "611",
        "name": "鹿草鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "612",
        "name": "太保市",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "613",
        "name": "朴子市",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "614",
        "name": "東石鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "615",
        "name": "六腳鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "616",
        "name": "新港鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "621",
        "name": "民雄鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "622",
        "name": "大林鎮",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "623",
        "name": "溪口鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "624",
        "name": "義竹鄉",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "625",
        "name": "布袋鎮",
        "cityCode": "Q"
    },
    {
        "type": "ZIP",
        "code": "630",
        "name": "斗南鎮",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "631",
        "name": "大埤鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "632",
        "name": "虎尾鎮",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "633",
        "name": "土庫鎮",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "634",
        "name": "褒忠鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "635",
        "name": "東勢鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "636",
        "name": "台西鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "637",
        "name": "崙背鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "638",
        "name": "麥寮鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "640",
        "name": "斗六市",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "643",
        "name": "林內鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "646",
        "name": "古坑鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "647",
        "name": "莿桐鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "648",
        "name": "西螺鎮",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "649",
        "name": "二崙鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "651",
        "name": "北港鎮",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "652",
        "name": "水林鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "653",
        "name": "口湖鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "654",
        "name": "四湖鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "655",
        "name": "元長鄉",
        "cityCode": "P"
    },
    {
        "type": "ZIP",
        "code": "700",
        "name": "中西區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "701",
        "name": "東區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "702",
        "name": "南區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "704",
        "name": "北區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "708",
        "name": "安平區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "709",
        "name": "安南區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "710",
        "name": "永康區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "711",
        "name": "歸仁區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "712",
        "name": "新化區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "713",
        "name": "左鎮區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "714",
        "name": "玉井區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "715",
        "name": "楠西區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "716",
        "name": "南化區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "717",
        "name": "仁德區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "718",
        "name": "關廟區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "719",
        "name": "龍崎區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "720",
        "name": "官田區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "721",
        "name": "麻豆區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "722",
        "name": "佳里區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "723",
        "name": "西港區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "724",
        "name": "七股區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "725",
        "name": "將軍區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "726",
        "name": "學甲區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "727",
        "name": "北門區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "730",
        "name": "新營區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "731",
        "name": "後壁區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "732",
        "name": "白河區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "733",
        "name": "東山區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "734",
        "name": "六甲區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "735",
        "name": "下營區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "736",
        "name": "柳營區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "737",
        "name": "鹽水區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "741",
        "name": "善化區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "742",
        "name": "大內區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "743",
        "name": "山上區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "744",
        "name": "新市區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "745",
        "name": "安定區",
        "cityCode": "D"
    },
    {
        "type": "ZIP",
        "code": "800",
        "name": "新興區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "801",
        "name": "前金區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "802",
        "name": "苓雅區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "803",
        "name": "鹽埕區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "804",
        "name": "鼓山區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "805",
        "name": "旗津區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "806",
        "name": "前鎮區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "807",
        "name": "三民區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "811",
        "name": "楠梓區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "812",
        "name": "小港區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "813",
        "name": "左營區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "814",
        "name": "仁武區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "815",
        "name": "大社區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "820",
        "name": "岡山區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "821",
        "name": "路竹區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "822",
        "name": "阿蓮區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "823",
        "name": "田寮區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "824",
        "name": "燕巢區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "825",
        "name": "橋頭區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "826",
        "name": "梓官區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "827",
        "name": "彌陀區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "828",
        "name": "永安區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "829",
        "name": "湖內區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "830",
        "name": "鳳山區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "831",
        "name": "大寮區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "832",
        "name": "林園區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "833",
        "name": "鳥松區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "840",
        "name": "大樹區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "842",
        "name": "旗山區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "843",
        "name": "美濃區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "844",
        "name": "六龜區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "845",
        "name": "內門區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "846",
        "name": "杉林區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "847",
        "name": "甲仙區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "848",
        "name": "桃源區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "849",
        "name": "那瑪夏區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "851",
        "name": "茂林區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "852",
        "name": "茄萣區",
        "cityCode": "E"
    },
    {
        "type": "ZIP",
        "code": "880",
        "name": "馬公市",
        "cityCode": "X"
    },
    {
        "type": "ZIP",
        "code": "881",
        "name": "西嶼鄉",
        "cityCode": "X"
    },
    {
        "type": "ZIP",
        "code": "882",
        "name": "望安鄉",
        "cityCode": "X"
    },
    {
        "type": "ZIP",
        "code": "883",
        "name": "七美鄉",
        "cityCode": "X"
    },
    {
        "type": "ZIP",
        "code": "884",
        "name": "白沙鄉",
        "cityCode": "X"
    },
    {
        "type": "ZIP",
        "code": "885",
        "name": "湖西鄉",
        "cityCode": "X"
    },
    {
        "type": "ZIP",
        "code": "890",
        "name": "金沙鎮",
        "cityCode": "W"
    },
    {
        "type": "ZIP",
        "code": "891",
        "name": "金湖鎮",
        "cityCode": "W"
    },
    {
        "type": "ZIP",
        "code": "892",
        "name": "金寧鄉",
        "cityCode": "W"
    },
    {
        "type": "ZIP",
        "code": "893",
        "name": "金城鎮",
        "cityCode": "W"
    },
    {
        "type": "ZIP",
        "code": "894",
        "name": "烈嶼鄉",
        "cityCode": "W"
    },
    {
        "type": "ZIP",
        "code": "896",
        "name": "烏坵鄉",
        "cityCode": "W"
    },
    {
        "type": "ZIP",
        "code": "900",
        "name": "屏東市",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "901",
        "name": "三地門鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "902",
        "name": "霧台鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "903",
        "name": "瑪家鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "904",
        "name": "九如鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "905",
        "name": "里港鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "906",
        "name": "高樹鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "907",
        "name": "鹽埔鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "908",
        "name": "長治鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "909",
        "name": "麟洛鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "911",
        "name": "竹田鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "912",
        "name": "內埔鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "913",
        "name": "萬丹鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "920",
        "name": "潮州鎮",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "921",
        "name": "泰武鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "922",
        "name": "來義鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "923",
        "name": "萬巒鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "924",
        "name": "崁頂鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "925",
        "name": "新埤鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "926",
        "name": "南州鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "927",
        "name": "林邊鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "928",
        "name": "東港鎮",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "929",
        "name": "琉球鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "931",
        "name": "佳冬鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "932",
        "name": "新園鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "940",
        "name": "枋寮鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "941",
        "name": "枋山鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "942",
        "name": "春日鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "943",
        "name": "獅子鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "944",
        "name": "車城鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "945",
        "name": "牡丹鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "946",
        "name": "恆春鎮",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "947",
        "name": "滿州鄉",
        "cityCode": "T"
    },
    {
        "type": "ZIP",
        "code": "950",
        "name": "台東市",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "951",
        "name": "綠島鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "952",
        "name": "蘭嶼鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "953",
        "name": "延平鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "954",
        "name": "卑南鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "955",
        "name": "鹿野鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "956",
        "name": "關山鎮",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "957",
        "name": "海端鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "958",
        "name": "池上鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "959",
        "name": "東河鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "961",
        "name": "成功鎮",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "962",
        "name": "長濱鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "963",
        "name": "太麻里鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "964",
        "name": "金峰鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "965",
        "name": "大武鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "966",
        "name": "達仁鄉",
        "cityCode": "V"
    },
    {
        "type": "ZIP",
        "code": "970",
        "name": "花蓮市",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "971",
        "name": "新城鄉",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "972",
        "name": "秀林鄉",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "973",
        "name": "吉安鄉",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "974",
        "name": "壽豐鄉",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "975",
        "name": "鳳林鎮",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "976",
        "name": "光復鄉",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "977",
        "name": "豐濱鄉",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "978",
        "name": "瑞穗鄉",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "979",
        "name": "萬榮鄉",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "981",
        "name": "玉里鎮",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "982",
        "name": "卓溪鄉",
        "cityCode": "U"
    },
    {
        "type": "ZIP",
        "code": "983",
        "name": "富里鄉",
        "cityCode": "U"
    }]

    ngOnChanges(): void
    {
        let citySetting = this.getSettingByGroupType('address-city');
        citySetting.options = this.allOptions.filter((opt: any) => opt.type == "CITY").map(opt => { return { label: opt.name, value: opt.code } })
        let cityControl = this.getControl(this.inputForm, 'address-city') as FormControl;
        if (!!cityControl.value)
        {
            let areaSetting = this.getSettingByGroupType('address-area');
            areaSetting.options = this.allOptions.filter((opt: any) =>
            {
                return opt.type == "ZIP" && opt.cityCode == cityControl.value
            }).map(opt => { return { label: opt.name, value: opt.code } })
        }
    }

    getControl(group: FormGroup, groupType: string): FormControl
    {
        return this.shareService.getControl(group, this.getSettingByGroupType(groupType).name);
    }

    // 用name取得setting
    getSettingByGroupType(groupType: string)
    {
        return this.shareService.getSetting(this.fieldSettings, groupType, 'groupType');
    }
}
