export default class Bar {
  text: string;
  constructor(text: string) {
    this.text = text;
  }

  getText() {
    return `bar ${this.text.trim()} bar`;
  }
}
