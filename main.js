
const cities = [
    { id: 1, name: 'Ha Noi' },
    { id: 2, name: 'Thái Bình' },
    { id: 3, name: 'Hải Phòng' },
    { id: 4, name: 'Nam Định' },
    { id: 5, name: 'Hưng Yên' },
    { id: 6, name: 'Lào Cai' },
    { id: 7, name: 'Yên Bái' },
    { id: 8, name: 'TP HCM' },
    { id: 9, name: 'Hà Nam' },
    { id: 10, name: 'Quảng Nam' },
    { id: 11, name: 'Cao Bằng' },
    { id: 12, name: 'Hà Tĩnh' },
    { id: 13, name: 'Quảng Ngãi' },
];
const districts = [
    { id: 1, name: 'Nam Từ Liêm', idCity: 1 },
    { id: 2, name: 'Bắc Từ Liêm', idCity: 1 },
    { id: 3, name: 'Hoài Đức', idCity: 1 },
    { id: 4, name: 'Cầu Giấy', idCity: 1 },
    { id: 5, name: 'Trung Hoà', idCity: 1 },
    { id: 6, name: 'Thái Thuỵ', idCity: 2 },
    { id: 7, name: 'Kiến Xương', idCity: 2 },
    { id: 8, name: 'Đông Hưng', idCity: 2 },
]
const wards = [
    { id: 1, name: 'Xuân Phương', idDistrict: 1 },
    { id: 2, name: 'Mỹ Đình', idDistrict: 1 },
    { id: 3, name: 'Mễ Trì', idDistrict: 1 },
    { id: 4, name: 'Tây Tựu', idDistrict: 2 },
    { id: 5, name: 'Cổ Nhuế 1', idDistrict: 2 },
    { id: 5, name: 'Cổ Nhuế 2', idDistrict: 2 },
    { id: 6, name: 'Kiến Xương 1', idDistrict: 7 },
    { id: 7, name: 'Kiến Xương 2', idDistrict: 7 },
    { id: 8, name: 'Kiến Xương 3', idDistrict: 7 },
]
// Thêm tỉnh thành phố vào select option
for (let i = 0; i < cities.length; i++) {
    let op = document.createElement('option');
    op.value = cities[i].id;
    op.innerHTML = cities[i].name;
   document.getElementById('citySelection').appendChild(op);
}

function selectCity() {
    const list = document.getElementById("districtSelection");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    let opDefaults = document.createElement('option');
    opDefaults.value = null;
    opDefaults.innerHTML = "Chọn quận / huyện";
    opDefaults.defaultSelected = true;
    document.getElementById('districtSelection').appendChild(opDefaults);
    let valueCity = document.getElementById('citySelection').value;
    for (let i = 0; i < districts.length; i++) {
        if (districts[i].idCity == valueCity) {
            let op = document.createElement('option');
            op.value = districts[i].id;
            op.innerHTML = districts[i].name;
            document.getElementById('districtSelection').appendChild(op);
        }
    }
    
}