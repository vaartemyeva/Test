var show = true;//начальное условие для прекращения инструкции

//-----Выпадающие списки левого меню-----

$(".main__menu_projects").on("click", function(){
    $('.main__menu_projects_list').slideToggle();
});

$(".main__menu_title").on("click", function(){
    $('.main__menu_title_list').slideToggle();
});

$(".main__menu_rating").on("click", function(){
    $('.main__menu_rating_list').slideToggle();
});

//----Добавление класса active при наведении курсора на пункт меню (левая навигация)

var list = document.querySelectorAll(".main__menu_title_list ul li");

list.forEach(function(item){

    item.onmouseover = function(){
       item.classList.add("active");
    }
    item.onmouseout = function(){
        item.classList.remove("active");
    }
});

//----Добавление класса active_main при клике на пункт меню (левая навигация)

$(".main__menu_title_list_li").on("click", function(){
    $(this).addClass('active_main');
    $(".main__menu_title_list_li").not(this).removeClass('active_main');
});

//----МОДАЛЬНЫЕ ОКНА

//----Общие стили

$.sweetModal.defaultSettings.confirm.yes.label = "Да";
$.sweetModal.defaultSettings.confirm.cancel.label = "Нет";
$.sweetModal.defaultSettings.width = "40%";
$.sweetModal.defaultSettings.confirm.yes.classes = "purpleB";
$.sweetModal.defaultSettings.confirm.cancel.classes = "orangeB";
$.sweetModal.defaultSettings.button = "purpleB";

//----Конец общих стилей

//----Настройка вида модального окна менеджмента

($.sweetModal.defaultSettings.onOpen = function(){

    $(".content__info_box_img").css({
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        marginRight: "20px"
    }),
    $(".sweet-modal-content").css({
        display: "flex",
        fontSize: "14px",
        alignItems: "center"
    })
})();

//----Конец настройки 

//----Модальные окна менеджмента

var boxes = $(".content__info_box");

$(boxes).each(function(index, item){
    $(item).on("click", function(){
        $.sweetModal({
            title: 'Менеджмент',
            content: $(item).html()
        });
    })
});


//----Модальные окна для непрочитанных сообщений

var notice = $("#numberOfNotice").text();

$(".main__menu_doctor_image_red").on("click", function(){
    if(notice == 1) {
        $.sweetModal.confirm(`У вас ${notice} непрочитанное уведомление. Открыть?`, function() {
            $.sweetModal('Открытие нового окна...');
        });
    }else if(notice < 5) {
        $.sweetModal.confirm(`У вас ${notice} непрочитанных уведомления. Открыть?`, function() {
            $.sweetModal('Открытие нового окна...');  
        });
    }else{
        $.sweetModal.confirm(`У вас ${notice} непрочитанных уведомлений. Открыть?`, function() {
            $.sweetModal('Открытие нового окна...');
        });
    }
});

var message = $("#numberOfMessage").text();

$(".main__menu_title_list_li_commit").on("click", function(){
    if(message == 1) {
        $.sweetModal.confirm(`У вас ${message} непрочитанное сообщение. Открыть?`, function() {
            $.sweetModal('Открытие нового окна...');
        });
    }else if(message < 5) {
        $.sweetModal.confirm(`У вас ${message} непрочитанных сообщения. Открыть?`, function() {
            $.sweetModal('Открытие нового окна...');  
        });
    }else{
        $.sweetModal.confirm(`У вас ${message} непрочитанных сообщений. Открыть?`, function() {
            $.sweetModal('Открытие нового окна...');
        });
    }
});

//-----Строка поиска

$(".content__logo_hide_icon img").on("click", function(){
    $('#search_text').css({
        opacity: 1,
    });
});
