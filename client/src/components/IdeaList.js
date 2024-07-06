export class IdeaList {
  constructor() {
    this._ideaListEl = document.getElementById("idea-list");
    this._ideas = [
      {
        id: 1,
        description: "Idea 1",
        tags: ["nodejs", "react"],
        username: "john",
        date: "2024-07-07",
      },
      {
        id: 2,
        description: "Idea 2",
        tags: ["nodejs", "react"],
        username: "john",
        date: "2024-07-07",
      },
      {
        id: 3,
        description: "Idea 3",
        tags: ["nodejs", "react"],
        username: "john",
        date: "2024-07-07",
      },
    ];

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
