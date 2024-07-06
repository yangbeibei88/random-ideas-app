import ideasApi from "../services/ideasApi.js";
import { IdeaList } from "./IdeaList.js";

export class IdeaForm {
  constructor() {
    this._formModal = document.getElementById("form-modal");
    this._ideaList = new IdeaList();
    this.render();
  }

  addEventListeners() {
    this._form.addEventListener("submit", this.submitHandler.bind(this));
  }

  async submitHandler(e) {
    e.preventDefault();

    // frontend form validation
    for (let i = 0; i < this._form.elements.length; i++) {
      if (
        this._form.elements[i].value.trim() === "" &&
        this._form.elements[i].type !== "submit"
      ) {
        alert("Please enter all fields");
        return;
      }
    }

    // save user to local storage
    localStorage.setItem("username", this._form.elements.username.value.trim());

    const idea = {
      description: this._form.elements.description.value.trim(),
      tags: this._form.elements.tags.value.trim(),
      username: this._form.elements.username.value.trim(),
    };

    // add idea to server
    const newIdea = await ideasApi.createIdea(idea);

    // add idea to DOM
    this._ideaList.addIdeaToList(newIdea.data.data);

    console.log(idea);
    console.log(this._form.elements);

    // clear form
    for (let i = 0; i < this._form.elements.length; i++) {
      this._form.elements[i].value = "";
    }

    this.render();

    // dispatch the event to Modal class
    document.dispatchEvent(new Event("closeModal"));
  }

  async render() {
    this._formModal.innerHTML = `
        <form id="idea-form">
      <div class="form-control">
        <label for="username">Enter a
          Username</label>
        <input type="text" name="username"
          id="username" value="${
            localStorage.getItem("username")
              ? localStorage.getItem("username")
              : ""
          }" />
      </div>
      <div class="form-control">
        <label for="description">What's Your
          Idea?</label>
        <textarea name="description"
          id="description"></textarea>
      </div>
      <div class="form-control">
        <label for="tags">Tags</label>
        <input type="text" name="tags"
          id="tags" />
      </div>
      <button class="btn" type="submit"
        id="submit">Submit</button>
    </form>
    `;

    // wait for the form to be rendered in the DOM
    await new Promise((resolve) => setTimeout(resolve, 0));
    this._form = document.getElementById("idea-form");
    this.addEventListeners();
  }
}
