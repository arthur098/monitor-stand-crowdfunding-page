var Index = Index || {};

Index.Init = function () {
    new ModalApoieProjeto.Open().init();
    new Index.Bookmark().init();
    new MobileNavMenu.OpenCloseMenu().init();
};

Index.Bookmark = (function () {
    function Bookmark() {
        this.bookmark = $('.bookmark');
    }

    Bookmark.prototype.init = function () {
        this.bookmark.on('click', onClickBookmark);
    }

    function onClickBookmark(e) {
        let target = $(e.currentTarget);
        if(!target.hasClass('active')) {
            target.find('.bookmark-text>b').text('Bookmarked');
            target.addClass('active');
        }
    }

    return Bookmark;
}());

$(function () {
    Index.Init();
})
