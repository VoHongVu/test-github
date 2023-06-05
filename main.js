$(document).ready(function() {
// tạo drop cho mục sản phẩm
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
  // sự kiện click trên toàn bộ trang để ẩn đi dropdown
  $(document).click(function(event) {
    var target = event.target;
    if (!$(target).closest('.dropdown').length) {
      $('.dropdown-menu').hide();
    }
  });
// tạo hiệu ứng khi rơ chuột lên cho các mục = mouseenter
  $(".dropdown-item").on("mouseenter", function() {
    $(this).addClass("active");
  });
  $(".dropdown-item").on("mouseleave", function() {
    $(this).removeClass("active");
  });
});


$(document).ready(function(){
  // hiện, ẩn form đăng nhâp
  $("#login-link").click(function(event){
    event.preventDefault(); //ngăn chặn hành vi mặc định của sự kiện
    $(".login-form").fadeIn(); //làm cho phần tử xuất hiện dần dần
    $("body").addClass("login-form-open");
  });
  $(".close-X").click(function(){
    $(".login-form").fadeOut();
    $("body").removeClass("login-form-open");
  });

  // hiện, ẩn form đăng ký
  $("#sign-in-link").click(function(event){
    event.preventDefault();
    $(".sign-in-form").fadeIn();
    $("body").addClass("sign-in-form-open")
  });
  $(".close-X").click(function(){
    $(".sign-in-form").fadeOut();
    $("body").removeClass("sign-in-form-open");
  });

  // ẩn hiện mật khẩu đn,đk
  $(".class-eye").click(function() {
    var passwordInput = $(".class-password"); //lấy data lưu vào var

    if (passwordInput.attr("type") === "password") { //truy xuất 
      passwordInput.attr("type", "text");
      $(this).html('<i class="fa fa-eye"></i>'); //tham chiếu đến đoạn mã html và thay đổi nội dung
    } else {
      passwordInput.attr("type", "password");
      $(this).html('<i class="fa fa-eye-slash"></i>');
    }
  });

// chức năng giỏ hàng và người dùng
  // giỏ hàng
  $("#id-gh").click(function(){
    $(".class-gh").fadeIn();
    $("body").addClass("g-h");
  });
  $(".close-X-gh").click(function(){
    $(".class-gh").fadeOut();
    $("body").removeClass("g-h");
  });
  // người dùng
  $("#id-nd").click(function(){
    $(".class-nd").fadeIn();
    $("body").addClass("n-d");
  });
  $(".close-X-nd").click(function(){
    $(".class-nd").fadeOut();
    $("body").removeClass("n-d");
  });

  // hiện thông tin sản phẩm
  $(".xct-sp-class").click(function(event){
    event.preventDefault();
    $(".class-xct").fadeIn();
    $("body").addClass("x-c-t");

  });
  $(".close-X-sp").click(function(){
    $(".class-xct").fadeOut();
    $("body").removeClass("x-c-t");
  });

  // thay thế thông tin sản phẩm tương ứng khi click
  $('.xct-sp-class').click(function() {
    // Lấy thông tin từ phần tử gốc
    var src = $(this).parent().find('img').attr('src');
    var h3Text = $(this).parent().find('h3').text();
    var pText = $(this).parent().find('p').html();
    var delText = $(this).parent().find('p del').text();
    // Thay thế các phần tử trong form xem chi tiết bằng thông tin lấy được
    $('.img-sp').attr('src', src);
    $('.xct h3').text(h3Text);
    $('.xct p').html(pText);
    $('.xct p del').text(delText);
  });

  // mua hàng thêm vào giỏ hàng
  $(".class-buy").click(function(){
    var dataSP = $("#SL-sp").val();
    if (dataSP>0){
      alert("\n\n                                      * Đặt hàng thành công! *\n\n                             ! Xem chi tiết vào phần người dùng !" );
    }
    else{
      alert("\n\n                         ! Vui lòng nhập SỐ LƯỢNG sản phẩm !")
    }
  });
  
  $(".class-cart").click(function(){
    var dataSP = $("#SL-sp").val();
    if (dataSP>0){
      alert("\n\n                              * Thêm vào giỏ hàng thành công! *\n\n                               ! Xem chi tiết vào phần giỏ hàng !" );
    }
    else{
      alert("\n\n                         ! Vui lòng nhập SỐ LƯỢNG sản phẩm !")
    }
  });

  // đăng ký trong form đăng nhập
  $("#no-login").click(function(){
    $(".login-form").fadeOut();
    $(".sign-in-form").fadeIn();
  });
  
  // đăng nhập trong form đăng ký
  $("#no-sign-in").click(function(){
    $(".sign-in-form").fadeOut();
    $(".login-form").fadeIn();
  });
  
});




