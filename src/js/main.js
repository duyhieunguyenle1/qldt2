if(!sessionStorage.getItem('accessToken')){
    if(window.location.pathname==='/src/index.html'||window.location.pathname==='/qldt2/src/index.html'){
        window.location.replace('./pages/loginPage.html')
    }else{
        window.location.replace('./loginPage.html')
    }
}

const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const dropdownWrapper = $$('.block__enroll-wrapper-content--dropdown ul')
const dropdownBtn = $$('.block__enroll-button--dropdown')
const inputCheckboxs = $$('.enroll__input-check')
const btnListEvent = $$(".subnav__item_event");
const decsListEvent = $$(".decs_event");
const btnListProof = $$(".subnav__item_proof");
const decsListProof = $$(".decs_proof");
const articleLists = $$('.block__article-upper-items-right');

const examDropdownWrapper = $('.block__exam-wrapper-content--dropdown ul')
const examDropdownBtn = $('.block__exam-button--dropdown')
const scheduleDropdownWrapper = $('.block__schedule-wrapper-content--dropdown ul')
const scheduleDropdownBtn = $('.block__schedule-button--dropdown')
const queryGradeBtn = $('.block__grade-btn--right')
const gradeBtn = $('.block__grade-btn--left')
const programBtn = $('.block__program--left')
const programIntroductBtn = $('.block__program--right')
const dropdownSidebar = $('.sidebar-dropdown')
const dropdownUser = $('.main__header-user')
const articleImg = $('.block__article-upper-wrapper-left img')
const container = $('.min-h-screen')

let chatbotImg;
if(window.location.pathname==='/src/index.html'||window.location.pathname==='/qldt2/src/index.html'){
    chatbotImg='./img/chatbot.png'
}else{
    chatbotImg='../img/chatbot.png'
}

let chatbotPage;
if(window.location.pathname==='/src/index.html'||window.location.pathname==='/qldt2/src/index.html'){
    chatbotPage='./pages/chatPage.html'
}else{
    chatbotPage='./chatPage.html'
}

if(window.location.pathname!=='/src/pages/chatPage.html'||window.location.pathname==='/qldt2/src/pages/chatPage.html'){    
    const chatBot = document.createElement('div')
    chatBot.innerHTML=`<div class="chat_bot">
    <a href="${chatbotPage}">
    <img src="${chatbotImg}" alt="chatBot">
    </a>
    <span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.16992 14.8299L14.8299 9.16992" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.16992 14.8299L14.8299 9.16992" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.8299 14.8299L9.16992 9.16992" stroke="#363DE3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.8299 14.8299L9.16992 9.16992" stroke="white" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </span>
    </div>`
    container.appendChild(chatBot)

    const chatBotMini = document.createElement('div')
    chatBotMini.innerHTML=`<div class="hidden chatbot_mini">
    Ami</div>
    `
    container.appendChild(chatBotMini)

    const chatBotClose = $('.chat_bot span')
    const chatBotMiniToggle = $('.chatbot_mini')
    if(chatBotClose){
        chatBotClose.addEventListener('click',()=>{
            chatBotClose.parentNode.classList.add('hidden')
            chatBotMiniToggle.classList.remove('hidden')
        })

        chatBotMiniToggle.addEventListener('click',()=>{
            chatBotClose.parentNode.classList.remove('hidden')
            chatBotMiniToggle.classList.add('hidden')
        })
    }
}

const notiHeaderNumber = document.createElement('div')
notiHeaderNumber.innerHTML=`<span class="main__header-noti--number transition-all flex">5</span>`
$('.main__header-noti').appendChild(notiHeaderNumber)

dropdownUser.addEventListener('click',()=>{
    $('.block__user-dropdown-wrapper').classList.toggle('hidden')
})

$('.block__user-dropdown-logout').addEventListener('click',()=>{
    sessionStorage.removeItem('accessToken')
    if((window.location.pathname==='/src/index.html'||window.location.pathname==='/qldt2/src/index.html')){
        window.location.replace('./pages/loginPage.html')
    }else{
        window.location.replace('./loginPage.html')
    }
})

let eventPage,proofPage,transcriptPage;
if((window.location.pathname==='/src/index.html'||window.location.pathname==='/qldt2/src/index.html')){
    eventPage='./pages/eventPage.html'
    proofPage='./pages/proofPage.html'
    transcriptPage='./pages/transcriptPage.html'
}else{
    eventPage='./eventPage.html'
    proofPage='./proofPage.html'
    transcriptPage='./transcriptPage.html'
}

const dropdownSidebarWrapper = document.createElement('div')
dropdownSidebarWrapper.innerHTML=`<div class="sidebar-dropdown-wrapper flex hidden">
<a href="${proofPage}" class="transition-all">Khai báo minh chứng</a>
<a href="${eventPage}" class="transition-all">Sự kiện đã tham gia</a>
<a href="${transcriptPage}" class="transition-all">Phiếu điểm rèn luyện</a>
</div>
`

dropdownSidebar.appendChild(dropdownSidebarWrapper)
dropdownSidebar.addEventListener('click',()=>{

    $('.sidebar-dropdown-wrapper').classList.toggle('hidden')
    dropdownSidebar.classList.toggle('bg-white')
    $('.sidebar-dropdown .sidebar-dropdown-arrow--first').classList.toggle('hidden')
    $('.sidebar-dropdown .sidebar-dropdown-arrow--second').classList.toggle('hidden')
})

if(inputCheckboxs){
    inputCheckboxs.forEach(inp=>{
        inp.addEventListener('change',(e)=>{
            if(e.target.checked){
                inp.parentNode.parentNode.classList.add('green-bg')
            }else{
                inp.parentNode.parentNode.classList.remove('green-bg')
            }
        })
    })
}

if(articleImg&&articleLists){
    const srcLists = [
        {
            img:'../img/article1_2.png',
            title:'Học viện Công nghệ Bưu chính Viễn thông hoàn thành xuất sắc các nhiệm vụ năm 2023 và các mục tiêu chiến lược giai đoạn 2020 – 2025',
            date:'Ngày đăng: 20/12/2023'
        },
        {
            img:'../img/article2_2.png',
            title:'Học viện trình bày tham luận tại Hội nghị tổng kết 10 năm thực hiện Nghị quyết 29-NQ/TW về đổi mới căn bản, toàn diện giáo dục và đào tạo',
            date:'Ngày đăng: 21/12/2023'
        },
        {
            img:'../img/article3_2.png',
            title:'PTIT thúc đẩy hợp tác về đào tạo sau đại học với Viện Khoa học và Công nghệ Nhật Bản (JAIST)',
            date:'Ngày đăng: 20/12/2023'
        },
        {
            img:'../img/article4_2.png',
            title:'Học viện Công nghệ Bưu chính Viễn thông ký kết Thỏa thuận đảm bảo tính bền vững của Dự án Giám sát xu hướng việc làm của sinh viên tốt nghiệp tại Việt Nam – MOTIVE',
            date:'Ngày đăng: 20/12/2023'
        },
    ]
    
    let i=0;

    const updateContent = (index)=>{
        articleImg.src = srcLists[index].img;
        $('.block__article-upper-wrapper-left h3').innerHTML = srcLists[index].title
        $('.block__article-upper-wrapper-left p').innerHTML = srcLists[index].date
    }

    articleLists.forEach((list,ind)=>list.addEventListener('click',()=>{
        updateContent(ind)
        i = (ind + 1) % articleLists.length;
    }))

    function nextImage() {
        updateContent(i)
        i = (i + 1) % srcLists.length;
        setTimeout(nextImage, 5000);
    }
    nextImage();
}

if(scheduleDropdownBtn){
    scheduleDropdownBtn.addEventListener('click',()=>{
        scheduleDropdownWrapper.classList.toggle('hidden')
    })
}

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
    <div class="block__grade-main-container--table" style="padding-left: 0; padding-right: 0;">
        <table>
            <thead>
                <tr class="block__grade-main-table--head">
                    <th>STT</th>
                    <th>Trạng thái</th>
                    <th>Kỳ học</th>
                    <th>Học phần</th>
                    <th>Nội dung</th>
                    <th>File đính kèm</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Chưa trả lời</td>
                    <td class="text-base">Học kỳ 2 năm học 2022 - 2023</td>
                    <td>Kiến trúc máy tính và hệ điều hành</td>
                    <td>Thắc mắc điểm cuối kỳ</td>
                    <td>
                        <span class="inline__grade-file-table transition-all">
                            .jpg
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Đã trả lời</td>
                    <td class="text-base">Học kỳ 1 năm học 2021 - 2022</td>
                    <td>Tin học cơ sở 1</td>
                    <td>Thắc mắc điểm cuối kỳ</td>
                    <td>
                        <span class="inline__grade-file-table transition-all">
                            .jpg
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
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

    tableProgram.innerHTML=`
    <div class="flex flex-col">
                        <div class="flex flex-col block__program-main-container main_shadow">
                            <h4 class="block__program-main-container--head">
                                Học kỳ 1 - Năm học 2021-2022
                            </h4>
                            <div class="block__program-main-container--table">
                                <table>
                                    <thead>
                                        <tr class="block__program-main-table--head">
                                            <th>STT</th>
                                            <th>Mã MH</th>
                                            <th>Tên môn</th>
                                            <th>Số TC</th>
                                            <th>Môn bắt buộc</th>
                                            <th>Đã học</th>
                                            <th>Tổng tiết</th>
                                            <th>Lý thuyết</th>
                                            <th>Thực hành</th>
                                            <th>Tiết thực hành</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>BAS1105M</td>
                                            <td class="text-base">Giáo dục quốc phòng</td>
                                            <td>7.5</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>BAS1106</td>
                                            <td class="text-base">Giáo dục thể chất 1</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>30</td>
                                            <td>2</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>BAS1150</td>
                                            <td class="text-base">Triết học Mác - Lênin</td>
                                            <td>3</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>45</td>
                                            <td>34</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>BAS1219</td>
                                            <td class="text-base">Toán cao cấp 1</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>30</td>
                                            <td>24</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>INT1154</td>
                                            <td class="text-base">Tin học cơ sở 1</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>30</td>
                                            <td>20</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>MUL1238</td>
                                            <td class="text-base">Cơ sở tạo hình</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>45</td>
                                            <td>32</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>MUL1320</td>
                                            <td class="text-base">Nhập môn đa phương tiện</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>30</td>
                                            <td>24</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col mt-4">
                        <div class="flex flex-col block__program-main-container main_shadow">
                            <h4 class="block__program-main-container--head">
                                Học kỳ 2 - Năm học 2021-2022
                            </h4>
                            <div class="block__program-main-container--table">
                                <table>
                                    <thead>
                                        <tr class="block__program-main-table--head">
                                            <th>STT</th>
                                            <th>Mã MH</th>
                                            <th>Tên môn</th>
                                            <th>Số TC</th>
                                            <th>Môn bắt buộc</th>
                                            <th>Đã học</th>
                                            <th>Tổng tiết</th>
                                            <th>Lý thuyết</th>
                                            <th>Thực hành</th>
                                            <th>Tiết thực hành</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>BAS1107</td>
                                            <td class="text-base">Giáo dục thể chất 2</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>30</td>
                                            <td>2</td>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>BAS1151</td>
                                            <td class="text-base">Kinh tế chính trị Mác - Lênin</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>30</td>
                                            <td>28</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>BAS1157</td>
                                            <td class="text-base">Tiếng Anh (Course 1)</td>
                                            <td>4</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>60</td>
                                            <td>48</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>BAS1220</td>
                                            <td class="text-base">Toán cao cấp 2</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>30</td>
                                            <td>24</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>INT1155</td>
                                            <td class="text-base">Tin học cơ sở 2</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>30</td>
                                            <td>20</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>MUL13122</td>
                                            <td class="text-base">Kỹ thuật nhiếp ảnh</td>
                                            <td>2</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>35</td>
                                            <td>28</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>MUL13149</td>
                                            <td class="text-base">Mỹ thuật cơ bản</td>
                                            <td>3</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>42</td>
                                            <td>28</td>
                                            <td>14</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>MUL13150</td>
                                            <td class="text-base">Thiết kế đồ họa</td>
                                            <td>3</td>
                                            <td></td>
                                            <td>X</td>
                                            <td>40</td>
                                            <td>24</td>
                                            <td>16</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    `

    $('.block__main-wrapper--container').appendChild(tableProgram)

    programBtn.addEventListener('click',()=>{
        programBtn.classList.add('active-text')
        programBtn.classList.remove('inactive-text')
        programBtn.querySelector('.block__main-upper-left--first_underline').classList.remove('hidden')
        programIntroductBtn.querySelector('.block__main-upper-left--first_underline').classList.add('hidden')
        programIntroductBtn.classList.add('inactive-text')

        $('.block__main-wrapper--container').removeChild(introduceProgram)
        $('.block__main-wrapper--container').appendChild(tableProgram)
    })

    programIntroductBtn.addEventListener('click',()=>{
        programIntroductBtn.classList.add('active-text')
        programIntroductBtn.classList.remove('inactive-text')
        programIntroductBtn.querySelector('.block__main-upper-left--first_underline').classList.remove('hidden')
        programBtn.classList.add('inactive-text')
        programBtn.querySelector('.block__main-upper-left--first_underline').classList.add('hidden')
    
        $('.block__main-wrapper--container').removeChild(tableProgram)
        $('.block__main-wrapper--container').appendChild(introduceProgram)
    })
}

if(btnListEvent&&decsListEvent){
    for (let i = 0; i < btnListEvent.length; i++) {
        btnListEvent[i].onclick = function () {
          btnListEvent[0].classList.remove("subnav__item--selected");
          btnListEvent[1].classList.remove("subnav__item--selected");
          btnListEvent[2].classList.remove("subnav__item--selected");
          btnListEvent[3].classList.remove("subnav__item--selected");
          btnListEvent[i].classList.add("subnav__item--selected");
          decsListEvent[0].classList.remove("decs--selected");
          decsListEvent[1].classList.remove("decs--selected");
          decsListEvent[2].classList.remove("decs--selected");
          decsListEvent[3].classList.remove("decs--selected");
          decsListEvent[i].classList.add("decs--selected");
        };
      }
}

if(btnListProof&&decsListProof){
    for (let i = 0; i < btnListProof.length; i++) {
        btnListProof[i].onclick = function () {
        btnListProof[0].classList.remove("subnav__item--selected");
        btnListProof[1].classList.remove("subnav__item--selected");
        btnListProof[2].classList.remove("subnav__item--selected");
        btnListProof[3].classList.remove("subnav__item--selected");
        btnListProof[i].classList.add("subnav__item--selected");
        decsListProof[0].classList.remove("decs--selected");
        decsListProof[1].classList.remove("decs--selected");
        decsListProof[2].classList.remove("decs--selected");
        decsListProof[3].classList.remove("decs--selected");
        decsListProof[i].classList.add("decs--selected");
    };
    }
}