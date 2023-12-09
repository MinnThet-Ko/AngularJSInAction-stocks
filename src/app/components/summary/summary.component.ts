import { Component, Input } from '@angular/core';

@Component({
  selector: 'summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  @Input() stock:any

  isNegative(){
    return (this.stock && this.stock.change < 0);
  }

  isPositive(){
    return (this.stock && this.stock.change > 0);
  }
}
