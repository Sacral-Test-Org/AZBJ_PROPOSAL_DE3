export class Title {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export class TitleDropdown {
  options: string[] = ['Mr', 'Mrs', 'IP', 'MOTHER', 'SON'];
  defaultValue: string = 'Mrs';

  constructor() {}
}