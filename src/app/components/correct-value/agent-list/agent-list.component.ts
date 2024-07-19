import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent {
  @Input() agents: any[];

  displayAgents(agents: any[]): void {
    this.agents = agents;
  }
}
