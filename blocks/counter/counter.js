class Counter {
    constructor (options) {
        this._count = 0;
        this._dom = options.dom;
        this._linkDataDom();
        this._initEvents();
        this._update();
    }
    _linkDataDom() {
        this._dom_dec = this._dom.querySelector('.counter__button_type_dec');
        this._dom_inc = this._dom.querySelector('.counter__button_type_inc');
        this._dom_val = this._dom.querySelector('.counter__val');
    }
    _initEvents(){
        this._dom_dec.addEventListener('click', this._dec);
        this._dom_inc.addEventListener('click', this._inc);
    }
    _inc() {
        this._count++;
        this._update();
    }
    _dec() {
        this._count--;
        this._update();
    }
    _update() {
        this._dom_val.innerHTML = this._count;
    }
}