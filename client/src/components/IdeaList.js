import ideasApi from "../services/ideasApi";

export class IdeaList {
  constructor() {
    this._ideaListEl = document.getElementById("idea-list");
    this._ideas = [];
    this.getIdeas();
  }

  addEventListeners() {
    this._ideaListEl.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-times")) {
        e.stopImmediatePropagation();
        const ideaId = e.target.parentElement.parentElement.dataset.id;
        console.log(ideaId);
        this.deleteIdea(ideaId);
      }
    });
  }

  async deleteIdea(ideaId) {
    try {
      // delete from sever
      const res = await ideasApi.deleteIdea(ideaId);
      // delete from DOM
      this._ideas.filter((idea) => idea._id !== ideaId);
      this.getIdeas();
    } catch (error) {
      alert("You cannot delete this idea");
      console.log(error);
    }
  }

  async getIdeas() {
    try {
      const res = await ideasApi.getIdeas();
      this._ideas = res.data.data;
      this.render();
      console.log(this._ideas);
    } catch (error) {
      console.log(error);
    }
  }

  addIdeaToList(idea) {
    this._ideas.push(idea);
    this.render();
  }

  render() {
    this._ideaListEl.innerHTML = this._ideas
      .map(({ _id, description, tags, username, date }) => {
        return `
        <div class="card" data-id="${_id}">

        ${
          username === localStorage.getItem("username")
            ? `<button class="delete"><i
            class="fas fa-times"></i></button>`
            : ""
        }

        <h3>
          ${description}
        </h3>
        ${tags
          .map((tag) => {
            return `
          <p class="tag">${tag.toUpperCase()}
          </p>
          `;
          })
          .join("")}
        <p>
          Posted on <span class="date">${date}</span> by
          <span class="author">${username}</span>
        </p>
      </div>
        `;
      })
      .join("");
    this.addEventListeners();
  }
}
