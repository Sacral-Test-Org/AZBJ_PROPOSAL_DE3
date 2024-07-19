export class Reason {
  id: number;
  reasonText: string;
  checked: boolean;

  constructor(id: number, reasonText: string, checked: boolean) {
    this.id = id;
    this.reasonText = reasonText;
    this.checked = checked;
  }
}

export class NonStpReason {
  reasonComment: string;

  constructor(reasonComment: string) {
    this.reasonComment = reasonComment;
  }
}
