import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Expenseinterface} from '../../interface/expenseinterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly _expenses: BehaviorSubject<Expenseinterface[]>;
  private readonly _todayTotalExpense: BehaviorSubject<number>;
  constructor() {
    this._expenses = new BehaviorSubject<Expenseinterface[]>(null);
    this._todayTotalExpense = new BehaviorSubject<number>(0);
  }
  getTodayTotalExpense(): BehaviorSubject<number> {
    return this._todayTotalExpense;
  }
  async setTodayTotalExpense(total: number): Promise<void> {
    return this._todayTotalExpense.next(total);
  }
  async getExpenses(): Promise<Expenseinterface[]> {
    return this._expenses.getValue();
  }
  async setExpense(expenses: Expenseinterface[]): Promise<void> {
    if (expenses) {
      this.setTodayTotalExpense(this.calculateTodayTotal(expenses));
    }
    return this._expenses.next(expenses);
  }
  getExpensesSubscription(): BehaviorSubject<Expenseinterface[]> {
    return this._expenses;
  }
  calculateTodayTotal(expenses: Expenseinterface[]): number {
    let total = 0;
    for (const expense of expenses) {
      total += expense.amount;
    }
    return total;
  }
}
