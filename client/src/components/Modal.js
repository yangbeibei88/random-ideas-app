export class Modal {
  constructor() {
    this._modal = document.getElementById("modal");
    this._modalBtn = document.getElementById("modal-btn");
    this.addEventListeners();
  }

  addEventListeners() {
    this._modalBtn.addEventListener("click", this.open.bind(this));
    window.addEventListener("click", this.outsideClickHandler.bind(this));

    document.addEventListener("closeModal", this.close.bind(this));
  }

  open() {
    this._modal.style.display = "block";
  }

  close() {
    this._modal.style.display = "none";
  }

  outsideClickHandler(e) {
    if (e.target === this._modal) {
      this.close();
    }
  }
}
