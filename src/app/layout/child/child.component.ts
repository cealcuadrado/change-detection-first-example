import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() data: string[];

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  update() {
    this.cd.detectChanges();
  }

}
