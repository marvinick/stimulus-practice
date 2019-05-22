import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['title', 'name', 'email']

  setCoHostContent(data) {
    this.nameTarget.innerHTML = data.name;
    this.nameTarget.innerHTML = data.title;
    this.emailTarget.href = 'mailto:' + data.email;
    this.emailTarget.innerHTML = data.email;
  }
  initialize() {
    console.log("Connected to co-host-modal");
  }
}
