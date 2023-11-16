var ModalApoieProjeto = ModalApoieProjeto || {};

ModalApoieProjeto.Open = (function () {
    function Open() {
        this.btnModalBackThisProject = $('#btnModalBackThisProject');
    }

    Open.prototype.init = function () {
        this.btnModalBackThisProject.on('click', onClickBtnModalBackThisProject);
        ModalApoieProjeto.OpcoesApoiarProjeto = new ModalApoieProjeto.OpcoesApoiarProjeto();
        ModalApoieProjeto.OpcoesApoiarProjeto.init();
    }

    function onClickBtnModalBackThisProject(event) {
        let modal = new bootstrap.Modal($(event.currentTarget).data('target'));

        modal.show('body');
    }

    return Open;
}());

ModalApoieProjeto.OpcoesApoiarProjeto = (function () {
    function OpcoesApoiarProjeto() {
        this.selecionar = $('.card.selecionar');
    }

    OpcoesApoiarProjeto.prototype.init = function () {
        this.selecionar.on('click', onSelecionarCard);
    }

    function onSelecionarCard(event) {
        const target = $(event.currentTarget);
        const cards = $('.card.selecionar');

        cards.removeClass('selected');
        cards.find('input[type=radio]').prop('checked', false);

        target.addClass('selected');
        target.find('input[type=radio]').prop('checked', true);
    }

    return OpcoesApoiarProjeto;
}());
