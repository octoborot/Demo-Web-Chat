/*Nút chuyển đổi form đki - đăng nhập*/
document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.querySelector('.in-sign-up__switch');
    const signInButton = document.querySelector('.in-sign-in__switch');
    const signUpForm = document.querySelector('.sign-up');
    const signInForm = document.querySelector('.sign-in');

    function showSignUp() {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
        const a = document.querySelector('.auth__input');
        a.value = '';
    }
    function showSignIn() {
        signInForm.style.display = 'block';
        signUpForm.style.display = 'none';
        const a = document.querySelector('.auth__input');
        a.value = '';
    }
    signUpButton.addEventListener('click', showSignIn);
    signInButton.addEventListener('click', showSignUp);
});

/*Nút ẩn và hiện mật khẩu trong form đki đnhap*/
document.addEventListener('DOMContentLoaded', function() {
    function see_pass(Input, icon1, icon2) {
        const a = document.querySelector(Input);
        const b = document.querySelector(icon1);
        const c = document.querySelector(icon2);
        const d = a.getAttribute('type');
        if(d == 'password'){
            a.setAttribute('type', 'text');
            b.style.display = 'none';
            c.style.display = 'block';
        } else {
            a.setAttribute('type', 'password');
            b.style.display = 'block';
            c.style.display = 'none';
        }
    }
    document.querySelector('.eye').addEventListener('click', function () {
        see_pass('.pass-up','.eye-noslash','.eye-slash');
    });
    document.querySelector('.eye1').addEventListener('click', function () {
        see_pass('.pass-up1','.eye-noslash1','.eye-slash1');
    });
    document.querySelector('.eye2').addEventListener('click', function () {
        see_pass('.pass-up2','.eye-noslash2','.eye-slash2');
    });
});

/*MENU_CHAT*/
/*CHAT-LIST*/
//display nút CLU__setting
document.addEventListener('DOMContentLoaded', function () {
    function hover_parent(parent, child) {
        const a = document.querySelector(parent);
        const b = document.querySelector(child);

        if (a && b)
        {
            a.addEventListener('mouseover', () => {
                b.style.display = 'block';
            });
            a.addEventListener('mouseout', () => {
                b.style.display = 'none';
            });
        }
    }
    hover_parent('.chat-list__user', '.CLU__setting');
});

//display search
document.addEventListener('DOMContentLoaded', function () {
    function search_chatlist(input, search, list) {
        const a = document.querySelector(input);
        const b = document.querySelector(search);
        const c = document.querySelector(list);
        a.addEventListener('focus', () => {
            b.style.display = 'block'; // Hiện search-chat-list
            c.style.display = 'none';    // Ẩn chat-list__body
        });
        document.addEventListener('click', (event) => {
            if (!a.contains(event.target) && !b.contains(event.target)) {
                b.style.display = 'none'; // Ẩn search-chat-list
                c.style.display = 'block';  // Hiện chat-list__body
            }
        });
    }
    search_chatlist('.input-search', '.search-chat-list', '.list-chat__body')
});

/*CHAT_CHAT*/
//chat-chat__icon-heading
document.addEventListener('DOMContentLoaded', function () {
    function display_ChatTool(button, chattool) {
        const a = document.querySelector(button);
        const b = document.querySelector(chattool);
        c = 1;
        a.addEventListener('click', () => {
            if(c == 1)
            {
                c--;
                b.style.display = 'block';
            }
            else
            {
                c++;
                b.style.display = 'none';
            }
        });
    }
    display_ChatTool('.chat-chat__icon-heading', '.chat-tool');
});


/*Chat-tool*/
//chat-tool__img
document.addEventListener('DOMContentLoaded', function () {
    function anh_file(button, chattool, fileimg, icon) {
        const a = document.querySelector(button);
        const b = document.querySelector(chattool);
        const c = document.querySelector(fileimg);
        const d = document.querySelector(icon);
        a.addEventListener('click', () =>{
            c.style.display = 'block';
            b.style.display = 'none';
        });
        d.addEventListener('click', () =>{
            b.style.display = 'block';
            c.style.display = 'none';
        });
    }
    anh_file('.chat-tool__img', '.chat-tool', '.file-image', '.file-image__icon-heading');
});


/*WEB-APP__MENU*/
document.addEventListener('DOMContentLoaded', function () {
    const chat = document.querySelector('.menu-chat');
    const add = document.querySelector('.menu-add');
    const list = document.querySelector('.menu-list');
    const info = document.querySelector('.menu-info');
    let tmp = 1;
    const chatw = document.querySelector('.web-app__chat');
    const addw = document.querySelector('.web-app__add');
    const listw = document.querySelector('.web-app__list');
    const infow = document.querySelector('.web-app__info');
    chat.style.backgroundColor = 'rgba(0,0,0,0.1)';
    const add_close = document.querySelector('.add-in__icon-heading');
    const info_close = document.querySelector('.in-info__back');
    function hideAll() {
        chatw.style.display = 'none';
        addw.style.display = 'none';
        listw.style.display = 'none';
        infow.style.display = 'none';
        chat.style.backgroundColor = add.style.backgroundColor = list.style.backgroundColor = info.style.backgroundColor = 'transparent';
    }

    chat.addEventListener('click', () =>{
        hideAll();
        chatw.style.display = 'flex';
        tmp = 1;
        chat.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });
    list.addEventListener('click', () =>{
        hideAll();
        listw.style.display = 'flex';
        tmp = 3;
        list.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });
    add.addEventListener('click', () =>{
        hideAll();
        addw.style.display = 'block';
        add.style.backgroundColor = 'rgba(0,0,0,0.1)';
        if(tmp == 1) chatw.style.display = 'flex';
        else listw.style.display = 'flex';
    });
    info.addEventListener('click', () =>{
        hideAll();
        infow.style.display = 'flex';
        info.style.backgroundColor = 'rgba(0,0,0,0.1)';
        if(tmp == 1) chatw.style.display = 'flex';
        else listw.style.display = 'flex';
    });
    if(add_close)
    {
        add_close.addEventListener('click', () =>{
            hideAll();
            if(tmp == 1)
            {
                chatw.style.display = 'flex';
                chat.style.backgroundColor = 'rgba(0,0,0,0.1)';
            }
            else
            {
                listw.style.display = 'flex';
                list.style.backgroundColor = 'rgba(0,0,0,0.1)';
            }
        });
    }
    if(info_close)
    {
        info_close.addEventListener('click', () =>{
            hideAll();
            if(tmp == 1)
            {
                chatw.style.display = 'flex';
                chat.style.backgroundColor = 'rgba(0,0,0,0.1)';
            }
            else if(tmp == 3)
            {
                listw.style.display = 'flex';
                list.style.backgroundColor = 'rgba(0,0,0,0.1)';
            }
        });
    }
});

/*WEB-APP__LIST*/
document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelector('.web-app__list');
    const listfr = document.querySelector('.list-menu__friend');
    const listgr = document.querySelector('.list-menu__group');
    const addfr = document.querySelector('.list-menu__addfr');
    const addgr = document.querySelector('.list-menu__addgr');
    function hide_all(){
        document.querySelector('.list-friend').style.display = 'none';
        document.querySelector('.list-group').style.display = 'none';
        document.querySelector('.list-addfr').style.display = 'none';
        document.querySelector('.list-addgr').style.display = 'none';
    }
    function transform_obj() {
        listfr.style.color = 'black';
        listgr.style.color = 'black';
        addfr.style.color = 'black';
        addgr.style.color = 'black';
        listfr.style.backgroundColor = 'white';
        listgr.style.backgroundColor = 'white';
        addfr.style.backgroundColor = 'white';
        addgr.style.backgroundColor = 'white';
    }
    listfr.addEventListener('click', () =>{
        hide_all();
        document.querySelector('.list-friend').style.display = 'block';
        transform_obj();
        listfr.style.color = 'black';
        listfr.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });
    listgr.addEventListener('click', () =>{
        hide_all();
        document.querySelector('.list-group').style.display = 'block';
        transform_obj();
        listgr.style.color = 'black';
        listgr.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });
    addfr.addEventListener('click', () =>{
        hide_all();
        document.querySelector('.list-addfr').style.display = 'block';
        transform_obj();
        addfr.style.color = 'black';
        addfr.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });
    addgr.addEventListener('click', () =>{
        hide_all();
        document.querySelector('.list-addgr').style.display = 'block';
        transform_obj();
        addgr.style.color = 'black';
        addgr.style.backgroundColor = 'rgba(0,0,0,0.1)';
    });
});



/*WEB-APP__INFO*/
document.addEventListener('DOMContentLoaded', function () {
    const aa = document.querySelector('.gmail__info');
    const bb = document.querySelector('.password__info');
    aa.setAttribute("data-original", aa.textContent);
    bb.setAttribute("data-original", bb.textContent);
    aa.textContent = "*".repeat(aa.textContent.length);
    bb.textContent = "*".repeat(bb.textContent.length);
    function show_hidden_info(content, icon1, icon2) {
        const b = document.querySelector(icon1);
        const c = document.querySelector(icon2);
        const d = document.querySelector(content);
        b.addEventListener('click', () =>{
            c.style.display = 'block';
            b.style.display = 'none';
            d.textContent = d.getAttribute("data-original");
        });
        c.addEventListener('click', () =>{
            b.style.display = 'block';
            c.style.display = 'none';
            d.textContent = "*".repeat(d.textContent.length);
        });
    }
    show_hidden_info('.gmail__info', '.gmail__icon-see', '.gmail__icon-nosee');
    show_hidden_info('.password__info', '.password__icon-see', '.password__icon-nosee');
});


document.addEventListener('DOMContentLoaded', function () {
    function info_edit(content, but1, but2) {
        const a = document.querySelector(content);
        const b = document.querySelector(but1);
        const c = document.querySelector(but2);
        b.addEventListener('click', () =>{
            a.style.display = 'block';
        });
        c.addEventListener('click', () =>{
            a.style.display = 'none';
        });
    }
    info_edit('.in-info__new-name', '.info1__edit', '.new__close-name');
    info_edit('.in-info__new-gmail', '.gmail__edit', '.new__close-gmail');
    info_edit('.in-info__new-password', '.password__edit', '.new__close-password');
});
