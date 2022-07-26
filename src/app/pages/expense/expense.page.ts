import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'et-expense',
    templateUrl: './expense.page.html',
    styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {
    segmentModel = 'spends';

    constructor() { }

    ngOnInit() { }
}
