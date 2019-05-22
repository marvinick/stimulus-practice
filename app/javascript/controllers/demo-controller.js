import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["modal"];

  initialize() {
    console.log(this.modalTarget);
  }

  launchDemo(event) {
    let modalController = this.application.getControllerForElementAndIdentifier(this.modalTarget, "modal");
    let cohostController = this.application.getControllerForElementAndIdentifier(this.modalTarget, "cohost");

    cohostController.setCoHostContent(event.currentTarget.dataset);
    modalController.open();


  }



}
