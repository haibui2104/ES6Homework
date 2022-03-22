document.querySelector('#signup-form .actions ul li:last-child a').onclick = function(){
    let arrInput = document.querySelectorAll('.form-group input, .form-group select, .form-date-item input');
    let formUser = {};
    for ( let input of arrInput){
        let{id,value} = input;
        formUser = {...formUser, [id]:value}
    }
    const {
        ten,
        ho,
        email,
        soDienThoai,
        ngay,
        thang,
        nam,
        diaChi,
        thongTinDiChuyen,
        loaiNhiem,
    } = formUser
    console.log("123");
    let htmlFormUser = `
    <div class="form-row">                              
    <div class="form-flex">
        <div class="form-group">
         <label class="form-label">Ten</label>
         <input readonly value="${ten}" />
        </div>
        <div class="form-group">
         <label class="form-label">Ho</label>
         <input readonly value="${ho}" />
        </div>
    </div>                              
 </div>
 <div class="form-row">                              
     <div class="form-flex">
         <div class="form-group">
          <label class="form-label">Email</label>
          <input readonly value="${email}" />
         </div>
         <div class="form-group">
             <label class="form-label">So dien thoai</label>
             <input readonly value="${soDienThoai}" />
         </div>
     </div>
 </div>
 <div class="form-row">                              
     <div class="form-flex">
         <div class="form-group">
          <label class="form-label">Ngay</label>
          <input readonly value="${ngay}" />
         </div>
         <div class="form-group">
             <label class="form-label">Thang </label>
             <input readonly value="${thang}" />
         </div>
         <div class="form-group">
             <label class="form-label">Nam</label>
             <input readonly value="${nam}" />
            </div>
     </div>
 <div class="form-row">                              
     <div class="form-flex">
         <div class="form-group">
          <label class="form-label">Dia chi</label>
          <input readonly value="${diaChi}" />
         </div>
         <div class="form-group">
             <label class="form-label">Thong tin di chuyen</label>
             <input readonly value="${thongTinDiChuyen}" />
            </div>
     </div>
 </div>
 <div class="form-row">                              
     <div class="form-flex">
         <div class="form-group">
          <label class="form-label">Loai nhiem</label>
          <input readonly value="${loaiNhiem}" />
         </div>
     </div>
 </div>
`;
    document.querySelector('.donate-us').innerHTML = htmlFormUser;

}