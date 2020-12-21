import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  private _installDate: Date;
  // private _todayDate: Date;
  private _selectedDate: BehaviorSubject<Date>;
  constructor() {
    this._selectedDate = new BehaviorSubject<Date>(this.getCurrentDateTime());
  }
  async setSelectedDate(date: Date | string): Promise<void> {
    const d = typeof date === "string" ? this.createDateFromString(date) : date;
    return this._selectedDate.next(d);
  }
  async getSelectedDate(): Promise<Date> {
    return await this._selectedDate.getValue();
  }
  getSelectedDateSubscription(): BehaviorSubject<Date> {
    return this._selectedDate;
  }
  getCurrentDateTime(): Date {
    return moment().toDate();
  }
  createDateFromString(date: string): Date {
    return moment(date).toDate();
  }
  getDateTimeString(date?: Date): string {
    return date ? moment(date).format('L') : moment().format('L');
  }
  get installDate(): Date {
    return this._installDate;
  }

  set installDate(value: Date) {
    this._installDate = value;
  }
  // get todayDate(): Date {
  //   return this._todayDate;
  // }
  //
  // set todayDate(value: Date) {
  //   this._todayDate = value;
  // }
  // get selectedDate(): Date {
  //   return this._selectedDate;
  // }
  //
  // set selectedDate(value: Date) {
  //   this._selectedDate = value;
  // }
}
