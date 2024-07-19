export class Context {
  currentBlock: string;
  currentItem: string;
  proposalType: string;

  constructor(currentBlock: string, currentItem: string, proposalType: string) {
    this.currentBlock = currentBlock;
    this.currentItem = currentItem;
    this.proposalType = proposalType;
  }
}