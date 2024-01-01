const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const btnLeftTuition = $('.block__tuition-btn--left')
const btnRightTuition = $('.block__tuition-btn--right')

const debtTuition = document.createElement('div')
const handedTuition = document.createElement('div')

debtTuition.innerHTML=`<div class="table__tuition table--not-submited">
<div class="table__sum">
  <div class="table__sum-left">
    <span>Tổng chưa nộp: </span>
    <span class="table__sum--red">5.200.000đ</span>
  </div>
  <div class="table__sum-right">Tổng số: 1</div>
</div>
<div class="table-main">
  <table>
    <thead>
      <tr>
        <th>STT</th>
        <th>Dịch vụ</th>
        <th>Số tiền phải nộp</th>
        <th>Số tiền đã nộp</th>
        <th>Số tiền còn lại</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Học phí</td>
        <td>10.200.000đ</td>
        <td>5.000.000đ</td>
        <td>5.200.000đ</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
`

handedTuition.innerHTML=`<div class="table__tuition">
<div class="table__sum">
  <div class="table__sum-left">
    <span>Tổng đã nộp: </span>
    <span class="table__sum--red">6.800.000đ</span>
  </div>
  <span class="table__sum-right">Tổng số: 3</span>
</div>
<div class="table-main">
  <table>
    <thead>
      <tr>
        <th class="index">STT</th>
        <th>Dịch vụ</th>
        <th>Số tiền phải nộp</th>
        <th>Số tiền đã nộp</th>
        <th>Số tiền còn lại</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Đăng kí bảo hiểm y tế</td>
        <td>680.000đ</td>
        <td>680.000đ</td>
        <td>0đ</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Đăng kí sách tiếng anh ED</td>
        <td>1.120.000đ</td>
        <td>1.120.000đ</td>
        <td>0đ</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Học phí</td>
        <td>10.200.000đ</td>
        <td>5.000.000đ</td>
        <td>5.200.000đ</td>
      </tr>
    </tbody>
  </table>
</div>
</div>
`

$('.block__main-wrapper--container').appendChild(debtTuition)

btnLeftTuition.addEventListener('click',()=>{
    btnLeftTuition.classList.add('active-text')
    btnLeftTuition.classList.remove('inactive-text')
    btnLeftTuition.querySelector('.block__main-upper-left--first_underline').classList.remove('hidden')
    btnRightTuition.querySelector('.block__main-upper-left--first_underline').classList.add('hidden')
    $('.block__main-wrapper--container').removeChild(handedTuition)
    $('.block__main-wrapper--container').appendChild(debtTuition)
})

btnRightTuition.addEventListener('click',()=>{
    btnRightTuition.classList.add('active-text')
    btnRightTuition.classList.remove('inactive-text')
    btnRightTuition.querySelector('.block__main-upper-left--first_underline').classList.remove('hidden')
    btnLeftTuition.querySelector('.block__main-upper-left--first_underline').classList.add('hidden')
    $('.block__main-wrapper--container').removeChild(debtTuition)
    $('.block__main-wrapper--container').appendChild(handedTuition)
})