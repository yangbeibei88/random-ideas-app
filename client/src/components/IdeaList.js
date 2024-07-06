import ideasApi from "../services/ideasApi.js";

export class IdeaList {
  constructor() {
    this._ideaListEl = document.getElementById("idea-list");
    this._ideas = [];
    this.getIdeas();
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
      .map(({ id, description, tags, username, date }) => {
        return `
        <div class="card">
        <button class="delete"><i
            class="fas fa-times"></i></button>
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
  }
}
