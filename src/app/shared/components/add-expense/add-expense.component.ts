import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActionService} from '../../../services/action/action.service';
import {DatetimeService} from '../../../services/datetime/datetime.service';
import {error} from '@angular/compiler/src/util';
import {Expenseinterface} from '../../../interface/expenseinterface';
import {ExpenseTypes} from '../../../constants/constants';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})

export class AddExpenseComponent implements OnInit {
  expenseForm: Expenseinterface;
  expenseTypes: any;

  addExpense = new FormGroup({
    amount: new FormControl('', Validators.required),
    description: new FormControl(''),
    type: new FormControl('', Validators.required)
  });
  constructor(private modalController: ModalController,
              private actionService: ActionService,
              private dateTimeService: DatetimeService) {
    // this.actionService.testFunc();
    this.expenseTypes = ExpenseTypes;
  }

  ngOnInit() {
    console.log(this.addExpense.value);
  }
  initCrateExpense(): void {
    const expense: Expenseinterface = this.addExpense.value;
    expense.amount = Number(Number(expense.amount).toFixed(2));
    this.dateTimeService.getSelectedDate().then((date) => {
      if (!expense.createdOn) {
        expense.createdOn = date;
      }
    }).then(() => {
      this.actionService.createExpense(expense).then(() => {
        console.log('Expense was create');
        this.dismiss();
      }).catch((err) => console.log(err));
    });
    // expense.createdOn = this.dateTimeService.getSelectedDate();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss().then().catch();
  }
}
