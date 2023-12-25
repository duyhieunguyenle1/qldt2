const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const dropdownWrapper = $$('.block__enroll-wrapper-content--dropdown ul')
const dropdownBtn = $$('.block__enroll-button--dropdown')

const examDropdownWrapper = $('.block__exam-wrapper-content--dropdown ul')
const examDropdownBtn = $('.block__exam-button--dropdown')
const showPassword = $('.input__icon--password-show')
const hidePassword = $('.input__icon--password-hide')
const inputPassword = $('.input__login--password')
const queryGradeBtn = $('.block__grade-btn--right')
const gradeBtn = $('.block__grade-btn--left')
const programBtn = $('.block__program--left')
const programIntroductBtn = $('.block__program--right')

const notiHeaderNumber = document.createElement('div')
notiHeaderNumber.innerHTML=`<span class="main__header-noti--number transition-all flex">5</span>`
$('.main__header-noti').appendChild(notiHeaderNumber)

if(examDropdownBtn){
    examDropdownBtn.addEventListener('click',()=>{
        examDropdownWrapper.classList.toggle('hidden')
    })
}

if(dropdownBtn[0]&&dropdownBtn[1]){
    dropdownBtn[0].addEventListener('click',()=>{
        dropdownWrapper[0].classList.toggle('hidden')
        dropdownWrapper[1].classList.add('hidden')
    })

    dropdownBtn[1].addEventListener('click',()=>{
        dropdownWrapper[1].classList.toggle('hidden')
        dropdownWrapper[0].classList.add('hidden')
    })
}

if(showPassword&&hidePassword&&inputPassword){
    showPassword.addEventListener('click',()=>{
        hidePassword.classList.remove('hidden')
        showPassword.classList.add('hidden')
        inputPassword.type = 'password'
    })
    
    hidePassword.addEventListener('click',()=>{
        hidePassword.classList.add('hidden')
        showPassword.classList.remove('hidden')
        inputPassword.type = 'text'
    })
}

if(queryGradeBtn&&gradeBtn){
    const tableGrade = document.createElement('div')
    const queryGrade = document.createElement('div')

    queryGrade.innerHTML=`<div class="block__query-container main_shadow">
    <p>
        <span class="font-semibold">
            * Lưu ý:
        </span>
        Khi phát hiện có sự khác biệt giữa điểm thi đã công bố và điểm được nhập, sinh viên có trách nhiệm thông báo cho Trung tâm Khảo thí để được xem xét, giải quyết. Thời hạn thắc mắc chậm nhất là 07 ngày kể từ ngày công bố điểm.
        <br />
        Để phúc khảo vui lòng đăng ký “ĐƠN ĐỀ NGHỊ XEM XÉT ĐIỂM THI KẾT THÚC HỌC PHẦN” tại chức năng Dịch vụ một cửa.
    </p>
    <button type="button" class="transition-all flex">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12H18" stroke="#E02D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 18V6" stroke="#E02D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span class="font-semibold red-text">
            Thêm mới
        </span>
    </button>
    </div>
    `

    tableGrade.innerHTML=`
        <div class="flex flex-col">
        <div class="flex flex-col block__grade-main-container main_shadow">
            <h4 class="block__grade-main-container--head">
                Học kỳ 2 - Năm học 2023-2024
            </h4>
            <div class="block__grade-main-container--table">
                <table>
                    <thead>
                        <tr class="block__grade-main-table--head">
                            <th>STT</th>
                            <th>Mã MH</th>
                            <th>Tên môn</th>
                            <th>Nhóm</th>
                            <th>Số TC</th>
                            <th>Điểm CC</th>
                            <th>Điểm GK</th>
                            <th>Điểm CK</th>
                            <th>Kết quả</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>MUL14131</td>
                            <td class="text-base">Luật xa gần</td>
                            <td>03</td>
                            <td>3</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>MUL14132</td>
                            <td class="text-base">Cơ sở tạo hình nâng cao</td>
                            <td>03</td>
                            <td>2</td>
                            <td>10</td>
                            <td>10</td>
                            <td>9</td>
                            <td>A+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>MUL14135</td>
                            <td class="text-base">Thiết kế sản phẩm đa phương tiện</td>
                            <td>02</td>
                            <td>3</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>MUL14136</td>
                            <td class="text-base">Nghệ thuật đồ họa chữ (Typography)</td>
                            <td>01</td>
                            <td>2</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>MUL14140</td>
                            <td class="text-base">Thiết kế hình động 2</td>
                            <td>03</td>
                            <td>3</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>MUL14155</td>
                            <td class="text-base">Thiết kế giao diện người dùng</td>
                            <td>01</td>
                            <td>2</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>SKD1101</td>
                            <td class="text-base">Kỹ năng thuyết trình</td>
                            <td>11</td>
                            <td>1</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="block__grade-main-container--footer flex">
                <div class="flex block__grade-main-container--footer-wrapper">
                    <div class="flex flex-col block__grade-main-container--footer-left">
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Điểm TB học kỳ hệ 4:</p>
                            <span class="red-text font-medium">3.54</span>
                        </div>
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Điểm TB học kỳ hệ 10:</p>
                            <span class="red-text font-medium">8.85</span>
                        </div>
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Số tín chỉ đạt học kỳ:</p>
                            <span class="red-text font-medium">15</span>
                        </div>
                    </div>
                    <div class="flex flex-col block__grade-main-container--footer-left">
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Điểm TB học kỳ hệ 4:</p>
                            <span class="red-text font-medium">3.54</span>
                        </div>
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Điểm TB học kỳ hệ 10:</p>
                            <span class="red-text font-medium">8.85</span>
                        </div>
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Số tín chỉ đạt học kỳ:</p>
                            <span class="red-text font-medium">15</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col">
        <div class="flex flex-col block__grade-main-container main_shadow">
            <h4 class="block__grade-main-container--head">
                Học kỳ 1 - Năm học 2023-2024
            </h4>
            <div class="block__grade-main-container--table">
                <table>
                    <thead>
                        <tr class="block__grade-main-table--head">
                            <th>STT</th>
                            <th>Mã MH</th>
                            <th>Tên môn</th>
                            <th>Nhóm</th>
                            <th>Số TC</th>
                            <th>Điểm CC</th>
                            <th>Điểm GK</th>
                            <th>Điểm CK</th>
                            <th>Kết quả</th>
                            <th>Chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>BAS1107</td>
                            <td class="text-base">Giáo dục thể chất 2</td>
                            <td>03</td>
                            <td>3</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>BAS1151</td>
                            <td class="text-base">Kinh tế chính trị Mác - Lênin</td>
                            <td>02</td>
                            <td>2</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>BAS1157</td>
                            <td class="text-base">Tiếng Anh (Course 1)</td>
                            <td>11</td>
                            <td>4</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>BAS1220</td>
                            <td class="text-base">Toán cao cấp 2</td>
                            <td>01</td>
                            <td>2</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>INT1155</td>
                            <td class="text-base">Tin học cơ sở 2</td>
                            <td>01</td>
                            <td>3</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>MUL13122</td>
                            <td class="text-base">Kỹ thuật nhiếp ảnh</td>
                            <td>04</td>
                            <td>2</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>MUL13149</td>
                            <td class="text-base">Mỹ thuật cơ bản</td>
                            <td>04</td>
                            <td>3</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>B+</td>
                            <td>
                                <span class="block__grade-main-table--action flex">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M22.5 17.2402V5.17019C22.5 3.97019 21.52 3.08019 20.33 3.18019H20.27C18.17 3.36019 14.98 4.43019 13.2 5.55019L13.03 5.66019C12.74 5.84019 12.26 5.84019 11.97 5.66019L11.72 5.51019C9.94 4.40019 6.76 3.34019 4.66 3.17019C3.47 3.07019 2.5 3.97019 2.5 5.16019V17.2402C2.5 18.2002 3.28 19.1002 4.24 19.2202L4.53 19.2602C6.7 19.5502 10.05 20.6502 11.97 21.7002L12.01 21.7202C12.28 21.8702 12.71 21.8702 12.97 21.7202C14.89 20.6602 18.25 19.5502 20.43 19.2602L20.76 19.2202C21.72 19.1002 22.5 18.2002 22.5 17.2402Z" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.5 5.99023V20.9902" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.25 8.99023H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 11.9902H6" stroke="white" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>     
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="block__grade-main-container--footer flex">
                <div class="flex block__grade-main-container--footer-wrapper">
                    <div class="flex flex-col block__grade-main-container--footer-left">
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Điểm TB học kỳ hệ 4:</p>
                            <span class="red-text font-medium">3.54</span>
                        </div>
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Điểm TB học kỳ hệ 10:</p>
                            <span class="red-text font-medium">8.85</span>
                        </div>
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Số tín chỉ đạt học kỳ:</p>
                            <span class="red-text font-medium">15</span>
                        </div>
                    </div>
                    <div class="flex flex-col block__grade-main-container--footer-left">
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Điểm TB học kỳ hệ 4:</p>
                            <span class="red-text font-medium">3.5</span>
                        </div>
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Điểm TB học kỳ hệ 10:</p>
                            <span class="red-text font-medium">8.75</span>
                        </div>
                        <div class="block__grade-main-container--footer-item flex">
                            <p class="red-text font-semibold">Số tín chỉ đạt học kỳ:</p>
                            <span class="red-text font-medium">19</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    $('.block__main-wrapper--container').appendChild(tableGrade)

    queryGradeBtn.addEventListener('click',()=>{
        queryGradeBtn.classList.add('active-text')
        queryGradeBtn.classList.remove('inactive-text')
        queryGradeBtn.querySelector('.block__main-upper-left--first_underline').classList.remove('hidden')
        gradeBtn.querySelector('.block__main-upper-left--first_underline').classList.add('hidden')
        gradeBtn.classList.add('inactive-text')

        $('.block__main-wrapper--container').removeChild(tableGrade)
        $('.block__main-wrapper--container').appendChild(queryGrade)
    })

    gradeBtn.addEventListener('click',()=>{
        gradeBtn.classList.add('active-text')
        gradeBtn.classList.remove('inactive-text')
        gradeBtn.querySelector('.block__main-upper-left--first_underline').classList.remove('hidden')
        queryGradeBtn.classList.add('inactive-text')
        queryGradeBtn.querySelector('.block__main-upper-left--first_underline').classList.add('hidden')
    

        $('.block__main-wrapper--container').appendChild(tableGrade)
        $('.block__main-wrapper--container').removeChild(queryGrade)
    })
}

if(programBtn&&programIntroductBtn){
    const introduceProgram = document.createElement('div')
    const tableProgram = document.createElement('div')

    introduceProgram.innerHTML=`<div class="block__program-introduce--wrapper">
    <div class="flex flex-col">
        <p>
            Học viện Công nghệ Bưu chính Viễn thông thành lập theo quyết định số 516/TTg của Thủ tướng Chính phủ ngày 11 tháng 7 năm 1997 trên cơ sở sắp xếp lại 4 đơn vị thành viên thuộc Tổng Công ty Bưu chính Viễn thông Việt Nam, nay là Tập đoàn Bưu chính Viễn thông Việt Nam là Viện Khoa học Kỹ thuật Bưu điện, Viện Kinh tế Bưu điện, Trung tâm đào tạo Bưu chính Viễn thông 1 và 2. Các đơn vị tiền thân của Học viện là những đơn vị có bề dày lịch sử hình thành và phát triển với xuất phát điểm từ Trường Đại học Bưu điện 1953.
            <br />
            <div class="mt-8"></div>
            Từ ngày 1/7/2014, thực hiện Quyết định của Thủ tướng Chính phủ, Bộ trưởng Bộ Thông tin và Truyền thông đã ban hành Quyết định số 878/QĐ-BTTTT điều chuyển quyền quản lý Học viện từ Tập đoàn Bưu chính Viễn thông Việt Nam về Bộ Thông tin và Truyền thông. Học viện Công nghệ Bưu chính Viễn thông là đơn vị sự nghiệp trực thuộc Bộ. Là trường đại học, đơn vị nghiên cứu, phát triển nguồn nhân lực trọng điểm của Ngành thông tin và truyền thông.
            <br />
            <div class="mt-8"></div>
            Với vị thế là đơn vị đào tạo, nghiên cứu trọng điểm, chủ lực của Ngành thông tin và truyền thông Việt Nam, là trường đại học trọng điểm quốc gia trong lĩnh vực ICT, những thành tựu trong gắn kết giữa Nghiên cứu – Đào tạo – Sản xuất kinh doanh năng lực, quy mô phát triển của Học viện hôm nay, Học viện sẽ có những đóng góp hiệu quả phục vụ sự phát triển chung của Ngành Thông tin và truyền thông và sự nghiệp xây dựng, bảo vệ tổ quốc, góp phần để đất nước, để Ngành Thông tin và truyền thông Việt Nam có sự tự chủ, độc lập về khoa học công nghệ và nguồn nhân lực, qua đó tự tin cạnh tranh với các đối thủ lớn và sánh vai với các cường quốc trên thế giới.
        </p>
        <div class="block__program-introduce-image-wrapper">
            <div class="block__program-introduce-image">
            </div>
        </div>
        <p>
            <div class="red-text font-semibold">
                Chức năng và nhiệm vụ
            </div>
            Học viện Công nghệ Bưu chính – Viễn thông là đơn vị sự nghiệp trực thuộc Bộ Thông tin và truyền thông, Học viện thực hiện hai chức năng cơ bản: Giáo dục, đào tạo cho xã hội và cho nhu cầu của Ngành thông tin và truyền thông Việt Nam. Nghiên cứu khoa học, tư vấn, chuyển giao công nghệ trong lĩnh vực Bưu chính, Viễn thông và công nghệ thông tin đáp ứng nhu cầu xã hội và nhu cầu của Ngành thông tin và truyền thông Việt Nam.
            <br />
            <div class="mt-4"></div>
            <div class="red-text font-semibold">
                Đào tạo
            </div>
            Hệ thống đào tạo và cấp bằng của Học viện bao gồm nhiều cấp độ tuỳ thuộc vào thời gian đào tạo và chất lượng đầu vào của các học viên. Hiện nay Học viện cung cấp các dịch vụ giáo dục, đào tạo chủ yếu sau đây: Thực hiện các khoá đào tạo bậc Cao đẳng, Đại học, Thạc sĩ và Tiến sĩ theo chương trình chuẩn quốc gia và quốc tế theo các hình thức khác nhau như tập trung, phi tập trung, liên thông, đào tạo từ xa… Tổ chức các khoá đào tạo bồi dưỡng ngắn hạn cấp chứng chỉ trong các lĩnh vực Bưu chính, Viễn thông, công nghệ thông tin, quản trị kinh doanh, an toàn thông tin, công nghệ đa phương tiện… Tổ chức các chương trình đào tạo cho nước thứ ba. Sẵn sàng liên danh, liên kết với các đối tác trong nước và quốc tế trong lĩnh vực giáo dục, đào tạo. Nghiên cứu khoa học và tư vấn chuyển giao công nghệ Tổ chức nghiên cứu về chiến lược, quy hoạch phát triển mạng và dịch vụ bưu chính, viễn thông và công nghệ thông tin. Tổ chức nghiên cứu về công nghệ, giải pháp và phát triển dịch vụ trong lĩnh vực bưu chính, viễn thông và công nghệ thông tin. Tổ chức nghiên cứu và phát triển các sản phẩm, bán sản phẩm trong lĩnh vực điện tử – viễn thông. Tổ chức nghiên cứu về quản lý, điều hành doanh nghiệp và các lĩnh vực kinh tế khác. Cung cấp các dịch vụ tư vấn về công nghệ, giải pháp và phát triển dịch vụ trong lĩnh vực bưu chính, viễn thông, công nghệ thông tin và lĩnh vực kinh tế cho các đơn vị trong và ngoài Ngành thông tin và truyền thông Việt Nam. Cung cấp các dịch vụ đo lường, kiểm chuẩn, tư vấn thẩm định các công trình, dự án thuộc lĩnh vực bưu chính viễn thông và công nghệ thông tin..
        </p>
    </div>
</div>
    `

    programBtn.addEventListener('click',()=>{
        programBtn.classList.add('active-text')
        programBtn.classList.remove('inactive-text')
        programBtn.querySelector('.block__main-upper-left--first_underline').classList.remove('hidden')
        programIntroductBtn.querySelector('.block__main-upper-left--first_underline').classList.add('hidden')
        programIntroductBtn.classList.add('inactive-text')

        $('.block__main-wrapper--container').removeChild(introduceProgram)
        // $('.block__main-wrapper--container').appendChild(tableProgram)
    })

    programIntroductBtn.addEventListener('click',()=>{
        programIntroductBtn.classList.add('active-text')
        programIntroductBtn.classList.remove('inactive-text')
        programIntroductBtn.querySelector('.block__main-upper-left--first_underline').classList.remove('hidden')
        programBtn.classList.add('inactive-text')
        programBtn.querySelector('.block__main-upper-left--first_underline').classList.add('hidden')
    
        // $('.block__main-wrapper--container').removeChild(tableProgram)
        $('.block__main-wrapper--container').appendChild(introduceProgram)
    })
}