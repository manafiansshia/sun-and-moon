
// オープニングアニメーション

const load = document.getElementById("loading");

// Timeline の定義
const tl = gsap.timeline({
    onComplete: function() {
        // Timeline 完了時に実行する処理
        load.classList.add("loaded");
    }
});

// Timeline にアニメーションを追加
tl.from(".opening_logo-box", {
    autoAlpha: 0,
    duration: 1.5,
    delay: 1
}).from(".opening_txt", {
    autoAlpha: 0,
    duration: 1.5
}).to(".opening_logo-box", {
    rotation: 360,
    duration: 3,
}).to(".opening", {
    autoAlpha:0
})

// window.onload イベントを監視
window.onload = function() {
  // もし Timeline が完了していれば、すでに loaded クラスを追加しているので、ここで再度追加しないようにする
    if (!tl.isActive()) {
        load.classList.add("loaded");
    }
};






// ハンバーガーメニュー
const hamburger = document.querySelector(".js_hamburger");
const nav = document.querySelector(".js_navigation");
const navItems = document.querySelectorAll(".l_header-nav_item-link");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
});

navItems.forEach(item => {
    item.addEventListener("click", ()=> {
        hamburger.classList.toggle("is-active");
        nav.classList.toggle("is-active");
    })
});

// input date　曜日指定
document.querySelector('#date').addEventListener('change', () => {
    let elem = document.querySelector('#date');
    let date = new Date(elem.value);
    let dayOfWeek = date.getDay()
    if (dayOfWeek === 1||dayOfWeek === 4||dayOfWeek === 5||dayOfWeek === 6||dayOfWeek === 0) { 
        alert("選択された日付は休業日となります。火曜日と水曜日の日付を選択しなおしてください。");
        elem.value = "";
    }
});


// instractor
const instFront = document.querySelector('.js_instructor_contents-front');
const inst = document.querySelector('.js_instructor-contents');

inst.addEventListener("click", ()=> {
    instFront.classList.toggle("is-active");
});
instFront.addEventListener("click", ()=> {
    instFront.classList.toggle("is-active");
});



// form

function clearRequired() {
    const checkboxes = document.querySelectorAll('.form_input_checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.removeAttribute('required');
    });
}

function showTrial() {
    const applyRadio = document.getElementById('apply');
    const trialDetails = document.getElementById('trial_details');
    const trialClasses = document.getElementById('trial_classes');
    const checkboxes = trialClasses.querySelectorAll('.form_input_checkbox');

    if (applyRadio.checked) {
        trialDetails.style.display = 'block';
        trialClasses.style.display = 'block';
        // 必須入力のチェックを有効にする
        trialDetails.querySelectorAll('.form_input, .form_input_radio, .form_input_date, .form_textarea').forEach(input => {
            input.required = true;
        });
        
        (() => {
            // チェックボックスのinputタグを取得
            const checkBoxElements = Array.from(document.getElementsByClassName("form_input_checkbox"));
    
            const errorMessage = "1つ以上の選択肢を選択してください。";
            checkBoxElements
                .forEach(m => {
                    // エラーメッセージを、カスタムなものに変更
                    m.setCustomValidity(errorMessage);
    
                    // 各チェックボックスのチェックのオン・オフ時に、以下の処理が実行されるようにする
                    m.addEventListener("change", () => {
                        // 1つ以上チェックがされているかどうかを判定
                        const isCheckedAtLeastOne = document.querySelector(".form_input_checkbox:checked") !== null;
    
                        // 1つもチェックがされていなかったら、すべてのチェックボックスを required にする
                        // 加えて、エラーメッセージも変更する
                        checkBoxElements.forEach(n => {
                            n.required = !isCheckedAtLeastOne
                            n.setCustomValidity(isCheckedAtLeastOne ? "" : errorMessage);
                        });
                    });
                });
        })();


    } else {
        trialDetails.style.display = 'none';
        trialClasses.style.display = 'none';
        // 必須入力のチェックを無効にする
        trialDetails.querySelectorAll('.form_input, .form_input_radio, .form_input_date, .form_textarea').forEach(input => {
            input.required = false;
        });
        trialClasses.querySelectorAll('.form_input_checkbox').forEach(checkbox => {
            checkbox.removeAttribute('required');
        });
    }
}

// スライドショー
const slideshow = new Swiper(".js_slideshow1", {
    speed: 2000,
    effect: "fade",
    allowTouchMove: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

let  slider2 = new Swiper('.js_slideshow2', {
    loop: true,
    loopedSlides: 4,
    slidesPerView: "auto",
    speed: 7000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});
