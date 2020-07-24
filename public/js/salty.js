/*for the comment section*/
var arr = [{
        id: 1,
        img: "/images/noProfPic.jpg",
        replyName: "User123",
        beReplyName: "User123",
        content: "Burgers are by far the best!",
        time: "2020-07-17 11:42:53",
        address: "Auckland",
        browse: "Chrome",
        replyBody: []
    },
    {
        id: 2,
        img: "/images/noProfPic.jpg",
        replyName: "unknown",
        beReplyName: "",
        content: "This is a stupid page, everyone knows taste is subjective.",
        time: "2020-07-17 11:42:53",
        address: "Auckland",
        browse: "Safari",
        replyBody: [{
            id: 3,
            img: "",
            replyName: "K",
            beReplyName: "k",
            content: "Click on this link to win 1000 dollars! www.scam.com",
            time: "2020-07-19 11:42:53",
            address: "",
            osname: "",
            browse: "Chrome"
        }]
    },
    {
        id: 3,
        img: "/images/noProfPic.jpg",
        replyName: "Tom",
        beReplyName: "Tom",
        content: "hi",
        time: "2020-07-16 11:42:53",
        address: "Auckland",
        browse: "Chrome",
        replyBody: []
    }
];
$(function() {
    $(".comment-list").addCommentList({
        data: arr,
        add: ""
    });
    $("#comment").click(function() {
        var obj = new Object();
        obj.img = "/images/noProfPic.jpg";
        obj.replyName = "unknow";
        obj.content = $("#content").val();
        obj.browse = "Auckland";
        obj.osname = "win10";
        obj.replyBody = "";
        $(".comment-list").addCommentList({
            data: [],
            add: obj
        });
    });
})
/*for the menu*/
function navigation() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
/* for the rating*/
document.addEventListener('DOMContentLoaded', function rate() {
    let stars = document.querySelectorAll('.star');
    stars.forEach(function(star) {
        star.addEventListener('click', setRating);
    });

    let rating = parseInt(document.querySelector('.stars').getAttribute('data-rating'));
    let target = stars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

function setRating(ev) {
    let span = ev.currentTarget;
    let stars = document.querySelectorAll('.star');
    let match = false;
    let num = 0;
    stars.forEach(function(star, index) {
        if (match) {
            star.classList.remove('rated');
        } else {
            star.classList.add('rated');
        }
        if (star === span) {
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.stars').setAttribute('data-rating', num);
}
//this is for bstars
document.addEventListener('DOMContentLoaded', function() {
    let bstars = document.querySelectorAll('.bstar');
    bstars.forEach(function(bstar) {
        bstar.addEventListener('click', setRatingb);
    });

    let rating = parseInt(document.querySelector('.bstars').getAttribute('data-rating'));
    let target = bstars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

function setRatingb(ev) {
    let span = ev.currentTarget;
    let bstars = document.querySelectorAll('.bstar');
    let match = false;
    let num = 0;
    bstars.forEach(function(bstar, index) {
        if (match) {
            bstar.classList.remove('rated');
        } else {
            bstar.classList.add('rated');
        }
        if (bstar === span) {
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.bstars').setAttribute('data-rating', num);
}
//this is for cstars
document.addEventListener('DOMContentLoaded', function() {
    let cstars = document.querySelectorAll('.cstar');
    cstars.forEach(function(cstar) {
        cstar.addEventListener('click', setRatingc);
    });

    let rating = parseInt(document.querySelector('.cstars').getAttribute('data-rating'));
    let target = cstars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

function setRatingc(ev) {
    let span = ev.currentTarget;
    let cstars = document.querySelectorAll('.cstar');
    let match = false;
    let num = 0;
    cstars.forEach(function(cstar, index) {
        if (match) {
            cstar.classList.remove('rated');
        } else {
            cstar.classList.add('rated');
        }
        if (cstar === span) {
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.cstars').setAttribute('data-rating', num);
}
//this is for dstars
document.addEventListener('DOMContentLoaded', function() {
    let dstars = document.querySelectorAll('.dstar');
    dstars.forEach(function(dstar) {
        dstar.addEventListener('click', setRatingd);
    });

    let rating = parseInt(document.querySelector('.dstars').getAttribute('data-rating'));
    let target = dstars[rating - 1];
    target.dispatchEvent(new MouseEvent('click'));
});

function setRatingd(ev) {
    let span = ev.currentTarget;
    let dstars = document.querySelectorAll('.dstar');
    let match = false;
    let num = 0;
    dstars.forEach(function(dstar, index) {
        if (match) {
            dstar.classList.remove('rated');
        } else {
            dstar.classList.add('rated');
        }
        if (dstar === span) {
            match = true;
            num = index + 1;
        }
    });
    document.querySelector('.dstars').setAttribute('data-rating', num);
}