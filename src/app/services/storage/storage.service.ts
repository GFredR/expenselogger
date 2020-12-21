import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {Expenseinterface} from '../../interface/expenseinterface';
import {DatetimeService} from '../datetime/datetime.service';
import {DataService} from '../data/data.service';


const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private dateTimeService: DatetimeService,
              private dataService: DataService) { }
  async saveExpenseToLocal(expense: Expenseinterface): Promise<void> {
    const key = this.dateTimeService.getDateTimeString(expense.createdOn);
    let expensesList: Expenseinterface[] = [];
    this.getFromLocalStorage(key).then((expenses: Expenseinterface[]) => {
      if (expenses == null) {
        expensesList.push(expense);
      } else {
        expensesList = expenses;
        expensesList.push(expense);
      }
    }).then(() => {
      this.saveToLocalStorage(key, expensesList).then(() => {
        this.dataService.setExpense(expensesList);
      });
    }).catch((err) => {
      console.log(err);
    });
    // this.saveExpenseToLocal(key, [expense]);
  }
  async getExpensesFormLocal(date?: Date): Promise<Expenseinterface[]> {
    const key = date ? this.dateTimeService.getDateTimeString(date) : this.dateTimeService.getDateTimeString();
    return await this.getFromLocalStorage(key).then((expenses: Expenseinterface[]) => {
      return expenses;
    });
  }
  // JSON "set" example
  async saveToLocalStorage(key: string, value: any): Promise<void> {
    await Storage.set({
      key,
      value: JSON.stringify(value)
    });
  }

// JSON "get" example
  async getFromLocalStorage(key: string): Promise<any> {
    const ret = await Storage.get({ key });
    return JSON.parse(ret.value);
  }

  // async setItem() {
  //   await Storage.set({
  //     key: 'name',
  //     value: 'Max'
  //   });
  // }
  //
  // async getItem() {
  //   const { value } = await Storage.get({ key: 'name' });
  //   console.log('Got item: ', value);
  // }

  async removeItemFromStorage(key: string): Promise<void> {
    return await Storage.remove({ key });
  }

  // async keys() {
  //   const { keys } = await Storage.keys();
  //   console.log('Got keys: ', keys);
  // }

  async clear(isRest?: boolean): Promise<void> {
    if (isRest) {
      this.dataService.setExpense([]);
    }
    return await Storage.clear();
  }
}
