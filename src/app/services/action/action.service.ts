import { Injectable } from '@angular/core';
import {DataService} from '../data/data.service';
import {Expenseinterface} from '../../interface/expenseinterface';
import {StorageService} from '../storage/storage.service';
import {DatetimeService} from '../datetime/datetime.service';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  demoExpense: Expenseinterface;
  constructor(private dataService: DataService,
              private storageService: StorageService,
              private dateTimeService: DatetimeService) {
    this.getTodayExpensesFromLocal();
    // this.demoExpense = {
    //   amount: 50,
    //   description: 'this is demo expense',
    //   type: 'general',
    //   createdOn: new Date()
    // };
    // this.testFunc();
  }
  async createExpense(expense: Expenseinterface): Promise<void> {
    return await this.storageService.saveExpenseToLocal(expense).then().catch();
    // const key = this.dateTimeService.getDateTimeString(expense.createdOn);
    // this.storageService.saveExpenseToLocal(expense);
    // return this.dataService.setExpense(expense);
  }
  async getTodayExpensesFromLocal(): Promise<void> {
    return await this.storageService.getExpensesFormLocal().then((expenses) => {
      this.dataService.setExpense(expenses);
    });
  }
  // testFunc() {
  //   this.dataService.setExpense([this.demoExpense]).then(() => [
  //     this.dataService.getExpenses().then((val) => {
  //       console.log(val);
  //     })
  //   ]);
  // }
  async getExpenseByDateFromLocal(date: Date): Promise<void> {
    return await this.storageService.getExpensesFormLocal(date).then((expenses) => {
      this.dataService.setExpense(expenses);
    });
  }
}
