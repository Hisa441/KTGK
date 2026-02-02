// Hàm đổi hình ảnh đèn chính khi click vào hình nhỏ
function changeImage(number) {
    const mainLight = document.getElementById('mainLight');
    mainLight.src = `images/${number}.jpg`;
}
